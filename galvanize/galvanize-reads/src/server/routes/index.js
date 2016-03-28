var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../db/queries');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Galvanize Reads' });
});

router.get('/books', function(req, res, next) {
  queries.getBooks().then(function(books){
    queries.getAuthors().select().where('')
    res.render('/books/index', { title: 'Books', {books: data} });

  })

});

router.get('/authors', function(req, res, next) {
  res.render('/authors/index', { title: 'Authors' });
});

module.exports = router;
