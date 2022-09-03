
function ApagaIntervaloPlanilhas () {
  
// link gerado https://drive.google.com/drive/folders/1PbMks4Mekv0AjsxU_zDObGNJ6vFcFarI?usp=sharing
// id da pasta (após folders/)"1PbMks4Mekv0AjsxU_zDObGNJ6vFcFarI" (até ?)

var folder = DriveApp.getFolderById("1PbMks4Mekv0AjsxU_zDObGNJ6vFcFarI") //TROQUE PELO ID DA SUA PASTA
var filesIterator = folder.getFiles()
var file
var fileType
var ssID

  while(filesIterator.hasNext()){
      file = filesIterator.next()
      fileType = file.getMimeType()
      if (fileType === "application/vnd.google-apps.spreadsheet"){
          ssID = file.getId ()
          Limpar (ssID)

      } // while ends here
  } // if ends here

}

function Limpar(ssID) {

  var ss = SpreadsheetApp.openById(ssID)
  var sh = ss.getSheets()[0]
  sh.getRange('F13:I53').activate()
  sh.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true})

}
