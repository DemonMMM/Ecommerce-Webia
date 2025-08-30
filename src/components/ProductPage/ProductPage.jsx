import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./productPage.css";
import { FaCheck } from "react-icons/fa6";
import Utility from "../../features/Utility";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

function ProductPage() {
  const { id } = useParams();
  const AllProducts = useSelector((state) => state.ProductDetails.products);
  const [Product, setProduct] = useState(null);
  const {
    HandleWishListButton,
    AddCartItems,
    ImportImage,
    WishedProducts,
    CartItems,
    DelCartItem,
    GoToCart
  } = Utility();
  useEffect(() => {
    const Found = AllProducts.find((item) => item.id === parseInt(id));
    setProduct(Found);
  }, [id, AllProducts]);
  if (!Product) return <h1>Product Not Found</h1>;
  return (
    <div>
      <div className="UpperInfo">
        <img src={ImportImage(Product.image)} alt={Product.name} />
        <div className="UpperDetails">
          <h1>{Product.name}</h1>
          <p>$ {Product.price}</p>
          {CartItems.some((product) => product.id === Product.id) && (
            <div className="QtyButton">
              {CartItems.find((product) => product.id === Product.id).qty >
              1 ? (
                <button
                  onClick={() =>
                    DelCartItem(
                      CartItems.find((product) => product.id === Product.id)
                    )
                  }
                >
                  <FaMinus />
                </button>
              ) : (
                <button
                  onClick={() =>
                    DelCartItem(
                      CartItems.find((product) => product.id === Product.id)
                    )
                  }
                >
                  <FaTrash />
                </button>
              )}
              <p>
                {" "}
                {
                  CartItems.find((product) => product.id === Product.id).qty
                }{" "}
              </p>
              <button onClick={() => AddCartItems(Product)}>
                <FaPlus />
              </button>
            </div>
          )}
          <div className="PPButtons">
            {CartItems.some((product) => product.id === Product.id) ? (
              <button onClick={GoToCart}>Go To Cart</button>
            ) : (
              <button onClick={() => AddCartItems(Product)}>Add to Cart</button>
            )}
            {WishedProducts.some((Item) => Item.id === Product.id) ? (
              <button onClick={() => HandleWishListButton(Product)}>
                WishListed
                <FaCheck />
              </button>
            ) : (
              <button onClick={() => HandleWishListButton(Product)}>
                Add to WishList
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="Description">
        <h1>Description</h1>
        <p>
          {Product.description} Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Aperiam, labore amet dicta minima, consectetur
          reiciendis, blanditiis modi incidunt aliquid quibusdam quas voluptates
          esse? Consequatur harum nulla, accusamus unde nesciunt esse, molestias
          quam ullam commodi odit autem, facilis laborum obcaecati quae.
        </p>
      </div>
    </div>
  );
}

export default ProductPage;
