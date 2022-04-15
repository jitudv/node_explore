var fs = require('fs');
var crypto = require('crypto');
var ExcelJS = require('exceljs');

const aws = require('aws-sdk');
const s3 = new aws.S3({ apiVersion: '2006-03-01' });

exports.handler = async (event, context) => {

    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    const params = {
        Bucket: bucket,
        Key: key,
    }; 
    try {
        const { ContentType } = await s3.getObject(params).promise();
        console.log('CONTENT TYPE:', ContentType);
        return ContentType;
    } catch (err) {
        console.log(err);
        const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
        console.log(message);
        throw new Error(message);
    }
};
   


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



{
  "name": "FileValidatorLambda",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "dipeeka",
  "license": "ISC",
  "dependencies": {
    "core-js": "^2.6.5",
    "core.js": "^0.4.2",
    "exceljs": "^4.3.0",
    "install": "^0.13.0",
    "update": "^0.7.4"
  }
}

const crypto = require('crypto');
const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = (event, context, callback) => {
  let params = {
    Bucket: 'bucket_name',
    Key: 'key',
  };

  let hash = crypto.createHash('md5');
  let stream = s3.getObject(params).createReadStream();
  stream.on('data', (data) => {
    hash.update(data);
  });

  stream.on('end', () => {
    let digest = hash.digest('hex');
    console.log(digest);
    callback(null, digest);
  });
};


