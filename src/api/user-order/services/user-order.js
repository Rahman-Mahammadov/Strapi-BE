'use strict';

/**
 * user-order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-order.user-order');
