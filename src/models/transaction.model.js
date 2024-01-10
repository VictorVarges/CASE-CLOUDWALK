const connection = require("./connection");


const find = async () => {
  const [result] = await connection.query(
    'SELECT * FROM DB_TRANSACTIONS.transactions',
  );
  return result;
}


module.exports = { find };