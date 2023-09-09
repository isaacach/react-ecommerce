/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth-service";
import "../styles/navbar.css";
import { CartContext } from "../context/CartContext";
import CartSlider from "./CartSlider";

export default function Navbar() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [category, setCategory] = useState(undefined);
  const { cart } = useContext(CartContext)

  let navigate = useNavigate();

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    this.setState({
      currentUser: undefined,
    });
  };

  const handleClickElectronics = () => {
    setCategory("electronics");
    navigate("/shop", {
      category: category,
    });
  };

  const handleClickJewelry = () => {
    setCategory("jewelry");
    navigate("/shop", {
      state: {
        category,
      },
    });
  };

  return (
    <nav className="navbar">
      <div className="nav-item-wrapper dropdown-one">
        <Link to={"/shop"} className="navbar-brand">
          Shop
        </Link>
        <GoChevronDown className="dropdown-arrow" />
        <div className="dropdown-wrapper-one">
          <p className="nav-item" onClick={handleClickElectronics}>
            Electronics
          </p>
          <p className="nav-item" onClick={handleClickJewelry}>
            Jewelry
          </p>
          <div className="sub-dropdown">
            <p className="nav-item">Clothing</p>
            <GoChevronRight className="sub-dropdown-arrow" />
            <div className="sub-dropdown-wrapper">
              <p>Men's</p>
              <p>Women's</p>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-item-wrapper">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            Home
          </Link>
        </li>
      </div>
      {currentUser ? (
        <div className="with-cart">
          <div className="navbar-item-wrapper dropdown">
            <p>Account</p>
            <GoChevronDown className="dropdown-arrow" />
            <div className="dropdown-wrapper">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  Log out
                </a>
              </li>
            </div>
          </div>
          <div className="cart">
            <RiShoppingCartFill />
            {cart.length > 0 && <p className="cart-count">{cart.length}</p>}
            <CartSlider />
          </div>
        </div>
      ) : (
        <div className="navbar-item-wrapper dropdown">
          <p>Login</p>
          <GoChevronDown className="dropdown-arrow" />
          <div className="dropdown-wrapper">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Register
              </Link>
            </li>
          </div>
        </div>
      )}
    </nav>
  );
}
