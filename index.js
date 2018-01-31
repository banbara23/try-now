var express = require('express')
var app = express()

app.get('/', function (req, res) {
  const json = {
    sts: 0,
    card_status: 0,
    card_type: 'normal',
    client_card_id: "123456789",
  }
  res.json(json)
})

app.post('/', function (req, res) {
  const json = {
    sts: 0,
    card_status: 0,
    client_card_id: "123456789"
  }
  res.json(json)
})

app.listen(3000)