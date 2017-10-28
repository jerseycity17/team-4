const router = require('express').Router();

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