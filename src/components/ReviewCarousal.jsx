'use client'
import React, { useState } from "react";

const reviewsData = [
  {
    name: "Sanjay Roy",
    country: "Bangladesh",
    text: "Incredible leather goods with rich texture. The care guidelines were helpful, and the product looks amazing.",
  },
  {
    name: "Ayesha Khan",
    country: "Bangladesh",
    text: "Love my new handbag. The craftsmanship is flawless, though delivery was a bit late.",
  },
  {
    name: "Rafiq Hassan",
    country: "Bangladesh",
    text: "Amazing quality leather wallet, looks so authentic. I'm really impressed with the fine craftsmanship.",
  },
];

export default function CarouselReviews() {
  // Track which review is active
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the previous review (with wrap-around)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

  // Move to the next review (with wrap-around)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Go directly to a specific slide (when clicking dots)
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-[#F5D9A3] py-16 px-6 md:px-20">
      <h2 className="text-center text-4xl font-bold text-[#6B3B14] mb-8">
        REVIEWS
      </h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
        {/* Inner Wrapper for slides */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${reviewsData.length * 100}%`,
          }}
        >
          {reviewsData.map((review, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full flex flex-col items-center justify-center text-center px-4"
            >
              <div className="w-16 h-16 bg-black rounded-full mb-3"></div>
              <h3 className="text-lg font-bold mt-3">{review.name}</h3>
              <p className="text-sm font-semibold text-gray-700">
                ({review.country})
              </p>
              <p className="mt-3 text-gray-800 max-w-md">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {reviewsData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-yellow-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
