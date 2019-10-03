var restify = require('restify');
var users = new Array();
var allUsers = '';

function respond(req, res, next) {
 // check to see if exists
 var lenUsers = users.length;
 var addIt = true;
 var addComma = '';

 // don't add a duplicate to the list
 for (i = 0; i < lenUsers; i++) {
   if (users[i] == req.params.email) {
     addIt = false;
   }
 }
 // add it if new, no duplicates
 if (addIt) {
   users.push(req.params.email);
   if (allUsers.length != 0) {
     addComma = ', ';
   }
   allUsers += addComma + req.params.email;
 }
 else {
   addComma = '';
 }
  // send response back
  res.send('hello ' + req.params.email + ' ' + req.params.passw + ' ' + req.params.phone + ' LIST: ' + allUsers );
  next();
}

var server = restify.createServer();
server.get('/app/:email/:passw/:phone', respond);
server.head('/app/:email/:passw/:phone', respond);



server.listen(8085, function() {

  console.log('%s listening at %s', server.name, server.url);
});
