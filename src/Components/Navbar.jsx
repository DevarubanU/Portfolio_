import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="flex justify-between items-center px-8 py-5 shadow-md">
      <h1 className="text-2xl font-bold text-blue-500">Devaruban</h1>
      <ul className="hidden md:flex gap-8 font-medium">
        <li className="mr-6">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>``
        </li>
        <li className="mr-6">
          <Link to="/project" className="hover:text-blue-500">
            Projects
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/achievements" className="hover:text-blue-500">
            Achievements
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/event" className="hover:text-blue-500">
            Event Organized
          </Link>
        </li>
      </ul>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-lg bg-blue-500 text-white"
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
};

export default Navbar;
