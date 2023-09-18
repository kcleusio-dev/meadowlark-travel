const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);

//custom  404
app.use(function (req, res) {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

// custom 500 page
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function () {
  console.log('Express started on http://localhost:'
    + app.get('port') + '; press CRTL-C to terminate.')
});

//página inicial
app.get('/', function (req, res) {
  res.type('text/plain');
  res.send('Meadowlark Viagens');
});

app.get('/about', function (req, res) {
  res.type('text/plain');
  res.send('Meadowlark Viagens');
});

// custom 404 page
app.use(function (req, res, next) {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});