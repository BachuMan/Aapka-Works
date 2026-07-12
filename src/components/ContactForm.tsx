import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, ArrowRight, CreditCard, Lock, Phone, Loader2 } from "lucide-react";

// Google Apps Script Web App URL that appends submissions to the Google Sheet.
// Set this in a `.env.local` file as VITE_SHEET_ENDPOINT="https://script.google.com/macros/s/.../exec"
// See GOOGLE_SHEET_SETUP.md for step-by-step setup instructions.
const SHEET_ENDPOINT: string = (import.meta as any).env?.VITE_SHEET_ENDPOINT ?? "";

interface ContactFormProps {
  preselectedPackage?: string;
  theme?: "light" | "dark";
}

export default function ContactForm({ preselectedPackage = "consultation", theme = "light" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    details: "",
    packageChoice: preselectedPackage
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Country dial codes for the phone prefix selector (national number is always 10 digits).
  const countryCodes = [
    { code: "+91", label: "🇮🇳 +91" },
    { code: "+1", label: "🇺🇸 +1" },
    { code: "+44", label: "🇬🇧 +44" },
    { code: "+61", label: "🇦🇺 +61" },
    { code: "+971", label: "🇦🇪 +971" },
    { code: "+65", label: "🇸🇬 +65" },
    { code: "+92", label: "🇵🇰 +92" },
    { code: "+880", label: "🇧🇩 +880" },
    { code: "+977", label: "🇳🇵 +977" },
    { code: "+49", label: "🇩🇪 +49" },
    { code: "+33", label: "🇫🇷 +33" },
    { code: "+81", label: "🇯🇵 +81" }
  ];

  // Preselected slot shown on the confirmation receipt (calendar picker UI was removed).
  const [selectedDay] = useState<number | null>(11); // June 11, 2026 default
  const [selectedTimeSlot] = useState<string | null>("03:00 PM");
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [isPaying, setIsPaying] = useState<boolean>(false);
  const [paymentTimeLeft, setPaymentTimeLeft] = useState<number>(300); // 5 minutes
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Phone must be exactly 10 digits: strip non-digits and cap length at 10.
    const nextValue = name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;
    setFormData({ ...formData, [name]: nextValue });
    setValidationError(null);
  };

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setValidationError("Name, Email and Phone Number are strictly required.");
      return;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      setValidationError("Phone number must be exactly 10 digits (choose your country code from the dropdown).");
      return;
    }
    setValidationError(null);
    setIsSubmitting(true);

    const payload = {
      timestamp: new Date().toISOString(),
      interestCategory: formData.packageChoice,
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: `${formData.countryCode} ${formData.phone}`,
      brief: formData.details.trim(),
      selectedDate: selectedDay ? `June ${selectedDay}, 2026` : "",
      selectedTime: selectedTimeSlot ?? ""
    };

    try {
      if (SHEET_ENDPOINT) {
        // `no-cors` + text/plain avoids a CORS preflight that Apps Script can't answer.
        // The row is still appended; we just can't read the response body.
        await fetch(SHEET_ENDPOINT, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload)
        });
      } else {
        console.warn("VITE_SHEET_ENDPOINT is not set — submission was NOT sent to the Google Sheet. See GOOGLE_SHEET_SETUP.md.");
      }
      setIsBooked(true);
    } catch (err) {
      console.error("Submission failed:", err);
      setValidationError("Something went wrong while submitting. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  React.useEffect(() => {
    let timer: any;
    if (isPaying && paymentTimeLeft > 0) {
      timer = setInterval(() => {
        setPaymentTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isPaying && paymentTimeLeft === 0) {
      setValidationError("Payment session expired. Please try again.");
      setIsPaying(false);
    }
    return () => clearInterval(timer);
  }, [isPaying, paymentTimeLeft]);

  const handleSimulatePayment = () => {
    setIsPaying(false);
    setIsBooked(true);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  if (isPaying) {
    return (
      <div className={`border rounded-3xl p-6 sm:p-10 text-center space-y-8 max-w-xl mx-auto shadow-sm animate-fadeIn ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-100 text-gray-900'}`}>
        <div className="space-y-2">
          <h4 className="text-xl sm:text-2xl font-bold tracking-tight">Secure Your Slot</h4>
          <p className={`text-xs sm:text-sm leading-relaxed max-w-sm mx-auto font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
            Please complete your payment to lock in June {selectedDay}, 2026 at {selectedTimeSlot}.
          </p>
        </div>

        <div className={`p-4 rounded-xl border ${theme === 'dark' ? 'bg-slate-700 border-slate-600' : 'bg-rose-50 border-rose-100'}`}>
          <div className="flex justify-between items-center mb-2">
            <span className={`text-xs font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-slate-300' : 'text-rose-600'}`}>Time Remaining</span>
            <span className="font-mono font-bold text-rose-500 text-lg">{formatTime(paymentTimeLeft)}</span>
          </div>
          <div className="w-full bg-white/50 rounded-full h-1.5 mb-2 overflow-hidden">
            <div className="bg-rose-500 h-1.5 rounded-full transition-all duration-1000" style={{ width: `${(paymentTimeLeft / 300) * 100}%` }}></div>
          </div>
        </div>

        <div className={`text-left border rounded-xl p-5 space-y-4 ${theme === 'dark' ? 'border-slate-600' : 'border-gray-200'}`}>
          <div className="flex justify-between items-center pb-4 border-b border-gray-200/20">
            <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-600'}>Package Selection</span>
            <span className="font-semibold capitalize">{formData.packageChoice.replace("-", " ")}</span>
          </div>
          <div className="flex justify-between items-center font-bold text-lg">
            <span>Total</span>
            <span>₹3,999</span>
          </div>
        </div>

        <button 
          onClick={handleSimulatePayment}
          className="w-full bg-[#E61D24] hover:bg-rose-600 text-white py-3.5 px-6 rounded-xl text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Lock className="w-4 h-4" />
          <span>Pay Now & Confirm Slot</span>
        </button>

        <p className="text-[10px] text-gray-400 font-mono flex justify-center items-center gap-1">
          <CreditCard className="w-3 h-3" /> Secure Payment Gateway
        </p>
      </div>
    );
  }

  if (isBooked) {
    return (
      <div className={`border rounded-3xl p-6 sm:p-10 text-center space-y-6 max-w-xl mx-auto shadow-sm animate-fadeIn ${theme === 'dark' ? 'bg-slate-800 border-emerald-900/30' : 'bg-white border-emerald-100 shadow-emerald-500/5'}`}>
        <div className={`inline-flex p-4 rounded-full border ${theme === 'dark' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border-emerald-100 text-emerald-500'}`}>
          <CheckCircle2 className="w-10 h-10" />
        </div>
        
        <div className="space-y-2">
          <h4 className={`text-xl sm:text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Aapka Call Confirm Ho Gaya! 🎉</h4>
          <p className={`text-xs sm:text-sm leading-relaxed max-w-sm mx-auto font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
            Jags' team has locked in your strategic session. Let's make content work for you.
          </p>
        </div>

        {/* Schedule Spec Receipt */}
        <div className={`border rounded-2xl p-5 text-left text-xs space-y-3 font-mono ${theme === 'dark' ? 'bg-slate-900/50 border-slate-700' : 'bg-gray-50 border-gray-100'}`}>
          <div className={`flex justify-between border-b pb-2 ${theme === 'dark' ? 'border-slate-700/50' : 'border-gray-200'}`}>
            <span className={theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}>CLIENT BRAND NAME:</span>
            <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{formData.name}</span>
          </div>
          <div className={`flex justify-between border-b pb-2 ${theme === 'dark' ? 'border-slate-700/50' : 'border-gray-200'}`}>
            <span className={theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}>CONTACT PHONE:</span>
            <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{formData.countryCode} {formData.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className={theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}>SELECTED FORMAT:</span>
            <span className={`capitalize font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{formData.packageChoice.replace("-", " ")}</span>
          </div>
        </div>

        <p className={`text-[11px] leading-relaxed font-sans max-w-sm mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
          *We have received your details. Jags' production leads will connect with you via Instagram DMs inside the next 24 hours.
        </p>

        <button 
          onClick={() => {
            setIsBooked(false);
            setFormData({ name: "", email: "", countryCode: "+91", phone: "", details: "", packageChoice: "consultation" });
          }}
          className={`font-medium text-xs px-6 py-2.5 rounded-xl border shadow-sm transition-all cursor-pointer ${theme === 'dark' ? 'bg-slate-700 hover:bg-slate-600 text-white border-slate-600' : 'bg-white hover:bg-gray-50 text-gray-900 border-gray-200'}`}
        >
          Book Another Session
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 space-y-6 max-w-4xl mx-auto shadow-md relative overflow-hidden">
      
      {/* Dynamic Ribbon */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-600 via-amber-400 to-rose-600" />

      <div className="text-center sm:text-left">
        <h4 className={`text-xl sm:text-2xl font-bold tracking-tight mt-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Book Strategy Call</h4>
        <p className={`text-xs mt-1 leading-normal font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
          Select your interest and schedule your slot on Jags' calendar. No back-and-forth email loops.
        </p>
      </div>

      <form onSubmit={handleBook} className="flex flex-col gap-6 pt-2 max-w-xl mx-auto">
        
        {/* Form Fields: Client metadata */}
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block">Interest Category</label>
            <select
              name="packageChoice"
              value={formData.packageChoice}
              onChange={handleInputChange}
              className={`w-full border text-xs p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-rose-500/50 ${theme === 'dark' ? 'bg-slate-700 border-slate-600 text-white hover:border-slate-500' : 'bg-white border-gray-200 text-gray-900 hover:border-gray-300'}`}
            >
              <option value="consultation">Consultation Call (₹3,999 - ₹9,999)</option>
              <option value="content-support">Content Support Packs (₹25k - ₹75k)</option>
              <option value="starter-mgmt">Starter Social Management (₹70k/mo)</option>
              <option value="growth-mgmt">Growth Social Management (₹1.2L/mo)</option>
              <option value="scale-mgmt">Scale Omnipresence Retainer (₹1.75L/mo)</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full border text-xs p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-rose-500/50 ${theme === 'dark' ? 'bg-slate-700 border-slate-600 text-white hover:border-slate-500 placeholder:text-slate-500' : 'bg-white border-gray-200 text-gray-900 hover:border-gray-300'}`}
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block font-normal">Contact Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your valid email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full border text-xs p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-rose-500/50 ${theme === 'dark' ? 'bg-slate-700 border-slate-600 text-white hover:border-slate-500 placeholder:text-slate-500' : 'bg-white border-gray-200 text-gray-900 hover:border-gray-300'}`}
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block flex items-center gap-1">
              <Phone className="w-3 h-3" /> Phone Number
            </label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleInputChange}
                aria-label="Country code"
                className={`shrink-0 border text-xs p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-rose-500/50 ${theme === 'dark' ? 'bg-slate-700 border-slate-600 text-white hover:border-slate-500' : 'bg-white border-gray-200 text-gray-900 hover:border-gray-300'}`}
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>{c.label}</option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                inputMode="numeric"
                maxLength={10}
                placeholder="10-digit number"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full border text-xs p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-rose-500/50 ${theme === 'dark' ? 'bg-slate-700 border-slate-600 text-white hover:border-slate-500 placeholder:text-slate-500' : 'bg-white border-gray-200 text-gray-900 hover:border-gray-300'}`}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block">Brief Us On Your Brand Goals (Optional)</label>
            <textarea
              name="details"
              rows={3}
              placeholder="E.g., personal brand scaling, startup launch next month..."
              value={formData.details}
              onChange={handleInputChange}
              className={`w-full border text-xs p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-rose-500/50 resize-none ${theme === 'dark' ? 'bg-slate-700 border-slate-600 text-white hover:border-slate-500 placeholder:text-slate-500' : 'bg-white border-gray-200 text-gray-900 hover:border-gray-300'}`}
            />
          </div>
        </div>

        {validationError && (
          <div className="bg-rose-50 border border-rose-100 rounded-xl p-3 flex gap-2 text-xs text-rose-600">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Action button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#E61D24] hover:bg-rose-600 text-white py-3.5 px-6 rounded-xl text-xs font-bold shadow-sm shadow-[#E61D24]/20 hover:shadow-[#E61D24]/10 transition-all text-center flex items-center justify-center gap-2 cursor-pointer border border-[#E61D24] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Submit</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
