import { cityRepository } from "../repositories/cityRepositories.js";

async function create (name) {
  await cityRepository.create(name);
};

export const cityService = { create };