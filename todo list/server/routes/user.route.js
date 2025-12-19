const { Router } = require("express");
const {
  readAllUser,
  getUsersTasks,
  createUser,
  updateUser,
  deleteUser,
  login,
} = require("../controller/user.controller");

const router = Router();

router.get("/", readAllUser);
router.get("/:id/tasks", getUsersTasks);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/login", login);

module.exports = router;
