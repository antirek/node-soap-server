
var soap = require('./lib/soap-server');

function MyTestObject(){
}
MyTestObject.prototype.strArg = '';


var MyTestService = function () {
	return {
		test2: function (myTestObjectInstance) {
			console.log('allo:', myTestObjectInstance);			
			return 10;
		}
	};
};


var soapServer = new soap.SoapServer();
var soapService = soapServer.addService('test', new MyTestService());

var test2operation = soapService.getOperation('test2');
test2operation.setInputType('myTestObjectInstance', MyTestObject);
test2operation.setOutputType('number');

soapServer.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');
