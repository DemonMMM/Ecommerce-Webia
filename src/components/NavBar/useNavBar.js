import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./navBar.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import useFetch from "../../features/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../features/UserDetailSlice";
import { CartRefresh } from "../../features/CartSlice";
import { WishRefresh } from "../../features/WishlistSlice";
import { OrdersRefresh } from "../../features/OrdersSlice";
import { Toast } from "../../features/Toast";
import Utility from "../../features/Utility";

function useNavBar() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const ProfileButtonRef = useRef(null);
  const CollectionButtonRef = useRef(null);
  const [IsButtonState, setIsButtonState] = useState(false);
  const [IsLoginShowing, SetIsLoginShowing] = useState(false);
  const [CartQty, setCartQty] = useState(null);
  const [WishQty, setWishQty] = useState(null);
  useFetch();
  const { WishedProducts, CartItems } = Utility();
  const Orders = useSelector((state) => state.OrdersDetail.orders);
  const CurrentUser = useSelector((state) => state.UserDetail.currentUser);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const name = docSnap.data().name;
          dispatch(setCurrentUser(name));
          dispatch(CartRefresh(docSnap.data().cart));
          dispatch(WishRefresh(docSnap.data().wishlist));
          dispatch(OrdersRefresh(docSnap.data().orders));
        } else return;
      } else {
        dispatch(setCurrentUser(null));
      }
    });
  }, []);
  useEffect(() => {
    setWishQty(WishedProducts.reduce((total, item) => (total += 1), 0));
    setCartQty(CartItems.reduce((total, item) => (total += item.qty), 0));
  }, [WishedProducts, CartItems]);

  useEffect(() => {
    const User = auth.currentUser;
    if (!User) return;
    const WishUpdate = async () => {
      const docref = doc(db, "users", User.uid);
      await updateDoc(docref, {
        wishlist: WishedProducts,
      });
    };
    WishUpdate();
  }, [WishedProducts]);

  useEffect(() => {
    const User = auth.currentUser;
    if (!User) return;
    const OrdersUpdate = async () => {
      const docref = doc(db, "users", User.uid);
      await updateDoc(docref, {
        orders: Orders,
      });
    };
    OrdersUpdate();
  }, [Orders]);

  useEffect(() => {
    const User = auth.currentUser;
    if (!User) return;
    const CartUpdate = async () => {
      const docref = doc(db, "users", User.uid);
      await updateDoc(docref, {
        cart: CartItems,
      });
    };
    CartUpdate();
  }, [CartItems]);

  useEffect(() => {
    const HandleClick = (event) => {
      if (
        ProfileButtonRef.current &&
        !ProfileButtonRef.current.contains(event.target)
      ) {
        SetIsLoginShowing(false);
      }
      if (
        CollectionButtonRef.current &&
        !CollectionButtonRef.current.contains(event.target)
      ) {
        setIsButtonState(false);
      }
    };
    document.addEventListener("mousedown", HandleClick);
    return () => {
      document.removeEventListener("mousedown", HandleClick);
    };
  }, []);

  const HandleProfileButton = () => {
    SetIsLoginShowing((prev) => !prev);
  };

  const HandleButtonState = () => {
    setIsButtonState((prev) => !prev);
  };

  const HandleLogout = () => {
    signOut(auth).then();
    SetIsLoginShowing(false);
    setTimeout(() => {
      dispatch(CartRefresh([]));
      dispatch(WishRefresh([]));
    }, 100);
    Navigate("/");
  };

  const HandleCartButton = () => {
    if (!CurrentUser) {
      Toast.error("Login First!");
    } else {
      Navigate("/cart");
    }
  };

  const HandleWishButton = () => {
    if (!CurrentUser) {
      Toast.error("Login First!");
    } else {
      Navigate("/wishlist");
    }
  };

  const HandleOrders = () => {
    Navigate("/orders");
    SetIsLoginShowing(false);
  };

  return {
    HandleProfileButton,
    HandleCartButton,
    HandleLogout,
    HandleOrders,
    HandleButtonState,
    HandleWishButton,
    CollectionButtonRef,
    IsLoginShowing,
    IsButtonState,
    ProfileButtonRef,
    CartQty,
    WishQty,
    CurrentUser
  }

}

export default useNavBar;