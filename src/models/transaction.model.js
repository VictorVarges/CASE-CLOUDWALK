const connection = require("./connection");


const find = async () => {
  const [allTransactions] = await connection.query(
    'SELECT * FROM DB_TRANSACTIONS.transactions',
  );

  return allTransactions;
}


const findLastHourTransactions = async (transactionHour, user_id) => {
  const [allLastHourTransactions] = await connection.query(
    `SELECT *
    FROM DB_TRANSACTIONS.transactions
    WHERE user_id = ? AND
          transaction_date BETWEEN DATE_SUB(?, INTERVAL 1 HOUR) AND DATE_ADD(?, INTERVAL 1 SECOND);`,
    [user_id, transactionHour, transactionHour]);

  return allLastHourTransactions;
}

const createNewTransaction = async (receivedTransaction) => {
  const { transaction_id, merchant_id, user_id, card_number, transaction_date, transaction_amount, device_id } = receivedTransaction;
  const [newTransaction] = await connection.query(
    `INSERT INTO DB_TRANSACTIONS.transactions (transaction_id, merchant_id, user_id, card_number, transaction_date, transaction_amount, device_id, has_cbk) VALUES
    (?, ?, ?, ?, ?, ?, ?, ?);`,
    [transaction_id, merchant_id, user_id, card_number, transaction_date, transaction_amount, device_id, false]);

  return newTransaction;
}


module.exports = { find, findLastHourTransactions, createNewTransaction };