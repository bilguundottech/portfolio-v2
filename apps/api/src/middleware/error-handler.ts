import type { ErrorRequestHandler } from "express";
import { config } from "../config/index.js";

interface HttpError extends Error {
  status?: number;
}

export const errorHandler: ErrorRequestHandler = (
  err: HttpError,
  _req,
  res,
  _next
) => {
  console.error("Error:", err);

  const status = err.status || 500;
  const message =
    config.env === "production" ? "Internal Server Error" : err.message;

  res.status(status).json({
    error: {
      message,
      ...(config.env !== "production" && { stack: err.stack }),
    },
  });
};
