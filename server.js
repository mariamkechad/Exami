import express from "express";
import { authMiddleware } from "./utils/middlewares.js";
import db from "./db";
import signupHandler from "./utils/signup-handler.js";

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.use(express.json()); // middlewere to parse incomming json.

app.get("/api/", async (req, res) => {
  const cookies = req.cookies;

  console.log("Cookies: ", cookies);

  const result = await db.query("SELECT * FROM users");
  console.log(result.rows);

  res.json(result.rows);
});

// login endpoint
app.post("/api/login", authMiddleware, (req, res) => {
  // TODO: (douae) Login endpoint.
});

// signup endpoint
app.post("/api/signup", signupHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});