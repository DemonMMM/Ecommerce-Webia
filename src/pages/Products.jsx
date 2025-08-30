import React from "react";
import { useSelector } from "react-redux";
import ProductScreener from "../components/ProductScreener/ProductScreener";

function Products() {
  const Products = useSelector((state) => state.ProductDetails.products);
  return (
    <div>
      <h1>All Products</h1>
      <ProductScreener Products={Products} />
    </div>
  );
}

export default Products;
