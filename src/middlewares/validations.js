// const HTTPRESPONSE = require('../HTTP/http.response');
const express = require('express');



const validationFieldRequired = (req, res, next) => {
  const payload = req.body
  console.log('AAAAAAAA', payload[0]);
  if (!payload.transaction_id) {
    return res.status(422).json({ 'field empty': 'Please, insert the field transaction_id' })
  }
  if (!payload.merchant_id) {
    return res.status(422).json({ 'field empty': 'Please, insert the field merchant_id' })
  }
  if (!payload.user_id) {
    return res.status(422).json({ 'field empty': 'Please, insert the field user_id' })
  }
  if (!payload.card_number) {
    return res.status(422).json({ 'field empty': 'Please, insert the field card_number' })
  }
  if (!payload.transaction_date) {
    return res.status(422).json({ 'field empty': 'Please, insert the field transaction_date' })
  }
  if (!payload.transaction_amount) {
    return res.status(422).json({ 'field empty': 'Please, insert the field transaction_amount' })
  }
  if (!payload.device_id) {
    return res.status(422).json({ 'field empty': 'Please, insert the field device_id' })
  }

  next();
}


module.exports = { validationFieldRequired };