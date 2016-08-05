var async = require('async');

async.series([

	function(callback){
		setTimeout(function(){
			console.log("First Task");
			callback(new Error('This is just a custom error message',1));
		}, 300);

	},
	function(callback){
		setTimeout(function(){
			console.log("Second Task");
			callback(null,2);
		}, 200);

	},
	function(callback){
		setTimeout(function(){
			console.log("Third Task");
			callback(null,3);
		}, 300);

	}
],function(error,results){
	if(error){
		console.log(error);
	} else {
		console.log(results);
	}
});