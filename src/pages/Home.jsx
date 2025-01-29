import { useState, useEffect } from "react";
import Product from "../components/Product";
import SkeletonLoader from "../components/loaders/HomeSkekleton.jsx";
import "./CSS/Home.css";
import { products } from "../data";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulating a network request
  }, []);

  return (
    <div className="overflow-allowed">
      <div className="hero">
        <h1>Welcome to ShoeCommerce</h1>
        <p>Your one-stop shop for the latest shoes!</p>
      </div>
      <div className="container">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {loading
            ? Array(6).fill().map((_, i) => <SkeletonLoader key={i} />)
            : products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                price={product.price}
                image={product.image}
                name={product.name}
                description={product.description}
                rating={product.rating}
                numberOfRating={product.ratingsData.length}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
