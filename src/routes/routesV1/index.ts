import { Router } from "express";
import { authRoutes } from "./authRoutes";
import { eventRoutes } from "./eventRoutes";
import { userRoutes } from "./userRoutes";

const routesV1 = Router();

routesV1.use(authRoutes);
routesV1.use(userRoutes);
routesV1.use(eventRoutes);

export default routesV1;
