import { errors } from "../errors/errors.js";
import { passengerRepository } from "../repositories/passengerRepositories.js";

async function create (firstName, lastName) {
  await passengerRepository.create(firstName, lastName);
};

async function readTravels (name, page = 1, pageSize = 10) {
  const passengersTravels = await passengerRepository.readTravels(name, page, pageSize);

  if(passengersTravels.rows.length > pageSize) throw errors.tooManyResults();

  return passengersTravels.rows;
};

export const passengerService = { create, readTravels };