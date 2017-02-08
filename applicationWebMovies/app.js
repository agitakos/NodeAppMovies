var express = require('express');
var app = express();

// DATAS

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

// ROUTES

app.get('/page', function (req, res) {

	res.render('index.ejs', {films: films});

});

app.get('/page/:film', function (req, res) {

var film = {}; // On déclare le type de l'objet film    
    
for (id in films) {
	if (req.params.film == films[id]['chemin']) {
		film = films[id];
	}
}

//	if (req.params.film == 'maman-avion') {film = films['maman-avion']}
//	if (req.params.film == 'conan-barbare') {film = films['conan-barbare']}
//	if (req.params.film == 'cluedo') {film = films['cluedo']}

	res.render('page.ejs', film);

});

app.use(function(req, res, next){
	res.redirect('/page');
});

app.listen(8080);