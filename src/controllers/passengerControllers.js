import httpStatus from "http-status";
import { passengerService } from "../services/passengerServices.js";

async function create (req, res) {
  const { firstName, lastName } = req.body;

  await passengerService.create(firstName, lastName);

  res.sendStatus(httpStatus.CREATED);
};

async function readTravels (req, res) {
  const { name, page } = req.query;

  const passengerTravels = await passengerService.readTravels(name, page);

  return res.status(200).send(passengerTravels);
};

export const passengerController = { create, readTravels };