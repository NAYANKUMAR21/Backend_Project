const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.get('/', (req, res) => {
  let token = jwt.sign({ _id: 'Nayan Kumar Hanchate', roll: '124' }, 'NAYAN');
  return res.status(200).send(token);
});

app.get('/verify', (req, res) => {
  return res.status(200).send('ACCEESS_TOKEN');
});

app.listen(8080, () => {
  console.log('http://localhost:8080');
});
