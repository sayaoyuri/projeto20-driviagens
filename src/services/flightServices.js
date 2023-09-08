import { errors } from "../errors/errors.js";
import { flightRepository } from "../repositories/flightRepositories.js";

async function create (origin, destination, date) {
  if(origin === destination) throw errors.bodyConflict('Origem e Destino');

  await flightRepository.create(origin, destination, date);
};

export const flightServices = { create };