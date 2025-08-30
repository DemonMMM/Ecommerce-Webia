import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const OrdersSlice = createSlice({
  name: "OrdersDetails",
  initialState,
  reducers: {
    AddOrder(state, action) {
      state.orders.push(action.payload);
    },
    OrdersRefresh(state, action) {
      state.orders = action.payload;
    },
  },
});

export default OrdersSlice.reducer;
export const { AddOrder, OrdersRefresh } = OrdersSlice.actions;
