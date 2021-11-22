exports.up = async function (knex) {
  await knex.schema.createTable("project", (table) => {
    table.bigIncrements("id");
    table.string("name").notNullable();
  });
};

exports.down = async function (knex) {
  await knex.raw("DROP TABLE todos CASCADE");
};
