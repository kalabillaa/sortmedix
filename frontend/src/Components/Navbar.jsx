import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBriefcaseMedical } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { context } from '../index.js';
import axios from 'axios';
import { toast } from 'react-toastify';
import LanguageSwitcher from './LanguageSwitcher'; // Import the LanguageSwitcher

const Navbar = () => {
  const location = useLocation(); // Get the current route path
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const { isAuthenticated, setIsAuthenticated } = useContext(context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };

  // Determine which link is active based on the current route
  const isActive = (path) => location.pathname === path;

  return (
    <nav className='bg-gray-100 shadow-md'>
      <div className='flex justify-between items-center p-4'>
        {/* Logo */}
        <div className='flex items-center'>
          <Link to="/" className='flex items-center gap-2'>
            <FaBriefcaseMedical className='text-2xl md:text-3xl text-blue-600' />
            <span className='text-xl md:text-3xl font-bold text-blue-600'>SortMedic</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-gray-600 hover:text-gray-800 focus:outline-none'
          >
            {isOpen ? <HiX className='w-6 h-6' /> : <HiMenu className='w-6 h-6' />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className='hidden md:flex space-x-8'>
          <Link
            to="/"
            className={`px-4 py-2 text-lg font-medium transition-colors duration-300 ${isActive('/') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          >
            Home
          </Link>
          <Link
            to="/appointment"
            className={`px-4 py-2 text-lg font-medium transition-colors duration-300 ${isActive('/appointment') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          >
            Appointment
          </Link>
          <Link
            to="/about"
            className={`px-4 py-2 text-lg font-medium transition-colors duration-300 ${isActive('/about') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          >
            About Us
          </Link>

          <Link 
            to = "/symptomchecker"
            className={`px-4 py-2 text-lg font-medium transition-colors duration-300 ${isActive('/symptomchecker') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          
          >
            Symptom Checker
          </Link>
        </div>

        {/* Language Switcher and Auth Buttons */}
        <div className='flex items-center space-x-4'>
          <LanguageSwitcher /> 

          {isAuthenticated ? (
            <div className='hidden md:flex'>
              <button onClick={handleLogout} className='bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
                Logout
              </button>
            </div>
          ) : (
            <div className='hidden md:flex'>
              <button onClick={goToLogin} className='bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
                Login
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu (Hidden by default, shown when `isOpen` is true) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-100`}>
        <Link
          to="/"
          className={`block px-4 py-2 text-lg font-medium ${isActive('/') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/appointment"
          className={`block px-4 py-2 text-lg font-medium ${isActive('/appointment') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          onClick={() => setIsOpen(false)}
        >
          Appointment
        </Link>
        <Link
          to="/about"
          className={`block px-4 py-2 text-lg font-medium ${isActive('/about') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
        <Link to="/login">
          <button className='w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
            Login
          </button>
        </Link>

        <Link to="/symptomchecker">
          <button className='w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
            symptom checker
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
