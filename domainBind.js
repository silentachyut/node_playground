var fs = require('fs');
var domain = require('domain').create();

fs.readFile('foos.txt', 'utf8', domain.bind(function(error,data){
	if(error){
		throw error;
	}
	console.log(data);
	domain.dispose();
}));

domain.on('error',function(){
	console.log("Error caught by the domain");
});