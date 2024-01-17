const express = require('express');
const transactionService = require('../services/transaction.service');
const { HTTPSTATUS, HTTPRESPONSEAPPROVE, HTTPRESPONSEDENIED } = require('../HTTP/http.response');

const getAllTransactions = async (req, res) => {
  const allTransactions = await transactionService.getAllTransactions();
  
  res.status(HTTPSTATUS.OK).json(allTransactions);
};

const validateTransaction = async (req, res, next) => {
  const { transaction_id } = req.body;
  const validateResult = await transactionService.validateTransaction(req.body);

  if(!validateResult) {
  return res.status(HTTPSTATUS.OK).json({ transaction_id: transaction_id, recommendation: HTTPRESPONSEDENIED.recommendation });
  }
  res.status(HTTPSTATUS.OK).json({ transaction_id: transaction_id, recommendation: HTTPRESPONSEAPPROVE.recommendation });
  

}

module.exports = { getAllTransactions, validateTransaction };  
