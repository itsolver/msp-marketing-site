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
      console.warn('⚠️  Setup already in progress.');
    } else {
      this.running = true;
      this.promise = new Promise(async resolve => {
        // Create a service products and plans assuming they don't already exist.
        try {
        // Automation
        await stripe.products.create({
            id: 'automation',
            type: 'service',
            name: 'Automation', 
            statement_descriptor: 'itsolver.net automate', 
            unit_label: 'account'
          });
        // Business Support Plans
          await stripe.products.create({
            id: 'business-support-plans',
            type: 'service',
            name: 'Business Support Plans', 
            statement_descriptor: 'itsolver.net business', 
            unit_label: 'user'
          });
        // Domain Names
          await stripe.products.create({
            id: 'domain-names',
            type: 'service',
            name: 'Domain Names', 
            statement_descriptor: 'itsolver.net domain', 
            unit_label: 'domain name'
          });
        // G Suite
          await stripe.products.create({
            id: 'g-suite',
            type: 'service',
            name: 'G Suite', 
            statement_descriptor: 'itsolver.net gsuite', 
            unit_label: 'user'
          });
        // Home Support Plans
          await stripe.products.create({
            id: 'home-support-plans',
            type: 'service',
            name: 'Home Support Plans', 
            statement_descriptor: 'itsolver.net home', 
            unit_label: 'user'
          });
        // Office 365
          await stripe.products.create({
            id: 'office-365',
            type: 'service',
            name: 'Office 365', 
            statement_descriptor: 'itsolver.net office365', 
            unit_label: 'user'
          });
        // Websites
          await stripe.products.create({
            id: 'websites',
            type: 'service',
            name: 'Websites', 
            statement_descriptor: 'itsolver.net websites', 
            unit_label: 'website'
          });

        // Plans
        await stripe.plans.create({
            id: 'plan_automation-pro',
            currency: 'AUD',
            interval: 'month',
            product: 'automation',
            amount: '14900',
            billing_scheme: 'per_unit',
            metadata: {
                image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/maintenance-home-plan-0.2x.png',
                description_short: 'Automations to move and manage data between apps without any work on your part.',
                'sales account': '225'
            },
            nickname: 'Automation Professional'
        });
        await stripe.plans.create({
            id: 'plan_automation-pro-plus',
            currency: 'AUD',
            interval: 'month',
            product: 'automation',
            amount: '25600',
            billing_scheme: 'per_unit',
            metadata: {
                image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/maintenance-home-plan-0.2x.png',
                description_short: 'Automations to move and manage data between apps without any work on your part.',
                'sales account': '225'
            },
            nickname: 'Automation Professional Plus'
        });
        await stripe.plans.create({
            id: 'plan_automation-starter',
            currency: 'AUD',
            interval: 'month',
            product: 'automation',
            amount: '10800',
            billing_scheme: 'per_unit',
            metadata: {
                image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/maintenance-home-plan-0.2x.png',
                description_short: 'Automations: 20 at a time. Tasks per month: 1000. Support requests: 1 at a time. Change management.',
                'sales account': '225'
            },
            nickname: 'Automation Starter'
        });
        await stripe.plans.create({
            id: 'plan_automation-teams',
            currency: 'AUD',
            interval: 'month',
            product: 'automation',
            amount: '44000',
            billing_scheme: 'per_unit',
            metadata: {
                image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/maintenance-home-plan-0.2x.png',
                description_short: 'Automations to move and manage data between apps without any work on your part.',
                'sales account': '225'
            },
            nickname: 'Automation Teams'
        });
        await stripe.plans.create({
            id: 'plan_domain-name',
            currency: 'AUD',
            interval: 'year',
            product: 'domain',
            amount: '4000',
            billing_scheme: 'per_unit',
            metadata: {
                image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/maintenance-home-plan-0.2x.png',
                description_short: 'Buy a domain and create your pro web presence.',
                'sales account': '240'
            },
            nickname: 'Domain Name'
        });
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
                'sales account': '250'
            },
            nickname: 'G Suite Basic',
            trial_period_days: '14'
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
                'sales account': '250'
            },
            nickname: 'G Suite Basic Annual',
            trial_period_days: '14'
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
                'sales account': '250'
            },
            nickname: 'G Suite Business',
            trial_period_days: '14'
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
                'sales account': '250'
            },
            nickname: 'G Suite Business Annual',
            trial_period_days: '14'
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
                'sales account': '250'
            },
            nickname: 'G Suite Premium Support Plan'
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
                'sales account': '250'
            },
            nickname: 'G Suite Standard Support Plan'
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
                'sales account': '250'
            },
            nickname: 'Maintenance for Business'
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
                'sales account': '250'
            },
            nickname: 'Maintenance for Home 3 Devices.'
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
                'sales account': '250'
            },
            nickname: 'Office 365 Business'
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
                'sales account': '250'
            },
            nickname: 'Office 365 Business Premium'
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
                'sales account': '250'
            },
            nickname: 'Office 365 Business Premium Annual'
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
                'sales account': '250'
            },
            nickname: 'Office 365 Business Annual'
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
                'sales account': '250'
            },
            nickname: 'Office 365 Premium Support Plan'
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
                'sales account': '250'
            },
            nickname: 'Office 365 Standard Support Plan'
        });
        await stripe.plans.create({
            id: 'plan_personal-assistant-home-1',
            currency: 'AUD',
            interval: 'month',
            product: 'home-support-plans',
            amount: '1499',
            billing_scheme: 'per_unit',
            metadata: {
                image: 'https://fir-subscriptions-1ee7d.firebaseapp.com/assets/images/products/maintenance-home-plan-0.2x.png',
                description_short: 'Protect yourself from the internet bad guys with direct access to a tech expert and preventative maintenance for 1 device.',
                'sales account': '250'
            },
            nickname: 'Personal tech assistant'
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
                'sales account': '226'
            },
            nickname: 'Website',
            trial_period_days: '30'
        });
        await stripe.plans.create({
            id: 'plan_website-hosting',
            currency: 'AUD',
            interval: 'month',
            product: 'websites',
            amount: '16800',
            billing_scheme: 'per_unit',
            metadata: {
                image: 'https://www.itsolver.net/assets/images/products/support-on-demand.png',
                description_short: 'Web Hosting by IT Solver',
                'sales account': '226'
            },
            nickname: 'Website',
            trial_period_days: '30'
        });
        await stripe.plans.create({
            id: 'plan_website-premium',
            currency: 'AUD',
            interval: 'month',
            product: 'websites',
            amount: '9900',
            billing_scheme: 'per_unit',
            metadata: {
                image: 'https://www.itsolver.net/assets/images/products/support-on-demand.png',
                description_short: 'Six-page mobile friendly website',
                'sales account': '226'
            },
            nickname: 'Website Premium',
            trial_period_days: '30'
        });
        console.log('Setup complete.');
        resolve();
        this.running = false;
        } catch (err) {
          if (err.message === 'Product already exists.') {
            console.warn('⚠️  Products have already been registered.');
            console.warn('⚠️  Updating product');
          } else {
            console.error('🛑  An error occurred.', err);
          }
        }
      });
    }
    return this.promise;
  },
};
