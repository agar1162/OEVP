'use client'

import React, { useState } from 'react';
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
            name="Student Affairs"
            link="affairs.jpg"
            desc="Addresses the gaps in resources for students."
            mem="Chloe Choi (Intern), Hailey Jung (Intern), Matt Blake (Associate)"
        />

        <div className="p-[5vh] lg:mx-[10%] text-[20px]">
            <p>
            This department leads the efforts of various long-term projects pertaining 
            to student programs and specific funds within the ASUC in order to address 
            the gaps in resources for students. These projects include the UC Alianza 
            Mexico Trip, Decal Board, Multicultural Fair, Student Technology Fund, and 
            Weekly Email Updates. The members of this department work with each other to 
            successfully carry out the projects and create new projects for the student 
            body as well.
            </p>
        </div> */}

        {/* Hero Section: Student Affairs */}
        <div className="w-full bg-white shadow-md mt-2">
            <div className="w-full flex flex-col md:flex-row items-stretch">
                {/* Left: Image */}
                <div className="w-full md:w-1/2">
                <img
                    src="/departments/affairs.jpg"
                    alt="Student Affairs"
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
                    Student Affairs
                    </h1>
                    <p className="text-[14px] md:text-[15px] text-black mb-1">
                    Addresses the gaps in resources for students.
                    </p>
                    <p className="text-[12px] text-[#444444]">
                        Jeremiah Lopez (Associate), Hailey Burnsed (Associate), Katiana Yazdani Bosdet (Director), Natalie Villalobos (Intern), Fiona Kim (Intern)
                    </p>
                </div>
                </div>
            </div>
        </div>

        {/* Expandable Caption Section */}
        <div className="px-6 md:px-[10%] py-[4vh] text-center text-[15px] leading-relaxed max-w-screen-xl mx-auto">
            <p className={`transition-all duration-300 ease-in-out ${isExpanded ? "text-black" : "text-[#3E3E3E]"}`}>
                This department leads the efforts of various long-term projects pertaining to student programs and specific funds within the ASUC in order to address the gaps in resources for students. These include projects like the Multicultural Fair, Hispanic Heritage Month Dining Events, El Mercadito!, and more! 
                {!isExpanded && (
                <span className="text-[#9E9E9E]">
                    {" "}
                    The members of this department work with each other to...
                </span>
                )}
                {isExpanded && (
                <span>
                    {" "}
                    The members of this department work with each other to successfully carry out the projects and create new projects for the student body as well.
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
            <span className="flex-shrink mx-4 text-[25px]">Projects</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>

        {/* <div className="md:mx-[30%]  mx-[10%] py-5 place-items-center">
            <img src="../backgrounds/stu_aff.png" />
            <p className="text-[12px] md:text-lg"><i>To celebrate Hispanic Heritage Month, the Student Affairs
                 department organized a collaborative event with Cal Dining
                  and Berkeley Dining at CrossRoads Dining Hall for a night
                   full of delicious food, vibrant music, and fun performances.</i></p>
        </div> */}

        <div className="px-[10%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-6">
            {/* Project 1 */}
            <div className="bg-white bg-opacity-85 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border-x border-b border-[#D3D3D3] overflow-hidden">
                <img
                src="/departments/student-affairs/s1.png"
                alt="Hispanic Heritage Month"
                className="w-full h-auto object-cover"
                />
                <div className="p-4">
                    <h3 className="text-[15.05px] font-bold font-[Georgia] leading-[25.38px] mb-2">
                    Hispanic Heritage Month
                    </h3>
                    <p className="text-[12.04px] font-[Georgia] leading-[25.38px]">
                        To celebrate Hispanic Heritage Month, the Student Affairs department organized a collaborative event with Cal Dining and Berkeley Dining at CrossRoads Dining Hall for a night full of delicious food, vibrant music, and fun performances.
                    </p>
                </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white bg-opacity-85 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border-x border-b border-[#D3D3D3] overflow-hidden">
                <img
                src="/departments/student-affairs/s2.png"
                alt="El Mercadito"
                className="w-full h-auto object-cover"
                />
                <div className="p-4">
                    <h3 className="text-[15.05px] font-bold font-[Georgia] leading-[25.38px] mb-2">
                        El Mercadito
                    </h3>                    
                    <p className="text-[12.04px] font-[Georgia] leading-[25.38px]">
                    Worked with Senator Franco and Senator Gonzales for El Mercadito!, a night fair that celebrated the diversity of the Latino community.
                    </p>
                </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white bg-opacity-85 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border-x border-b border-[#D3D3D3] overflow-hidden">
                <img
                src="/departments/student-affairs/s3.jpeg"
                alt="Valentine’s Day"
                className="w-full h-auto object-cover"
                />
                <div className="p-4">
                    <h3 className="text-[15.05px] font-bold font-[Georgia] leading-[25.38px] mb-2">
                        Valentine’s Day
                    </h3>
                    <p className="text-[12.04px] font-[Georgia] leading-[25.38px]">
                        On Valentine’s Day, Student Affairs handed out flowers to students on Sproul and delivered treats to the weekly Senate meeting. 
                    </p>
                </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white bg-opacity-85 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border-x border-b border-[#D3D3D3] overflow-hidden">
                <img
                src="/departments/student-affairs/s4.jpeg"
                alt="Girls Who Code"
                className="w-full h-auto object-contain"
                />
                <div className="border-t-[3px] border-[#003A70] bg-white bg-opacity-80 px-6 py-6">
                    <h3 className="text-[15.05px] font-bold font-[Georgia] leading-[25.38px] mb-2">
                        Girls Who Code
                    </h3>
                    <p className="text-[12.04px] font-[Georgia] leading-[25.38px]">
                        Collaborated with Girls Who Code at Berkeley for an evening in honor of International Women’s Day, featuring guest speaker Morgan Young who shared her insights on tech, leadership, and women’s empowerment.
                    </p>
                </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white bg-opacity-85 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border-x border-b border-[#D3D3D3] overflow-hidden">
                <img
                src="/departments/student-affairs/s5.jpeg"
                alt="MultiCultural Fair"
                className="w-full h-auto object-contain"
                />
                <div className="border-t-[3px] border-[#003A70] bg-white bg-opacity-80 px-6 py-6">
                    <h3 className="text-[15.05px] font-bold font-[Georgia] leading-[25.38px] mb-2">
                        MultiCultural Fair
                    </h3>
                    <p className="text-[12.04px] font-[Georgia] leading-[25.38px]">
                    Hosted the annual Spring Multicultural Fair, which coordinated with UC Berkeley’s Registered Student Organizations (RSO) to highlight various traditions around the globe.
                    </p>
                </div>
            </div>
        </div>

        <Footer />
    </div>

)}