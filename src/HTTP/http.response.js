const HTTPSTATUS = {
  OK : 200,
  CREATED : 201,
  UNAUTHORIZED : 401,
  BAD_REQUEST : 400,
  UNPROCESSABLE_ENTITY : 422,
  NOT_FOUND : 404,
}

const HTTPRESPONSE = {
  transaction_id: 'field empty: Please, insert the field transaction_id',
  merchant_id: 'field empty: Please, insert the field merchant_id' ,
  user_id: 'field empty: Please, insert the field user_id',
  card_number: 'field empty: Please, insert the field card_number',
  transaction_date: 'field empty: Please, insert the field transaction_date',
  transaction_amount: 'field empty: Please, insert the field transaction_amount', 
  device_id: 'field empty: Please, insert the field device_id'
}


module.exports = { HTTPSTATUS, HTTPRESPONSE }