import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.config.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

dotenv.config({ path: ".env.development" });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Security & Utility Middlewares
app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:5000", "https://aura-book-client.netlify.app"],
    credentials: true,
  }),
); app.use(cookieParser())
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Static Assets
app.use("/static", express.static(path.join(__dirname, "../public")));

// Health Check & Root Routes
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "OK", uptime: process.uptime() });
});

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "ES6 TypeScript Express Server running smoothly" });
});

// API Routes
app.use("/api/v1/auth", authRoutes);

// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Unhandled Error:", err.stack);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === "production" ? "Internal Server Error" : err.message,
  });
});

// Start Server after Database Connection
connectDB().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`[${process.env.NODE_ENV || "development"}] Server running on http://localhost:${PORT}`);
  });

  process.on("SIGTERM", () => {
    console.log("SIGTERM received. Shutting down gracefully...");
    server.close(() => {
      console.log("Process terminated.");
    });
  });
});
