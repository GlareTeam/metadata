import express from "express";
import path from "path";

const app = express();

// Enable CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all
  next();
});

// Serve static files from "public" folder
app.use(express.static(path.join(process.cwd(), "public")));

// token.json route
app.get("/token.json", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public/token.json"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
