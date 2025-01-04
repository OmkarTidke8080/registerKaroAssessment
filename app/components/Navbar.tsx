"use client"
import React, { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="w-full bg-white  shadow-md">
        <div className="flex justify-between  items-center px-4 lg:px-16 h-20 border-b-2 border-black">
          {/* Logo */}
          <div className="logo">
            <div className="flex items-center space-x-1">
              <h1 className="text-2xl font-bold text-blue-800">Register</h1>
              <h1 className="text-2xl font-bold text-yellow-600">Karo</h1>
            </div>
          </div>

          {/* Navigation Elements */}
          <div className="hidden md:flex nav-elements">
            <ul className="flex space-x-8 text-gray-700 text-base font-medium">
              <li className="hover:text-blue-800 cursor-pointer">Home</li>
              <li className="hover:text-blue-800 cursor-pointer">
                Our Services
              </li>
              <li className="hover:text-blue-800 cursor-pointer">About Us</li>
              <li className="hover:text-blue-800 cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300">
              Talk to Expert
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleSidebar}
              className="text-gray-700 text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } w-64 z-50`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-700">Menu</h2>
          <button
            onClick={closeSidebar}
            className="text-gray-700 text-2xl focus:outline-none"
          >
            ×
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-4 text-gray-700 text-base font-medium">
          <li className="hover:text-blue-800 cursor-pointer">Home</li>
          <li className="hover:text-blue-800 cursor-pointer">Our Services</li>
          <li className="hover:text-blue-800 cursor-pointer">About Us</li>
          <li className="hover:text-blue-800 cursor-pointer">Contact</li>
        </ul>
      </div>

      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </>
  );
};

export default Navbar;
