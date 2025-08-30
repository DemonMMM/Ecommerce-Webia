import React from "react";
import "./trendingSection.css";
import { useSelector } from "react-redux";
import {
  FaRegHeart,
  FaHeart,
  FaCartPlus,
  FaShoppingCart,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Utility from "../../features/Utility";

function TrendingSection() {
  const Products = useSelector((state) => state.ProductDetails.products);
  const TrendingProduct = Products.filter((items) => items.id % 6 === 0);
  const Navigate = useNavigate();
  const {
    HandleWishListButton,
    AddCartItems,
    ImportImage,
    WishedProducts,
    CartItems,
  } = Utility();
  const GoToCart = () => {
    Navigate("/cart");
  };

  return (
    <div className="Trending">
      <p className="TrendingP">Top Procducts For You</p>
      <h1>Trending Section</h1>
      <div className="Section">
        {TrendingProduct.map((items) => (
          <div className="SectionDiv" key={items.id}>
            <Link to={`/products/${items.id}`}>
              <img src={ImportImage(items.image)} alt={items.description} />
            </Link>
            <div className="InfoSection">
              <div>
                <h4>{items.name}</h4>
                <p>$ {items.price}</p>
              </div>
              <div className="Buttons">
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
      <Link to="/products" className="LastLink">
        All Products
      </Link>
    </div>
  );
}

export default TrendingSection;
