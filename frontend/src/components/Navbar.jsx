import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthService from "../services/auth-service";
import "../styles/navbar.css";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

export default function Navbar() {
  const [currentUser, setCurrentUser] = useState(undefined);

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

  return (
    <nav className="navbar">
      <div className="nav-item-wrapper dropdown-one">
        <Link to={"/shop"} className="navbar-brand">
          Shop
        </Link>
        <GoChevronDown className="dropdown-arrow" />
        <div className="dropdown-wrapper-one">
          <p className="nav-item">Electronics</p>
          <p className="nav-item">Jewelry</p>
          <div className="sub-dropdown">
            <p className="nav-item">Clothing</p>
            <GoChevronRight className="sub-dropdown-arrow"/>
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
        <div className="navbar-item-wrapper dropdown">
          <p>Account</p>
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
