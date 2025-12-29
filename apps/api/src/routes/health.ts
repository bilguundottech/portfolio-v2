import { Router, type IRouter } from "express";
import { db } from "../db/index.js";
import { sql } from "drizzle-orm";

export const healthRouter: IRouter = Router();

healthRouter.get("/", async (_req, res) => {
  try {
    // Test database connection
    await db.execute(sql`SELECT 1`);

    res.json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      database: "connected",
    });
  } catch {
    res.status(503).json({
      status: "unhealthy",
      timestamp: new Date().toISOString(),
      database: "disconnected",
    });
  }
});
