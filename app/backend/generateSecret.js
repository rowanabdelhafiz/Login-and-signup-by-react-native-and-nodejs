const crypto = require('crypto');

// Generate a 64-byte secret key (128 characters in hexadecimal)
const secretKey = crypto.randomBytes(64).toString('hex');

console.log(secretKey);
