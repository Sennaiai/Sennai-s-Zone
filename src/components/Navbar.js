import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle link click
  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="bg-[#d3dbc2] text-[#2f2f1d] px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Site Name / Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide hover:underline">
          Sennai's Zone
        </Link>

        {/* Dropdown Menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-lg font-medium hover:underline"
          >
            Pages ▾
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-md text-sm w-48 z-10">
              <Link to="/writing" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-[#eef2d9]">Writing</Link>
              <Link to="/portfolio" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-[#eef2d9]">Portfolio</Link>
              <Link to="/interests" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-[#eef2d9]">Interests</Link>
              <Link to="/visuals" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-[#eef2d9]">Visuals</Link>
              <Link to="/cv" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-[#eef2d9]">CV</Link>
              <Link to="/certificates" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-[#eef2d9]">Certificates</Link>
              <Link to="/commerce" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-[#eef2d9]">Commerce</Link>
              <Link to="/patron" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-[#eef2d9]">Patron</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
