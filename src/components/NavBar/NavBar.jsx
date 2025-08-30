import useNavBar from "./useNavBar";
import "./navBar.css";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdHeart,
  IoMdCart,
} from "react-icons/io";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  const {
    HandleButtonState,
    HandleCartButton,
    HandleLogout,
    HandleOrders,
    HandleProfileButton,
    HandleWishButton,
    WishQty,
    CartQty,
    CollectionButtonRef,
    ProfileButtonRef,
    IsLoginShowing,
    IsButtonState,
    CurrentUser
  } = useNavBar();
  return (
    <div>
      <div className="UpperNav">
        <div className="LeftComponent">
          <Link to="/">
            <img src={Logo} alt="Logo" />
            Webia
          </Link>
        </div>
        <div className="MiddleComponent">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <div className="DropDown" ref={CollectionButtonRef}>
            <button onClick={HandleButtonState}>
              Categories
              {IsButtonState ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </button>
            {IsButtonState && (
              <div>
                <Link to="/collection/kids" onClick={HandleButtonState}>
                  Kids
                </Link>
                <Link to="/collection/men" onClick={HandleButtonState}>
                  Mens
                </Link>
                <Link to="/collection/women" onClick={HandleButtonState}>
                  Womens
                </Link>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="RightComponent">
            {CurrentUser ? (
              <button onClick={HandleProfileButton}>
                {CurrentUser}
                {IsLoginShowing ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </button>
            ) : (
              <Link to="/login" className="LoginButton">
                LogIn
              </Link>
            )}
            <button onClick={HandleCartButton}>
              <IoMdCart />
              {CartQty > 0 ? <sup>{CartQty}</sup> : <></>}
            </button>
            <button onClick={HandleWishButton}>
              <IoMdHeart />
              {WishQty > 0 ? <sup>{WishQty}</sup> : <></>}
            </button>
          </div>
          {IsLoginShowing && (
            <div className="ProfileButtons" ref={ProfileButtonRef}>
              <button onClick={HandleOrders}>Orders</button>
              <button onClick={HandleLogout}>LogOut</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
