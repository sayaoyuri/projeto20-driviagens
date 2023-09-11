import { Router } from "express";
import validateSchema from "../middlewares/validateSchemaMiddleware.js";
import { flightSchema } from "../schemas/flightSchemas.js";
import { flightController } from "../controllers/flightControllers.js";

const flightRouter = Router();
flightRouter.post('/flights', validateSchema(flightSchema), flightController.create);
flightRouter.get('/flights', flightController.read);

export default flightRouter;