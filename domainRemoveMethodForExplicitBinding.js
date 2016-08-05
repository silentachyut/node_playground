var domain = require('domain');
domainOne  = domain.create();
domainTwo = domain.create();

domainOne.run(function(){
	var timer = (setTimeout(function(){
		throw new Error("This is custom error thrown");
	},1));
	domainTwo.add(timer);
	domainTwo.remove(timer);
	// The exception now doesn't get caucht
	/*
		/home/achyut/codehome/node/node_playground/domainRemoveMethodForExplicitBinding.js:7
			throw new Error("This is custom error thrown");
			      ^
	Error: This is custom error thrown
	    at null._onTimeout (/home/achyut/codehome/node/node_playground/domainRemoveMethodForExplicitBinding.js:7:9)
	    at Timer.listOnTimeout (timers.js:119:15)
	*/
});

domainOne.on('error',function(error){
	console.log("Exception caught by domainOne")
});

domainTwo.on('error',function(error){
	console.log("Exception caught by domainTwo");
});