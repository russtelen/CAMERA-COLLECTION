// =============================================
// REQUIRE
// =============================================
const Collection = require("../models/Collections");
const Camera = require("../models/Cameras");
const catchAsync = require("../utils/catchAsync");

// =============================================
// Logic
// =============================================
// @ GET
// @ All Collections
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

// @ GET
// @ Collection by ID
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

// @ POST
// @ Create Collection
module.exports.createCollection = catchAsync(async (req, res) => {
  // Get data from body
  const { title } = req.body;

  // Get from sesssion/user token
  const user = "604bfe847b44d5816a49ace1"; // Russ' ID (hardcoded for now)

  // Add new collection
  const collection = await new Collection({
    title,
    user,
  });

  if (collection) {
    // Save collection
    await collection.save();

    // Find created collection
    const newCollection = await Collection.findById(collection._id).populate(
      "user",
      "-password"
    );

    // Send back to client
    res.send({
      message: "Succesfully added new collection",
      collection: newCollection,
    });

    return;
  }

  // Send back error to client
  res.send({
    message: "There was an error creating a new collection",
  });
});

// @ PATCH
// @ Update a Collection
module.exports.updateCollection = catchAsync(async (req, res) => {
  const { id } = req.params;
  const collection = await Collection.findByIdAndUpdate(id, req.body);

  if (collection) {
    await collection.save();
    const newCollection = await Collection.findById(collection._id);
    res.send({
      message: "Successfully updated collection",
      collection: newCollection,
    });
    return;
  }

  res.send({
    message: "Error updating collection",
  });
});
