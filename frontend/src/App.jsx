import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import { CartContext } from "./context/CartContext";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([])

  return (
    <div className="app">
      <CartContext.Provider value={{ cart, setCart }}>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
      </CartContext.Provider>
    </div>
  );
}
