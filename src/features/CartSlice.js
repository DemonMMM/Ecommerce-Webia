import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    AddItems(state, action) {
      state.items.push(action.payload);
    },
    CartRefresh(state, action) {
      state.items = action.payload;
    },
    QtyAdd(state, action) {
      state.items = state.items.map((product) =>
        product.id === action.payload
          ? { ...product, qty: product.qty + 1 }
          : product
      );
    },
    QtySub(state, action) {
      state.items = state.items.map((product) =>
        product.id === action.payload
          ? { ...product, qty: product.qty - 1 }
          : product
      );
    },
  },
});

export default CartSlice.reducer;
export const { AddItems, CartRefresh, QtyAdd, QtySub } = CartSlice.actions;
