const express = require("express");
const bodyParser = require("body-parser");
const querystring = require('querystring');
const { orderList, orderLineItemList } = require('./mockData');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(bodyParser.json());

app.get("/order/getOrderList", (req, res) => {
  res.send({ code: 200, message: 'success', data: orderList });
});

app.get("/order/getLineItemByOrderId", (req, res) => {
  const { orderId } = querystring.parse(req.url.split('?')[1]);
  const result = orderLineItemList.filter(v => v.orderId.toString() === orderId.toString())
  res.send({ code: 200, message: 'success', data: result });
});

app.listen(3001, () => {});
