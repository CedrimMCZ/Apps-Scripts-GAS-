/*Create a stand-alone apps script file
Add the Drive API service
paste this function:
 P.s/ replace ADD THE SPREADSHEET ID with the real spreadsheet ID*/

function spreadsheetComment() {
  let fileId = 'ADD THE SPREADSHEET ID'
  let comments = Drive.Comments.list(fileId);  
  let commentItems = comments.items
 for(let x = 0; x < commentItems.length;x++){
  let content = commentItems[x].content
  let status = commentItems[x].status
 console.log(content,status)
 }
}
