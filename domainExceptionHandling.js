var fs = require('fs');
var domain = require('domain').create();

/**
A domain is the preferred mechanism for handling asynchronous errors in Node. Domains, a relatively new feature
(introduced in version 0.8), allow multiple I/O operations to be grouped into a single unit. When a timer, event emitter
(covered in Chapter 4), or callback function registered with a domain creates an error, the domain is notified so the
error can be handled appropriately.
*/
domain.run(function(){
	fs.readFile("foos.txt", "utf8", function(error, data){
		if(error){
			throw error;
		}
		console.log(data);
		domain.dispose();
	});
	console.log("Reading File....");
});


domain.on("error",function(err){
	console.log("An exception caught by domain");
});