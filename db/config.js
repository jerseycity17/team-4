const pgp = require('pg-promise')({}),
config = process.env.DATABASE_URL || 'postgres://Zahid@localhost:5432/data',
db = pgp(config);

module.exports = db;
