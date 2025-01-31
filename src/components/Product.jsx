import "./CSS/Product.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

export default function Product({ id, image, name, price, description, rating, numberOfRating }) {
  const navigate = useNavigate();
  const { addToCart, setSelectedProduct } = useContext(CartContext);

  const handleBuyNow = () => {
    setSelectedProduct({ id, image, name, price, description, rating, numberOfRating });
    navigate("/buy");
  };

  const handleAddToCart = (e) => {
    const id = toast.loading("Adding into cart...");
    e.stopPropagation();
    setTimeout(() => {
      toast.dismiss(id);
      toast.success("Item added...")
      addToCart({ id, image, name, price });
    }, 400);
  };

  const generateStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return [...Array(fullStars)].map((_, i) => <span key={i} className="star">★</span>)
      .concat(halfStar ? <span key="half" className="star">☆</span> : []);
  };

  return (
    <div className="product" onClick={() => { navigate(`/product/${id}`); window.location.reload() }} style={{ cursor: "pointer" }}>
      <div className="span-product-img">
        <img src={image} alt={name} className="product-image" />
      </div>
      <h3 className="product-name">{name}</h3>
      <p className="product-description">{description}</p>
      <p>₹{price}</p>
      <p className="product-rating">{generateStars(rating)} <i>({numberOfRating})</i></p>
      <div className="btn-div-card">
        <button className="buy-btn" onClick={handleBuyNow}>BUY NOW</button>
        <button className="cart-btn" onClick={handleAddToCart}>
          <img src="/cart.svg" alt="cart" />
        </button>
      </div>
    </div>
  );
}
