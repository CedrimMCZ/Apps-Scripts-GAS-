```
function create_filter(){
    const  ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet1 = ss.getSheetByName("Filter_Sheet");
    const  range = sheet1.getRange("A:D");
    const  filter = range.createFilter();
    const Filter_Criteria1 = SpreadsheetApp.newFilterCriteria().whenNumberGreaterThan(1000);
    const  Filter_Criteria2 = SpreadsheetApp.newFilterCriteria().whenTextContains(["India/Mumbai "]);
    const coll1 = 3;
    const coll2 = 4;
    
    const  add_filter1 =  filter.setColumnFilterCriteria(coll1,Filter_Criteria1);
    const  add_filter2 = filter.setColumnFilterCriteria(coll2,Filter_Criteria2);

  Logger.log("Filter has been added.");

  const  range = sheet1.getDataRange();

  const  new_sheet = ss.insertSheet();
  new_sheet.setName("India/Mumbai data");

  range.copyTo(new_sheet.getRange(1,1));

  filter.remove();
}
