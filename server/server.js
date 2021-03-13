// ==========
// REQUIRE
// ==========
const express = require("express");
const { connectDb } = require("./models/db");
const session = require("express-session");

// REQUIRE-AUTH
//---------------
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/Users");
// REQUIRE-ROUTERS
//---------------
const collectionRoutes = require("./routes/collections");
const userRoutes = require("./routes/users");
const cameraRoutes = require("./routes/cameras");

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

// Express Session
const sessionConfig = {
  secret: "secretCode",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // expires in 1 week
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig));

// Passport/Auth
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ==========
// ROUTES
// ==========
app.use("/api/collections", collectionRoutes);
app.use("/api/users", userRoutes);
app.use("/api/collections/:id/cameras", cameraRoutes);

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
