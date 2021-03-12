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

//==============================================
// Error Handlers
// =============================================
app.all("*", (req, res, next) => {
  next(new ExpressError("Page not found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) {
    err.message = "Oh no, Something went wrong";
  }
  res.status(statusCode).send({ error: err.message, status: statusCode });
});

// ==========
// LISTEN
// ==========
const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
