const express = require("express");
const router = express.Router();
const {
  getUsers,
  postUser,
  deleteUser,
  updateUser,
} = require("../controllers/userControllers.js");

router.get("/", getUsers);

router.post("/", postUser);

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);

module.exports = router;
