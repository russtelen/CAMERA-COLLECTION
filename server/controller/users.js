// =============================================
// REQUIRE
// =============================================
const User = require("../models/Users");
const catchAsync = require("../utils/catchAsync");

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

    // send back id, username and email to client
    res.send({ _id: user._id, username: user.username, email: user.email });
  });
});

// @ POST
// @ Login user
module.exports.loginUser = (req, res) => {
  const user = req.user;
  if (user) {
    // send back id, username and email to client
    res.send({ _id: user._id, username: user.username, email: user.email });
    return;
  }
};
