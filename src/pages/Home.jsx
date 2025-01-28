import Product from "../components/Product";
import "./CSS/Home.css"
import { products } from "../data";

export default function Home() {
  return (
    <div className="overflow-allowed">
      <div className="hero">
        <h1>Welcome to ShoeCommerce</h1>
        <p>Your one-stop shop for the latest shoes!</p>
      </div>
      <div className="container">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
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