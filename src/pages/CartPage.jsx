import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CSS/CartPage.css";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleBuyNow = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Proceeding to checkout!");
    // You can navigate to a checkout page later
  };

  return (
    <div className="cart-page overflow-allowed">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3><Link to={"/product/" + item.id}>{item.name}</Link></h3>
                  <p className="cart-description">{item.description}</p>
                  <p className="cart-price">₹{item.price}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price and Buy Now */}
          <div className="cart-footer">
            <h3>Total: ₹{totalPrice}</h3>
            <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </>
      )}
      <br />
      <br />
      <br />
    </div>
  );
}
