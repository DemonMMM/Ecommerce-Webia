import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import "./cart.css";
import useCart from "./useCart";

function Cart() {
  const {
    HandleCheck,
    HandleCheckout,
    HandleSelectAll,
    ImportImage,
    User,
    AddCartItems,
    DelCartItem,
    ItemsSelected,
    CartItems,
  } = useCart();

  return (
    <div>
      <h1 className="Heading">{User ? `${User}'s Cart` : "Cart"}</h1>
      <hr />
      <label className="SelectAllBox">
        <input
          type="checkbox"
          onChange={HandleSelectAll}
          checked={ItemsSelected.length === CartItems.length}
        />{" "}
        SelectAll
      </label>
      <hr />
      <div className="CartScreen">
        {CartItems.map((Items, index) => (
          <div key={Items.id}>
            <div className="Product">
              <input
                type="checkbox"
                className="CartCheck"
                checked={ItemsSelected.some((Item) => Item.id === Items.id)}
                onChange={() => HandleCheck(Items)}
              />
              <img src={ImportImage(Items.image)} alt={Items.name} />
              <div className="InfoCart">
                <h3>{Items.name}</h3>
                <p>$ {(Items.price * Items.qty).toFixed(2)}</p>
                <div className="Qty">
                  <div className="QtyButton">
                    {Items.qty > 1 ? (
                      <button onClick={() => DelCartItem(Items)}>
                        <FaMinus />
                      </button>
                    ) : (
                      <button onClick={() => DelCartItem(Items)}>
                        <FaTrash />
                      </button>
                    )}
                    <p>{Items.qty}</p>
                    <button onClick={() => AddCartItems(Items)}>
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <hr />
        <div className="LastInfo">
          <h3>Item Total:</h3>
          <h4>
            ${" "}
            {ItemsSelected.reduce(
              (total, item) => (total += item.price * item.qty),
              0
            ).toFixed(2)}
          </h4>
        </div>
        <hr />
        <div className="CheckoutButton">
          {ItemsSelected.length > 0 && (
            <button onClick={HandleCheckout}>Checkout</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
