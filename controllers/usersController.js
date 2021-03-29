const UserModel = require("../models/User");

exports.get_users = async (req, res, next) => {

  //get users from db
  try {
    const userList = await UserModel.findAll();
    console.log(`userList`, userList)
    res.render("users", { userList });
  } catch (error) {
    res.send("An error occured");
    console.log(`error`, error);
  }
};
