import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-64 bg-gray-900 text-white p-5 h-screen">
      <h2 className="text-lg font-bold">Menu</h2>
      <ul className="mt-4 space-y-2">
        <li>
          <Link to="/" className="block py-2 px-4 hover:bg-gray-700">Dashboard</Link>
        </li>

        {/* Dropdown for "New" */}
        <li className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="block w-full text-left py-2 px-4 hover:bg-gray-700"
          >
            New ▼
          </button>

          {isDropdownOpen && (
            <ul className="bg-gray-800 mt-1 rounded shadow-lg">
              <li>
                <Link to="/new/post-image" className="block py-2 px-4 hover:bg-gray-700">Post New Post</Link>
              </li>
              <li>
                <Link to="/new/post-video" className="block py-2 px-4 hover:bg-gray-700">Post Video</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/manage" className="block py-2 px-4 hover:bg-gray-700">Manage</Link>
        </li>
        <li>
          <Link to="/newspaper" className="block py-2 px-4 hover:bg-gray-700">Newspaper</Link>
        </li>
        <li>
          <Link to="/profile" className="block py-2 px-4 hover:bg-gray-700">Profile</Link>
        </li>
        <li>
          <Link to="/setting" className="block py-2 px-4 hover:bg-gray-700">Setting</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
