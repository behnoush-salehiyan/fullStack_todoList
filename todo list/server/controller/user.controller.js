const user = require("../model/user");

const task = require("../model/task");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const readAllUser = async (req, res) => {
  try {
    const allUsers = await user.find();

    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};

const getUsersTasks = async (req, res) => {
  const { id } = req.params;

  try {
    const userTask = await task.find({ userId: id });

    res.status(200).json(userTask);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};

const createUser = async (req, res) => {
  const { password, ...restnewUserInfo } = req.body;

  try {
    //hash pasword
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await user.create({
      ...restnewUserInfo,
      password: hashedPassword,
    });

    res.status(201).json({ msg: "create user was successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;

  const editedInfo = req.body;
  if (!editedInfo) {
    return res.status(400).json({ msg: "user data is required for update " });
  }

  try {
    const updateUsers = await user.findByIdAndUpdate(id, editedInfo);
    res.status(200).json({ msg: " user  updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await user.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await user.findOne({ email });
    if (!foundUser) {
      return res.status(404).json({ msg: "not found user!" });
    }
    const correctpassword = await bcrypt.compare(password, foundUser.password);
    if (!correctpassword) {
      return res.status(401).json({ msg: "authentication failed!" });
    }
    const token = jwt.sign({ userId: foundUser._id }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });

    res.status(200).json({ message: "welcome", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getUsersTasks,
  readAllUser,
  updateUser,
  createUser,
  deleteUser,
  login,
};
