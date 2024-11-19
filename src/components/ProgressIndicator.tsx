import React from 'react'

const ProgressIndicator = () => {
    return (
      <div className="flex items-center justify-center space-x-4 p-4 bg-red-400 rounded-lg">
        {["Audio", "Video", "Performance"].map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className={`h-6 w-6 rounded-full ${
                index === 1 ? "bg-white border-4" : "bg-gray-200"
              }`}
            ></div>
            <p className="text-white">{item}</p>
          </div>
        ))}
      </div>
    );
  };
  export default ProgressIndicator;
  