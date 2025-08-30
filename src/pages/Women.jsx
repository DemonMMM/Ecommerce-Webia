import React from "react";
import { useSelector } from "react-redux";
import ProductScreener from "../components/ProductScreener/ProductScreener";

function Women() {
  const Products = useSelector((state) => state.ProductDetails.products);
  const WomensProducts = Products.filter(
    (item) => item.id > 10 && item.id < 21
  );
  return (
    <div>
      <h1 className="Heading">Women's Section</h1>
      <hr />
      <ProductScreener Products={WomensProducts} />
    </div>
  );
}

export default Women;
