const express = require("express");
const router = express.Router();
const addController = require("../controllers/addUserController");

router.get('/', addController.get_adduser);

module.exports = router;