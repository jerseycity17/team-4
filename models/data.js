const db = require('../db/config');

const find = (something) => {
  return db.any('SELECT * FROM data WHERE Abstract_Note = $1', [something]);
}


module.exports = { find };
