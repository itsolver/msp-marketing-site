// TO DO: set environment variables for Firebase functions. Replace with your variables.
// Get the FIREBASE_API_TOKEN from https://console.firebase.google.com/u/0/project/$YOUR_PROJECT_ID/settings/general/
// - firebase functions:config:set stripe.publishable_key="$STRIPE_PUBLISHABLE_KEY" --token "$FIREBASE_API_TOKEN"
// - firebase functions:config:set stripe.secret_key="$STRIPE_SECRET_KEY" --token "$FIREBASE_API_TOKEN"
// - firebase functions:config:set stripe.webhook_secret="$STRIPE_WEBHOOK_SECRET" --token "$FIREBASE_API_TOKEN"
import * as functions from 'firebase-functions';
/**
 * config.js
 * Stripe Payments Demo. Created by Romain Huet (@romainhuet).
 */

'use strict';

module.exports = {
  // Default country for the checkout form.
  country: 'AU',

  // Store currency.
  // Note: A few payment methods like iDEAL or SOFORT only work with euros,
  // so it's a good common denominator to test both Elements and Sources.
  currency: 'aud',

  // Configuration for Stripe.
  // API Keys: https://dashboard.stripe.com/account/apikeys
  // Webhooks: https://dashboard.stripe.com/account/webhooks
  // Storing these keys and secrets as environment variables is a good practice.
  // You can fill them in your own `.env` file.
  stripe: {
    // The two-letter country code of your Stripe account (required for Payment Request).
    country: 'AU',
    // API version to set for this app (Stripe otherwise uses your default account version).
    apiVersion: '2018-05-21',
    // Use your test keys for development and live keys for real charges in production.
    // For non-card payments like iDEAL, live keys will redirect to real banking sites.
    publishableKey: functions.config().stripe.publishable_key,
    secretKey: functions.config().stripe.secret_key,
    // Setting the webhook secret is good practice in order to verify signatures.
    // After creating a webhook, click to reveal details and find your signing secret.
    webhookSecret: functions.config().stripe.webhook_secret,
  },
};
