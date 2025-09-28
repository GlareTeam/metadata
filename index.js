import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// CORS: allow all origins
app.use(cors());

// Enable JSON parsing if needed
app.use(express.json());

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Example: explicitly serve token.json
app.get("/token.json", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "token.json"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
