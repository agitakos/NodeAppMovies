var express = require('express');
var app = express();

// All our Datas in a JavaScript object.

var films = {
	'maman-avion': {
		'titre': 'Maman j\'ai raté l\'avion',
		'chemin': 'maman-j-ai-rate-l-avion',
		'description': 'Un super film de 1990',
		},
	'conan-barbare': {
		'titre': 'Conan le barbare',
		'chemin': 'conan-le-barbare',
		'description': 'un film d\'heroic fantasy',
		},
	'cluedo': {
	'titre': 'Cluedo',
	'chemin': 'cluedo',
	'description': 'Un bon film des années 80 avec Tim Curry',
	}
};

// An Express.js router
// you can use with app object some functions/methods corresponding to HTTP request (.get(), .post()...)
// Take a look on callback function as second parameter of get() function, callback function takes HTTP request and responses as parameters

app.get('/page', function (req, res) {

	// My response object renders index.js page, with an anonymous object wich contains our object "films"	
	
	res.render('index.ejs', {films: films});

});

app.get('/page/:film', function (req, res) {

	var film = {}; // My "film" is a JS object    
    
	// We don't wanna use a "spaghetti code", we use a FOR loop !

	for (id in films) {
		if (req.params.film == films[id]['chemin']) {
		film = films[id];
		}
	}
	
// 	We don't use this spaghetti code even if it works (while we don't push any now movie (film).

//	if (req.params.film == 'maman-avion') {film = films['maman-avion']}
//	if (req.params.film == 'conan-barbare') {film = films['conan-barbare']}
//	if (req.params.film == 'cluedo') {film = films['cluedo']}

	res.render('page.ejs', film);

});

// let's redirect people if they don't find the road.

app.use(function(req, res, next){
	res.redirect('/page');
});

// Please download and install Node.js
// You have to connect on http://localhost:8080/
// Don't forget to use command "npm install" for dependencies from package.json
app.listen(8080);
