import { travelRepository } from "../repositories/travelRepositories.js";

async function create (passengerId, flightId) {
  await travelRepository.create(passengerId, flightId);
};

export const travelService = { create };