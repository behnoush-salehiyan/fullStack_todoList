import { createSlice } from "@reduxjs/toolkit";
import tasks from "../../../sample_data.json";
import { v4 as uuid } from "uuid";
import { deleteDirectory } from "./directory";

const userTokenSlice = createSlice({
  name: "UserToken",
  initialState: {
    id: null,
    username: null,
    token: localStorage.getItem("token") || null,
  },

  reducers: {
    creatUserToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },

    deleteUserToken: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { creatUserToken, deleteUserToken } = userTokenSlice.actions;
export default userTokenSlice.reducer;
