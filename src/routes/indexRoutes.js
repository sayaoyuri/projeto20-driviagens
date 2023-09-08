import { Router } from "express";
import passengerRouter from "./passengerRoutes.js";
import cityRouter from "./cityRoutes.js";
import flightRouter from "./flightRoutes.js";
import travelRouter from "./travelRoutes.js";

const router = Router();
router.use(passengerRouter);
router.use(cityRouter);
router.use(flightRouter);
router.use(travelRouter);

export default router;