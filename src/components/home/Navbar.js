"use client";
import { useState } from "react";

export default function Navbar() {
  const logoref = "/evp-logo.png";
  const icon = "/drop.png";

  // State for dropdown menus and mobile menu
  const [isOfficeMenuVisible, setOfficeMenuVisible] = useState(false);
  const [isDepartmentMenuVisible, setDepartmentMenuVisible] = useState(false);
  const [isSubDepartmentMenuVisible, setSubDepartmentMenuVisible] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isCommercialMenuVisible, setCommercialMenuVisible] = useState(false); // Fixed spelling

  // Toggle functions
  const toggleOfficeMenu = () => setOfficeMenuVisible((prev) => !prev);
  const toggleDepartmentMenu = () => setDepartmentMenuVisible((prev) => !prev);
  const toggleSubDepartmentMenu = () => setSubDepartmentMenuVisible((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuVisible((prev) => !prev);
  const toggleCommercialMenu = () => setCommercialMenuVisible((prev) => !prev); // Fixed function name and arrow function syntax

  return (
    <nav className="flex justify-between items-center bg-[#003A70] text-white px-6 md:sticky relative md:static top-0 z-50">
      {/* Logo Section */}
      <a href="/" className="flex items-center">
        <img src={logoref} alt="Logo" className="lg:w-[300px] w-[250px] object-contain" />
      </a>

      <button
        onClick={toggleMobileMenu}
        className="lg:hidden flex items-center text-white"
      >
        <img src="/bars.svg" alt="Menu" className="w-6" />
      </button>

      <ul
        className={`lg:flex lg:flex-row lg:space-x-6 items-center text-white text-[17px] ${
          isMobileMenuVisible
            ? "flex flex-col absolute top-full left-0 w-full bg-[#003A70] py-8 z-40"
            : "hidden lg:flex"
        }`}
      >
        <li className="p-4">
          <a href="/" className="font-bold hover:text-gray-400 transition">
            Home
          </a>
        </li>

        <li className="p-4 relative">
          <button onClick={toggleOfficeMenu} className="flex items-center font-bold hover:text-gray-400 transition">
            Offices
            <img src={icon} alt="Toggle" className="ml-2 w-4 transform transition-transform duration-300" />
          </button>
          {isOfficeMenuVisible && (
            <ul className="absolute top-full left-0 mt-2 bg-berkeley border-t-2 border-[#FDB515] shadow-lg w-fit z-50">
              <li className="px-4 py-2">
                <a href="/offices/2024">2024-2025</a>
              </li>
            </ul>
          )}
        </li>

        <li className="p-4 relative">
          <button onClick={toggleDepartmentMenu} className="flex items-center font-bold hover:text-gray-400 transition">
            Departments
            <img src={icon} alt="Toggle" className="ml-2 w-4 transform transition-transform duration-300" />
          </button>
          {isDepartmentMenuVisible && (
            <ul className="absolute top-full left-0 mt-2 bg-berkeley border-t-2 border-[#FDB515] text-white shadow-lg w-48">
              <li className="px-4 py-2 relative">
                <button onClick={toggleSubDepartmentMenu} className="flex items-center w-full text-left">
                  2024-2025
                  <img src={icon} alt="Toggle" className="ml-2 w-4 transform transition-transform duration-300" />
                </button>
                {isSubDepartmentMenuVisible && (
                  <ul className="absolute top-full text-white border-[#FDB515] z-30 shadow-lg bg-berkeley">
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/finance.html">Finance</a>
                    </li>
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/communications.html">Communications</a>
                    </li>
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/legal-affairs.html">Legal Affairs</a>
                    </li>
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/commercial-activities.html">Commercial Activities</a>
                    </li>
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/student-affairs.html">Student Affairs</a>
                    </li>
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/rso.html">RSO Support</a>
                    </li>
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/sswb.html">Student Safety Wellness & Success</a>
                    </li>
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/deib.html">Diversity, Equity, Inclusion & Belonging</a>
                    </li>
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/spaces.html">Spaces</a>
                    </li>
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/ssc.html">Senatorial and Student Affairs Committee</a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        <li className="p-4">
          <a href="/departments/deib/communities.html" className="font-bold hover:text-gray-400 transition">
            DEI Resources
          </a>
        </li>

        <li className="p-4 relative">
          <button onClick={toggleCommercialMenu} className="flex items-center font-bold hover:text-gray-400 transition">
            Commercial Partnerships
            <img src={icon} alt="Toggle" className="ml-2 w-4 transform transition-transform duration-300" />
          </button>
          {isCommercialMenuVisible && (
            <ul className="absolute top-full left-0 mt-2 bg-berkeley border-t-2 border-[#FDB515] text-white shadow-lg w-48">
              <li className="px-4 py-2 hover:text-gray-400">
                <a href="/partnerships/nyt_wsj.html">Free Newspaper Subscriptions</a>
              </li>
            </ul>
          )}
        </li>

        <li className="p-4">
          <a
            href="https://berkeley.zoom.us/j/6685684771?_x_zm_rtaid=MOwFCASdTuqDG7Yo6PLAEw.1736649189758.7b91ccafcde961b05952e5e32cf3d571&_x_zm_rhtaid=781#success"
            className="bg-[#265885] px-8 py-3 font-bold hover:bg-[#1d486a] transition"
          >
            Senate Live
          </a>
        </li>
      </ul>
    </nav>
  );
}
