var fs = require('fs');
var crypto = require('crypto');
var excel_handlers  = require('./services/excel_handler')
var ExcelJS = require('exceljs');
const { checksum } = require('./services/excel_handler');

test = async (excelFile) =>
{
//  var headres  =  await  excel_handlers.getHeaders(excelFile)
//  console.log('headres ---->>  ',headres)
//  var checksum =  await excel_handlers.checksum(excelFile)
//  console.log('checksum   ---->>  ',checksum)
// var  rowCount = await excel_handlers.getTrailers(excelFile)
//  console.log('trailers  ---->> ',rowCount)
}

test('file_example_XLSX_10.xlsx')
console.log('yes its working  ')


























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
  for (var i = 1; i <= sheet.actualRowCount; i++) {
    for (var j = 1; j <= sheet.actualColumnCount; j++) {
      data = sheet.getRow(i).getCell(j);
      process.stdout.write(data+" ");
    }
   break;
  }
});

workbook.xlsx.readFile('file_example_XLSX_10.xlsx').then(() => {
  var sheet = workbook.getWorksheet(1);
  console.log("number of rows --->> ",sheet.actualRowCount);
});

