// Hashing
const { SHA3 } = require('sha3')

const hash = string => new SHA3( 512 ).update( string ).digest( 'hex' )

module.exports = hash