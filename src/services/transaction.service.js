const transaction = require('../models/transaction.model');

 
  const getAllTransactions = async () => {
    return await transaction.find();
  }
  
  const validateTransactionsInArow = async (receivedTransactions) => {
    const transactionDates = [];

    for (const transaction of receivedTransactions) {
      if (transaction && transaction.hasOwnProperty('transaction_date')) {
        transactionDates.push(transaction.transaction_date);
      }
    }
  
    return transactionDates;
  };
   

 

module.exports = { getAllTransactions, validateTransactionsInArow };
