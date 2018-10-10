/**
 * setup.js
 * Stripe Payments Demo. Created by Romain Huet (@romainhuet).
 *
 * This is a one-time setup script for your server. It creates a set of fixtures,
 * namely products and SKUs, that can then used to create orders when completing the
 * checkout flow in the web interface.
 */

'use strict';

const config = require('./config');
const stripe = require('stripe')(config.stripe.secretKey);
stripe.setApiVersion(config.stripe.apiVersion);

module.exports = {
  running: false,
  run: async () => {
    if (this.running) {
      console.log('⚠️  Setup already in progress.');
    } else {
      this.running = true;
      this.promise = new Promise(async resolve => {
        // Create a service products and plans assuming they don't already exist.
        try {
          // G Suite
          await stripe.products.create({
            id: 'g-suite',
            type: 'service',
            name: 'G Suite',
          });
          // Office 365
          await stripe.products.create({
            id: 'office-365',
            type: 'service',
            name: 'Office 365',
          });
          // Business Support Plans
          await stripe.products.create({
            id: 'business-support-plans',
            type: 'service',
            name: 'Business Support Plans',
          });
          // Home Support Plans
          await stripe.products.create({
            id: 'home-support-plans',
            type: 'service',
            name: 'Home Support Plans',
          });
          // Websites
          await stripe.products.create({
            id: 'websites',
            type: 'service',
            name: 'Websites',
          });

          // Plans
          await stripe.plans.create({
            id: 'plan_g-suite-basic',
            currency: 'AUD',
            interval: 'month',
            product: 'g-suite',
            amount: '550',
            billing_scheme: 'per_unit',
            metadata: {
                image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/gsuite-setup-0.2x.png',
                description_short: 'Professional office suite with 30GB storage.',
            },
            nickname: 'G Suite Basic',
            trial_period_days: '14',
          });
          await stripe.plans.create({
              id: 'plan_g-suite-basic-annual',
              currency: 'AUD',
              interval: 'year',
              product: 'g-suite',
              amount: '6600',
              billing_scheme: 'per_unit',
              metadata: {
                  image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/gsuite-setup-0.2x.png',
                  description_short: 'Professional office suite with 30GB storage.',
              },
              nickname: 'G Suite Basic Annual',
              trial_period_days: '14',
          });
          await stripe.plans.create({
              id: 'plan_g-suite-business',
              currency: 'AUD',
              interval: 'month',
              product: 'g-suite',
              amount: '1100',
              billing_scheme: 'per_unit',
              metadata: {
                  image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/gsuite-setup-0.2x.png',
                  description_short: 'Enhanced office suite with unlimited storage and archiving.',
              },
              nickname: 'G Suite Business',
              trial_period_days: '14',
          });
          await stripe.plans.create({
              id: 'plan_g-suite-business-annual',
              currency: 'AUD',
              interval: 'year',
              product: 'g-suite',
              amount: '13200',
              billing_scheme: 'per_unit',
              metadata: {
                  image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/gsuite-setup-0.2x.png',
                  description_short: 'Enhanced office suite with unlimited storage and archiving.',
              },
              nickname: 'G Suite Business Annual',
              trial_period_days: '14',
          });
          await stripe.plans.create({
              id: 'plan_g-suite-premium-support',
              currency: 'AUD',
              interval: 'month',
              product: 'business-support-plans',
              amount: '2490',
              billing_scheme: 'per_unit',
              metadata: {
                  image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/support-plan-0.2x.png',
                  description_short: '24/7 Priority support and ongoing management of your G suite environment. Unlimited technical support. Customer site visits.',
              },
              nickname: 'G Suite Premium Support Plan',
              trial_period_days: '',
          });
          await stripe.plans.create({
              id: 'plan_g-suite-standard-support',
              currency: 'AUD',
              interval: 'month',
              product: 'business-support-plans',
              amount: '1490',
              billing_scheme: 'per_unit',
              metadata: {
                  image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/support-plan-0.2x.png',
                  description_short: 'Ongoing management of your G suite environment. Unlimited technical support.',
              },
              nickname: 'G Suite Standard Support Plan',
              trial_period_days: '',
          });
          await stripe.plans.create({
              id: 'plan_maintenance-business',
              currency: 'AUD',
              interval: 'month',
              product: 'business-support-plans',
              amount: '3600',
              billing_scheme: 'per_unit',
              metadata: {
                  image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/support-plan-0.2x.png',
                  description_short: 'Regular health checks for your Mac and Windows computers to detect and resolve issues before they impact your business.',
              },
              nickname: 'Maintenance for Business',
              trial_period_days: '',
          });
          await stripe.plans.create({
              id: 'plan_maintenance-home-3',
              currency: 'AUD',
              interval: 'month',
              product: 'home-support-plans',
              amount: '29900',
              billing_scheme: 'per_unit',
              metadata: {
                  image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/maintenance-home-plan-0.2x.png',
                  description_short: 'Protect yourself from the internet bad guys with direct access to a tech expert and preventative maintenance for 3 devices.',
              },
              nickname: 'Maintenance for Home. 3 Devices.',
              trial_period_days: '',
          });
          await stripe.plans.create({
              id: 'plan_o365-business',
              currency: 'AUD',
              interval: 'month',
              product: 'office-365',
              amount: '1573',
              billing_scheme: 'per_unit',
              metadata: {
                  image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/office-365-australia-redlands-brisbane-gold-coast-sunshine-0.2x.png',
                  description_short: 'Best for businesses that need Office applications plus cloud file storage and sharing. Business email not included.',
              },
              nickname: 'Office 365 Business',
              trial_period_days: '30',
          });
          await stripe.plans.create({
              id: 'plan_o365-business-year',
              currency: 'AUD',
              interval: 'year',
              product: 'office-365',
              amount: '1320',
              billing_scheme: 'per_unit',
              metadata: {
                  image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/office-365-australia-redlands-brisbane-gold-coast-sunshine-0.2x.png',
                  description_short: 'Best for businesses that need Office applications plus cloud file storage and sharing. Business email not included.',
              },
              nickname: 'Office 365 Business Annual',
              trial_period_days: '30',
          });
          await stripe.plans.create({
              id: 'plan_o365-business-premium',
              currency: 'AUD',
              interval: 'month',
              product: 'office-365',
              amount: '2101',
              billing_scheme: 'per_unit',
              metadata: {
                  image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/office-365-australia-redlands-brisbane-gold-coast-sunshine-0.2x.png',
                  description_short: 'Best for businesses that need business email, Office applications, and other business services.',
              },
              nickname: 'Office 365 Business Premium',
              trial_period_days: '30',
          });
          await stripe.plans.create({
              id: 'plan_o365-business-premium-yr',
              currency: 'AUD',
              interval: 'year',
              product: 'office-365',
              amount: '1749',
              billing_scheme: 'per_unit',
              metadata: {
                  image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/office-365-australia-redlands-brisbane-gold-coast-sunshine-0.2x.png',
                  description_short: 'Best for businesses that need business email, Office applications, and other business services.',
              },
              nickname: 'Office 365 Business Premium Annual',
              trial_period_days: '30',
          });
          await stripe.plans.create({
              id: 'plan_o365-premium-support',
              currency: 'AUD',
              interval: 'month',
              product: 'business-support-plans',
              amount: '2490',
              billing_scheme: 'per_unit',
              metadata: {
                  image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/support-plan-0.2x.png',
                  description_short: '24/7 Priority support and ongoing management of your Office 365 environment. Customer site visits. Unlimited technical support.',
              },
              nickname: 'Office 365 Premium Support Plan',
              trial_period_days: '',
          });
          await stripe.plans.create({
              id: 'plan_o365-standard-support',
              currency: 'AUD',
              interval: 'month',
              product: 'business-support-plans',
              amount: '1490',
              billing_scheme: 'per_unit',
              metadata: {
                  image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/support-plan-0.2x.png',
                  description_short: 'Ongoing management of your Office 365 environment. Unlimited technical support.',
              },
              nickname: 'Office 365 Standard Support Plan',
              trial_period_days: '',
          });
          await stripe.plans.create({
              id: 'plan_website',
              currency: 'AUD',
              interval: 'month',
              product: 'websites',
              amount: '3900',
              billing_scheme: 'per_unit',
              metadata: {
                  image: 'https://www.itsolver.net/assets/images/products/support-on-demand.png',
                  description_short: 'Three-page mobile friendly website',
              },
              nickname: 'Website',
              trial_period_days: '30',
          });
          await stripe.plans.create({
              id: 'plan_website-premium',
              currency: 'AUD',
              interval: 'month',
              product: 'websites',
              amount: '7900',
              billing_scheme: 'per_unit',
              metadata: {
                  image: 'https://www.itsolver.net/assets/images/products/support-on-demand.png',
                  description_short: 'Six-page mobile friendly website',
              },
              nickname: 'Website Premium',
              trial_period_days: '30',
          });
          console.log('Setup complete.');
          resolve();
          this.running = false;
        } catch (err) {
          if (err.message === 'Product already exists.') {
            console.log('⚠️  Products have already been registered.');
            console.log('Delete them from your Dashboard to run this setup.');
          } else {
            console.log('⚠️  An error occurred.', err);
          }
        }
      });
    }
    return this.promise;
  },
};
