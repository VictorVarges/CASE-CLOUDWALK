const transaction = require('../models/transaction.model');
const MAX_TRANSACTIONS_IN_HOUR = 5;
const MAX_TRANSACTION_AMOUNT = 300;
const MAX_HIGH_VALUE_TRANSACTIONS = 2;


const getAllTransactions = async () => {
  return await transaction.find();
}

const transactionValidationInAHour = async (lastHourTransactions) => {
  if (lastHourTransactions.length >= MAX_TRANSACTIONS_IN_HOUR) {
    return false
  }
  return true
};

// NEGA MAIS DE 3 TRANSAÇÕES COM VALOR SUPERIOR OU IGUAL A X EM ATÉ 1 UMA HORA 
const validateMaxTransactionAmount = async (lastHourTransactions) => {
  const transactionsWithHighValueInOneHour
    = await lastHourTransactions.filter(eachTransaction => (eachTransaction.transaction_amount >= MAX_TRANSACTION_AMOUNT));

  if (transactionsWithHighValueInOneHour.length <= MAX_HIGH_VALUE_TRANSACTIONS) {
    return true
  } return false
}

const createNewTransaction = async (receivedTransaction) => {
  const newTransaction = await transaction.createNewTransaction(receivedTransaction);

  return newTransaction;
}


const validateTransaction = async (transactionReceived) => {
  const lastHourTransactions = await transaction.findLastHourTransactions(transactionReceived.transaction_date, transactionReceived.user_id);
  const isValidTransactionInHour = await transactionValidationInAHour(lastHourTransactions);
  const isValidMaxTransactionAmount = await validateMaxTransactionAmount(lastHourTransactions);

  if (!isValidTransactionInHour || !isValidMaxTransactionAmount) {
    return false;
  }

  await createNewTransaction(transactionReceived);
  return true; 
}


module.exports = { getAllTransactions, validateTransaction, transactionValidationInAHour, createNewTransaction };
