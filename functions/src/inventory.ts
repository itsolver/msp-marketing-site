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

// Get these figures from Products and Services spreadsheet https://docs.google.com/spreadsheets/d/1P1Z6XQ2k9FnW-CvfNU3b4o5bHguVklCiK6CiJ95PNIA/edit#gid=1969585112
const productsCount = '6';
const plansCount = '6';

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
    return await stripe.products.list({limit: productsCount});
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
  const validProducts: any = [
    // recurring products
    'automate-pro',
    // 'automate-pro-plus',
    // 'automate-starter',
    // 'automate-teams',
    // 'domains',
    // 'g-suite-basic',
    // 'g-suite-basic-annual',
    // 'g-suite-business',
    // 'g-suite-business-annual',
    // 'g-suite-support-premium',
    // 'g-suite-support-standard',
    // 'maintenance-business',
    // 'maintenance-home-3',
    // 'maintenance-home-3-annual',
    // 'office-365-business',
    // 'office-365-business-premium',
    // 'office-365-business-premium-yr',
    // 'office-365-business-yr',
    // 'office-365-support-premium',
    // 'office-365-support-standard',
    // 'personal-assistant-home-1',
    // 'website',
    // 'website-hosting',
    // 'website-hosting-annual',
    // 'website-premium',
    // // one-time products
    // 'apple-tv-setup',
    // 'consulting',
    // 'custom-app-development',
    // 'data-backup',
    // 'data-recovery',
    // 'g-suite-business-migration',
    // 'g-suite-premium-migration',
    // 'g-suite-solo-migration',
    // 'g-suite-startup',
    // 'home-theatre-installation',
    // 'install-foxtel',
    // 'installation',
    // 'insurance-quotes',
    // 'laptop-keyboard-replace',
    // 'modem-wireless-network-setup',
    // 'network-add-data-points',
    // 'network-design',
    // 'networking',
    // 'office-365-business-migration',
    // 'office-365-premium-migration',
    // 'office-365-solo-migration',
    // 'office-365-startup',
    // 'on-demand-quick-support',
    // 'on-demand-support',
    // 'personal-video-recorder-setup',
    // 'plex-home-theatre-setup',
    // 'relocation',
    // 'soundbar-setup',
    // 'switch-to-gmail',
    // 'troubleshoot-av',
    // 'troubleshoot-performance',
    // 'troubleshoot-printer',
    // 'tutorial',
    // 'tv-installation-cabinet-mount',
    // 'tv-installation-wall-mount',
    // 'upgrades',
    // 'virus-removal',
    // 'website-lite',
    // 'white-label-support',
    // 'wireless-speaker-setup',
    // 'white-label-mycpbx-build',
    // 'white-label-mycpbx-rollout',
    // 'white-label-mycpbx-survey',
    // 'white-label-mycpbx-rollout'
  ]
  return productList.data.reduce((accumulator, currentValue) => {
    return (
      accumulator &&
      productList.data.length === productsCount &&
      validProducts.includes(currentValue.id)
      );
    }, !!productList.data.length);
  };
  
  // List all plans.
  
  const listPlans = async () => {
    try {
      return await stripe.plans.list({limit: plansCount});
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
    const validPlans: any = [
      'plan_automate-pro',
      // 'plan_automate-pro-plus',
      // 'plan_automate-starter',
      // 'plan_automate-teams',
      // 'plan_domain-name',
      // 'plan_g-suite-basic',
      // 'plan_g-suite-basic-annual',
      // 'plan_g-suite-business',
      // 'plan_g-suite-business-annual',
      // 'plan_g-suite-premium-support',
      // 'plan_g-suite-standard-support',
      // 'plan_gsuite-basic',
      // 'plan_gsuite-business',
      // 'plan_maintenance-business',
      // 'plan_maintenance-home-3',
      // 'plan_maintenance-home-3-annual',
      // 'plan_o365-business',
      // 'plan_o365-business-premium',
      // 'plan_o365-business-premium-yr',
      // 'plan_o365-business-year',
      // 'plan_o365-premium-support',
      // 'plan_o365-standard-support',
      // 'plan_personal-assistant-home-1',
      // 'plan_website',
      // 'plan_website-hosting',
      // 'plan_website-hosting-annual',
      // 'plan_website-premium'
    ] 
    return planList.data.reduce((accumulator, currentValue) => {
      return (
        accumulator &&
        planList.data.length === plansCount &&
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
    