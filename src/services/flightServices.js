import dayjs from "dayjs";
import { errors } from "../errors/errors.js";
import { flightRepository } from "../repositories/flightRepositories.js";
import { dateSchema } from "../schemas/flightSchemas.js";
import { utils } from "../utils/utils.js";

async function create (origin, destination, date) {
  if(origin === destination) throw errors.bodyConflict('Origem e Destino');

  date = utils.formatDate(date);

  await flightRepository.create(origin, destination, date);
};

async function read (origin, destination, smallerDate, biggerDate) {
  if(smallerDate && !biggerDate || biggerDate && !smallerDate) throw errors.invalidEntity('Período de data deve ter início e fim!');
  
  if(smallerDate && biggerDate) {
    const { error } = dateSchema.validate( { smallerDate, biggerDate }, { abortEarly: false } );
    if(error) throw errors.invalidEntity(error.details.map(e => e.message));
  
    smallerDate = utils.formatDate(smallerDate);
    biggerDate = utils.formatDate(biggerDate);

    const smallerDateUnix = dayjs(smallerDate).unix();
    const biggerDateUnix = dayjs(biggerDate).unix();

    if(smallerDateUnix > biggerDateUnix) throw errors.badRequest('Data inicial do período de data deve ser inferior a data final!');
  };

  const flights = await flightRepository.read(origin, destination, smallerDate, biggerDate);

  return flights.rows;
};

export const flightServices = { create, read };