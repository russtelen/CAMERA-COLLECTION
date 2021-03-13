// =============================================
// REQUIRE
// =============================================
const jwt = require("jsonwebtoken");

// Create a secret key for signing the token
// Later on we can store this in the server so it doesn't exist in the code
// 'my secret' is just for development
const secret = process.env.ACCESS_TOKEN_SECRET || "my secret";

module.exports.generateToken = (data) => {
  const token = jwt.sign(data, secret, {
    expiresIn: "100000000000000000000000s",
  });
  return token;
};
