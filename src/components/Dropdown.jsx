import React, { useState } from "react";

const Dropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        New
      </button>
      {isOpen && (
        <div className="absolute bg-white shadow-md rounded-lg mt-2 w-48">
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
            onClick={() => onSelect("postImage")}
          >
            Post Image
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
            onClick={() => onSelect("postVideo")}
          >
            Post Video
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
