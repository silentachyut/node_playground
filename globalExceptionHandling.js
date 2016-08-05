var fs = require('fs');

fs.readFile("foos.txt", "utf8", function(error, data){
	if(error){
		throw error;
	}
	console.log(data);
});

console.log("Reading File....");

process.on("uncaughtException",function(err){
	console.log("A global UncaughtException has been caught");
});