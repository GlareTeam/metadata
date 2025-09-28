import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Enable JSON parsing if needed
app.use(express.json());

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS: allow all origins **before static files**
app.use(cors());

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Explicit route for token.json (optional, but good for CORS safety)
app.get("/token.json", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // make sure CORS is set
  res.sendFile(path.join(__dirname, "public", "token.json"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
