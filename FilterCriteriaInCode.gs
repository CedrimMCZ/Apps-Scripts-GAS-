function FiltroManoelRibas() {
  
var planilha = SpreadsheetApp.getActiveSpreadsheet();

var guiaMenu = planilha.getSheetByName("Filtro");
var guiaDados = planilha.getSheetByName("Resumo Geral");

guiaMenu.getRange("A2:P").clearContent();

var criterio  = "10386 - Manoel Ribas"

var dados = guiaDados.getRange(2,1,guiaDados.getLastRow()-1,17).getValues();
var pesquisa = dados.filter(function(value,i, arr){
  return criterio == arr[i][1];

 }
);
dados.length = 0;
if(pesquisa.length>0){
  guiaMenu.getRange(2,1,pesquisa.length,pesquisa[0].length).setValues(pesquisa);
  pesquisa.length = 0;
  return;

}
Browser.msgBox("Não há Dados")
}
