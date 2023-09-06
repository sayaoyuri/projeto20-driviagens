import { passengerRepository } from "../repositories/passengerRepositories.js";

async function create (firstName, lastName) {
  await passengerRepository.create(firstName, lastName);
};

export const passengerService = { create };