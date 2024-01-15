const connection = require("./connection");


const find = async () => {
  const [allTransactions] = await connection.query(
    'SELECT * FROM DB_TRANSACTIONS.transactions',
  );

  return allTransactions;
}


// utilizo meu banco da dados para pegar as transações da última hora
const findLastHourTransactions = async (transactionHour) => {
  console.log({transactionHour});
  const [allLastHourTransactions] = await connection.query(
    `SELECT *
    FROM DB_TRANSACTIONS.transactions
    WHERE transaction_date BETWEEN
        DATE_SUB(?, INTERVAL 1 HOUR) AND ?;`,
  [transactionHour, transactionHour]);

  return allLastHourTransactions;
}


module.exports = { find, findLastHourTransactions };