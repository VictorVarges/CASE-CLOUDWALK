const express = require('express');
const transactionService = require('../services/transaction.service');
const validations = require('../middlewares/validations')
// const HTTPRESPONSE = require('../HTTP/http.response');
const middlewares = require('../middlewares/validations');

const getAllTransactions = async (req, res) => {
  const transactions = await transactionService.getAllTransactions();
  res.json(transactions);
};

const validationFieldRequired = (req, res, next) => {
  const receivedTransaction = req.body;
  const validationField = validations.validationFieldRequired(receivedTransaction);

  if (validationField) {
    res.status(201).json(validationField);
  }

  next()
}

const validateTransaction = (req, res, next) => {
  const receivedTransaction = req.body;
  const validationResult = transactionService.validateTransaction(receivedTransaction);

  if (validationResult) {
    res.json(validationResult);
  }

  next()
}

module.exports = { getAllTransactions, validationFieldRequired, validateTransaction };  
