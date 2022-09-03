function onEdit(e){
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheetByName("CRONOGRAMA");
var range = e.range;
var column = range.getColumn();
var row = range.getRow();
var DataHoraAtual = Utilities.formatDate(new Date(), "GMT-03:00","d/M/yyyy' 'HH:mm:ss' '").toString();;
 
if (column==3 && e.value === "TRUE") { //Substitua 3 pelo número da coluna da sua célula que será o "gatilho"//
var newRange = sheet.getRange(row,column+2); //Coloca a data/hora na coluna seguinte
newRange.setValue(DataHoraAtual);
}
if (column==4 && e.value === "TRUE") { //Substitua 4 pelo número da coluna da sua célula que será o "gatilho"//
var newRange = sheet.getRange(row,column+2); //Coloca a data/hora na coluna seguinte
newRange.setValue(DataHoraAtual);
}
 
}
