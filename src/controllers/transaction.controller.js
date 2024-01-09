const express = require('express');
const router = express.Router();
const transactionService = require('../services/transaction.service');

router.get('/transactions', async (req, res) => {
  const transactions = await transactionService.getAllTransactions();
  res.json(transactions);
});

router.post('/transactions', async (req, res) => {
  const transactionData = req.body;


  const newTransaction = await transactionService.createTransaction(transactionData);
  res.json(newTransaction);
});


module.exports = router;
