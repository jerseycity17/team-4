const db = require('../db/config');

const find = (something) => {
	console.log('HELLO');
	 var string = 'SELECT * FROM data WHERE Abstract_Note LIKE \'%' + something + '%\'';
 var temp = db.any(string);
 console.log('this is the temp', string);
 return temp;

}


module.exports = { find };

