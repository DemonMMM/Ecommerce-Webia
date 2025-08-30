import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import LogIn from "./pages/Login/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import Kids from "./pages/Kids";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/WishList/Wishlist";
import ProductPage from "./components/ProductPage/ProductPage";
import Products from "./pages/Products";
import Orders from "./pages/Orders/Orders";
import OrderSummary from "./pages/OrderSummary/OrderSummary";
import { useSelector } from 'react-redux';

function RoutesConfig() {
  const User = useSelector((state) => state.UserDetail.currentUser);
  return (
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Home />} />
            <Route path="/collection/kids" element={<Kids />} />
            <Route path="/collection/men" element={<Men />} />
            <Route path="/collection/women" element={<Women />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/cart" element={User ? <Cart /> : <LogIn />} />
            <Route path="/wishlist" element={User ? <Wishlist /> : <LogIn />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/orders" element={User ? <Orders /> : <LogIn />} />
            <Route
              path="/orders/Summary/:id"
              element={User ? <OrderSummary /> : <LogIn />}
            />
          </Routes>
  )
}

export default RoutesConfig;