const express = require("express");
const router = express.Router();
const {
  getUsers,
  postUser,
  deleteUser,
  updateUser,
  userById,
} = require("../controllers/userControllers.js");

router.get("/", getUsers);

router.get("/:id", userById);

router.post("/", postUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

module.exports = router;
