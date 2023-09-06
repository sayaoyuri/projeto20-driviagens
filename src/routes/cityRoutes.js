import { Router } from "express";
import validateSchema from "../middlewares/validateSchemaMiddleware.js";
import { citySchema } from "../schemas/citySchemas.js";
import { cityController } from "../controllers/cityControllers.js";

const cityRouter = Router();
cityRouter.post('/cities', validateSchema(citySchema), cityController.create);

export default cityRouter;