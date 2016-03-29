exports.up = function(knex, Promise) {
  return knex.schema.createTable('books_authors', function(table){
    table.integer('book_id').references('books.id');
    table.integer('author_id').references('authors.id');
  })

  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books_authors');
};
