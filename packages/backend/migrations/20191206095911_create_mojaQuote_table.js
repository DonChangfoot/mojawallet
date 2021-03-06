
exports.up = function(knex) {
  return knex.schema
    .createTable('mojaQuote', function (table) {
       table.increments('id').primary()
       table.uuid('quoteId')
       table.uuid('transactionId')
       table.text('serializedQuote')
    })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists("mojaQuote")
};
