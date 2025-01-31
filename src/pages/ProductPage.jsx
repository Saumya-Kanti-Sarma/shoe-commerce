import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Product from "../components/Product";
import { products as allProducts } from "../data";
import "./CSS/ProductPage.css";

export default function ProductPage() {
  const { addToCart, setSelectedProduct } = useContext(CartContext);
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState("");

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    navigate("/buy");
  };

  // Sorting function
  const sortedProducts = [...allProducts].sort((a, b) => {
    if (sortOption === "price-low") return a.price - b.price;
    if (sortOption === "price-high") return b.price - a.price;
    if (sortOption === "rating") return b.rating - a.rating;
    if (sortOption === "most-sold") return b.sold - a.sold;
    return 0;
  });

  return (
    <div className="product-page ">
      <h2 style={{ margin: "10px" }}>All Products</h2>

      {/* Sorting Options */}
      <div className="sort-options">
        <label>Sort By:</label>
        <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating</option>
          <option value="most-sold">Most Sold</option>
        </select>
      </div>

      <div className="product-grid overflow-allowed">
        {sortedProducts.map((product) => (
          <Product
            key={product.id}
            {...product}
            numberOfRating={product.ratingsData.length}
            handleBuyNow={() => handleBuyNow(product)}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}
