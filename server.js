import express from "express";
import { authMiddleware } from "./utils/middlewares.js";
import db from "./db";
import { createNewUser } from "./utils/userOps";
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

app.post("/api/login", (req, res) => {
  // TODO: (douae) Login endpoint.
});

app.post("/api/signup", async (req, res) => {
  const data = req.body;
  const { email } = data;

  try {
    // check for user in db using unique properties.
    const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (rows.length > 0) {
      return res.status(409).send("User already exists");
    }

    const output = await createNewUser(data);

    res.cookie("token", output.accessToken, {
      httpOnly: true,
      secure: false, // NOTE: flip this to true in production (HTTPS).
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
    });

    return res.status(output.status).send({
      message: output.text,
    });
  } catch (err) {
    console.error("DB query error: ", err);
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});