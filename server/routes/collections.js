// =============================================
// REQUIRE
// =============================================
const express = require("express");
const router = express.Router();
const Collection = require("../models/Collections");
const catchAsync = require("../utils/catchAsync");
const {
  getAllCollections,
  getCollectionById,
  createCollection,
  updateCollection,
} = require("../controller/collections");

// ==============================================
// ROUTES
// ==============================================

router.route("/").get(getAllCollections).post(createCollection);

router.route("/:id").get(getCollectionById).patch(updateCollection);

module.exports = router;
