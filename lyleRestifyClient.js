var assert = require('assert');
var clients = require('restify-clients');

var client = clients.createJsonClient({
  url: 'http://localhost:8085',
  version: '~1.0'
});

var email = 'lyle@digitallyinfused.com';
var passw = '3019061111';
var phone = '23233223';
var sendValue = '/app/' + email + '/' + passw + '/' + phone;


client.get(sendValue, function (err, req, res, obj) {
  assert.ifError(err);
  console.log('Server returned: %j', obj);
});
