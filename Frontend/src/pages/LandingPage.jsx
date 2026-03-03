import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = ({ onSignUpClick }) => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-1 flex-col min-h-screen bg-[#F8FAFC]">
      <div className="flex flex-1 flex-col justify-center items-center">
        
        {/*flex-1 is used to tell that use left space 100% */}
        <div className="flex flex-col items-start">
          {/* Quotes */}
          <span className="font-serif font-bold text-5xl">Radar On.</span>
          <span className="font-serif font-bold text-5xl text-amber-500">
            World Open.
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="currentColor"
            viewBox="0 0 32 16"
          >
            <circle cx="2" cy="8" r="1.5" />
            <circle cx="9" cy="8" r="1.5" />
            <circle cx="16" cy="8" r="1.5" />
            <circle cx="23" cy="8" r="1.5" />
            <circle cx="30" cy="8" r="1.5" />
          </svg>
          <div className="flex gap-2 mt-3">
            <button
            onClick={onSignUpClick}
            className="p-4 bg-blue-500 text-white rounded-3xl font-semibold hover:bg-blue-600">
              Unlock The City for free
            </button>
            <button 
            onClick={() => {navigate('/Login')}}
            className="flex font-semibold p-4 rounded-3xl hover:bg-gray-100">
              I already have an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
