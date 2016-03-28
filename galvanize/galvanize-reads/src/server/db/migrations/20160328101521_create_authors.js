exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function(table){
    table.increments('id');
    table.string('firstName');
    table.string('lastName');
    table.string('bio');
    table.string('img');
    table.integer('book_id').references('books.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
