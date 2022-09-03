function CombineAllfiles () {
// id da pasta "......."
var folder = DriveApp.getFolderById("......")
var filesIterator = folder.getFiles()
var file
var fileType
var ssID
var data
var combinedData = []
while(fileItarator.hasNext()){
    file = filesIterator.next()
    fileType = file.getMimeType()
    if (fileType === "application/vnd.google-apps.spreadsheet"){
        ssID = file.getId ()
        data = getDataFromSpreadsheetssID)
        data = data.map(function(r){return r.concat([file.getName()]);})
        combinedData = combinedData.concat(data)
    } // while ends here
} // if ends here
var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Combined")
ws.getRange(2,1,combinedData.length,combinedData[0].length).setValues(combinedData)
}

function getDataFromSpreadsheetssID){
    var ss = SpreadsheetApp.openById
(ssID)
    var sh = ss.getSheets()[0]
    var lrow = sh.getLastRow()
    var lcol = sh.getLastColunm()
    var data = sh.getRange(2,1,lrow,lcol).getValues()
    return data
}
