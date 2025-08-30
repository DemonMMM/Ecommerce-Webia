import { configureStore } from "@reduxjs/toolkit";
import userDetailReducer from "./features/UserDetailSlice";
import ProductDetailsReducer from "./features/ProductSlice";
import CartReducer from "./features/CartSlice";
import WishListReducer from "./features/WishlistSlice";
import OrdersReducer from "./features/OrdersSlice";

export const store = configureStore({
  reducer: {
    UserDetail: userDetailReducer,
    ProductDetails: ProductDetailsReducer,
    CartDetail: CartReducer,
    WishDetail: WishListReducer,
    OrdersDetail: OrdersReducer,
  },
});
