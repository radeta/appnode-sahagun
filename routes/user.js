 var soap = require('soap');

exports.list = function(req, res){
var url = 'http://www.tribunal.besaba.com/php/servidorSoap.php?wsdl';
//var url = 'http://localhost:82/Tribunal_Etico/php/servidorSoap.php?wsdl';
  var args = {name: '78763396'};
  soap.createClient(url, function(err, client) {
      client.getInhabilidad2(args, function(err, result) {
          res.send(result);
      });
  });
};