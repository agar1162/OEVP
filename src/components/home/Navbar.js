"use client";
import { useState } from "react";

export default function Navbar() {
  const logoref = "/evp-logo.png";
  const icon = "/down.svg";

  // State for dropdown menus and mobile menu
  const [isOfficeMenuVisible, setOfficeMenuVisible] = useState(false);
  const [isDepartmentMenuVisible, setDepartmentMenuVisible] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Toggle functions
  const toggleOfficeMenu = () => setOfficeMenuVisible((prev) => !prev);
  const toggleDepartmentMenu = () => setDepartmentMenuVisible((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuVisible((prev) => !prev);

  return (
    <nav className="flex justify-between items-center bg-[#003A70] text-white py-4 px-6 sticky top-0 z-50">
      {/* Logo Section */}
      <a href="/" className="flex items-center">
        <img src={logoref} alt="Logo" className="w-[150px] object-contain" />
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden flex items-center text-white"
      >
        <img src="/bars.svg" alt="Menu" className="w-6" />
      </button>

      {/* Navigation Links */}
      <ul
        className={`lg:flex lg:flex-row lg:space-x-6 items-center text-white ${
          isMobileMenuVisible
            ? "flex flex-col absolute top-full left-0 w-full bg-[#003A70] py-8 z-40"
            : "hidden lg:flex"
        }`}
      >
        <li className="p-4">
          <a
            href="/"
            className="text-lg font-bold hover:text-gray-400 transition"
          >
            Home
          </a>
        </li>

        {/* Departments Dropdown */}
        <li className="p-4 relative">
          <button
            onClick={toggleDepartmentMenu}
            className="flex items-center text-lg font-bold hover:text-gray-400 transition"
          >
            Departments
            <img src={icon} alt="Toggle" className="ml-2 w-4" />
          </button>
          {isDepartmentMenuVisible && (
            <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg w-48">
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="/departments/finance">Finance</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="/departments/communications">Communications</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="/departments/legal-affairs">Legal Affairs</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="/departments/commercial-activities">Commercial Activities</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="/departments/student-affairs">Student Affairs</a>
              </li>
            </ul>
          )}
        </li>

        <li className="p-4">
          <a
            href="/resources"
            className="text-lg font-bold hover:text-gray-400 transition"
          >
            Resources
          </a>
        </li>

        <li className="p-4">
          <a
            href="/partnerships"
            className="text-lg font-bold hover:text-gray-400 transition"
          >
            Partnerships
          </a>
        </li>

        {/* Offices Dropdown */}
        <li className="p-4 relative">
          <button
            onClick={toggleOfficeMenu}
            className="flex items-center text-lg font-bold hover:text-gray-400 transition"
          >
            Offices
            <img src={icon} alt="Toggle" className="ml-2 w-4" />
          </button>
          {isOfficeMenuVisible && (
            <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg w-48">
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="/offices/2024">2024-2025</a>
              </li>
            </ul>
          )}
        </li>

        <li className="p-4">
          <button className="bg-[#265885] px-6 py-2 rounded-md text-lg font-bold hover:bg-[#1d486a] transition">
            Partner With Us
          </button>
        </li>
      </ul>
    </nav>
  );
}
