
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('username').notNullable()
    table.string('password').notNullable()
    table.string('city').defaultsTo('')
    table.string('state').defaultsTo('')
    table.integer('zip').defaultsTo(00000)
    table.string('email').defaultsTo('')
    table.boolean('hidden').defaultsTo(false)
    table.string('image').defaultsTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
