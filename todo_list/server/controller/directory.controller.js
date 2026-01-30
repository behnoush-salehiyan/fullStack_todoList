const directory = require("../model/directory");
const tasks = require("../model/task");

const getAllDirectories = async (req, res) => {
  try {
    const directories = await directory.find();
    res.status(200).json(directories);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};
const getTaskByDirectory = async (req, res) => {
  const { dirId } = req.params;

  try {
    const findedTsk = await tasks.find({ dirId });
    res.status(200).json(findedTsk);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};

const creatDirectory = async (req, res) => {
  const newDirectoryInfo = req.body;
  if (!newDirectoryInfo) {
    return res
      .status(400)
      .json({ message: "directory data for creat directory is required" });
  }
  try {
    const newDirectory = await directory.create(newDirectoryInfo);
    res.status(201).json(newDirectory);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};

const updateDirectory = async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;
  if (!newInfo) {
    return res.status(400).json({
      message: "directory data for update is required",
    });
  }
  try {
    const update = await directory.findByIdAndUpdate(id, newInfo);
    res.status(200).json(update);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};

const deleteDirectory = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await directory.findByIdAndDelete(id);
    res.status(202).json(deleted);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};

module.exports = {
  deleteDirectory,
  updateDirectory,
  creatDirectory,
  getAllDirectories,
  getTaskByDirectory,
};
