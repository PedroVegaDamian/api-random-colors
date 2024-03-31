const express = require("express");
const cors = require("cors");
const app = express();

const { generateRandomColor } = require("./src/helpers");

app.use(cors());

app.get("/colors", (req, res) => {
  let colors = [];

  const { quantity = 5 } = req.query;

  const length = +quantity <= 20 ? +quantity : 20;

  colors = Array.from({ length }).map((_, i) => ({
    [`color${i + 1}`]: generateRandomColor(),
  }));

  return res.json(colors);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
