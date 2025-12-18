const { Router } = require("express");

const router = Router();
const {
  getAllDirectories,
  creatDirectory,
  updateDirectory,
  deleteDirectory,
  getTaskByDirectory,
} = require("../controller/directory.controller");

router.get("/", getAllDirectories);
router.get("/:dirId/tasks", getTaskByDirectory);
router.post("/", creatDirectory);
router.put("/:id", updateDirectory);
router.delete("/:id", deleteDirectory);

module.exports = router;
