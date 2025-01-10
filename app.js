//setup required packages
const express = require('express');
const sslChecker = require('ssl-checker');

//initialize express
const app = express();

app.use(express.json());

app.post('/check', (req, res) => {
  const urlToCheck = req.body.url;
  sslChecker(urlToCheck, 'GET', 443).then(result => res.json(result))
});

// start the app
app.listen(3001, () => console.info('Server started...'));