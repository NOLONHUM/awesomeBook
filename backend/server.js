
const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const shopRoutes = require('./routes/shop-routes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
});

app.use('/api/shop', shopRoutes);

mongoose
  .connect(
    config.get('mongodbUrl'),
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(5000);
    console.log('Server is running!');
  })
  .catch(err => {
    console.log(err);
  });
