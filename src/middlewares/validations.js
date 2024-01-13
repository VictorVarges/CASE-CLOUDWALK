const express = require('express');
const { HTTPRESPONSE, HTTPSTATUS } = require('../HTTP/http.response')



const validationFieldRequired = (req, res, next) => {
  const payload = req.body
  console.log('AAAAAAAA', payload[0]);
  if (!payload.transaction_id) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json(HTTPRESPONSE.transaction_id)
  }
  if (!payload.merchant_id) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json(HTTPRESPONSE.merchant_id)
  }
  if (!payload.user_id) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json(HTTPRESPONSE.user_id)
  }
  if (!payload.card_number) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json(HTTPRESPONSE.card_number)
  }
  if (!payload.transaction_date) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json(HTTPRESPONSE.transaction_date)
  }
  if (!payload.transaction_amount) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json(HTTPRESPONSE.transaction_amount)
  }
  if (!payload.device_id) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json(HTTPRESPONSE.device_id)
  }

  next();
}


module.exports = { validationFieldRequired };