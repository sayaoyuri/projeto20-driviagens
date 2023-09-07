import httpStatus from "http-status";
import { flightServices } from "../services/flightServices.js";

async function create (req, res) {
  const { origin, destination, date } = req.body;

  await flightServices.create(origin, destination, date);

  return res.sendStatus(httpStatus.CREATED);
};

export const flightController = { create };