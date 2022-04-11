const ExcelJS = require('exceljs')
console.log("working")
var fs = require('fs');
var crypto = require('crypto');

fs.readFile('package.json', function(err, data) {
  var checksum = generateChecksum(data);
  console.log(checksum);
});

function generateChecksum(str, algorithm, encoding) {
    return crypto
        .createHash(algorithm || 'md5')
        .update(str, 'utf8')
        .digest(encoding || 'hex');
}

workbook  = new ExcelJS.Workbook()
workbook.xlsx.readFile('file_example_XLSX_10.xlsx').then(() => {
  var sheet = workbook.getWorksheet(1);
  row_headers =[]
  for (var i = 1; i <= sheet.actualRowCount; i++) {
    for (var j = 1; j <= sheet.actualColumnCount; j++) {
      data = sheet.getRow(i).getCell(j).toString();
      process.stdout.write(data+" ");
    }
    break;
  }
});