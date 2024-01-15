const transaction = require('../models/transaction.model');


const getAllTransactions = async () => {
  return await transaction.find();
}

const transactionValidationInAHour = async (transactionReceived) => {
  const maxTransactions = 3;
  const lastHourTransactions = await transaction.findLastHourTransactions(transactionReceived.transaction_date);
  console.log({lastHourTransactions});

  if (lastHourTransactions.length >= maxTransactions) {
    return false
  }
  return true
};


const validateTransaction = async (transactionReceived) => {
  return transactionValidationInAHour(transactionReceived);
}


module.exports = { getAllTransactions, validateTransaction, transactionValidationInAHour };
