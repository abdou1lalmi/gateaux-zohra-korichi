import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { z } from "zod";
import { sendContactEmail } from "./email";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(8).max(30),
  eventType: z.string().trim().min(1).max(100),
  date: z.string().trim().max(30).optional(),
  pieces: z.string().trim().max(30).optional(),
  message: z.string().trim().max(2000).optional(),
});

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.disable("x-powered-by");
  app.use((_req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    next();
  });
  app.use(express.json({ limit: "20kb" }));

  app.post("/api/contact", async (req, res) => {
    const result = contactSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        success: false,
        message: "Unable to process the request. Invalid data.",
      });
      return;
    }

    try {
      await sendContactEmail(result.data);
      res.status(200).json({
        success: true,
        message: "Request received successfully.",
      });
    } catch (error) {
      console.error("Contact form delivery failed:", error instanceof Error ? error.message : "unknown error");
      res.status(500).json({
        success: false,
        message: "Unable to process the request right now.",
      });
    }
  });

  const staticPath = path.resolve(__dirname, "public");
  app.use(express.static(staticPath, { maxAge: process.env.NODE_ENV === "production" ? "1d" : 0 }));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = Number(process.env.PORT) || 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(error => {
  console.error("Server startup failed:", error);
  process.exitCode = 1;
});
