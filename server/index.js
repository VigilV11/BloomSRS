// import express from 'express';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('We are one');
});

app.listen(process.env.PORT || 3001, () =>
  console.log('Server is running at port 3001')
);
