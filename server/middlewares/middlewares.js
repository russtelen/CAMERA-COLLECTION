// =============================================
// REQUIRE
// =============================================
const jwt = require("jsonwebtoken");
const Collection = require("../models/Collections");

// Middleware to AUTHENTICATE user (collections)
module.exports.requireLogin = (req, res, next) => {
  const { authorization } = req.headers;

  //   Extract authorization from headeres
  const token = authorization ? authorization.split(" ")[1] : null;

  // Check if theres token in headers
  if (!token) {
    res.status(401).send({ error: "no token sent to server" });
    return;
  }

  // Decode token
  let decoded;
  const secret = process.env.ACCESS_TOKEN_SECRET || "my secret";

  try {
    decoded = jwt.verify(token, secret);
  } catch (error) {
    console.error(error);
    res.status(403).send({ error: "Invalid Token" });
    return;
  }

  req.user = decoded;
  next();
};

// Middleware to AUTHORIZE user (collections)
module.exports.isCollectionAuthor = async (req, res, next) => {
  const { id } = req.params;
  const { authorization } = req.headers;

  // Find collection
  const collection = await Collection.findById(id);

  //   Extract authorization from headeres
  const token = authorization ? authorization.split(" ")[1] : null;

  // Check if theres token in headers
  if (!token) {
    console.error("no token sent to server");
    res.status(401).send({ error: "no token sent to server" });
    return;
  }

  // Decode token
  let decodedUser;
  const secret = process.env.ACCESS_TOKEN_SECRET || "my secret";
  decodedUser = jwt.verify(token, secret);

  // Check if decoded token (user._id) === collection.user._id
  if (!collection.user._id.equals(decodedUser._id)) {
    res.send({ message: "You are not authorized to do that" });
    return;
  }

  next();
};
