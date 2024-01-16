const transaction = require('../models/transaction.model');


const getAllTransactions = async () => {
  return await transaction.find();
}

const transactionValidationInAHour = async (lastHourTransactions) => {
  const maxTransactions = 5;

  if (lastHourTransactions.length >= maxTransactions) {
    return false
  }
  return true
};

// NEGA MAIS DE 3 TRANSAÇÕES COM VALOR SUPERIOR OU IGUAL A X EM ATÉ 1 UMA HORA 
const validateMaxTransactionAmount = async (lastHourTransactions) => {
  const maxTransactionAmount = 300;
  const transactionsWithHighValueInOneHour
    = await lastHourTransactions.filter(eachTransaction => (eachTransaction.transaction_amount >= maxTransactionAmount));
  if (transactionsWithHighValueInOneHour.length <= 2) {
    return true
  } return false
}

const createNewTransaction = async (receivedTransaction) => {
  const newTransaction = await transaction.createNewTransaction(receivedTransaction);

  return newTransaction;
}


const validateTransaction = async (transactionReceived) => {
  const lastHourTransactions = await transaction.findLastHourTransactions(transactionReceived.transaction_date, transactionReceived.user_id);
  const validateResult = await transactionValidationInAHour(lastHourTransactions);
  const validateResultMaxAmount = await validateMaxTransactionAmount(lastHourTransactions)
  await createNewTransaction(transactionReceived)

  if (!validateResult) {
    return false
  }
  if (!validateResultMaxAmount) {
    return false
  }
  return true
}


module.exports = { getAllTransactions, validateTransaction, transactionValidationInAHour, createNewTransaction };
