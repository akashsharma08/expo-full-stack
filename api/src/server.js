import express from "express";
import path from "node:path";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { server } from "inngest/express";
import { functions, inngest } from "./config/inngest.js";
const app = express();
const __dirname = path.resolve();
app.use(express.json());
app.use(clerkMiddleware());
app.use("/api/inngest", server({ client: inngest, functions }));
app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Health Get api is UP working!!" });
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../admin/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../admin", "dist", "/index.html"));
  });
}

app.listen(ENV.PORT, () => {
  console.log("Server is running on port 3000✅");
  connectDB();
});
