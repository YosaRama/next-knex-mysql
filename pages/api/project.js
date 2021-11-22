import { getKnex } from "../../apps/database/index";

export default async function handler(req, res) {
  const knex = getKnex();
  const project = await knex("project");
  res.status(200).json(project);
}
