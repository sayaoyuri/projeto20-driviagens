import { Router } from "express";
import validateSchema from "../middlewares/validateSchemaMiddleware.js";
import { travelSchema } from "../schemas/travelSchemas.js";
import { travelController } from "../controllers/travelControllers.js";

const travelRouter = Router();
travelRouter.post('/travels', validateSchema(travelSchema), travelController.create);

export default travelRouter;