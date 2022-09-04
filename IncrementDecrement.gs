/** Increment/Decrement Specific Cell */

function incrementSpecificCell() {
SpreadsheetApp.getActiveSheet().getRange('C5')
.setValue(SpreadsheetApp.getActiveSheet()
.getRange('C5').getValue() + 1);}

function decrementSpecificCell() {
SpreadsheetApp.getActiveSheet().getRange('C5')
.setValue(SpreadsheetApp.getActiveSheet()
.getRange('C5').getValue() - 1);}
