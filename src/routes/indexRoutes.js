import { Router } from "express";
import passengerRouter from "./passengerRoutes.js";
import cityRouter from "./cityRoutes.js";

const router = Router();
router.use(passengerRouter);
router.use(cityRouter);

export default router;