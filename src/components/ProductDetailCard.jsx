import React, { useEffect, useState } from "react";
import "./CSS/ProductDetailCard.css";
import { products } from "../data";
import Product from "../components/Product.jsx";
import SkeletonLoader from "../components/loaders/HomeSkekleton.jsx";
import LoadingSpinner from "../components/loaders/LoadingSpinner.jsx";
export default function ProductDetailCard({ product }) {

  const [large, setLarge] = useState("none");
  const [ratingSpinnerDisplay, setratingSpinnerDisplay] = useState("none");
  const [productSpinnerDisplay, setProductSpinnerDisplay] = useState("none");
  const [productListLength, setProductListLength] = useState(4);
  const [reviewIndex, setReviewIndex] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulating a network request
  }, []);
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
  const largenImg = () => {
    large == "none" ? setLarge("") : setLarge("none");
  }
  return (
    <>
      <div className="overflow-allowed">
        <div className="product-detail-card">
          <div className="product-detail-left">
            <img className="product-detail-image" src={"/" + product.image}
              onClick={largenImg}
              alt={product.name} />
          </div>
          <div className="product-detail-right">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-description">{product.description}</p>
            <div className="product-detail-rating">
              <span style={{ color: "#FFD700" }}>
                Rating: {generateStars(product.rating)}
                <p style={{ color: "#fff" }}>₹{product.price}</p>
              </span>
            </div>
          </div>
        </div>
        <div className="btn-div-card">
          <button className="buy-btn" >BUY NOW</button>
          <button className="cart-btn"><img src="/cart.svg" /></button>
        </div>

        {/* Separate div for reviews */}
        <div className="product-reviews">
          <h3>Customer Reviews:</h3>
          <hr />
          {product.ratingsData.slice(0, reviewIndex).map((review, index) => (
            <div key={index} className="review">
              <div className="review-header">

                <img className="reviewer-img"
                  src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                  alt="Reviewer" />
                <div className="reviewer-info">
                  <p className="reviewer-name">
                    {review.name} || {generateStars(review.star)}

                  </p>
                  <p className="review-text">{review.review}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
        <LoadingSpinner display={ratingSpinnerDisplay}></LoadingSpinner>

        <button
          onClick={() => {
            setratingSpinnerDisplay("");
            setTimeout(() => {
              reviewIndex == product.ratingsData.length ? setReviewIndex(product.ratingsData) : setReviewIndex(reviewIndex + 3);
              setratingSpinnerDisplay("none");
              console.log(product.ratingsData.length);

            }, 1200);
          }}
          style={{ display: reviewIndex >= product.ratingsData.length ? "none" : "" }}
          className="load-more">
          Load more...
        </button>

        <hr />
        <h3>Check Similar Products:</h3>
        <div className="product-grid-details">
          {loading
            ? Array(6).fill().map((_, i) => <SkeletonLoader key={i} />)
            : products.slice(0, productListLength).map((product) => (
              <Product
                key={product.id}
                id={product.id}
                image={'/' + product.image}
                name={product.name}
                description={product.description}
                rating={product.rating}
                price={`${product.price}`}
                numberOfRating={product.ratingsData.length}
              />
            ))}
        </div>

        <LoadingSpinner display={productSpinnerDisplay}></LoadingSpinner>
        <button
          onClick={() => {
            setProductSpinnerDisplay(""); // Show loading spinner
            setTimeout(() => {
              setProductListLength((prev) => {
                const newLength = prev + 3;
                return newLength >= products.length ? products.length : newLength;
              });
              setProductSpinnerDisplay("none"); // Hide spinner
            }, 800);
          }}
          className="load-more"
          style={{ display: productListLength >= products.length ? "none" : "" }} // Use `products.length`
        >
          Load more...
        </button>
        <div className="image-largen"
          style={{ display: large }}
          onClick={largenImg}
        >
          <img src={"/" + product.image} />
        </div>
        <br />
        <br />
        <br />
        <hr />
      </div>
    </>
  );
}
