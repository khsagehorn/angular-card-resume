var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../db/queries');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Galvanize Reads' });
});

router.get('/books', function(req, res, next) {
  queries.getBooks()
  .then(function(books){
    queries.getAuthors().select()
    .then(function(authors){
      res.render('/books/index', { 
        title: 'Books',
        books: books, 
        authors: authors})
    });
  })
  .catch(function(err){
    res.status(500);
    res.render('error', {message: 'There was an error'})
  })
});

router.get('/authors', function(req, res, next) {
  queries.getAuthors().select()
  res.render('/authors/index', { title: 'Authors' });
});

router.get('/books/:id', function(req, res, next){


});

module.exports = router;
