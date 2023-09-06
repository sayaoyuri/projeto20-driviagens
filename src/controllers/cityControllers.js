import httpStatus from "http-status";
import { cityService } from "../services/cityServices.js";

async function create (req, res) {
  const { name } = req.body;

  await cityService.create(name);

  res.sendStatus(httpStatus.CREATED);
};

export const cityController = { create };