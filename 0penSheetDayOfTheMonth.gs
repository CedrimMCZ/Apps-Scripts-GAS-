function onOpen() {
var ss = SpreadsheetApp.getActiveSpreadsheet();
var now = new Date(); 
var dayofmonth = now.getDate();
var sheetname = dayofmonth;
var sheet = ss.getSheetByName(sheetname);

sheet.getRange("A1").activate();
return;
}
