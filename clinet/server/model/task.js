const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
    maxLength: [50, "title should be less than 50 charachters"],
  },
  description: {
    type: String,
    maxLength: [150, "title should be less than 150 charachters"],
  },
  completed: Boolean,
  important: Boolean,
  deadline: {
    type: Date,
    required: [true, "deadline is required"],
  },
  dirId: {
    type: Schema.Types.ObjectId,
    ref: "Directory",
    required: true,
  },
});

module.exports = model("Task", taskSchema);
