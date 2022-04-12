var fs = require('fs');
var crypto = require('crypto');
const ExcelJS = require('exceljs');
const { time } = require('console');

module.exports = {

    checksum: async(excelfile) => {
        await fs.readFileSync(excelfile, function(err, data) {
            return crypto
                .createHash('md5')
                .update(data, 'utf8')
                .digest('hex');
        });
    },

    getHeaders: async(excelfile) => {
        workbook = new ExcelJS.Workbook()
        workbook = await workbook.xlsx.readFile(excelfile);
            sheet = workbook.getWorksheet(1)
            console.log('sheet --->>  ',sheet.name)
            row_headers = []
            for (var i = 1; i <= sheet.actualRowCount; i++) {
               console.log('row_count --- >>  ',i)
                for (var j = 1; j <= sheet.actualColumnCount; j++) {
                  console.log('column  count --->>  ',sheet.getRow(i).getCell(j).toString())

                  data =  await sheet.getRow(i).getCell(j).toString();
                    process.stdout.write(data+" ");
                    console.log("data value --- {} ",data)
                    process.stdout.write(data+" ");
                    console.log('data --->>  ',data)
                    return data;
                }
                 break;
            }
    },

    getTrailers: async (excelFile) => {
        workbook = new ExcelJS.Workbook()
        await workbook.xlsx.readFile(excelFile).then(() => {
            var sheet = workbook.getWorksheet(1);
            console.log(sheet.actualRowCount)
            return sheet.actualRowCount;
        });
    },
}