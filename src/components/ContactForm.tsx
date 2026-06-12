import React, { useState } from "react";
import { Calendar, Clock, Send, CheckCircle2, AlertTriangle, ArrowRight, Instagram, Mail } from "lucide-react";

interface ContactFormProps {
  preselectedPackage?: string;
}

export default function ContactForm({ preselectedPackage = "consultation" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    details: "",
    packageChoice: preselectedPackage
  });

  // Calendar State
  const [selectedDay, setSelectedDay] = useState<number | null>(11); // June 11, 2026 default
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>("03:00 PM");
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const daysInJune2026 = [
    { num: 10, name: "Wed" },
    { num: 11, name: "Thu" },
    { num: 12, name: "Fri" },
    { num: 15, name: "Mon" },
    { num: 16, name: "Tue" },
    { num: 17, name: "Wed" },
    { num: 18, name: "Thu" },
    { num: 19, name: "Fri" }
  ];

  const timeSlots = [
    "11:30 AM",
    "01:00 PM",
    "03:00 PM",
    "04:30 PM",
    "06:00 PM",
    "07:30 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidationError(null);
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.instagram.trim()) {
      setValidationError("All contact fields (Name, Email, and Instagram handle) are strictly required.");
      return;
    }
    if (!selectedDay || !selectedTimeSlot) {
      setValidationError("Please select a date and preferred time slot for your consultation call.");
      return;
    }
    setValidationError(null);
    setIsBooked(true);
  };

  if (isBooked) {
    return (
      <div className="bg-[#18181B] border border-emerald-950 rounded-3xl p-6 sm:p-10 text-center space-y-6 max-w-xl mx-auto shadow-xl shadow-emerald-950/10 animate-fadeIn">
        <div className="inline-flex p-4 bg-emerald-500/15 rounded-full border border-emerald-500/30 text-emerald-400">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        
        <div className="space-y-2">
          <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Aapka Call Confirm Ho Gaya! 🎉</h4>
          <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto font-sans">
            Jags' team has locked in your strategic session. Let's make content work for you.
          </p>
        </div>

        {/* Schedule Spec Receipt */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 text-left text-xs space-y-3 font-mono">
          <div className="flex justify-between border-b border-neutral-800/60 pb-2">
            <span className="text-neutral-500">CLIENT BRAND NAME:</span>
            <span className="text-white font-semibold">{formData.name}</span>
          </div>
          <div className="flex justify-between border-b border-neutral-800/60 pb-2">
            <span className="text-neutral-500">INSTAGRAM HANDLE:</span>
            <span className="text-rose-400 font-semibold">{formData.instagram}</span>
          </div>
          <div className="flex justify-between border-b border-neutral-800/60 pb-2">
            <span className="text-neutral-500">SELECTED FORMAT:</span>
            <span className="text-white capitalize font-semibold">{formData.packageChoice.replace("-", " ")}</span>
          </div>
          <div className="flex justify-between text-yellow-400">
            <span>SCHEDULED DATE:</span>
            <span>June {selectedDay}, 2026 // {selectedTimeSlot} (IST)</span>
          </div>
        </div>

        <p className="text-neutral-400 text-[11px] leading-relaxed font-sans max-w-sm mx-auto">
          *A calendar invitation has been dispatched to <strong className="text-neutral-200">{formData.email}</strong>. Jags' production leads will connect with you via Instagram DMs inside the next 24 hours.
        </p>

        <button 
          onClick={() => {
            setIsBooked(false);
            setFormData({ name: "", email: "", instagram: "", details: "", packageChoice: "consultation" });
          }}
          className="bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs px-6 py-2.5 rounded-xl border border-neutral-800 transition-all cursor-pointer"
        >
          Book Another Session
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#18181B] border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
      
      {/* Dynamic Ribbon */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-600 via-amber-400 to-rose-600" />

      <div className="text-center sm:text-left">
        <span className="text-[10px] font-mono tracking-widest uppercase text-rose-500 bg-rose-950/20 px-3 py-1 rounded-full border border-rose-900/30">
          FAST TRACK DISCOVERY // BOOK IN 30S
        </span>
        <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-3">Book Strategy Call</h4>
        <p className="text-neutral-400 text-xs mt-1 leading-normal font-sans">
          Select your interest and schedule your slot on Jags' calendar. No back-and-forth email loops.
        </p>
      </div>

      <form onSubmit={handleBook} className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
        
        {/* Left Column: Client metadata */}
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">Interest Category</label>
            <select
              name="packageChoice"
              value={formData.packageChoice}
              onChange={handleInputChange}
              className="w-full bg-neutral-950 border border-neutral-800 hover:border-neutral-750 text-xs text-white p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-rose-500/50"
            >
              <option value="consultation">Consultation Call (₹3,999 - ₹9,999)</option>
              <option value="content-support">Content Support Packs (₹25k - ₹75k)</option>
              <option value="starter-mgmt">Starter Social Management (₹70k/mo)</option>
              <option value="growth-mgmt">Growth Social Management (₹1.2L/mo)</option>
              <option value="scale-mgmt">Scale Omnipresence Retainer (₹1.75L/mo)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Jagjyot Singh"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-neutral-950 border border-neutral-800 text-xs text-white p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-rose-500/50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">Instagram Handle</label>
              <input
                type="text"
                name="instagram"
                placeholder="@aapkaworks"
                value={formData.instagram}
                onChange={handleInputChange}
                className="w-full bg-neutral-950 border border-neutral-800 text-xs text-white p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-rose-500/50"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block font-normal">Contact Email</label>
            <input
              type="email"
              name="email"
              placeholder="hello@aapkaworks.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-neutral-950 border border-neutral-800 text-xs text-white p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-rose-500/50"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">Brief Us On Your Brand Goals (Optional)</label>
            <textarea
              name="details"
              rows={3}
              placeholder="E.g., personal brand scaling, startup launch next month..."
              value={formData.details}
              onChange={handleInputChange}
              className="w-full bg-neutral-950 border border-neutral-800 text-xs text-white p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-rose-500/50 resize-none"
            />
          </div>
        </div>

        {/* Right Column: Interactive Cal.com Selector */}
        <div className="space-y-4">
          <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-850 space-y-4">
            
            {/* Calendar header */}
            <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-900 pb-2.5">
              <span className="flex items-center gap-1 font-semibold text-neutral-300">
                <Calendar className="w-4 h-4 text-rose-500" />
                <span>June 2026 // Active Days</span>
              </span>
              <span className="font-mono text-[10px] text-neutral-500">[TZ: IST / Kolkata]</span>
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              {daysInJune2026.map(day => (
                <button
                  key={day.num}
                  type="button"
                  onClick={() => setSelectedDay(day.num)}
                  className={`p-2.5 rounded-lg border text-center transition-all select-none cursor-pointer ${
                    selectedDay === day.num
                      ? "bg-rose-600 border-rose-500 text-white font-bold"
                      : "bg-neutral-900 border-neutral-850 text-neutral-400 hover:border-neutral-700 hover:text-white"
                  }`}
                >
                  <div className="text-[9px] uppercase font-mono tracking-wider opacity-85">{day.name}</div>
                  <div className="text-sm font-semibold">{day.num}</div>
                </button>
              ))}
            </div>

            {/* Times Selector */}
            {selectedDay && (
              <div className="space-y-2.5 pt-2 border-t border-neutral-900">
                <span className="text-[10px] font-mono text-neutral-500 uppercase block tracking-wider flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-rose-500" />
                  <span>Available Local Slots:</span>
                </span>
                
                <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTimeSlot(time)}
                      className={`p-2 rounded-lg border transition-all select-none cursor-pointer ${
                        selectedTimeSlot === time
                          ? "bg-amber-400 border-amber-300 text-neutral-950 font-bold shadow-md shadow-amber-950/20"
                          : "bg-neutral-900 border-neutral-850 text-neutral-300 hover:border-neutral-750"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {validationError && (
            <div className="bg-rose-950/20 border border-rose-500/30 rounded-xl p-3 flex gap-2 text-xs text-rose-400">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Action button */}
          <button
            type="submit"
            className="w-full bg-rose-600 hover:bg-rose-500 text-white py-3.5 px-6 rounded-2xl text-xs font-bold shadow-lg shadow-rose-950/40 hover:shadow-rose-950/25 transition-all text-center flex items-center justify-center gap-2 cursor-pointer border border-rose-500"
          >
            <span>Confirm Strategic Booking Slot</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
