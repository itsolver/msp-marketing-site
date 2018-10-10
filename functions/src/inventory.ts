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
//const _ = require('lodash');
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
const createSubscription = async (email, source, shipping, plans, info) => {
  const customer = await stripe.customers.create({
    email: email,
    source: source.id,
    shipping: shipping,
    metadata: {
      status: 'created',
      phone: info.phone || ''
    }
  });
  console.log('plans[0].id',plans[0].id);
  return await stripe.subscriptions.create({
    customer: customer.id,
    items: [
      {
        plan: plans[0].id,
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
  try {
  return await stripe.products.list({limit: 5});
  } catch (err) {
    console.log(`⚠️  listProducts failed: ${err}`);
  };
};

// Retrieve a product by ID.
const retrieveProduct = async productId => {
  return await stripe.products.retrieve(productId);
};

// Validate that products exist.
const checkProducts = productList => {
  const validProducts: any = ['g-suite', 'office-365', 'business-support-plans', 'home-support-plans', 'websites'];
  return productList.data.reduce((accumulator, currentValue) => {
    return (
      accumulator &&
      productList.data.length === 5 &&
      validProducts.includes(currentValue.id)
    );
  }, !!productList.data.length);
};

// List all plans.

  const listPlans = async () => {
    try {
      return await stripe.plans.list({limit: 16});
    } catch (err) {
      console.log(`⚠️  listPlans failed: ${err}`);
    };
  };

// Retrieve a plan by ID.
const retrievePlan = async planId => {
  return await stripe.plans.retrieve(planId);
};

// Validate that plans exist.
const checkPlans = planList => {
  const validPlans: any = ['plan_g-suite-basic', 'plan_g-suite-basic-annual', 'plan_g-suite-business', 'plan_g-suite-business-annual', 'plan_g-suite-premium-support', 'plan_g-suite-standard-support', 'plan_maintenance-business', 'plan_maintenance-home-3', 'plan_o365-business', 'plan_o365-business-year', 'plan_o365-business-premium', 'plan_o365-business-premium-yr', 'plan_o365-premium-support', 'plan_o365-standard-support', 'plan_website', 'plan_website-premium'];
  return planList.data.reduce((accumulator, currentValue) => {
    return (
      accumulator &&
      planList.data.length === 16 &&
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
