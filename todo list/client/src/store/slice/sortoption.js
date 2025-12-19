import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    option: "none",
  },
  reducers: {
    setSortOption: (state, action) => {
      state.option = action.payload;
    },
  },
});

export const { setSortOption } = sortSlice.actions;
export default sortSlice.reducer;
