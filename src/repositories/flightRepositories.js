import { db } from "../database/databaseConnection.js";

async function create (origin, destination, date) {
  return await db.query(`
    INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);
  `, [origin, destination, date]);
};

async function read (origin, destination, smallerDate, biggerDate) {
  let query = `
    SELECT f.id, c1.name AS origin, c2.name AS destination, TO_CHAR(f.date, 'DD-MM-YYYY') AS date
      FROM flights f
      JOIN cities AS c1
        ON c1.id = f.origin
      JOIN cities AS c2 
        ON c2.id = f.destination
  `;
  const params = [];

  if(origin || destination || smallerDate && biggerDate) query += ' WHERE';

  if(origin) {
    params.push(origin);
    query += ` c1.name ILIKE '%' || $${params.length} || '%'`;
  };

  if(destination) {
    if(params.length > 0) query += ' AND'

    params.push(destination);
    query += ` c2.name ILIKE '%' || $${params.length} || '%'`;
  };

  if(smallerDate && biggerDate) {
    if(params.length > 0) query += ' AND'
    params.push(smallerDate);

    query += ` f.date >= $${params.length}`;

    params.push(biggerDate);
    query += ` AND f.date <= $${params.length}`;
  };

  query += ' ORDER BY f.date DESC;';

  return await db.query(query, params);
};

export const flightRepository = { create, read };