import React from "react";
import { useSelector } from "react-redux";
import ProductScreener from "../components/ProductScreener/ProductScreener";

function Men() {
  const Products = useSelector((state) => state.ProductDetails.products);
  const MensProducts = Products.filter((item) => item.id > 0 && item.id < 11);
  return (
    <div>
      <h1 className="Heading">Men's Section</h1>
      <hr />
      <ProductScreener Products={MensProducts} />
    </div>
  );
}

export default Men;
