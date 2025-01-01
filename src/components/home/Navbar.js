'use client';
import SearchBar from "./Search";
import { useState } from "react";

export default function Navbar() {
    const item = (name, link) => {
        return (
            <li className="p-4 sm:p-6 md:p-8 flex items-center text-white">
                <a href={link} className="flex items-center text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl hover:text-gray-500 font-bold">
                    {name}
                </a>
            </li>
        );
    };

    const logoref = "/evp-logo.png";
    const icon = "/down.svg";

    // State for the dropdown menus and mobile menu
    const [isOfficeMenuVisible, setOfficeMenuVisible] = useState(false);
    const [isDepartmentMenuVisible, setDepartmentMenuVisible] = useState(false);
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

    // Toggle functions for each menu
    const toggleOfficeMenu = () => {
        setOfficeMenuVisible((prev) => !prev);
    };

    const toggleDepartmentMenu = () => {
        setDepartmentMenuVisible((prev) => !prev);
    };

    const toggleMobileMenu = () => {
        setMobileMenuVisible((prev) => !prev);
    };

    return (
        <nav className="flex flex-wrap justify-between items-center bg-[#003A70] text-white py-4 px-6 relative z-50">
            {/* Logo */}
            <a href="/" className="flex justify-center items-center basis-1/6">
                <img
                    src={logoref}
                    alt="Logo"
                    className="block"
                    style={{
                        width: "20vh",
                        height: "15vh",
                        objectFit: "contain",
                    }}
                />
            </a>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMobileMenu}
                className="lg:hidden flex items-center text-white"
            >
                <img className="w-6" src="/down.svg" alt="Hamburger Menu" />
            </button>

            {/* Navigation Links */}
            <ul
                className={`lg:flex lg:flex-row lg:space-x-8 flex-col lg:justify-center text-white space-x-4 sm:space-x-6 lg:space-x-8 ${
                    isMobileMenuVisible ? "block absolute top-0 left-0 w-full bg-[#003A70] z-40 py-8 h-screen" : "hidden"
                } lg:block`}
            >
                {/* Mobile Menu Content */}
                <li className="p-4 sm:p-6 md:p-8 flex items-center text-white">
                    <a href={"/"} className="flex items-center text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl hover:text-gray-500 font-bold">
                    Home
                    </a>
                </li>

                {/* Departments Dropdown */}
                <li className="p-4 sm:p-6 md:p-8 flex items-center text-white relative">
                    <a
                        onClick={toggleDepartmentMenu}
                        className="flex items-center text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl hover:text-gray-500 font-bold"
                    >
                        <img className="px-1 w-[25px]" src={icon} alt="Toggle icon" />
                        Departments
                    </a>
                    {isDepartmentMenuVisible && (
                        <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-[200px] z-40">
                            <li className="px-4 py-2 rounded-lg hover:bg-gray-200">
                                <a href="/departments/finance">Finance</a>
                            </li>
                            <li className="px-4 py-2 rounded-lg hover:bg-gray-200">
                                <a href="/departments/communications">Communications</a>
                            </li>
                            <li className="px-4 py-2 rounded-lg hover:bg-gray-200">
                                <a href="/departments/legal">Legal Affairs</a>
                            </li>
                            <li className="px-4 py-2 rounded-lg hover:bg-gray-200">
                                <a href="/departments/commercial">Commercial Activities</a>
                            </li>
                            <li className="px-4 py-2 rounded-lg hover:bg-gray-200">
                                <a href="/departments/student-affairs">Student Affairs</a>
                            </li>
                        </ul>
                    )}
                </li>

                {item("Resources", "/resources")}
                {item("Partnerships", "/partnerships")}

                {/* Offices Dropdown */}
                <li className="p-4 sm:p-6 md:p-8 flex items-center text-white relative">
                    <a
                        onClick={toggleOfficeMenu}
                        className="flex items-center text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl hover:text-gray-500 font-bold"
                    >
                        <img className="px-1 w-[25px]" src={icon} alt="Toggle icon" />
                        Offices
                    </a>
                    {isOfficeMenuVisible && (
                        <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-[200px] z-40">
                            <li className="px-4 py-2 rounded-lg hover:bg-gray-200">
                                <a href="/offices/2024">2024-2025</a>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="flex items-center">
                    <button className="rounded-md font-bold hover:bg-gray-200 text-lg sm:text-xl bg-[#265885] block text-white px-4 py-2">
                        Partner With Us
                    </button>
                </li>
            </ul>

            {/* Search Bar */}
            <a className="basis-1/6 flex justify-center items-center text-gray-800 font-bold">
                <SearchBar />
            </a>
        </nav>
    );
}
