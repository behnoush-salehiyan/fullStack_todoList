const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, " user name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

module.exports = model("User", userSchema);
