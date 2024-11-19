"use client"
import { useState } from "react";

const Checklist = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheck = (item: string) => {
    setCheckedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const options = [
    "Video was blurry",
    "Sound wasn’t working",
    "App was crashing",
    "Else",
  ];

  return (
    <div className="p-4 bg-purple-700 rounded-lg text-white">
      <p className="mb-2">What didn’t work properly?</p>
      <div>
        {options.map((option, index) => (
          <label key={index} className="block">
            <input
              type="checkbox"
              value={option}
              checked={checkedItems.includes(option)}
              onChange={() => handleCheck(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};
export default Checklist;
