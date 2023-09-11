import { db } from "../database/databaseConnection.js";

async function create (firstName, lastName) {
  return await db.query(`
    INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)
  `, [firstName, lastName]);
};

async function readTravels (name) {
  let query = `
    SELECT p.id, p."firstName" || ' ' || p."lastName" AS passenger, count(*) AS travels
      FROM passengers AS p 
        JOIN travels AS t 
        ON t."passengerId" = p.id`;
        
  const params = [];

  if(name) {
    params.push(name);

    query += ` WHERE p."firstName" ILIKE '%' || $${params.length} || '%' OR p."lastName" ILIKE '%' || $${params.length} || '%'`;
  };

  query += `
    GROUP BY p.id
    ORDER BY travels DESC;`;

  return await db.query(query, params);
};

export const passengerRepository = { create, readTravels };