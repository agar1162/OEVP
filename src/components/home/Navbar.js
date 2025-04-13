// "use client";
// import { useState, useRef } from "react";
// import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";

// export default function Navbar() {
//   const logoref = "/evp-logo.png";
//   const icon = "/vector.svg";

//   // State for dropdown menus and mobile menu
//   const [isOfficeMenuVisible, setOfficeMenuVisible] = useState(false);
//   const [isDepartmentMenuVisible, setDepartmentMenuVisible] = useState(false);
//   const [isSubDepartmentMenuVisible, setSubDepartmentMenuVisible] = useState(false);
//   const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
//   const [isPartnershipsMenuVisible, setPartnershipsMenuVisible] = useState(false); // Fixed spelling
  
//   const [isHovered, setIsHovered] = useState(false);
//   const hideTimeout = useRef(null);

//   const pathname = usePathname();
//   const router = useRouter();

//   // Toggle functions
//   const toggleOfficeMenu = () => setOfficeMenuVisible((prev) => !prev);
//   const toggleDepartmentMenu = () => setDepartmentMenuVisible((prev) => !prev);
//   const toggleSubDepartmentMenu = () => setSubDepartmentMenuVisible((prev) => !prev);
//   const toggleMobileMenu = () => setMobileMenuVisible((prev) => !prev);
//   const togglePartnershipMenu = () => setPartnershipsMenuVisible((prev) => !prev); // Fixed function name and arrow function syntax
  
  

//   return (



//     <nav className="h-[60px] flex justify-between items-center bg-[#003A70] px-6 md:px-10">
//       {/* Left: Logo */}
//       <div className="flex-shrink-0">
//         <a href="/" className="flex items-center">
//           <img src={logoref} className="h-[55px] w-auto object-contain" />
//         </a>
//       </div>

//       {/* Right: Nav items */}
//       <div className="hidden lg:flex items-center space-x-6">
//         <ul className="flex items-center gap-6 text-white text-sm md:text-base lg:text-lg">
//           {/* your <li> items like Home, Office, etc. */}
//           <li className="p-4">
//             <a href="/" className="font-bold hover:text-gray-400 transition">
//               Home
//             </a>
//           </li>

//           <li className="p-4">
//             <a href="/office" className="font-bold hover:text-gray-400 transition">
//               Office
//             </a>
//           </li>

//           <li className="p-4">
//             <a href="/departments" className="font-bold hover:text-gray-400 transition">
//             Departments
//             </a>
//           </li>

//           <li className="p-4">
//             <a href="/departments/deib/communities" className="font-bold hover:text-gray-400 transition">
//               DEI Resources
//             </a>
//           </li>

//           <li className="p-4 relative group cursor-pointer">
//             <div
//               onMouseEnter={() => {
//                 if (hideTimeout.current) clearTimeout(hideTimeout.current);
//                 setPartnershipsMenuVisible(true);
//               }}
//               onMouseLeave={() => {
//                 hideTimeout.current = setTimeout(() => setPartnershipsMenuVisible(false), 200);
//               }}
//               className="flex items-center gap-[5px] font-bold group-hover:text-gray-400 transition"
//             >
//               <a href="/partnerships" className="group-hover:text-gray-400 transition">
//                 Partnerships
//               </a>
//               <img
//                 src={icon}
//                 alt="Dropdown"
//                 className="w-[14px] h-[7px] mt-[1px] group-hover:brightness-75 transition"
//               />
//             </div>

//             {isPartnershipsMenuVisible && (
//               <ul className="absolute top-full left-0 mt-2 bg-berkeley border-t-2 border-[#FDB515] text-white shadow-lg w-60 z-50">
//                 <li className="px-4 py-2 hover:text-gray-400">
//                   <a href="/partnerships/nyt_wsj">Free Newspaper Subscriptions</a>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li className="p-4">
//             <a
//               href="https://berkeley.zoom.us/j/6685684771?_x_zm_rtaid=MOwFCASdTuqDG7Yo6PLAEw.1736649189758.7b91ccafcde961b05952e5e32cf3d571&_x_zm_rhtaid=781#success"
//               // className="bg-[#265885] px-8 py-3 font-bold hover:bg-[#1d486a] transition"
//               // className="bg-[#265885] px-6 py-2 font-bold hover:bg-[#1d486a] transition whitespace-nowrap text-sm md:text-base"
//               className="bg-[#618EA9] px-6 py-[7px] rounded-md text-white font-bold text-sm md:text-base transition hover:bg-[#1d486a] whitespace-nowrap"
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               {isHovered ?  'Wed. 8pm-10pm' : 'Join Senate Live!' }
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Mobile menu button */}
//       <button
//         onClick={toggleMobileMenu}
//         className="lg:hidden flex items-center text-white"
//       >
//         <img src="/bars.svg" alt="Menu" className="w-6" />
//       </button>
//     </nav>
//   );
// }
"use client";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const logoref = "/evp-logo.png";
  const icon = "/vector.svg";

  const [isPartnershipsMenuVisible, setPartnershipsMenuVisible] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hideTimeout = useRef(null);

  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#003A70]">
      <div className="flex items-center justify-between px-4 md:px-10 h-[60px]">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logoref} alt="Logo" className="h-[55px] w-auto object-contain" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 text-white font-bold text-[15px] font-[Georgia] lg:ml-4 xl:ml-6">
          <a href="/" className="hover:text-gray-400 transition">Home</a>
          <a href="/office" className="hover:text-gray-400 transition">Office</a>
          <a href="/departments" className="hover:text-gray-400 transition">Departments</a>
          <a href="/departments/deib/communities" className="hover:text-gray-400 transition">DEI Resources</a>

          {/* Partnerships dropdown */}
          <div
            onMouseEnter={() => {
              if (hideTimeout.current) clearTimeout(hideTimeout.current);
              setPartnershipsMenuVisible(true);
            }}
            onMouseLeave={() => {
              hideTimeout.current = setTimeout(() => setPartnershipsMenuVisible(false), 200);
            }}
            className="relative group cursor-pointer"
          >
            <a href="/partnerships" className="flex items-center gap-[5px] group-hover:text-gray-400 transition">
              <span className="group-hover:text-gray-400">Partnerships</span>
              <img
                src={icon}
                alt="Dropdown"
                className="w-[14px] h-[7px] mt-[1px] group-hover:brightness-75 transition"
              />
            </a>

            {isPartnershipsMenuVisible && (
              <ul className="absolute top-full left-0 mt-2 bg-berkeley border-t-2 border-[#FDB515] text-white shadow-lg w-60 z-50">
                <li className="px-4 py-2 hover:text-gray-400">
                  <a href="/partnerships/nyt_wsj">Free Newspaper Subscriptions</a>
                </li>
              </ul>
            )}
          </div>

          {/* Join Senate Live */}
          <a
            href="https://berkeley.zoom.us/j/6685684771"
            className="bg-[#618EA9] px-6 py-2.5 rounded-md text-white font-bold text-[15px] leading-[20px] hover:bg-[#1d486a] transition whitespace-nowrap"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? "Wed. 8pm-10pm" : "Join Senate Live!"}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}
          className="lg:hidden flex items-center text-white"
        >
          <img src="/bars.svg" alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Slide-in */}
      <div
        className={`transition-all duration-300 overflow-hidden lg:hidden ${
          isMobileMenuVisible ? "max-h-[500px] py-4" : "max-h-0"
        } px-6`}
      >
        <ul className="flex flex-col text-white space-y-4 font-[Georgia] font-bold text-base">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/office" className="hover:text-gray-400">Office</a></li>
          <li><a href="/departments" className="hover:text-gray-400">Departments</a></li>
          <li><a href="/departments/deib/communities" className="hover:text-gray-400">DEI Resources</a></li>
          <li><a href="/partnerships" className="hover:text-gray-400">Partnerships</a></li>
          <li>
            <a
              href="https://berkeley.zoom.us/j/6685684771"
              className="bg-[#618EA9] px-4 py-2 rounded-md text-white font-bold text-center hover:bg-[#1d486a]"
            >
              Join Senate Live!
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
