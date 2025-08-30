import React from "react";
import "./ProductScreener.css";
import { Link } from "react-router-dom";
import { FaCheck, FaCartPlus } from "react-icons/fa6";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Utility from "../../features/Utility";

function ProductScreener({ Products = [] }) {
  const {
    HandleWishListButton,
    AddCartItems,
    ImportImage,
    WishedProducts,
    CartItems,
    DelCartItem,
  } = Utility();
  return (
    <div className="ProductScreen">
      {Products.map((Items) => (
        <div className="Product" key={Items.id}>
          <Link to={`/products/${Items.id}`}>
            <img src={ImportImage(Items.image)} alt={Items.description} />
          </Link>
          <div className="InfoScreen">
            <h3>{Items.name}</h3>
            <p>$ {Items.price}</p>
            <p>{Items.description}</p>
          </div>
          <div className="ActionButtons">
            {CartItems.some((product) => product.id === Items.id) ? (
              <div className="QtyButton">
                {CartItems.find((product) => product.id === Items.id).qty >
                1 ? (
                  <button
                    onClick={() =>
                      DelCartItem(
                        CartItems.find((product) => product.id === Items.id)
                      )
                    }
                  >
                    <FaMinus />
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      DelCartItem(
                        CartItems.find((product) => product.id === Items.id)
                      )
                    }
                  >
                    <FaTrash />
                  </button>
                )}{" "}
                <p>
                  {" "}
                  {
                    CartItems.find((product) => product.id === Items.id).qty
                  }{" "}
                </p>{" "}
                <button onClick={() => AddCartItems(Items)}>
                  <FaPlus />
                </button>
              </div>
            ) : (
              <button onClick={() => AddCartItems(Items)}>
                Add to Cart <FaCartPlus />
              </button>
            )}
            {WishedProducts.some((Item) => Item.id === Items.id) ? (
              <button onClick={() => HandleWishListButton(Items)}>
                WishListed <FaCheck />
              </button>
            ) : (
              <button onClick={() => HandleWishListButton(Items)}>
                Add to WishList
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductScreener;
