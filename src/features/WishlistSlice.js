import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const WishlistSlice = createSlice({
  name: "Wishlist",
  initialState,
  reducers: {
    AddWishedItems(state, action) {
      state.items.push(action.payload);
    },
    WishRefresh(state, action) {
      state.items = action.payload;
    },
  },
});

export default WishlistSlice.reducer;
export const { AddWishedItems, WishRefresh } = WishlistSlice.actions;
