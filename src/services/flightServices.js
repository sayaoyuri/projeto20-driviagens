import { flightRepository } from "../repositories/flightRepositories.js";

async function create (origin, destination, date) {
  await flightRepository.create(origin, destination, date);
};

export const flightServices = { create };