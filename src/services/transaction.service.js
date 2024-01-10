const transaction = require('../models/transaction.model');

 
  const getAllTransactions = async () => {
    return await transaction.find();
  }
  
  const validateTransaction = async (receivedTransaction) => {
    if(receivedTransaction.has_cbk == 'FALSE') {
      return ({ 'transaction_id' : receivedTransaction.transaction_id, 'recommendation': 'approve'});
    } else {
      return ({'transaction_id' : receivedTransaction.transaction_id, 'recommendation': 'denied'})
    }
  }

module.exports = { getAllTransactions, validateTransaction };
