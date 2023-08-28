import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  colorGroup: [],
};
export const counterSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    addGroup: (state, action) => {
    const group=action.payload;
    state.colorGroup=[...state.colorGroup,group];
    },
  },
});

export const { addGroup } = counterSlice.actions;
export const selcolorGroup = (state) => state.color.colorGroup;
export default counterSlice.reducer;
