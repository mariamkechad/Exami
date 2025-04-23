import express from "express";
import { authMiddleware } from "./utils/middlewares.js";
import signupHandler from "./utils/signup-handler.js";
import loginHandler from "./utils/login-handler.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json()); // middlewere to parse incomming json.
app.use(express.urlencoded({ extended: true }));

const port = 3000;

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
