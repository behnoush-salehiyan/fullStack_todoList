const dotenv = require("dotenv");
const express = require("express");

const connectToDb = require("./db/connection");
const directoryRoutes = require("./routes/directory.route");
const taskRoutes = require("./routes/tasks.route");
const userRoutes = require("./routes/user.route");
const logger = require("./middleware/logger");

dotenv.config();

const app = express();
app.use(logger, express.json());

app.use("/directories", directoryRoutes);
app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);

app.use((req, res) => {
  res.status(404).send({ error: 404, msg: "not found" });
});

const start = async () => {
  try {
    await connectToDb(process.env.DB_URI);
    console.log("connect to database ✅");

    app.listen(5000, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("server is running on port 5000");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

start();
