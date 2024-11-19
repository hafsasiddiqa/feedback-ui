"use client"
import { useState } from "react";

const ExperienceRating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="p-4 bg-purple-500 rounded-lg text-center">
      <p className="mb-2 text-white">Rate your experience</p>
      <div className="flex justify-center space-x-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setRating(num)}
            className={`h-10 w-10 rounded-full ${
              num === rating ? "bg-white text-purple-500" : "bg-gray-400"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};
export default ExperienceRating;

