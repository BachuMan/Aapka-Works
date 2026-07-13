/**
 * Aapka Works — "Book Strategy Call" → Google Sheet database
 * -----------------------------------------------------------
 * Receives form submissions from the website and appends each one as a new
 * row in the connected Google Sheet.
 *
 * SETUP (see GOOGLE_SHEET_SETUP.md for the full walkthrough):
 *   1. Create a Google Sheet.
 *   2. Extensions → Apps Script, delete the sample code, paste THIS file.
 *   3. Deploy → Manage deployments → Edit (pencil) → Version: NEW VERSION → Deploy.
 *        - Execute as: Me
 *        - Who has access: Anyone
 *   4. The /exec URL goes into the site's .env.local as VITE_SHEET_ENDPOINT.
 */

var VERSION = "4-no-preferred-datetime";
var SHEET_NAME = "Strategy Call Leads";
var HEADERS = [
  "Submitted At",
  "Interest Category",
  "Name",
  "Email",
  "Phone",
  "Brief"
];

/** Receives the POST from the website and stores it. */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    writeRow_(getSheet_(), data);
    return json_({ result: "success", version: VERSION });
  } catch (err) {
    return json_({ result: "error", version: VERSION, message: String(err) });
  }
}

/**
 * Health check + self-test.
 *   ...exec           -> { result: "ok", version }
 *   ...exec?selftest=1 -> writes a SELFTEST row and reports how the phone stored,
 *                         so the connection + phone-text fix can be verified.
 */
function doGet(e) {
  if (e && e.parameter && e.parameter.selftest === "1") {
    var sheet = getSheet_();
    var testPhone = "+91 0000000000";
    writeRow_(sheet, {
      interestCategory: "SELFTEST",
      name: "SELFTEST — safe to delete",
      email: "selftest@example.com",
      phone: testPhone,
      brief: "Automated self-test row"
    });
    var cell = sheet.getRange(sheet.getLastRow(), 5); // Phone column
    var display = cell.getDisplayValue();
    return json_({
      version: VERSION,
      wrotePhone: testPhone,
      storedPhone: display,
      phoneIsError: display.indexOf("#ERROR") === 0 || display.indexOf("#") === 0,
      atRow: sheet.getLastRow()
    });
  }
  return json_({ result: "ok", version: VERSION, info: "Aapka Works lead endpoint is live." });
}

/**
 * Appends one submission. The Phone starts with "+", which Google Sheets would
 * otherwise treat as a formula (=> #ERROR!). We set the phone cell's format to
 * plain text and flush() so the format is committed BEFORE the value is written.
 */
function writeRow_(sheet, data) {
  var row = sheet.getLastRow() + 1;
  sheet.getRange(row, 5).setNumberFormat("@"); // col E = Phone -> plain text
  SpreadsheetApp.flush();                       // apply the format before writing
  sheet.getRange(row, 1, 1, HEADERS.length).setValues([[
    data.timestamp || new Date().toISOString(),
    data.interestCategory || "",
    data.name || "",
    data.email || "",
    data.phone || "",
    data.brief || ""
  ]]);
  SpreadsheetApp.flush();
}

/** Returns the leads sheet, creating it (with a header row) if needed. */
function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  sheet.getRange("E:E").setNumberFormat("@"); // keep Phone column as plain text
  return sheet;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
