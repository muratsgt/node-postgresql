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
  // add user to db
  try {
    const newUser = await UserModel.create({
      firstName: req.body.firstname,
      lastName: req.body.lastname
    });
    res.redirect('/users');
  } catch (error) {
    res.send("An error occured.");
  }
}


exports.delete_user = async function(req, res){
  // deletes user from db
  try {
    await UserModel.destroy({
      where: {
        id : req.params.id,
      }
    });
    res.redirect('/users');
  } catch (error) {
    console.log(`error`, error)
  }
}

exports.get_edituser = async function(req, res){
  // render edit user page
  const user = await UserModel.findOne({
    where: {
      id : req.params.id,
    }
  });
  res.render("edituser",{user});
}

exports.post_edit = async function(req, res){
  // sends dp edit command
  try {
    await UserModel.update({
      firstName: req.body.firstname,
      lastName: req.body.lastname
    },{
      where: {
        id : req.params.id,
      }
    });
    res.redirect('/users');
  } catch (error) {
    console.log(`error`, error)
  }
}