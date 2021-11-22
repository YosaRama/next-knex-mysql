import knex from "knex";
import config from "../../knexfile";

export function getKnex() {
  return knex(config);
}
