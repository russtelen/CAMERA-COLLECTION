// =============================================
// REQUIRE
// =============================================
const Collection = require("../models/Collections");
const Camera = require("../models/Cameras");
const catchAsync = require("../utils/catchAsync");
// =============================================
// Logic
// =============================================

// @ GET All Collections
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

// @ GET Collection by ID
module.exports.getCollectionById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const collection = await Collection.findById(id)
    .populate({
      path: "cameras",
      populate: {
        path: "user",
        select: "-password",
      },
    })
    .populate("user", "-password");
  res.send({ collection });
});
