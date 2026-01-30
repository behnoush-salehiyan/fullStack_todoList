const { Schema, model } = require("mongoose");
const directorySchema = new Schema({
  name: {
    type: String,
    require: [true, "title is required"],
    maxLength: [20, "your directory title should be less than 20 characters"],
  },
});

module.exports = model("Directory", directorySchema);
