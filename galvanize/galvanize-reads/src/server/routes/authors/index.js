var express = require('express');
var router = express.Router();
var knex = require('../../db/knex');
var queries = require('../../db/queries');

router.get('/authors', function(req, res, next) {
  queries.getAuthors().select()
  .then(function(authors){
    res.render('/authors/index', { title: 'Authors' });
  })
  .catch(function(err){
    res.status(500);
    res.render('error', {message: 'There was an error'})
  })
});