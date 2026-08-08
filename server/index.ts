import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { z } from "zod";
import { sendContactEmail } from "./email";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // Contact form API route
  const contactSchema = z.object({
    name: z.string().min(2),
    phone: z.string().min(8),
    eventType: z.string().min(1),
    date: z.string().optional(),
    pieces: z.string().optional(),
    message: z.string().optional(),
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      await sendContactEmail(validatedData);

      res.status(200).json({
        success: true,
        message: "Request received successfully.",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({
        success: false,
        message: "Unable to process the request. Invalid data.",
      });
    }
  });

  // Serve static files from dist/public
  // When running from dist/index.js, "public" is a sibling directory
  const staticPath = path.resolve(__dirname, "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
