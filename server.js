const express = require("express");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/api/signup", (req, res) => {
  // TODO: (ali) Siginup endpoint.
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});