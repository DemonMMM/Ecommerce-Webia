import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./orders.css";

function Orders() {
  const User = useSelector((state) => state.UserDetail.currentUser);
  const Orders = useSelector((state) => state.OrdersDetail.orders);
  const ImportImage = (image) => require(`../../assets/products/${image}`);
  const Navigate = useNavigate();
  const HandleOrders = (id) => {
    Navigate(`/orders/summary/${id}`);
  };

  return (
    <div>
      <h1 className="OrdersH1">Orders...</h1>
      <hr />
      <div className="Orders">
        {Orders.map((Order) => (
          <div
            key={Order.id}
            className="OrdersList"
            onClick={() => HandleOrders(Order.id)}
          >
            <h4>Order Id: {Order.id}</h4>
            {Order.ItemsSelected.map((Item, index) => {
              if (index > 4) return;
              else {
                return (
                  <img
                    key={Item.id}
                    src={ImportImage(Item.image)}
                    alt={Item.name}
                  />
                );
              }
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
