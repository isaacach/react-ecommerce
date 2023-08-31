import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthService from "../services/auth-service";
import "../styles/navbar.css";

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
      <Link to={"/shop"} className="navbar-brand">
        Shop
      </Link>
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
        <div className="navbar-item-wrapper">
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
      )}
    </nav>
  );
}
