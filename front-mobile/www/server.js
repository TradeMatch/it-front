var express = require('express')
  , path = require('path');

console.log('Creating Express server...');
var app = express();

app.set('port', process.env.PORT || 8000);
app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));


if (process.env.BASIC_AUTH === "yes") {
  var auth = require('http-auth');
  var basic = auth.basic({
      realm: "iTrade"
    }, function (username, password, callback) {
      callback(username === "itrade" && password === "1trad3");
    }
  );
  app.use(auth.connect(basic));
}


// Start and export the server
module.exports = app.listen(app.get('port'), function () {
  console.log("Express server listening on port %d in %s mode", app.get('port'), app.get('env'));
});
