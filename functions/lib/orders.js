/**
 * orders.js
 * Stripe Payments Demo. Created by Romain Huet (@romainhuet).
 *
 * Simple library to store and interact with orders and products.
 * These methods are using the Stripe Orders API, but we tried to abstract them
 * from the main code if you'd like to use your own order management system instead.
 */
'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const config = require('./config');
const stripe = require('stripe')(config.stripe.secretKey);
stripe.setApiVersion(config.stripe.apiVersion);
// Create an order.
const createOrder = (currency, items, email, shipping) => __awaiter(this, void 0, void 0, function* () {
    return yield stripe.orders.create({
        currency,
        items,
        email,
        shipping,
        metadata: {
            status: 'created',
        },
    });
});
// Retrieve an order by ID.
const retrieveOrder = (orderId) => __awaiter(this, void 0, void 0, function* () {
    return yield stripe.orders.retrieve(orderId);
});
// Update an order.
const updateOrder = (orderId, properties) => __awaiter(this, void 0, void 0, function* () {
    return yield stripe.orders.update(orderId, properties);
});
// List all products.
const listProducts = () => __awaiter(this, void 0, void 0, function* () {
    return yield stripe.products.list({ limit: 1 });
});
// Retrieve a product by ID.
const retrieveProduct = (productId) => __awaiter(this, void 0, void 0, function* () {
    return yield stripe.products.retrieve(productId);
});
// Validate that products exist.
const checkProducts = productList => {
    const validProducts = ['support-on-demand'];
    return productList.data.reduce((accumulator, currentValue) => {
        return (accumulator &&
            productList.data.length === 1 &&
            validProducts.includes(currentValue.id));
    }, !!productList.data.length);
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
//# sourceMappingURL=orders.js.map