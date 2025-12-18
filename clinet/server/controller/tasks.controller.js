const tasks = require("../model/task");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await tasks.find();
    res.status(200).json(allTasks);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};

const creatTask = async (req, res) => {
  const newTasksInfo = req.body;
  try {
    const newTsks = await tasks.create(newTasksInfo);
    res.status(201).json(newTsks);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const newinfo = req.body;
  if (!newinfo) {
    return res
      .status(400)
      .json({ message: "the task info is required for update" });
  }
  try {
    const newTasks = await tasks.findByIdAndUpdate(id, newinfo);
    res.status(200).json(newTasks);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await tasks.findByIdAndDelete(id);
    res.status(200).json(deleted);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};

module.exports = {
  getAllTasks,
  updateTask,
  creatTask,
  deleteTask,
};
