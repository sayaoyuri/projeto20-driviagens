import { errors } from "../errors/errors.js";
import { passengerRepository } from "../repositories/passengerRepositories.js";

async function create (firstName, lastName) {
  await passengerRepository.create(firstName, lastName);
};

async function readTravels (name) {
  const passengersTravels = await passengerRepository.readTravels(name);

  if(passengersTravels.rows.length > 10) throw errors.tooManyResults();

  return passengersTravels.rows;
};

export const passengerService = { create, readTravels };