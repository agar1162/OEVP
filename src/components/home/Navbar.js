"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const logoref = "/evp-logo.png";
  const icon = "/drop.png";

  // State for dropdown menus and mobile menu
  const [isOfficeMenuVisible, setOfficeMenuVisible] = useState(false);
  const [isDepartmentMenuVisible, setDepartmentMenuVisible] = useState(false);
  const [isSubDepartmentMenuVisible, setSubDepartmentMenuVisible] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isPartnershipsMenuVisible, setPartnershipMenuVisible] = useState(false); // Fixed spelling
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  // Toggle functions
  const toggleOfficeMenu = () => setOfficeMenuVisible((prev) => !prev);
  const toggleDepartmentMenu = () => setDepartmentMenuVisible((prev) => !prev);
  const toggleSubDepartmentMenu = () => setSubDepartmentMenuVisible((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuVisible((prev) => !prev);
  const togglePartnershipMenu = () => setPartnershipMenuVisible((prev) => !prev); // Fixed function name and arrow function syntax
  

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
        className={`lg:flex lg:flex-row lg:space-x-6 items-center text-white text-md ${
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
            Office
            <img src={icon} alt="Toggle" className="ml-2 w-4 transform transition-transform duration-300 hover:opacity-50" />
          </button>
          {isOfficeMenuVisible && (
            <ul className="absolute top-full left-0 mt-2 bg-berkeley border-t-2 border-[#FDB515] shadow-lg w-fit z-50">
              <li className="px-4 py-2">
                <a href="/office/2024">2024-2025</a>
              </li>
            </ul>
          )}
        </li>

        <li className="p-4 relative">
          <button onClick={toggleDepartmentMenu} className="flex items-center font-bold hover:text-gray-400 transition">
            Departments
            <img src={icon} alt="Toggle" className="ml-2 w-4 transform transition-transform duration-300 hover:opacity-50" />
          </button>
          {isDepartmentMenuVisible && (
            <ul className="absolute top-full left-0 mt-2 bg-berkeley border-t-2 border-[#FDB515] text-white shadow-lg w-48">
              <li className="px-4 py-2 relative">
                <button onClick={toggleSubDepartmentMenu} className="flex items-center w-full text-left">
                  2024-2025
                  <img src={icon} alt="Toggle" className="ml-2 w-4 transform transition-transform duration-300 hover:opacity-50" />
                </button>
                {isSubDepartmentMenuVisible && (
                  <ul className="absolute top-full text-white border-[#FDB515] z-30 shadow-lg bg-berkeley">
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/communications.html">Communications and Public Relations Department</a>
                    </li>
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/finance.html">Finance Department</a>
                    </li>
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/legal-affairs.html">Legal Affairs Department</a>
                    </li>
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/commercial-activities.html">Commercial Activities Department</a>
                    </li>
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/deib.html">Diversity, Equity, Inclusion, and Belonging (DEIB) Department</a>
                    </li>
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/rso.html">Registered Student Organization (RSO) Support Department</a>
                    </li>
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/ssc.html">Senatorial and Committee Affairs Department</a>
                    </li>
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/spaces.html">Spaces Department</a>
                    </li>                                                                                
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/student-affairs.html">Student Affairs Department</a>
                    </li>
                    <li className="px-4 py-2 hover:text-gray-400">
                      <a href="/departments/sswb.html">Student Safety, Wellness, & Success Department</a>
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

        {/* <li className="p-4 relative">
          <button onClick={togglePartnershipMenu} className="flex items-center font-bold hover:text-gray-400 transition">
            Partnerships
            <img src={icon} alt="Toggle" className="ml-2 w-4 transform transition-transform duration-300 hover:opacity-50"/>
          </button>
          {isPartnershipsMenuVisible && (
            <ul className="absolute top-full left-0 mt-2 bg-berkeley border-t-2 border-[#FDB515] text-white shadow-lg w-48">
              <li className="px-4 py-2 hover:text-gray-400">
                <a href="/partnerships/nyt_wsj.html">Free Newspaper Subscriptions</a>
              </li>
            </ul>
          )}
        </li> */}
        <li className="p-4 relative">
          <a
            href="/partnerships"
            onClick={() => setPartnershipsMenuVisible(!isPartnershipsMenuVisible)}
            className="flex items-center font-bold hover:text-gray-400 transition"
          >
            Partnerships
            <img src={icon} alt="Toggle" className="ml-2 w-4 transform transition-transform duration-300 hover:opacity-50" />
          </a>

          {/* Show dropdown only if user is on /partnerships */}
          {pathname === "/partnerships" && isPartnershipsMenuVisible && (
            <ul className="absolute top-full left-0 mt-2 bg-berkeley border-t-2 border-[#FDB515] text-white shadow-lg w-48">
              <li className="px-4 py-2 hover:text-gray-400">
                <a href="/partnerships/nyt_wsj">Free Newspaper Subscriptions</a>
              </li>
            </ul>
          )}
        </li>        

        <li className="p-4">
          <a
            href="https://berkeley.zoom.us/j/6685684771?_x_zm_rtaid=MOwFCASdTuqDG7Yo6PLAEw.1736649189758.7b91ccafcde961b05952e5e32cf3d571&_x_zm_rhtaid=781#success"
            className="bg-[#265885] px-8 py-3 font-bold hover:bg-[#1d486a] transition"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
             {isHovered ?  'Wed. 8pm-10pm' : 'Join Senate Live!' }
          </a>
        </li>
      </ul>
    </nav>
  );
}
