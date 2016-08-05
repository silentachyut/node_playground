var domain = require('domain');
domainOne  = domain.create();
domainTwo = domain.create();

domainOne.run(function(){
	/* the timer is explicitly registered with d2 using its add()
method. Therefore, when the exception is thrown, d2’s error handler is triggered.*/
	domainTwo.add(setTimeout(function(){
		throw new Error("This is custom error thrown");
	},1));
	/* A similar method, remove(), removes a timer or event emitter from a domain */

});

domainOne.on('error',function(error){
	console.log("Exception caught by domainOne")
});

domainTwo.on('error',function(error){
	console.log("Exception caught by domainTwo");
});