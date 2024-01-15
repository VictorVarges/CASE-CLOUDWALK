const express = require('express');
const { HTTPSTATUS, HTTPRESPONSEDENIED } = require('../HTTP/http.response')

const validationsPayload = (req, res, next) => {
  const payload = req.body
  const { transaction_id, merchant_id, user_id, card_number, transaction_date, transaction_amount, device_id } = payload;

  if (!transaction_id) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json({ transaction_id: transaction_id, recommendation: HTTPRESPONSEDENIED.recommendation })
  }
  if (!merchant_id) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json({ transaction_id: transaction_id, recommendation: HTTPRESPONSEDENIED.recommendation })
  }
  if (!user_id) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json({ transaction_id: transaction_id, recommendation: HTTPRESPONSEDENIED.recommendation })
  }
  if (!card_number || card_number.length !== 16) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json({ transaction_id: transaction_id, recommendation: HTTPRESPONSEDENIED.recommendation })
  }
  if (!transaction_date) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json({ transaction_id: transaction_id, recommendation: HTTPRESPONSEDENIED.recommendation })
  }
  if (!transaction_amount) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json({ transaction_id: transaction_id, recommendation: HTTPRESPONSEDENIED.recommendation })
  }
  if (!device_id) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json({ transaction_id: transaction_id, recommendation: HTTPRESPONSEDENIED.recommendation })
  }

  next();
}


module.exports = { validationsPayload };