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
                /**
                * Each of our plans (Starter, Growth, and Enterprise) have both a monthly
                * fixed price (e.g. $10, $20, and $30) and a metered price based on the
                * number of requests. Each plan includes a number of free requests.
                * Additional requests cost $0.01 each.
                *
                * To model this, we're creating two plans for each price point:
                *  - A monthly plan with the base price (e.g. $10)
                *  - A metered plan with two tiers using graduated pricing.
                *    e.g. the Starter plan's first tier is free up to 10,000 requests,
                *    and the second tier costs $0.01 for each request.
                *
                * Each customer will be subscribed to a pair of these plans. In total,
                * we'll have six plans.
                */
                let plans = [
                    {
                        name: 'Starter',
                        nickname: 'starter',
                        type: 'monthly',
                        stripeId: null,
                        amount: 1000,
                    },
                    {
                        name: 'Starter monthly requests',
                        nickname: 'starter_requests',
                        type: 'metered',
                        stripeId: null,
                        amount: 1,
                        included: 10000,
                    },
                    {
                        name: 'Growth',
                        nickname: 'growth',
                        type: 'monthly',
                        stripeId: null,
                        amount: 2000,
                    },
                    {
                        name: 'Growth monthly requests',
                        nickname: 'growth_requests',
                        type: 'metered',
                        stripeId: null,
                        amount: 1,
                        included: 50000,
                    },
                    {
                        name: 'Enterprise',
                        nickname: 'enterprise',
                        type: 'monthly',
                        stripeId: null,
                        amount: 3000,
                    },
                    {
                        name: 'Enterprise monthly requests',
                        nickname: 'enterprise_requests',
                        type: 'metered',
                        stripeId: null,
                        amount: 1,
                        included: 150000,
                    },
                ];
                
                // Fetch plans from Stripe
                let stripePlans;
                try {
                    stripePlans = await stripe.plans.list();
                } catch (e) {
                    throw new Error(`⚡️  Error communicating with Stripe: ${e}`);
                }
                
                // Check if all our plans have been created on this Stripe account
                let missingPlans = [];
                for (let plan of plans) {
                    let match = stripePlans.data.find(
                        stripePlan => stripePlan.nickname === plan.nickname
                        );
                        if (match) {
                            plan.stripeId = match.id;
                        } else {
                            missingPlans.push(plan);
                        }
                    }
                    
                    if (missingPlans.length === 0) {
                        console.log('⚡️  Plans found on Stripe.');
                    } else {
                        console.log(
                            `${missingPlans.length} plans missing from this Stripe account.`
                            );
                            console.log('⚡️  Creating missing plans...');
                        }
                        
                        // Create missing plans on this Stripe account
                        try {
                            for (let plan of missingPlans) {
                                let createdPlan;
                                // Create a monthly plan
                                if (plan.type === 'monthly') {
                                    createdPlan = await stripe.plans.create({
                                        interval: 'month',
                                        amount: plan.amount,
                                        currency: 'usd',
                                        nickname: plan.nickname,
                                        product: {
                                            name: plan.name,
                                        },
                                    });
                                } else if (plan.type === 'metered') {
                                    // Create a metered plan
                                    createdPlan = await stripe.plans.create({
                                        interval: 'month',
                                        currency: 'usd',
                                        nickname: plan.nickname,
                                        product: {
                                            name: plan.name,
                                        },
                                        usage_type: 'metered',
                                        // Two tiers: each plan features an included number of requests for
                                        // free, extra requests are $0.01.
                                        billing_scheme: 'tiered',
                                        // We're using graduated pricing, which lets us bill a different
                                        // rate at each tier (and gradually increase the price for each
                                        // request as volume grows.)
                                        tiers_mode: 'graduated',
                                        tiers: [
                                            {
                                                up_to: plan.included,
                                                amount: 0,
                                            },
                                            {
                                                up_to: 'inf',
                                                amount: plan.amount,
                                            },
                                        ],
                                    });
                                }
                                plan.stripeId = createdPlan.id;
                                console.log(`Created ${plan.name} plan on Stripe.`);
                            }
                        } catch (e) {
                            if (
                                e.message === 'Plan already exists.' ||
                                e.message === 'Product already exists.'
                                ) {
                                    throw new Error(
                                        '⚠️  Plans and Products have already been registered.\n' +
                                        'Delete them from your Dashboard and run this script again.'
                                        );
                                    } else {
                                        throw new Error(e);
                                    }
                                }
                            });
                        }
                    }
                d}