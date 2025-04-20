"use client"

import React, { useState } from "react";
import Navbar from "../../../../components/home/Navbar";
import Footer from "../../../../components/home/Footer";
import Cover from "../components/Cover"

export default function departmentsPage() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };

    return(
    <div>
        <Navbar />
        {/* <Cover 
            name="Spaces Support"
            link="spaces.jpg"
            desc="Ensures that registered student organizations have access to all resources provided by the ASUC."
            mem="Ailyn Perez (Deputy Director), Chloe Kubedis (Associate), Max Wohlgezogen (Associate), Michael Moy (Director), Ariana Moran (Associate)"
        />
        
        <div className="p-[5vh] lg:mx-[10%] text-[20px]">
            <p>
            Established to support the Spaces Director in administering ASUC-owned spaces, 
            particularly in planning and executing the Annual Budget and Space Application 
            (ABSA), as well as seeking to expand the spaces under ASUC ownership. 
            {!isExpanded && "..."}
            {isExpanded &&(<span>The ABSA 
            team within this department ensures the physical space in all ASUC-owned spaces
             is well-kept and works with respective facilities staff to maintain the space,
              with a particular emphasis on the Hearst Gym Cages and Eshleman Hall. 
              This department also advocates for expanded student space on campus under 
              University jurisdiction, serving as a liaison between the student body and administration. 
              </span>)}
            </p>
            <div className="flex justify-center items-center mt-4">
                <button
                onClick={toggleReadMore}
                className="text-[#747070] underline"
                aria-expanded={isExpanded}
                >
                {isExpanded ? "Read less" : "Read more"}
                </button>
            </div>
        </div> */}

        {/* Hero Section */}
        <div className="w-full bg-white shadow-md mt-2">
            <div className="w-full flex flex-col md:flex-row items-stretch">
            {/* Left: Image */}
            <div className="w-full md:w-1/2">
                <img
                src="/departments/spaces.jpg"
                alt="Spaces"
                className="w-full h-full object-cover"
                />
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-1/2">
                <div className="border-t-[6px] border-[#003A70] px-4 py-4 md:py-6 md:px-8 h-full flex flex-col justify-center">
                <h2 className="text-[13px] font-bold text-[#003A70] uppercase mb-1 tracking-wide">
                    Department
                </h2>
                <h1 className="text-[24px] md:text-[30px] font-[Georgia] font-extrabold text-black leading-snug mb-2">
                    Spaces
                </h1>
                <p className="text-[14px] md:text-[15px] text-black mb-1">
                    Oversees ASUC managed spaces.
                </p>
                <p className="text-[12px] text-[#444444]">
                    Ailyn Perez (Deputy Director), Chloe Kubedis (Associate), Max Wohlgezogen (Associate), Michael Moy (Director), Ariana Moran (Associate)
                </p>
                </div>
            </div>
            </div>
        </div>

        {/* Expandable Caption Section */}
        <div className="px-6 md:px-[10%] py-[4vh] text-center text-[15px] leading-relaxed max-w-screen-xl mx-auto">
            <p className={`transition-all duration-300 ease-in-out ${isExpanded ? "text-black" : "text-[#3E3E3E]"}`}>
                The Spaces Department is responsible for overseeing ASUC-managed student spaces, including the Hearst Gym Cages, Eshleman Hall 312, and the lockers within it. 
                {!isExpanded && (
                <span className="text-[#9E9E9E]">
                    {" "}
                    We manage the ABSA application process...
                </span>
                )}
                {isExpanded && (
                <span>
                    {" "}
                    We manage the ABSA application process, reviewing and approving requests to ensure fair and efficient space allocation for student organizations. This year, the department also holds a seat on the RSF Board of Governors, contributing to policy decisions and the development of annual reports that guide the future of student recreational spaces on campus.
                </span>
                )}
            </p>

            <div className="flex justify-center items-center mt-4">
                <button
                onClick={toggleReadMore}
                className="flex items-center text-[#747070]"
                aria-expanded={isExpanded}
                >
                {isExpanded ? "Read less" : "Read more"}
                <img
                    src={isExpanded ? "/read-less-arrow.png" : "/read-more-arrow.png"}
                    alt="arrow icon"
                    className="w-3 h-3 ml-2 mt-[2px]"
                />
                </button>
            </div>
        </div>

        <div className="relative flex  items-center mx-[10%] mt-14">
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
            <span className="flex-shrink mx-4 text-[25px]">ABSA Timeline</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>

        {/* <div className="mx-[10%] p-4 lg:mx-[15%]">
            <p>The ASUC has two main buildings: <u>MLK Jr. Student Union and Eshleman Hall. </u>
                Both buildings are ADA accessible with entrances off of Lower Sproul Plaza.
                MLK Jr. Student Union also has entrances off of Upper Sproul Plaza. 
                Eshleman faces Bancroft St.
            </p>
            <div className="pt-8">
                <p>The ASUC Student Union has several spaces to provide students with free services: </p>
                <ul className="list-disc list-inside p-4">
                    <li>If you’re an RSO interested in tabling on Upper Sproul, Cub-e, located behind Golden Bear Cafe, can help set you up. </li>
                    <li> The Re-entry Student Program has resources such as transition courses and counseling along with a community for students who have deferred their degree. </li>
                    <li>The Student Technology HelpDesk in Eshleman Hall helps students with technical difficulties.</li>
                    <li>The Open Computing Facility, or OCF, is on the first floor of MLK Jr. Student Union which is a computer lab with free printing and scanning ( 20 pages max per day). </li>
                    <li>The Public Service Center provides leadership opportunities and programs to support student initiatives in social equity.</li>
                    <li>The MultiCultural Community Center provides spaces for communities such as Chicanx Latinx and facilitates different programs and initiatives.</li>
                    <li>OASIS (Organization Advising and Student Involvement Services) hosts over 1,000 student organizations, Greek life, ASUC and GA government, and CalDebate. All university-registered clubs and events run through this center.</li>
                    <li>The Student Environmental Resource Center offers more progress towards sustainability by providing resources for students to contribute to a beneficial cause.</li>
                </ul>
            </div>
        </div> */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 px-6 md:px-[10%] mt-4 mb-4">
            {/* Instagtam Timeline Image and Caption */}
            <div className="w-full md:w-[520px] flex flex-col items-center">
                <img
                src="/departments/space/s1.png"
                alt="Instagtam Timeline"
                className="w-full h-auto object-cover shadow-md"
                />
                <p className="text-sm mt-6 text-center font-[Georgia]">Instagtam Timeline</p>
            </div>

            {/* ABSA Timeline Card */}
            <div className="w-full max-w-[550px] bg-white shadow-md overflow-hidden rounded-none scale-[0.95]">
                <div className="h-[280px] md:h-[330px] overflow-hidden">
                <img
                    src="/departments/space/s2.png"
                    alt="ABSA Timeline"
                    className="w-full h-full object-cover"
                />
                </div>
                <div className="border-t-[3px] border-[#003A70] bg-white bg-opacity-80 px-6 py-6 space-y-4">
                <h3 className="text-black text-[22px] leading-[33px] font-[Georgia] font-normal">
                    ABSA Timeline
                </h3>
                <p className="text-black text-[18.5px] leading-[20px] font-[Georgia] font-normal">
                    This article outlines important reminders about your OASIS-Sponsored registered student group (RSO), budget and spaces allocations for the upcoming 2025-2026 academic year. Please be prepared to review the application carefully once it launches for detailed instructions and information.
                </p>
                <div className="mt-6 flex justify-end">
                    <a
                    href="https://asuc.org/absa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#003A70] text-white text-[13.8px] font-[Georgia] underline rounded-sm border border-white/50"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    </div>

        <Footer />
    </div>

)}