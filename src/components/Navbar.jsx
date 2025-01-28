import { NavLink } from 'react-router-dom';
import "./CSS/Navbar.css"
export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="logo">
        <img src="/logogreen.png" className='logo-img' />
        ShoeCommerce
      </NavLink>
      <div>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? '#F1F7F7' : '#2CC295', // White when active, DarkGreen otherwise
            margin: '0 10px',
            fontWeight: 'bold',
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? '#F1F7F7' : '#2CC295', // White when active, DarkGreen otherwise
            margin: '0 10px',
            fontWeight: 'bold',
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/cart"
          style={({ isActive }) => ({
            color: isActive ? '#F1F7F7' : '#2CC295', // White when active, DarkGreen otherwise
            margin: '0 10px',
            fontWeight: 'bold',
          })}
        >
          cart
        </NavLink>
      </div>
    </div>
  );
}