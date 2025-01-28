import React, { useState } from "react";
import "./CSS/ProductDetailCard.css";
import { products } from "../data";
import Product from "../components/Product.jsx";

export default function ProductDetailCard({ product }) {

  const [large, setLarge] = useState("none");
  const [productListLength, setProductListLength] = useState(3);
  const [reviewIndex, setReviewIndex] = useState(3);
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
              </span>
            </div>
          </div>
          <div className="btn-div-card">
            <button className="buy-btn" >BUY NOW</button>
            <button className="cart-btn"><img src="/cart.svg" /></button>
          </div>
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
        <button onClick={() => {
          reviewIndex == product.ratingsData ? setReviewIndex(product.ratingsData) : setReviewIndex(reviewIndex + 3);
        }} className="load-more">Load more...</button>
        <hr />
        <h3>Check Similar Products:</h3>
        <div className="product-grid-details">
          {products.slice(0, productListLength).map((item) => (
            <Product
              key={item.id}
              id={item.id}
              image={'/' + item.image}
              name={item.name}
              description={item.description}
              rating={item.rating}
              numberOfRating={item.ratingsData.length}
            />
          ))}
        </div>
        <button onClick={() => {
          productListLength == product.length ? setProductListLength(product.length) : setProductListLength(productListLength + 3);
        }} className="load-more">Load more...</button>
        <div className="image-largen"
          style={{ display: large }}
          onClick={largenImg}
        >
          <img src={"/" + product.image} />
        </div>
      </div>
    </>
  );
}
