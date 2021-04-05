const UserModel = require("../models/User");

exports.get_users = async (req, res) => {

  //get users from db
  try {
    const userList = await UserModel.findAll();
    res.render("users", { userList });
  } catch (error) {
    res.send("An error occured");
    console.log(`error`, error);
  }
};

exports.get_adduser = function(req, res){
  // render adduser page
  res.render("adduser");
}

exports.post_user = async function(req, res){
  console.log(`req`, req.body)
  // add user to db
  try {
    const newUser = await UserModel.create({
      firstName: req.body.firstname,
      lastName: req.body.lastname
    });
    res.redirect('/users');
  } catch (error) {
    
  }
}