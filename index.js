var express = require('express')
var app = express()

app.get('/', function (req, res) {
  const json = {
    status: 1,
    card_status: 10,
    card_type: 'normal',
    card_id: "ca1111",
  }
  res.json(json)
})

app.post('/', function (req, res) {
  const json = {
    status: 2,
    card_status: 20,
    result_code: 1
  }
  res.json(json)
})

app.listen(3000)