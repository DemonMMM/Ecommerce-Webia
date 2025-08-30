import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./orderSummary.css";

function OrderSummary() {
  const { id } = useParams();
  const [Order, setOrder] = useState(null);
  const OrdersPlaced = useSelector((state) => state.OrdersDetail.orders);

  useEffect(() => {
    const Found = OrdersPlaced.find((product) => product.id === parseInt(id));
    setOrder(Found);
  }, [id, OrdersPlaced]);
  const ImportImage = (image) => require(`../../assets/products/${image}`);
  const Navigate = useNavigate();
  const ProductDisplay = (id) => {
    Navigate(`/products/${id}`);
  };
  if (!Order) return <h6>No Orders With Order Id: {id}</h6>;
  return (
    <div>
      <h1 className="Heading">Order Summary</h1>
      <hr />
      {Order.ItemsSelected.map((Items) => (
        <div
          key={Items.id}
          className="OrderProduct"
          onClick={() => ProductDisplay(Items.id)}
        >
          <img src={ImportImage(Items.image)} alt={Items.name} />
          <div>
            <h4>{Items.name}</h4>
            <p>$ {Items.price * Items.qty}</p>
            <p>Qty: {Items.qty}</p>
          </div>
        </div>
      ))}
      <h3>
        Items Total: ${" "}
        {Order.ItemsSelected.reduce(
          (Total, Item) => (Total += Item.qty * Item.price),
          0
        ).toFixed(2)}
      </h3>
    </div>
  );
}

export default OrderSummary;
