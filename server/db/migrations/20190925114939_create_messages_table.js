exports.up = function(knex) {
  return knex.schema.createTable("messages", messagesTable => {
    messagesTable
      .increments("message_id")
      .primary()
      .notNullable();
    messagesTable.text("body").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("messages");
};
