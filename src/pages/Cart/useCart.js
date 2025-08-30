import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Utility from "../../features/Utility";
import { CartRefresh } from "../../features/CartSlice";
import { useNavigate } from "react-router-dom";
import { AddOrder } from "../../features/OrdersSlice";

function useCart() {
  const { ImportImage, User, AddCartItems, DelCartItem, CartItems } = Utility();
  const [ItemsSelected, setItemsSelected] = useState([]);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const HandleCheckout = () => {
    const id = Date.now();
    dispatch(AddOrder({ ItemsSelected, id }));
    setItemsSelected([]);
    dispatch(
      CartRefresh(
        CartItems.filter(
          (product) => !ItemsSelected.some((item) => item.id === product.id)
        )
      )
    );
    Navigate(`/orders/summary/${id}`);
  };
  const HandleCheck = (Items) => {
    const exist = ItemsSelected.some((product) => product.id === Items.id);
    if (exist) {
      setItemsSelected(
        ItemsSelected.filter((product) => product.id !== Items.id)
      );
    } else {
      setItemsSelected([...ItemsSelected, Items]);
    }
  };
  const HandleSelectAll = () => {
    if (ItemsSelected.length === CartItems.length) {
      setItemsSelected([]);
    } else {
      setItemsSelected(CartItems);
    }
  };
  return {
    HandleCheck,
    HandleCheckout,
    HandleSelectAll,
    ImportImage,
    User,
    AddCartItems,
    DelCartItem,
    CartItems,
    ItemsSelected
  }
}

export default useCart;