const env = require('./env');
const fs = require('fs');

const express = require('express');
const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) => {
  //   res.send(JSON.stringify({ data: 'This is it' }));
  console.log(env.FS_FILE);
  const text = fs.readFileSync(env.JS_FILE, 'utf-8');
  const textArray = text.split('\n');
  console.log('length' + textArray.length);

  const lels = textArray.filter((ele) => {
    return ele.startsWith('- [[') && !ele.endsWith('x');
  }); //lels = Learning Elements

  const totalLels = lels.length;
  const learntLels = lels.filter((ele) => {
    return ele.endsWith('+') || ele.endsWith('-');
  }).length;

  res.send(JSON.stringify({ totalLels: totalLels, learntLels: learntLels }));
});

app.listen(process.env.PORT || 3001, () =>
  console.log('Server is running at port 3001')
);
