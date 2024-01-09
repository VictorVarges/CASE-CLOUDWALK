const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const transactionController = require('./controllers/transaction.controller');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/your-database', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', transactionController);

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
