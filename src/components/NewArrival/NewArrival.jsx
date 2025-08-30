import React, { useState } from "react";
import "./newArrival.css";
import { useSelector } from "react-redux";
import {
  FaRegHeart,
  FaHeart,
  FaShoppingCart,
  FaCartPlus,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Utility from "../../features/Utility";

function NewArrival() {
  const {
    HandleWishListButton,
    AddCartItems,
    ImportImage,
    WishedProducts,
    CartItems,
  } = Utility();
  const Products = useSelector((state) => state.ProductDetails.products);
  const NewProduct = Products.filter((items) => items.id % 7 === 0);
  const Navigate = useNavigate();
  const GoToCart = () => {
    Navigate("/cart");
  };
  return (
    <div className="NewArr">
      <h2>New Arrival's</h2>
      <p className="NewArrP">Everything New You Deserve</p>
      <div className="ItemsNew">
        {NewProduct.map((items) => (
          <div className="ItemsDiv" key={items.id}>
            <Link to={`/products/${items.id}`}>
              <img src={ImportImage(items.image)} alt={items.description} />
            </Link>
            <div className="ItemsSection">
              <div>
                <h4>{items.name}</h4>
                <p>$ {items.price}</p>
              </div>
              <div className="ItemsB">
                {CartItems.some((product) => product.id === items.id) ? (
                  <button onClick={GoToCart}>
                    <FaShoppingCart />
                  </button>
                ) : (
                  <button onClick={() => AddCartItems(items)}>
                    <FaCartPlus />
                  </button>
                )}
                <button
                  onClick={() => HandleWishListButton(items)}
                  className="WishButton"
                >
                  {WishedProducts.some((product) => product.id === items.id) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewArrival;
