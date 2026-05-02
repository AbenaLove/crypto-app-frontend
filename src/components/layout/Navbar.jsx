import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon, GlobeEuropeAfricaIcon } from "@heroicons/react/16/solid";
import coinbase_logo from "../../assets/coinbase_logo.svg";
import { useNavigate } from "react-router";
import { api } from "../../api";
import WarningBanner from "../common/WarningBanner";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Silently check if user is logged in
    api.getProfile().then((result) => {
      if (result.message === 'Profile fetched successfully') {
        setUser(result.user);
      }
    });
  }, []);

  const handleLogout = async () => {
    await api.logout();
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <WarningBanner />
      <div className="px-10 py-3 flex items-center justify-between">
        <div>
          <img src={coinbase_logo} alt="Coinbase Logo" className="h-15 w-auto" />
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 hover:bg-gray-100 rounded-md text-black-700 font-bold text-xl">Cryptocurrencies</button>
          <button className="px-4 py-2 hover:bg-gray-100 rounded-md text-black-700 font-bold text-xl" onClick={() => navigate('/explore')}>Prices</button>
          <button className="px-4 py-2 hover:bg-gray-100 rounded-md text-black-700 font-bold text-xl">Businesses</button>
          <button className="px-4 py-2 hover:bg-gray-100 rounded-md text-black-700 font-bold text-xl">Institutions</button>
          <button className="px-4 py-2 hover:bg-gray-100 rounded-md text-black-700 font-bold text-xl">Developers</button>
          <button className="px-4 py-2 hover:bg-gray-100 rounded-md text-black-700 font-bold text-xl">Company</button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 flex items-center justify-center px-4 py-4">
            <MagnifyingGlassIcon className="w-5 h-5 text-black-700" />
          </button>
          <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 flex items-center justify-center px-4 py-4">
            <GlobeEuropeAfricaIcon className="w-5 h-5 text-gray-700" />
          </button>

          {user ? (
            // Logged in — show name + logout
            <>
              <button
                className="bg-gray-200 rounded-full font-bold px-6 py-3"
                onClick={() => navigate('/profile')}
              >
                {user.name}
              </button>
              <button
                className="bg-blue-600 rounded-full text-white font-bold px-6 py-3 hover:bg-blue-700"
                onClick={handleLogout}
              >
                Log out
              </button>
            </>
          ) : (
            // Logged out — show sign in + sign up
            <>
              <button
                className="bg-gray-200 rounded-full hover:bg-gray-300 font-bold px-6 py-3"
                onClick={() => navigate('/signin')}
              >
                Sign in
              </button>
              <button
                className="bg-blue-600 rounded-full hover:bg-blue-700 text-white font-bold px-6 py-3"
                onClick={() => navigate('/signup')}
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;