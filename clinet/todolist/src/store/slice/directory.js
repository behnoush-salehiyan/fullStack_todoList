import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const directoryslice = createSlice({
  name: "directories",
  initialState: { directory: [{ title: "main", id: 1, path: `/main` }] },
  reducers: {
    addDirectory: (state, action) => {
      state.directory.unshift({
        ...action.payload,
        id: uuid(),
        path: `/${action.payload.title}`,
      });
    },
    deleteDirectory: (state, action) => {
      const { id } = action.payload;
      state.directory = state.directory.filter((d) => d.id !== id);
    },

    updateDirectory: (state, action) => {
      const { id } = action.payload;
      const directory = state.directory.find((d) => d.id === id);
      if (directory) {
        directory.title = action.payload.title;
        directory.path = `/${action.payload.title}`;
      }
    },
  },
});

export const { addDirectory, deleteDirectory, updateDirectory } =
  directoryslice.actions;

export default directoryslice.reducer;
