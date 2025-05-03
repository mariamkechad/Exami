import express from "express";
import { authMiddleware } from "./utils/middlewares.js";
import signupHandler from "./utils/signup-handler.js";
import loginHandler from "./utils/login-handler.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// cause we are using ES module type:
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const port = 3000;

const app = express();
app.use(cookieParser());
app.use(express.json()); // middlewere to parse incomming json.
app.use(express.urlencoded({ extended: true }));

// serve static files (css, js)
app.use(express.static(path.join(__dirname, "frontend")));

// when user request "/", i serve the index html file.
app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.get("/api/", async (req, res) => {
  const cookies = req.cookies;
  console.log("Cookies: ", cookies);
  const result = await db.query("SELECT * FROM users");
  console.log(result.rows);
  res.json(result.rows);
});

// login endpoint
app.post("/api/login", authMiddleware, loginHandler);

// signup endpoint
app.post("/api/signup", signupHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
