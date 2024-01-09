const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  transaction_id: Number,
  merchant_id: Number,
  user_id: Number,
  card_number: String,
  transaction_date: Date,
  transaction_amount: Number,
  device_id: Number,
  has_cbk: Boolean,
});

const transaction = mongoose.model('Transaction', transactionSchema);

module.exports = transaction;
