module.exports = {
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "db_knex_testing",
  },
  migrations: {
    directory: "./apps/database/migration",
  },
  seeds: {
    directory: "./apps/database/seeds",
  },
};
