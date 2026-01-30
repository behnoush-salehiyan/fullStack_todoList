import { createSlice } from "@reduxjs/toolkit";
// import tasks from "../../../sample_data.json";
import { v4 as uuid } from "uuid";
import { deleteDirectory } from "./directory";

const taskSlice = createSlice({
  name: "taskslist",
  initialState: [],
  reducers: {
    setTasks: (state, action) => {
      return action.payload;
    },

    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      return state.filter((t) => (t._id || t.id) !== id);
    },
    editTask: (state, action) => {
      const { id } = action.payload;
      const data = state.find((t) => (t._id || t.id) === id);

      if (data) {
        data.title = action.payload.title;
        data.description = action.payload.description;
        data.date = action.payload.date;
        data.important = action.payload.important;
        data.completed = action.payload.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteDirectory, (state, action) => {
      const { id: directoryid } = action.payload;
      return state.filter((t) => t.directory_id !== directoryid);
    });
  },
});

export const selectTasks = (store) => store.taskslist;

export const selectTasksCount = (store) => store.taskslist;

export const selectUncompletedCount = (store) =>
  store.taskslist.filter((t) => !t.completed).length;

export const selectImportantCount = (store) =>
  store.taskslist.filter((t) => t.important).length;

export const selectCompletedCount = (store) =>
  store.taskslist.filter((t) => t.completed).length;

export const { addTask, deleteTask, editTask, setTasks } = taskSlice.actions;

export default taskSlice.reducer;
