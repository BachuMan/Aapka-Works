# Connect "Book Strategy Call" to a Google Sheet (database)

Every time someone submits the form, a new row is added to your Google Sheet with these columns:

| Submitted At | Interest Category | Name | Email | Phone | Brief |
|---|---|---|---|---|---|

This uses a **Google Apps Script Web App** as a tiny backend — no servers, no cost, and the data lands straight in a sheet you own. It takes about 3 minutes.

---

## Step 1 — Create the Google Sheet
1. Go to <https://sheets.new> (or Google Drive → New → Google Sheets).
2. Rename it something like **"Aapka Works — Strategy Call Leads"**.
   *(You don't need to add column headers — the script creates them automatically.)*

## Step 2 — Add the script
1. In the sheet, open **Extensions → Apps Script**.
2. Delete whatever sample code is in `Code.gs`.
3. Open `apps-script/google-sheet-webhook.gs` from this project, copy **all** of it, and paste it in.
4. Click the **Save** icon (💾).

## Step 3 — Deploy it as a Web App
1. Click **Deploy → New deployment**.
2. Click the ⚙️ gear next to "Select type" and choose **Web app**.
3. Set:
   - **Description:** `Aapka Works leads` (anything is fine)
   - **Execute as:** **Me**
   - **Who has access:** **Anyone**
4. Click **Deploy**.
5. Google will ask you to **authorize** — click through, pick your account, and on the "Google hasn't verified this app" screen click **Advanced → Go to (your project) → Allow**. *(This is expected; it's your own script.)*
6. Copy the **Web app URL** — it ends in **`/exec`**.

## Step 4 — Connect it to the site
1. Open the file **`.env.local`** in this project.
2. Paste your URL between the quotes:
   ```
   VITE_SHEET_ENDPOINT="https://script.google.com/macros/s/XXXXXXXX/exec"
   ```
3. Save.
4. **Restart the dev server** (env values are only read at startup). Stop it, then start it again.

## Step 5 — Test
1. Open the site, go to **Book Strategy Call**, fill it in, and submit.
2. Check your Google Sheet — a new row should appear within a second or two. 🎉

---

## Notes
- **Where does submission happen?** In `src/components/ContactForm.tsx`, the `handleBook` function POSTs the form data to `VITE_SHEET_ENDPOINT`.
- **Phone format:** the form stores the country code + a 10-digit number (e.g. `+91 9876543210`).
- **If you edit the script later:** re-deploy with **Deploy → Manage deployments → edit (✏️) → Version: New version → Deploy**. The `/exec` URL stays the same.
- **No URL set yet?** The form still works and shows the confirmation screen; it just logs a warning in the browser console and doesn't record the row until you add the URL.
- **Privacy:** `.env.local` is git-ignored, so your endpoint URL never gets committed or pushed.
