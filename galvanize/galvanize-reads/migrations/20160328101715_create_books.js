exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table){
    table.increments('id');
    table.string('title');
    table.string('genre');
    table.text('description');
    table.string('img');
    table.integer('author1').references('authors.id');
    table.integer('author2').references('authors.id');
    table.integer('author3').references('authors.id');
  })

  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
