const transaction = require('../models/transaction.model');

 
  const getAllTransactions = async () => {
    return await transaction.find();
  }
  
  const validateTransactionsInArow = async (receivedTransactions) => {
    const datesTransactions = [];

    for (const transactions of receivedTransactions) {
      if (transactions && transactions.hasOwnProperty('transaction_date')) {
        datesTransactions.push(transactions.transaction_date);
      }
    }
  
    return datesTransactions;
  };

module.exports = { getAllTransactions, validateTransactionsInArow, validateTransaction };
