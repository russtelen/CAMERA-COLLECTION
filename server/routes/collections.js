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
} = require("../controller/collections");

// ==============================================
// ROUTES
// ==============================================

// @ GET
// @ All Collections
router.route("/").get(getAllCollections);

// @ GET
// @ Collection by ID
router.route("/:id").get(getCollectionById);

module.exports = router;
