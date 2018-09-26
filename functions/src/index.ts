import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


/**
 * server.js
 * Stripe Payments Demo. Created by Romain Huet (@romainhuet).
 *
 * This is the main file starting the Express server for the demo and enabling ngrok.
 */

'use strict';

const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const appTokyo = express();

/**
 * setup.js
 * Stripe Payments Demo. Created by Romain Huet (@romainhuet).
 *
 * This is a one-time setup script for your server. It creates a set of fixtures,
 * namely products and SKUs, that can then used to create orders when completing the
 * checkout flow in the web interface.
 */
const stripe = require('stripe')(config.stripe.secretKey);
stripe.setApiVersion(config.stripe.apiVersion);

// Setup useful middleware.
appTokyo.use(
    bodyParser.json({
      // We need the raw body to verify webhook signatures.
      // Let's compute it only when hitting the Stripe webhook endpoint.
      verify: function(req, res, buf) {
        if (req.originalUrl.startsWith('/webhook')) {
          req.rawBody = buf.toString();
        }
      },
    })
  );
  appTokyo.use(bodyParser.urlencoded({extended: true}));
  //appTokyo.use(express.static(path.join(__dirname, '../public')));
  appTokyo.engine('html', require('ejs').renderFile);
  appTokyo.set('view engine', 'html');

// Define routes.
appTokyo.use('/', require('./routes'));

// Change Firebase Functions region to Tokyo
exports.appTokyo = functions
  .region('asia-northeast1')
  .https.onRequest(appTokyo);
