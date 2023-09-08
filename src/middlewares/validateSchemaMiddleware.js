import { errors } from "../errors/errors.js";

export default function validateSchema (schema) {
  return (req, res, next) => {
    const { error } = schema.validate( req.body, { abortEarly: false } );

    if(error) throw errors.invalidEntity(error.details.map(e => e.message));

    next();
  };
};