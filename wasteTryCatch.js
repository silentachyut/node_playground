var fs = require('fs');

try{
	fs.readFile("foos.txt", "utf8", function(error, data){
	if(error){
		throw error;
	}
	console.log(data);
	});
} catch(exception){
	console.log("Exception Handled by try catch");
}

console.log("Reading File....");