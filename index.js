const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

router.get("/hello", (req, res) => {
  res.send("hello world..");
});

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
