var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController");

/* GET users listing. */
router.get('/', usersController.get_users);
router.get('/add', usersController.get_adduser);

router.post('/add', usersController.post_user);

router.get("/:id/delete", usersController.delete_user);

router.get("/:id/edit", usersController.get_edituser);
router.post("/:id/edit", usersController.post_edit);

module.exports = router;
