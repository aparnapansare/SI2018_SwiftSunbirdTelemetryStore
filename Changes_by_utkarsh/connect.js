/*Created by Utkarsh for IITBX*/

var path = require("path")
var FormData = require('form-data')
var fs=require('fs');

function uploadtelemetry()
{
   
var form = new FormData();
 form.append('file', fs.createReadStream(path.join(__dirname,'/telemetry_log.txt')),null);
 form.submit('http://192.168.0.103:8000/files/info/telemet/telemetry/upload',function(err,res){
    if (err) {
    return console.error('upload failed:', err);
    }
    console.log(res);
 })

}

module.export=uploadtelemetry;
