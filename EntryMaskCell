function onEdit(e) {
 
  if (e.value == undefined) return // se o valor da célula for em branco, a função para por aqui, nem vai rodar
 
  if (e.value.replace(/[^0-9]+/g, "").length > 18) { //remove os carácteres não numericos, e verifica se tem mais que 18 numeros
    if (e.range.getColumn() == 1) { //Se a edição ocorreu na coluna A
      
      if (e.oldValue != undefined) {// verifica se existe um valor antigo na célula
 
        if (e.oldValue.replace(/[^0-9]+/g, "").length == 18) { // verifica se esse valor antigo tem 18 numeros
          e.range.setValue(mascarar(e.oldValue))// se tiver, ele põe de volta o valor antigo já com a máscara
        } else {
          e.range.setValue("")// se o valor antigo não tiver 18 numeros, então ele deixa a célula em branco
        }
 
      } else { // se não existir valor antigo, ja deixa a célula em branco
        e.range.setValue("")
      }
      SpreadsheetApp.flush();
      SpreadsheetApp.getUi().alert("O código informado contém mais que 18 carácteres")
    }
 
  } else if (e.value.replace(/[^0-9]+/g, "").length < 18) { // faz a mesma coisa, porém se for menos que 18 numeros
    if (e.range.getColumn() == 1) {
      if (e.oldValue != undefined) {
        
        if (e.oldValue.replace(/[^0-9]+/g, "").length == 18) {
          e.range.setValue(mascarar(e.oldValue))
        } else {
          e.range.setValue("")
        }
 
      } else {
        e.range.setValue("")
      }
      SpreadsheetApp.flush();
      SpreadsheetApp.getUi().alert("O código informado contém menos que 18 carácteres")
    }
 
  } else if (e.value.replace(/[^0-9]+/g, "").length == 18) { // se for exatamente 18 numeros
   
   if (e.range.getColumn() == 1) {
      e.range.setValue(mascarar(e.value)) // mascara o valor digitado
      SpreadsheetApp.flush();
    }
 
  }
 
}
 
function mascarar(valor) {
// cria a mascara para o valor da célula
  let v = valor.replace(/[^0-9]+/g, "")
  return `${v[0]}${v[1]}${v[2]}${v[3]}${v[4]}${v[5]}${v[6]}-${v[7]}${v[8]}${v[9]}${v[10]}.${v[11]}${v[12]}${v[13]}${v[14]}${v[15]}${v[16]}-${v[17]}`
 
}
