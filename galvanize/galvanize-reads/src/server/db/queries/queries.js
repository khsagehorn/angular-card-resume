var knex = require('../db/knex');

function Books(){
  return knex('books');
}

function Authors(){
  return knex('authors');
}

module.exports = {
  getBooks: function(){
    return Books().select();
  },

  getBook: function(){
    return Books().select().where('id', id);
  },

  getAuthors: function(){
    return Authors().select();
  },

  getAuthor: function(){
    return Authors().select().where('id', id);
  },

  getAuthorsForBook: function(){
    return Authors().select().where('book_id', id)
  }

};