'use strict';

const config = require('./config');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const {orders, products} = require('./orders');
const stripe = require('stripe')(config.stripe.secretKey);
stripe.setApiVersion(config.stripe.apiVersion);

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

const router = express.Router();
const app = express();
app.get('/buy/on-demand', (request, response) => {
  res.render('/buy/on-demand');
});

exports.app = functions.https.onRequest(app);
