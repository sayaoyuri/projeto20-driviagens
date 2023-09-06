import { db } from "../database/databaseConnection.js";

async function create (name) {
  return await db.query(`INSERT INTO cities (name) VALUES ($1)`, [name]);
};

export const cityRepository = { create };