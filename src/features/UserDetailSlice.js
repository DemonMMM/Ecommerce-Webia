import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const userDetailSlice = createSlice({
  name: "UserDetails",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userDetailSlice.actions;
export default userDetailSlice.reducer;
