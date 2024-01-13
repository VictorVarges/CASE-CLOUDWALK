const express = require('express');
const bodyParser = require('body-parser');
const { getAllTransactions, validateTransaction } = require('./controllers/transaction.controller');
const { validationFieldRequired } = require('./middlewares/validations')
// const controller = require('./controllers/transaction.controller')
// , controller.handleTransaction

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/transactions', getAllTransactions);
app.post('/transactions', validationFieldRequired, validateTransaction);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
