import Joi from "joi";

export const travelSchema = Joi.object({
  passengerId: Joi.number().integer().min(1).required(),
  flightId: Joi.number().integer().min(1).required()
});