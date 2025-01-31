import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import "./CSS/Navbar.css";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div className="navbar">
      <NavLink to="/" className="logo" style={({ isActive }) => ({ color: isActive ? "#F1F7F7" : "#2CC295" })}>
        <img src="/logogreen.png" className="logo-img" />
        ShoeCommerce
      </NavLink>
      <div>
        <NavLink
          to="/products"
          className="nav-link"
          style={({ isActive }) => ({ color: isActive ? "#F1F7F7" : "#2CC295" })}
        >Products</NavLink>

        <NavLink
          to="/cart"
          className="nav-link cart-link"
          style={({ isActive }) => ({ color: isActive ? "#F1F7F7" : "#2CC295" })}
        >
          Cart
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </NavLink>
        <NavLink
          to="/about"
          className="nav-link"
          style={({ isActive }) => ({ color: isActive ? "#F1F7F7" : "#2CC295" })}
        >
          About
        </NavLink>
      </div>
    </div>
  );
};
