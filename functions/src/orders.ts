/**
 * orders.js
 * Stripe Payments Demo. Created by Romain Huet (@romainhuet).
 *
 * Simple library to store and interact with orders and products.
 * These methods are using the Stripe Orders API, but we tried to abstract them
 * from the main code if you'd like to use your own order management system instead.
 */

'use strict';

// fix "cannot redeclare block-scoped variable errors". Learn more: https://stackoverflow.com/a/41975448/3012870
export {};

const config = require('./config');
const _ = require('lodash');
const stripe = require('stripe')(config.stripe.secretKey);
stripe.setApiVersion(config.stripe.apiVersion);

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
// Create a subscription.
const createSubscription = async (email, source, shipping, info) => {
  const customer = await stripe.customers.create({
    email: email,
    source: source.id,
    shipping: shipping,
    metadata: {
      status: 'created',
      phone: info.phone || ''
    }
  });

  return await stripe.subscriptions.create({
    customer: customer.id,
    items: [
      {
        plan: "plan_D4TSCAXhq7WgFa",
      },
    ]
  })
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
  return await stripe.products.list({limit: 50});
};

// Retrieve a product by ID.
const retrieveProduct = async productId => {
  return await stripe.products.retrieve(productId);
};

// Validate that products exist.
const checkProducts = productList => {
  const validProducts: any = ['prod_DeUJM58yLt6GZe', 'prod_D4TQXt8olbWvY7'];
  return productList.data.reduce((accumulator, currentValue) => {
    return (
      accumulator &&
      productList.data.length === 50 &&
      validProducts.includes(currentValue.id)
    );
  }, !!productList.data.length);
};

// List all plans.
const listPlans = async () => {
  return await stripe.plans.list({limit: 50});
};

// Retrieve a plan by ID.
const retrievePlan = async planId => {
  return await stripe.plans.retrieve(planId);
};

// Validate that plans exist.
const checkPlans = planList => {
  const validPlans: any = ['plan_DeUK3w1zXTiaL5', 'plan_D4TSCAXhq7WgFa', 'plan_D4TS6EfQMjLIAq'];
  return planList.data.reduce((accumulator, currentValue) => {
    return (
      accumulator &&
      planList.data.length === 50 &&
      validPlans.includes(currentValue.id)
    );
  }, !!planList.data.length);
};

exports.orders = {
  create: createOrder,
  retrieve: retrieveOrder,
  update: updateOrder,
};

exports.products = {
  list: listProducts,
  retrieve: retrieveProduct,
  exist: checkProducts,
};

exports.plans = {
  list: listPlans,
  retrieve: retrievePlan,
  exist: checkPlans,
}

exports.subscriptions = {
  create: createSubscription,
}
