"use client"
import React, { useState } from 'react';
import Navbar from "../../../../components/home/Navbar";
import Footer from "../../../../components/home/Footer";
import Cover from "../components/Cover"
import InstagramPostEmbed from "../components/InstaPostEmbed";

export default function departmentsPage() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
    };
    return(
    <div>
        <Navbar />
        {/* <Cover 
            name="Student Safety, Wellnes & Success"
            link="safety.jpg"
            desc="Addresses the needs of the UC Berkeley campus."
            mem="Shea Davison (Deputy Director), Clara Hinsdale (Associate), Paige Clark (Director), Angel Zamora (Intern), Madison Hua (Associate), Karen Yhim (Associate)"
        />

        <div className="p-[5vh] lg:mx-[10%] text-[20px]">
            <p>
                About- This department addresses the needs of the UC Berkeley campus, ranging from topics such as housing, 
                food security, and access to higher education. Members of this department provide the Executive Vice President 
                with proposals to resolve and ease the concerns of students. The work of the members of this department also 
                consist of working closely with fellow ASUC offices as it pertains to student-related issues.

            </p>
        </div> */}

        {/* Hero Section: Senatorial and Student affairs Committe */}
        <div className="w-full bg-white shadow-md mt-2">
            <div className="w-full flex flex-col md:flex-row items-stretch">
                {/* Left: Image */}
                <div className="w-full md:w-1/2">
                <img
                    src="/departments/safety.jpg"
                    alt="Student Safety, Success & Wellness"
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
                    Student Safety, Success & Wellness
                    </h1>
                    <p className="text-[14px] md:text-[15px] text-black mb-1">
                    Addresses the student needs of the UC Berkeley campus.
                    </p>
                    <p className="text-[12px] text-[#444444]">
                    Shea Davison (Semester 1 Deputy Director), Clara Hinsdale (Associate), Paige Clark (Semester 1 Director), Angel Zamora (Intern), Madison Hua (Associate), Karen Yhim (Associate), Not featured: Aarja Singh (Director) 
                    </p>
                </div>
                </div>
            </div>
        </div>

        {/* Expandable Caption Section */}
        <div className="px-6 md:px-[10%] py-[4vh] text-center text-[15px] leading-relaxed max-w-screen-xl mx-auto">
            <p className={`transition-all duration-300 ease-in-out ${isExpanded ? "text-black" : "text-[#3E3E3E]"}`}>
            This department addresses the needs of the UC Berkeley campus, ranging from topics such as housing, food security, and access to higher education. Members of this department provide the Executive Vice President with proposals to resolve and ease the concerns of students. The work of the members of this department also consist of working closely with fellow ASUC offices as it pertains to student-related issues.
                {!isExpanded && (
                <span className="text-[#9E9E9E]">
                    {" "}
                    The work of the members of this department also consist of...
                </span>
                )}
                {isExpanded && (
                <span>
                    {" "}
                    The work of the members of this department also consist of working closely with fellow ASUC offices as it pertains to student-related issues.
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

        <div className="relative flex  items-center mx-[10%]">
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
            <span className="flex-shrink mx-4 text-[25px]">Wellness Events</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>

        {/* <div className="flex mx-[10%] py-10 flex-wrap md:flex-regular justify-center">
        
            <div id="sidemenu" className="basis-1/3 flex flex-col items-center pb-5">

                <menu className="flex flex-col border-2 border-t-4 border-t-[#003A70] divide-y-2 divide-gray-200  shadow-xl">
                    <a
                        className="hover:bg-[#003A70] hover:text-white p-5  transition"
                    >
                        Wellness Resources
                    </a>
                    <a
                        className="hover:bg-[#003A70] hover:text-white p-5  transition"
                    >
                        Financial Resources
                    </a>
                </menu>
            </div>

            <div className="basis-2/3">
                <h3>Wellness Resources</h3>
                <ul className="list-decimal list-inside">  
                    <li>
                        Be Well at Work-Wellness Program: Current calendar of healthy lifestyle programs, health screenings, workshops, classes, and events that support you in leading a healthy lifestyle.
                    </li>
                    <li>
                    UC Living Well: UCOP's wellness initiative for faculty and staff. Find health plan resources, links to all UC Wellness Programs for faculty and staff, and additional resources. 
                    </li>
                    <li>
                        UHS Resources for Stress Management
                        <ul className="list-disc list-inside">
                            <li>Counseling Appointments</li>
                            <li>Health Coaching Appointments</li>
                            <li>Group Conseling</li>
                            <li>Message Chairs</li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>

        <div className="relative flex  items-center mx-[10%]">
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
            <span className="flex-shrink mx-4 text-[25px]">Upcoming Wellness Events</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>

        <div className="flex flex-row justify-center items-center m-0 p-0">
            <InstagramPostEmbed postId="DBzVcxiTLil"/>
        </div> */}
        {/* <div className="mt-12 flex justify-center mb-10">
            <div className="w-full max-w-[20%] bg-white bg-opacity-85 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border-x border-b border-[#D3D3D3] overflow-hidden"> */}
        <div className="mt-12 flex justify-center px-6 mb-12">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white bg-opacity-85 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border-x border-b border-[#D3D3D3] overflow-hidden">
                <img
                src="/departments/sssw/s1.png"
                alt="Student Wellness and Recovery Fair"
                className="w-full h-auto object-cover"
                />
                <div className="p-4">
                <h3 className="text-[15.05px] font-bold font-[Georgia] leading-[25.38px] mb-2">
                    Student Wellness and Recovery Fair
                </h3>
                <p className="text-[12.04px] font-[Georgia] leading-[25.38px]">
                    Hosted by the SSWS Department and campus senators, the Student Wellness Fair on Upper Sproul offered free wellness supplies, resources, and activities to promote student health and well-being.
                </p>
                </div>
            </div>
        </div>
        

        <Footer />
    </div>

)}