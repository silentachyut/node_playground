var fs = require('fs');
var domain = require('domain').create();

// Note the intercept doesn't take the error argument
fs.readFile('foos.txt', 'utf8', domain.intercept(function(data){	
	console.log(data);
	domain.dispose();
}));

domain.on('error',function(){
	console.log("Error caught by the domain");
});