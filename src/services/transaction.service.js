const transaction = require('../models/transaction.model');


const getAllTransactions = async () => {
  return await transaction.find();
}


const validateTransaction= (transactionsReceived) => {
  const dateTransaction = transactionsReceived
  
  return dateTransaction
};


module.exports = { getAllTransactions, validateTransaction };
