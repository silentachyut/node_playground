var async = require('async');

async.parallel({
	one:function(callback){
		setTimeout(function(){
			console.log("First Task");
			callback(null,1);
		}, 100);
	},
	two:function(callback){
		setTimeout(function(){
			console.log("Second Task");
			callback(null,2);
		}, 200);

	},
	three:function(callback){
		setTimeout(function(){
			console.log("Third Task");
			callback(null,3);
		}, 300);

	}
}, function(error,results){
	console.log(results);
});