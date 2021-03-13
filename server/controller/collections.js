// =============================================
// REQUIRE
// =============================================
const Collection = require("../models/Collections");
const Camera = require("../models/Cameras");
const catchAsync = require("../utils/catchAsync");
// =============================================
// Logic
// =============================================
module.exports.getAllCollections = catchAsync(async (req, res) => {
  const collections = await Collection.find({})
    .populate({
      path: "cameras",
      populate: {
        path: "user",
        select: "-password",
      },
    })
    .populate("user", "-password");
  res.send({ collections });
});
