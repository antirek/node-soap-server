
var soap = require('./lib/soap-server');





function MyTestService(){
}

MyTestService.prototype.test2 = function(myArg1, myArg2){
	console.log('args:', myArg1, myArg2);
	return myArg1 + ', ' + myArg2;
};


var soapServer = new soap.SoapServer();
var soapService = soapServer.addService('test', new MyTestService());




soapServer.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
