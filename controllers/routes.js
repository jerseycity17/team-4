const router = require('express').Router();
const data = require('../models/data');

router.get('/', (req,res)=>{
	res.render('index');
	data
		.find("0")
		.then(data =>{
			console.log(data);
		})
		.catch(err=>{
			console.log("something went wrong",err);
		})
});


router.get('/library', (req,res)=>{
	console.log('insidne the mother fucking funcitons')
	res.render('library');
});

router.get('/consciousness', (req,res)=>{
	console.log('insidne the mother fucking funcitons')
	res.render('consciousness');
});

router.get('/affiliations', (req,res)=>{
	console.log('insidne the mother fucking funcitons')
	res.render('affiliations');
});

router.get('/scholorHub', (req,res)=>{
	console.log('insidne the mother fucking funcitons')
	res.render('scholorHub');
});

router.get('/signUp', (req,res)=>{
	console.log('insidne the mother fucking funcitons')
	res.render('signUp');
});

router.get('/supervisoryBoard', (req,res)=>{
	console.log('insidne the mother fucking funcitons')
	res.render('supervisoryBoard');
});




module.exports = router;