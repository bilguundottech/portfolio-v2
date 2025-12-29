import { Router, type IRouter } from "express";
import { healthRouter } from "./health.js";

export const routes: IRouter = Router();

routes.use("/health", healthRouter);
