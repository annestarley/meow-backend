
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cats', table => {
    table.increments()
    table.string('name').notNullable()
    table.integer('age').defaultsTo(0)
    table.string('gender').defaultsTo('')
    table.string('fixed').defaultsTo('')
    table.string('bio').defaultsTo('')
    table.string('image1').defaultsTo('')
    table.string('image2').defaultsTo('')
    table.string('image3').defaultsTo('')
    table.string('image4').defaultsTo('')
    table.integer('userid').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cats')
};
