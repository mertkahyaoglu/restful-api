var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var port     = process.env.PORT || 3000;

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/plaka');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', require('./lib/routes').router);

app.listen(port);
console.log('Server ' + port + ' portunda çalışmaya başladı.');
