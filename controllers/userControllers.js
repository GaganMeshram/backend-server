const asyncHnadler = require("express-async-handler");
const { default: mongoose } = require("mongoose");
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

//GETTING USER BY ID

const userById = asyncHnadler(async (req, res) => {
  const id = req.params.id;
  const user = await userModel.findById(id);
  if (!user) {
    return res.send("user not found");
  }
  res.json(user);
});

//UPDATING DATA

const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such id." });
  }

  const user = await userModel.findByIdAndUpdate(id, { ...req.body });
  if (!user) {
    res.json({ error: "No such user." });
  }
  res.status(200).json({ message: "User succsefully updated" });
};

module.exports = {
  getUsers,
  postUser,
  deleteUser,
  updateUser,
  userById,
};
