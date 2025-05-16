/**
 * @typedef {Object} Beer
 * @property {number} id - Beer ID
 * @property {string} beer - Beer name
 * @property {number} price - Beer price
 * @property {number} brewery_id - ID of the brewery
 * @property {string} imageUrl - URL to beer image
 */

/**
 * @typedef {Object} Brewery
 * @property {number} id - Brewery ID
 * @property {string} name - Brewery name
 */

/**
 * @typedef {Object} User
 * @property {number} id - User ID
 * @property {string} name - User's full name
 * @property {string} email - User's email
 * @property {string} role - User's role (USER or ADMIN)
 */

/**
 * @typedef {Object} CartItem
 * @property {number} id - Cart item ID
 * @property {number} user_id - User ID
 * @property {number} beer_id - Beer ID
 * @property {number} quantity - Quantity of beers
 */

export {}; // This is a type definition file only, no actual exports
