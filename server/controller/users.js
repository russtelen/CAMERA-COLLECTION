// =============================================
// REQUIRE
// =============================================
const User = require("../models/Users");
const catchAsync = require("../utils/catchAsync");
const { generateToken } = require("../utils/jwt");
// =============================================
// Logic
// =============================================
// @ POST
// @ Create (Register) user
module.exports.registerUser = catchAsync(async (req, res) => {
  // get body from form
  const { email, username, password } = req.body;
  // create new User (only username and email)
  const user = await new User({ username, email });
  // "register" user using .register()
  const registeredUser = await User.register(user, password);

  // login user
  req.login(registeredUser, (err) => {
    if (err) return next(err);

    const user = req.user;

    if (user) {
      // generate token
      const accessToken = generateToken({
        _id: user._id,
        email: user.email,
        username: user.username,
      });

      // send back token
      res.send({ accessToken });
      return;
    }
  });
});

// @ POST
// @ Login user
module.exports.loginUser = (req, res) => {
  const user = req.user;
  if (user) {
    // generate token
    const accessToken = generateToken({
      _id: user._id,
      email: user.email,
      username: user.username,
    });

    // send back token
    res.send({ accessToken });
    return;
  }

  res.send({
    message: "Error loggin in",
  });
};

// @ POST
// @ Logout user
module.exports.logoutUser = (req, res) => {
  req.logout();
  req.session.destroy();
  res.send({ message: "Successfully logged out" });
};
