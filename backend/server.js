require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the app' });
});

app.listen(process.env.PORT, () => {
  console.log('Listening on port secret port');
});
