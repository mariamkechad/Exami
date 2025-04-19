const express = require("express");

const app = express();
const port = 3000;

app.get("/api/", (req, res) => {
  console.log("Bonjour, Mars");
});

app.post("/api/login", (req, res) => {
  // TODO: (douae) Login endpoint.
});

app.post("/api/signup", (req, res) => {
  // TODO: (ali) Siginup endpoint.
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
