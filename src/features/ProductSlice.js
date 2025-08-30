import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const ProductDetailsSlice = createSlice({
  name: "ProductDetails",
  initialState,
  reducers: {
    setProductData(state, action) {
      state.products = action.payload;
    },
  },
});

export default ProductDetailsSlice.reducer;
export const { setProductData } = ProductDetailsSlice.actions;
