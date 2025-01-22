"use client";
import { useState } from "react";

export default function Navbar() {
  const logoref = "/evp-logo.png";
  const icon = "/down.svg";

  // State for dropdown menus and mobile menu
  const [isOfficeMenuVisible, setOfficeMenuVisible] = useState(false);
  const [isDepartmentMenuVisible, setDepartmentMenuVisible] = useState(false);
  const [isSubDepartmentMenuVisible, setSubDepartmentMenuVisible] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Toggle functions
  const toggleOfficeMenu = () => setOfficeMenuVisible((prev) => !prev);
  const toggleDepartmentMenu = () => setDepartmentMenuVisible((prev) => !prev);
  const toggleSubDepartmentMenu = () => setSubDepartmentMenuVisible((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuVisible((prev) => !prev);


  return (
    <nav className="flex justify-between items-center bg-[#003A70] text-white py-4 px-6 sticky top-0 z-50">
      {/* Logo Section */}
      <a href="/" className="flex items-center">
        <img src={logoref} alt="Logo" className="lg:w-[300px] w-[250px] object-contain" />
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
            {/* 
               <img src={icon} alt="Toggle" className="ml-2 w-4" />

            */}
            <img 
              src={icon} 
              alt="Toggle" 
              className={'ml-2 w-4 transform transition-transform duration-300'} 
                />

          </button>
          {isDepartmentMenuVisible && (
            <ul
              className="absolute top-full left-0 mt-2 bg-berkeley border-t-2 border-[#FDB515] text-white shadow-lg w-48"
              style={{ pointerEvents: "auto" }}
            >
              <li className="px-4 py-2  relative">
                <button
                  onClick={toggleSubDepartmentMenu}
                  className="flex items-center w-full text-left"
                >
                  2024-2025
                  <img 
                    src="/down.svg" 
                    alt="Toggle" 
                    className={'ml-2 w-4 transform transition-transform duration-300'} 
                  />
                </button>
                {isSubDepartmentMenuVisible && (
                  <ul
                    className="absolute top-0 top-full text-white border-t-2 border-[#FDB515] shadow-lg mt-4 bg-berkeley"
                    style={{ pointerEvents: "auto" }}
                  >
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="/departments/finance.html">Finance</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="/departments/communications.html">Communications</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="/departments/legal-affairs.html">Legal Affairs</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="/departments/commercial-activities.html">Commercial Activities</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="/departments/student-affairs.html">Student Affairs</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="/departments/rso.html">RSO Support</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="/departments/sswb.html">Student Safety Wellness & Success</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="/departments/deib.html">Diversity, Equity, Inclusion & Belonging</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="/departments/spaces.html">Spaces</a>
                    </li>
                  </ul>
                )}
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
            href="/departments/deib/communities.html"
            className="text-lg font-bold hover:text-gray-400 transition"
          >
            DEI Initiatives
          </a>
        </li>

        {/* Offices Dropdown */}
        <li className="p-4 relative">
          <button
            onClick={toggleOfficeMenu}
            className="flex items-center text-lg font-bold hover:text-gray-400 transition"
          >
            Offices
            <img 
              src={icon} 
              alt="Toggle" 
              className={`ml-2 w-4 transform transition-transform duration-300`} 
                />
          </button>
          {isOfficeMenuVisible && (
            <ul className="absolute top-full left-0 mt-2 bg-berkeley border-t-2 border-[#FDB515] shadow-lg w-48">
              <li className="px-4 py-2">
                <a href="/offices/2024">2024-2025</a>
              </li>
            </ul>
          )}
        </li>

        <li className="p-4">
          <a href="https://berkeley.zoom.us/j/6685684771?_x_zm_rtaid=MOwFCASdTuqDG7Yo6PLAEw.1736649189758.7b91ccafcde961b05952e5e32cf3d571&_x_zm_rhtaid=781#success" className="bg-[#265885] px-6 py-2 rounded-md text-lg font-bold hover:bg-[#1d486a] transition">
            Senate Meeting
          </a>
        </li>
      </ul>
    </nav>
  );
}
