const asyncHnadler = require("express-async-handler");
const userModel = require("../model/userModel.js");

const getUsers = asyncHnadler(async (req, res) => {
  userModel.find((err, users) => {
    if (err) {
      res.json(err);
    } else {
      res.json(users);
    }
  });
});

const postUser = asyncHnadler(async (req, res) => {
  try {
    const User = req.body;
    const newUser = new userModel(User);
    await newUser.save();
    res.send(User);
  } catch (error) {
    res.send(error);
  }
});

// DELETE

const deleteUser = asyncHnadler(async (req, res) => {
  userModel.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.json(`User ${req.params.id} deleted`);
    }
  });
});

const updateUser = asyncHnadler(async (req, res) => {
  //find by id
  userModel.findById(req.params.id, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      //updating user details
      user.name = req.body.name;
      user.lastname = req.body.lastname;
      user.number = req.body.phoneNumber;
      user.age = req.body.age;

      //saving updates in db

      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.json(`user ${req.params.id} updated`);
        }
      });
    }
  });
});

module.exports = {
  getUsers,
  postUser,
  deleteUser,
  updateUser,
};
