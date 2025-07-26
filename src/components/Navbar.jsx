import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h1 className="text-xl font-bold text-gray-800">ReactJS Mini Projects</h1>
        </div>

        {/* Optional navigation items (expandable if needed) */}
        <div className="hidden md:flex gap-6 text-gray-700 text-sm font-medium">
          <button
            onClick={() => navigate("/")}
            className="hover:text-blue-600 transition"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/about")}
            className="hover:text-blue-600 transition"
          >
            About
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="hover:text-blue-600 transition"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
