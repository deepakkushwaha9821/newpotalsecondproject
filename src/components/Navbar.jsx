import React from "react";
import { FaRegBell, FaRegCommentDots } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        className="border px-4 py-2 rounded-lg w-1/3 outline-none focus:ring-2 focus:ring-blue-300"
      />

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Message Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FaRegCommentDots className="w-6 h-6" />
        </button>

        {/* Bell Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <FaRegBell className="w-6 h-6" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            1
          </span>
        </button>

        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </nav>
  );
}

export default Navbar;
