// "https://sheetautomation.com/blog/copy-move-row/"
function onEdit(e){
    var sourceSheet = e.range.getSheet();
    if(sourceSheet.getSheetName() === 'Todo'){
        var row = e.range.getRow();
        var rowRange = sourceSheet.getRange(row, 1, 1, sourceSheet.getLastColumn());
        var rowValues = rowRange.getValues()[0];
        if(rowValues[0] === "Done"){
            var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Done");  
            targetSheet.appendRow(rowValues);  
            sourceSheet.deleteRow(row);
        }
    } 
}
//-----------------
function onEdit(e){
    var sourceSheet = e.range.getSheet();
    var row = e.range.getRow();
    if(sourceSheet.getSheetName() === 'Todo'){
        var rowRange = sourceSheet.getRange(row, 1, 1, sourceSheet.getLastColumn());
        var rowValues = rowRange.getValues()[0];
        if(rowValues[0] === "Done"){
            var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Done");  
            targetSheet.appendRow(rowValues);  
            sourceSheet.deleteRow(row);
        }
    } 

    if(sourceSheet.getSheetName() === 'Done'){
        var rowRange = sourceSheet.getRange(row, 1, 1, sourceSheet.getLastColumn());
        var rowValues = rowRange.getValues()[0];
        if(rowValues[0] !== "Done"){
            var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Todo");  
            targetSheet.appendRow(rowValues);  
            sourceSheet.deleteRow(row);
        }
    } 
}
//-----------------
function onEdit(e){
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sourceSheet = e.range.getSheet();
    if(sourceSheet.getSheetName() === 'Todo'){
        var row = e.range.getRow();
        var rowRange = sourceSheet.getRange(row, 1, 1, sourceSheet.getLastColumn());
        var rowValues = rowRange.getValues()[0];
        if(rowValues[0] === "Done"){
            var targetSheet = ss.getSheetByName("Done");
            targetSheet.insertRowAfter(1);  
            var targetRange = targetSheet.getRange(2, 1);
            rowRange.copyTo(targetRange); 
            sourceSheet.deleteRow(row);
        }     
    } 
}
//--------------+
function onEdit(e){
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sourceSheet = e.range.getSheet();
    if(sourceSheet.getSheetName() === 'Todo'){
        var row = e.range.getRow();
        var rowRange = sourceSheet.getRange(row, 1, 1, sourceSheet.getLastColumn());
        var rowValues = rowRange.getValues()[0];
        if(rowValues[0] === "Done"){
            var targetSheet = ss.getSheetByName("Done");
            targetSheet.insertRowAfter(1);
            var targetRange = targetSheet.getRange(2, 1);
            rowRange.copyTo(targetRange, SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);      
            sourceSheet.deleteRow(row);
        }     
    } 
}
