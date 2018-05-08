/**
 * orders.js
 * Stripe Payments Demo. Created by Romain Huet (@romainhuet).
 *
 * Simple library to store and interact with orders and products.
 * These methods are using the Stripe Orders API, but we tried to abstract them
 * from the main code if you'd like to use your own order management system instead.
 */

'use strict';

import * as config from './config';
import * as express from 'express';
import  { Stripe } from 'stripe';
import * as cors from 'cors';
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
stripe.setApiVersion(config.stripe.apiVersion);

const router = express.Router();

// Automatically allow cross-origin requests
router.use(cors({ origin: true }));

// Create an order.
const createOrder = async (currency, items, email, shipping) => {
  return await stripe.orders.create({
    currency,
    items,
    email,
    shipping,
    metadata: {
      status: 'created',
    },
  });
};

// Retrieve an order by ID.
const retrieveOrder = async orderId => {
  return await stripe.orders.retrieve(orderId);
};

// Update an order.
const updateOrder = async (orderId, properties) => {
  return await stripe.orders.update(orderId, properties);
};

// List all products.
const listProducts = async () => {
  return await stripe.products.list({limit: 1});
};

// Retrieve a product by ID.
const retrieveProduct = async productId => {
  return await stripe.products.retrieve(productId);
};

// Validate that products exist.
const checkProducts = productList => {
  const validProducts = ['support-on-demand'];
  return productList.data.reduce((accumulator, currentValue) => {
    return (
      accumulator &&
      productList.data.length === 1 &&
      validProducts.includes(currentValue.id)
    );
  }, !!productList.data.length);
};

export class orders {
  create: createOrder;
  retrieve: retrieveOrder;
  update: updateOrder;
};

export class products {
  list: listProducts;
  retrieve: retrieveProduct;
  exist: checkProducts;
};