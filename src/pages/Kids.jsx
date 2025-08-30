import React from "react";
import { useSelector } from "react-redux";
import ProductScreener from "../components/ProductScreener/ProductScreener";

function Kids() {
  const Products = useSelector((state) => state.ProductDetails.products);
  const KidsProducts = Products.filter((item) => item.id > 20);
  return (
    <div>
      <h1 className="Heading">Kid's Section</h1>
      <hr />
      <ProductScreener Products={KidsProducts} />
    </div>
  );
}

export default Kids;
