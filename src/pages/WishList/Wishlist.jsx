import useAdd from "../../features/Utility";
import { useDispatch } from "react-redux";
import { WishRefresh } from "../../features/WishlistSlice";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import "./wishlist.css";

function Wishlist() {
  const { ImportImage, AddCartItems, User, WishedProducts } = useAdd();

  const Dispatch = useDispatch();

  const AddtoCart = (item) => {
    AddCartItems(item);
    Dispatch(
      WishRefresh(WishedProducts.filter((product) => product.id !== item.id))
    );
  };

  
  if (WishedProducts.length === 0)
    return (
      <div className="Wishlist">
        <h1>{User ? `${User}'s Wishlist` : "Wishlist"}</h1>
        <hr />
        <div className="ContShop">
          <h3>Your Wishlist is Empty</h3>
          <Link to="/">Continue Shopping</Link>
        </div>
      </div>
    );
  return (
    <div className="Wishlist">
      <h1>{User ? `${User}'s Wishlist` : "Wishlist"}</h1>
      <hr />
      <div className="WishScreen">
        {WishedProducts.map((Items) => (
          <div className="WishProduct" key={Items.id}>
            <img src={ImportImage(Items.image)} alt={Items.name} />
            <div className="WishInfo">
              <div>
                <h4>{Items.name}</h4>
                <p>$ {Items.price}</p>
              </div>
              <button onClick={() => AddtoCart(Items)}>
                <MdShoppingCart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
