// =============================================
// REQUIRE
// =============================================
const express = require("express");
const router = express.Router();
const Collection = require("../models/Collections");
const catchAsync = require("../utils/catchAsync");
const { getAllCollections } = require("../controller/collections");

// ==============================================
// ROUTES
// ==============================================

// @ GET
// @ All Collections
router.route("/").get(getAllCollections);

module.exports = router;
