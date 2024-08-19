const express = require("express");
const User = require("../models/User");
const router = express.Router();
const userController = require("../controllers/users.controller");

// Create
router.post("/create", userController.createUser);
router.post("/login", userController.login);
module.exports = router;
