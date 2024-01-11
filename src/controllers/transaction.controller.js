const express = require('express');
const transactionService = require('../services/transaction.service');

const getAllTransactions = async (req, res) => {
  const transactions = await transactionService.getAllTransactions();
  res.json(transactions);
};

const validateTransactionsInArow = async (req, res) => {
  const receivedTransaction = req.body;
  const validationResult = await transactionService.validateTransactionsInArow(receivedTransaction);
  console.log('AAA', validationResult);
  res.json(validationResult);

}

module.exports = { getAllTransactions, validateTransactionsInArow };  
