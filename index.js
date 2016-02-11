var soap = require('soap');

var url = 'http://127.0.0.1:1337/test?wsdl';
var args = {appId: 'XXXX'};

soap.createClient(url, function (err, client) {
    console.dir(client.describe());

    client.test2({myArg1: 'hello', myArg2: 'Vasya!'}, function (err, result) {
    	console.log(err, result);
    });

/*
    client.sayHello({name: 'vasya', surname: 'petrov'}, function (err, result) {
        console.log(err, result);
    });
   */
});