import httpStatus from "http-status";
import { flightServices } from "../services/flightServices.js";
import validateSchema from "../middlewares/validateSchemaMiddleware.js";
import { dateSchema } from "../schemas/flightSchemas.js";

async function create (req, res) {
  const { origin, destination, date } = req.body;

  await flightServices.create(origin, destination, date);

  return res.sendStatus(httpStatus.CREATED);
};

async function read (req, res) {
  const { origin, destination, page } = req.query;
  const biggerDate = req.query['bigger-date'];
  const smallerDate = req.query['smaller-date'];

  const flights = await flightServices.read(origin, destination, smallerDate, biggerDate, page);
  
  return res.status(200).send(flights);
};

export const flightController = { create, read };