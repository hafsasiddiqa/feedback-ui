"use client"
import { useState } from "react";

const StarRating: React.FC = () => {
  const [rating, setRating] = useState<number>(0); // Explicitly typing the state

  return (
    <div className="p-4 bg-pink-400 rounded-lg text-center">
      <p className="mb-4 text-white">How do you rate our services</p>
      <div className="flex justify-center space-x-2 relative">
        {Array.from({ length: 5 }, (_, index) => {
          const star = index + 1; // Star value (1 to 5)
          return (
            <div key={star} className="flex flex-col items-center">
              <button
                onClick={() => setRating(star)}
                className={`text-3xl ${
                  star <= rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </button>
              {star === 1 && (
                <span className="text-xs text-white mt-1">Bad</span>
              )}
              {star === 5 && (
                <span className="text-xs text-white mt-1">Good</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;


