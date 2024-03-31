const express = require("express");
const cors = require("cors");
const app = express();

const { generateRandomColor } = require("./src/helpers");

app.use(cors());

app.get("/colors", (req, res) => {
  let colors = [];

  const { quantity = 5 } = req.query;

  colors = Array.from({ length: Number(quantity) }).map((_, i) => ({
    [`color${i + 1}`]: generateRandomColor(),
  }));

  return res.json(colors);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
