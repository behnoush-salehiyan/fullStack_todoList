const { Router } = require("express");
const {
  getAllTasks,
  getTaskByDirectory,
  creatTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks.controller");

const router = Router();

router.get("/", getAllTasks);

router.post("/", creatTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
