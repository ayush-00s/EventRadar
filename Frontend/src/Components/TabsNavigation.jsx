import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const TabsNavigation = ({ onSignUpClick, onLogInClick }) => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(
    sessionStorage.getItem('showSearch') === 'true'  // read on mount
  );
  const searchRef = useRef(null);

  // used to autofocus on the search bar  
  useEffect(() => {
    if (showSearch && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showSearch]);

  const handleExplore = () => {
    sessionStorage.setItem('showSearch', 'true');    // save it
    setShowSearch(true);
    navigate('/Home');
  };

  const handleClose = () => {
    sessionStorage.removeItem('showSearch');          // clear it
    setShowSearch(false);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-[#f5f7fa] drop-shadow-md">
      {/* Logo + Explore */}
      <div className="flex flex-row gap-2 items-center">
        <Link to="/"
        onClick={handleClose}>
        <img
          src="#"
          alt="EventRadar"
          className="p-2 rounded-2xl border-2 w-10 h-10"
        /></Link>
        <button
          onClick={handleExplore}
          className="p-4 rounded-3xl transition-colors hover:bg-gray-200 active:scale-95"
        >
          Explore
        </button>
      </div>

      {/* RIGHT SIDE — Search bar OR Menu */}
      <div className="flex flex-row flex-1 items-center justify-end">
        {showSearch ? (
          // 🔍 SEARCH BAR 
          <div className="flex flex-1 items-center gap-2 mx-4">
            <input
              ref={searchRef}
              type="text"
              placeholder="🔍Search events..."
              className="border border-gray-300 rounded-3xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        ) : (
          // 📋 NORMAL MENU
          <ul className="flex flex-row items-center">
            <li>
              <a
                href="/About"
                className="p-4 rounded-3xl transition-colors hover:bg-gray-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/Events"
                className="p-4 rounded-3xl transition-colors hover:bg-gray-200"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="p-4 rounded-3xl transition-colors hover:bg-gray-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/create"
                className="p-4 rounded-3xl transition-colors hover:bg-gray-200"
              >
                Create
              </a>
            </li>
          </ul>
        )}

        {/* Login / Signup*/}
        <div className="flex shrink-0">
          <button 
          onClick={onLogInClick}
          className="text-center w-28 p-2 border rounded-2xl ml-1.5 bg-[#1F2937] text-white transition-all duration-200 hover:bg-[#111827] hover:shadow-lg active:scale-95">
            Log in
          </button>
          <button
          onClick={onSignUpClick}
          className="text-center w-28 p-2 border rounded-2xl ml-1.5 bg-slate-400 text-white transition-all duration-200 hover:bg-slate-500 hover:shadow-lg active:scale-95">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabsNavigation;
