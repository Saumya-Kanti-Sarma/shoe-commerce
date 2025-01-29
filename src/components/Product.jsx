import "./CSS/Product.css"
import { useNavigate } from "react-router-dom";

export default function Product({ id, image, name, price, description, rating, numberOfRating }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  const generateStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star">★</span>);
    }

    if (halfStar) {
      stars.push(<span key={fullStars} className="star">☆</span>);
    }

    return stars;
  };

  return (
    <div className="product" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-description">{description}</p>
      <p style={{ margin: "none" }}>₹{price}</p>
      <p className="product-rating">{generateStars(rating)} <i>({numberOfRating})</i></p>
      <div className="btn-div-card">
        <button className="buy-btn" >BUY NOW</button>
        <button className="cart-btn"><img src="/cart.svg" /></button>
      </div>
    </div>
  );
}

