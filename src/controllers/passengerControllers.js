import httpStatus from "http-status";
import { passengerService } from "../services/passengerServices.js";

async function create (req, res) {
  const { firstName, lastName } = req.body;

  await passengerService.create(firstName, lastName);

  res.sendStatus(httpStatus.CREATED);
};

export const passengerController = { create };