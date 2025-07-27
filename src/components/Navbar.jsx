import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="bg-gray-100 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo and Title */}
                <div className="cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <h1 className="text-lg font-bold text-gray-800">
                        ReactJS Mini Projects
                    </h1>
                </div>

                {/* Nav Links */}
                <div className="flex space-x-4 text-xl font-medium text-gray-700 ">
                    <button onClick={() => navigate("/")} className="hover:text-blue-600 cursor-pointer">
                        Home
                    </button>
                    <button onClick={() => navigate("/projects")} className="hover:text-blue-600 cursor-pointer">
                        Projects
                    </button>
                    <button onClick={() => navigate("/about")} className="hover:text-blue-600 cursor-pointer">
                        About
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
