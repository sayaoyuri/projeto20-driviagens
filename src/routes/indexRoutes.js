import { Router } from "express";
import passengerRouter from "./passengerRoutes.js";
import cityRouter from "./cityRoutes.js";
import flightRouter from "./flightRoutes.js";

const router = Router();
router.use(passengerRouter);
router.use(cityRouter);
router.use(flightRouter);

export default router;