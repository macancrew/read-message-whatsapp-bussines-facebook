var sss = SpreadsheetApp.openById('[YOUR-GOOGLE-SHEET-ID]');
var sh2 = sss.getSheetByName('Sheet2')

function doPost(e) {
try {
  var dx = e['postData']['contents']
  dx = JSON.parse(dx)
  let j = sh2.getLastRow()+1
  var id = dx['entry'][0]['changes'][0]['value']['messages'][0]['id']
  var hp = dx['entry'][0]['changes'][0]['value']['messages'][0]['from']
  var me = dx['entry'][0]['changes'][0]['value']['messages'][0]['text']['body']
  sh2.getRange("A"+j).setValue(id)
  sh2.getRange("B"+j).setValue(hp)
  sh2.getRange("C"+j).setValue(me)
  return
} catch(err) { 
  return;
  }

}
