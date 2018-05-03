// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

'use strict';

import * as config from './config';
import {orders, products} from './orders';
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import  { Stripe } from 'stripe';
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
stripe.setApiVersion(config.stripe.apiVersion);

const app = express();

app.use(
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
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../dist')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Define routes.
app.use('/', require('./routes'));

export const app = functions.https.onRequest(app);
