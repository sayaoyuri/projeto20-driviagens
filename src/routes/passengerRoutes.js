import { Router } from "express";
import validateSchema from "../middlewares/validateSchemaMiddleware.js";
import { passengerController } from "../controllers/passengerControllers.js";
import { passengerSchema } from "../schemas/passengerSchemas.js";

const passengerRouter = Router();
passengerRouter.post('/passengers', validateSchema(passengerSchema), passengerController.create);
passengerRouter.get('/passengers/travels', passengerController.readTravels);

export default passengerRouter;