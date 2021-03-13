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
  deleteCollection,
} = require("../controller/collections");
const {
  requireLogin,
  isCollectionAuthor,
} = require("../middlewares/middlewares");

// ==============================================
// ROUTES
// ==============================================

router.route("/").get(getAllCollections).post(createCollection);

router
  .route("/:id")
  .get(getCollectionById)
  .patch(updateCollection)
  .delete(deleteCollection);

module.exports = router;
