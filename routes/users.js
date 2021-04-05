var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController");

/* GET users listing. */
router.get('/', usersController.get_users);
router.get('/add', usersController.get_adduser);

router.post('/add', usersController.post_user);

module.exports = router;
