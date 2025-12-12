import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slice/Tasks";
import directoryslice from "./slice/directory";
import sortSlice from "./slice/sortoption";

export const store = configureStore({
  reducer: {
    taskslist: taskSlice,
    directories: directoryslice,
    sort: sortSlice,
  },
});
