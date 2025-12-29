import "dotenv/config";
import { app } from "./app.js";
import { config } from "./config/index.js";

const server = app.listen(config.port, () => {
  console.log(`API server running on http://localhost:${config.port}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
