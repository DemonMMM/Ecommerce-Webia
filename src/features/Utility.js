import React from "react";
import { AddWishedItems, WishRefresh } from "./WishlistSlice";
import { useSelector, useDispatch } from "react-redux";
import { AddItems, CartRefresh, QtyAdd, QtySub } from "./CartSlice";
import { Toast } from "./Toast";
import { useNavigate } from "react-router-dom";

function Utility() {
  const Navigate = useNavigate();
  const User = useSelector((state) => state.UserDetail.currentUser);
  const CartItems = useSelector((state) => state.CartDetail.items);
  const WishedProducts = useSelector((state) => state.WishDetail.items);
  function ImportImage(image) {
    return require(`../assets/products/${image}`);
  }
  const dispatch = useDispatch();
  const HandleWishListButton = (item) => {
    const exist = WishedProducts.some((product) => product.id === item.id);
    if (!User) {
      Toast.info("User Not LoggerIn");
    } else if (!exist) {
      Toast.info(`${item.name} Added to Wishlist!`);
      dispatch(AddWishedItems(item));
    } else {
      dispatch(
        WishRefresh(WishedProducts.filter((product) => product.id !== item.id))
      );
      Toast.info(`${item.name} Removed From Wishlist!`);
    }
  };

  const AddCartItems = (item) => {
    const exist = CartItems.some((product) => product.id === item.id);
    if (!User) {
      Toast.info("User Not LoggerIn");
    } else if (!exist) {
      dispatch(AddItems({ ...item, qty: 1 }));
      Toast.info(`${item.name} Added to Cart!`);
    } else {
      dispatch(QtyAdd(item.id));
      Toast.info("Qty Updated!");
    }
  };

  const DelCartItem = (item) => {
    if (item.qty > 1) {
      dispatch(QtySub(item.id));
      Toast.info("Qty Updated!");
    } else {
      dispatch(
        CartRefresh(CartItems.filter((product) => product.id !== item.id))
      );
      Toast.info(`${item.name} Removed From Cart`);
    }
  };

  function GoToCart(){
    Navigate("/cart");
  }

  return {
    ImportImage,
    HandleWishListButton,
    AddCartItems,
    DelCartItem,
    GoToCart,
    WishedProducts,
    CartItems,
    User,
  };
}

export default Utility;
