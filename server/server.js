// ==========
// REQUIRE
// ==========
const express = require("express");
const { connectDb } = require("./models/db");

// ==========
// CONFIG
// ==========
// init express
const app = express();

// Parsing Middlewares
app.use(express.urlencoded({ extended: true })); // application/x-www-form-urlencoded
app.use(express.json()); // JSON

// Connect to db
connectDb();

// ==========
// ROUTES
// ==========
app.get("/", (req, res) => {
  res.send({ message: "works !" });
});

// ==========
// LISTEN
// ==========
const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
