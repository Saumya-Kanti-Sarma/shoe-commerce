import { useParams } from "react-router-dom";
import { products } from "../data";
import ProductDetailCard from "../components/ProductDetailCard";
import Product from "../components/Product";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id.replace("id:", ""), 10));

  if (!product) {
    return <h2>Product not found!</h2>;
  };

  return (
    <div className="product-detail-page">
      <ProductDetailCard product={product} />
      <hr />
      <div className="container">
        <h2>Check Similar Products:</h2>
        <div className="product-grid">
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              image={"/" + product.image}
              name={product.name}
              description={product.description}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
