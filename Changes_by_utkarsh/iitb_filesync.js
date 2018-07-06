/*Created by Utkarsh for IITBX*/


var cron = require('cron');
var connect = require('./connect.js')

function synch()
{
	var cronJob = cron.job("* 30 11 * * 0-6", function(){
		    
		    connect.uploadtelemetry;
		    console.log("sent");
		}); 

		cronJob.start();
}
module.export = synch;

