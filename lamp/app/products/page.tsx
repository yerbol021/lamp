"use client";
import React, { useState, useEffect } from "react";
import "./products.css";

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 1500); // Change image every 1.5 seconds
    return () => clearInterval(intervalId); // Cleanup function to clear interval on component unmount
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="products_ru">
      <p>lamp types</p>
      <div className="products-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{ display: index === currentIndex ? "block" : "none" }}
          />
        ))}
        <div className="bullet-points">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
