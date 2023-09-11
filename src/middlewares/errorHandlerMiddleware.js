import httpStatus from "http-status";

export default function errorHandler (error, req, res, next) {
  console.log(error);

  if(error.constraint) { // addresses db uk & fk errors
    switch (error.constraint) {
      case 'cities_name_key':
        return res.status(httpStatus.CONFLICT).send('Cidade já existe!');
      case 'flights_origin_fkey':
        return res.status(httpStatus.NOT_FOUND).send('Cidade origem inválida!');
      case 'flights_destination_fkey':
        return res.status(httpStatus.NOT_FOUND).send('Cidade destino inválida!');
      case 'travels_passengerId_fkey':
        return res.status(httpStatus.NOT_FOUND).send('Passageiro inválido!');
      case 'travels_flightId_fkey':
        return res.status(httpStatus.NOT_FOUND).send('Voo inválido!');
      default:
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Sorry, something went wrong!');
    };
  };

  switch (error.type) {
    case 'invalid_entity':
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    case 'conflict':
      return res.status(httpStatus.CONFLICT).send(error.message);
    case 'not_found':
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    case 'bad_request':
      return res.status(httpStatus.BAD_REQUEST).send(error.message);
    case 'too_many_results':
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    default:
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Sorry, something went wrong!');
  };
};