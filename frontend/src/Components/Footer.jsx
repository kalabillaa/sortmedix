import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-14">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">SortMedic Healthcare</p>
            <p className="mb-2">123 Rural Health Street,</p>
            <p className="mb-2">New Delhi, India</p>
            <p className="mb-2">Email: contact@sortmedic.com</p>
            <p>Phone: +91 9876543210</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-blue-500">About Us</Link></li>
              <li><Link to="/appointment" className="hover:text-blue-500">Appointment</Link></li>
              <li><Link to="/contact-us" className="hover:text-blue-500">Contact Us</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaLinkedinIn className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center p-5 text-gray-400">
          <p>© 2024 SortMedic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
