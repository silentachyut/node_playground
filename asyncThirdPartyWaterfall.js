var async = require('asyc');

//the list of functions constituting the waterfall can only be stored in an array (object notation is not supported)
//only the results of the last task are passed to the final callback function
//the task functions can take additional arguments provided by the previous task
async.waterfall([
	function(callback){
		callback(null, Math.random(), Math.random());
	},
	function(a, b, callback){
		callback(null, a*a+b*b);
	},
	function(cc,callback){
		callback(null, Math.sqrt(cc));
	}
], 
function(error,c){
	console.log(c);
});