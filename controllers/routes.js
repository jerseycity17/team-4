const router = require('express').Router();
const data = require('../models/data');

var search_results;

router.get('/', (req,res)=>{
	res.render('index');
	
});

router.post('/search', (req,res)=>{
	console.log('insidne the mother fucking funcitons')
	console.log('this is the query' , req.body.query);
	var search = req.body.query;

	data
		.find(search)
		.then(data =>{
			console.log('this is hte data coming back from the model',data);
			res.redirect('/results');
			search_results = data;
		})
		.catch(err=>{
			console.log("something went wrong",err);
		})
});

router.get('/results', (req,res)=>{
	console.log('i am in the router.get with results and thsi is the data', search_results);
	res.render('results', {search_results});
});


router.get('/library', (req,res)=>{
	res.render('library');
});

router.get('/consciousness', (req,res)=>{
	res.render('consciousness');
});

router.get('/affiliations', (req,res)=>{
	res.render('affiliations');
});

router.get('/scholorHub', (req,res)=>{
	res.render('scholorHub');
});

router.get('/signUp', (req,res)=>{
	res.render('signUp');
});

router.get('/supervisoryBoard', (req,res)=>{
	res.render('supervisoryBoard');
});
router.get('/contact', (req,res)=>{
	res.render('contact');
});




module.exports = router;