const Transaction = require('../models/transaction.model');

class transactionService {
  async getAllTransactions() {
    return await Transaction.find();
  }

  async createTransaction(transactionData) {
    const newTransaction = new Transaction(transactionData);
    return await newTransaction.save();
  }

}

module.exports = new transactionService();
