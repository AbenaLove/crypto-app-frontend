import React, { useEffect, useState, useRef } from "react";
import { MagnifyingGlassIcon, GlobeEuropeAfricaIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import coinbase_logo from "../../assets/coinbase_logo.svg";
import { useNavigate } from "react-router";
import { api } from "../../api";
import WarningBanner from "../common/WarningBanner";

const menuItems = [
  {
    label: 'Cryptocurrencies',
    path: '/explore',
    dropdown: null
  },
  {
    label: 'Individuals',
    path: '/learn',
    dropdown: [
      { title: 'Learn', path: '/learn'},
    ]
  },
  {
    label: 'Businesses',
    dropdown: [
      { title: 'Coinbase Commerce', desc: 'Accept crypto payments' },
      { title: 'Coinbase Prime', desc: 'Institutional trading' },
    ]
  },
  {
    label: 'Institutions',
    dropdown: [
      { title: 'Asset management', desc: 'Manage crypto portfolios' },
      { title: 'Custody', desc: 'Secure digital asset storage' },
    ]
  },
  {
    label: 'Developers',
    dropdown: [
      { title: 'Documentation', desc: 'Build with our APIs' },
      { title: 'Developer tools', desc: 'SDKs and resources' },
    ]
  },
  {
    label: 'Company',
    dropdown: [
      { title: 'About', desc: 'Our mission and story' },
      { title: 'Careers', desc: 'Join the team' },
      { title: 'Blog', desc: 'Latest news and updates' },
    ]
  },
];

function Navbar() {
  const [user, setUser] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  useEffect(() => {
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

  // Keep dropdown open while moving mouse between button and dropdown
  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 top-0">
      <WarningBanner />

      <div className="px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="cursor-pointer flex-shrink-0" onClick={() => navigate('/')}>
          <img src={coinbase_logo} alt="Coinbase Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => item.path && navigate(item.path)}
                className="px-3 py-2 hover:bg-gray-100 rounded-lg text-gray-700 font-medium text-sm flex items-center gap-1 transition"
              >
                {item.label}
                {item.dropdown && (
                  <span className={`text-xs transition-transform duration-200 ${activeMenu === item.label ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                )}
              </button>

              {/* Dropdown */}
              {item.dropdown && activeMenu === item.label && (
                <div
                  className="absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 min-w-64 z-50"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown.map((sub) => (
                    <div
                      key={sub.title}
                      onClick={() => {
      if (sub.path) navigate(sub.path);
      setActiveMenu(null);
    }}
                      className="flex flex-col px-3 py-3 rounded-xl hover:bg-gray-50 cursor-pointer transition"
                    >
                      <span className="font-semibold text-sm text-gray-900">{sub.title}</span>
                      <span className="text-xs text-gray-500 mt-0.5">{sub.desc}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side — icons + auth buttons */}
        <div className="flex items-center gap-2">

          {/* Icon buttons */}
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <MagnifyingGlassIcon className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <GlobeEuropeAfricaIcon className="w-4 h-4 text-gray-600" />
          </button>

          {/* Auth buttons — hidden on mobile */}
          <div className="hidden sm:flex items-center gap-2">
            {user ? (
              <>
                <button
                  className="bg-gray-100 hover:bg-gray-200 rounded-full font-semibold px-4 py-2 text-sm transition"
                  onClick={() => navigate('/profile')}
                >
                  {user.name}
                </button>
                <button
                  className="bg-blue-600 rounded-full text-white font-semibold px-4 py-2 text-sm hover:bg-blue-700 transition"
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <button
                  className="bg-gray-100 hover:bg-gray-200 rounded-full font-semibold px-4 py-2 text-sm transition"
                  onClick={() => navigate('/signin')}
                >
                  Sign in
                </button>
                <button
                  className="bg-blue-600 rounded-full hover:bg-blue-700 text-white font-semibold px-4 py-2 text-sm transition"
                  onClick={() => navigate('/signup')}
                >
                  Sign up
                </button>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen
              ? <XMarkIcon className="w-5 h-5 text-gray-700" />
              : <Bars3Icon className="w-5 h-5 text-gray-700" />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                if (item.path) navigate(item.path);
                setMobileOpen(false);
              }}
              className="text-left px-3 py-3 rounded-xl hover:bg-gray-50 font-medium text-gray-800 text-sm transition"
            >
              {item.label}
            </button>
          ))}

          <hr className="border-gray-100 my-2" />

          {user ? (
            <>
              <button
                className="text-left px-3 py-3 rounded-xl hover:bg-gray-50 font-medium text-gray-800 text-sm"
                onClick={() => { navigate('/profile'); setMobileOpen(false); }}
              >
                My Profile
              </button>
              <button
                className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-semibold"
                onClick={handleLogout}
              >
                Log out
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <button
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm font-semibold"
                onClick={() => { navigate('/signin'); setMobileOpen(false); }}
              >
                Sign in
              </button>
              <button
                className="flex-1 bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-semibold"
                onClick={() => { navigate('/signup'); setMobileOpen(false); }}
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;