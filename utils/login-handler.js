import bcrypt from "bcrypt";
// import { check, validationResult } from "express-validator";
//
// const app = express();
//
// app.use(express.json());
//
// app.post(
//   "/api/login",
//   [check("email").isEmail(), check("password").isLength({ min: 6 })],
//   (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ erreurs: errors.array() });
//     }
//   },
// );

// app.post("/api/login", async (req, res) => {
//   console.log(req.body);
// });

const loginHandler = async (req, res) => {
  console.log("body: ", req.body);
  try {
    const { email, password } = req.body;

    console.log("email: ", email);
    console.log("password: ", password);

    const findUser = users.find((data) => email == data.email);
    if (!findUser) {
      res.status(400).send("Wrong email or password !");
    }
    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if (passwordMatch) {
      res.status(200).send("Logged in successfuly !");
    } else {
      res.status(500).send("Wrong email or password !");
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default loginHandler;
