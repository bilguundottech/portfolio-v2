import express, { type Express } from "express";
import { routes } from "./routes/index.js";
import { errorHandler } from "./middleware/error-handler.js";
import { requestLogger } from "./middleware/request-logger.js";

export const app: Express = express();

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middleware
app.use(requestLogger);

// Routes
app.use("/api", routes);

// Error handling (must be last)
app.use(errorHandler);
