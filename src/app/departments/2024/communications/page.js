"use client"

import React, { useState } from "react";
import Navbar from "../../../../components/home/Navbar";
import Footer from "../../../../components/home/Footer";
import Cover from "../components/Cover"
import InstagramPostEmbed from "../components/InstaPostEmbed";


export default function DepartmentsPage() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };

    return(
    <div>
        <Navbar />

        {/* <Cover 
            name="Communications & Public Relations"
            link="comms.jpeg"
            desc="Responsible for managing strategic communications and public relations initiatives "
            members="Responsible for managing strategic communications and public relations initiatives "
            /> */}
        <div className="w-full bg-white shadow-md mt-2">
        <div className="w-full flex flex-col md:flex-row items-stretch">

            {/* Left: Image */}
            <div className="w-full md:w-1/2">
            <img
                src="/departments/comms.jpeg"
                alt="Communications Team"
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
                Communications and Public Relations
                </h1>
                <p className="text-[14px] md:text-[15px] text-black mb-1">
                Responsible for managing strategic communications and public relations initiatives
                </p>
                <p className="text-[12px] text-[#444444]">
                Chloe Choi (Intern), Hailey Jung (Intern), Matt Blake (Associate)
                </p>
            </div>
            </div>

        </div>
        </div> 
    
        {/* <div className="p-[5vh] lg:mx-[10%] text-[20px]">
            <p>
            The Communications and PR team is responsible for managing strategic communications and public relations 
            initiatives that amplify the OEVP's mission and activities. The department develops social media outreach 
            strategies to increase interactive engagement between the student body and the ASUC and enhance the OEVP's 
            visibility within the campus community. 
                {!isExpanded && "..."}
                {isExpanded && (
                <span>
                    This team creates compelling content for various platforms, including social media, press releases, 
                    and the ASUC website, to keep students informed about important initiatives, advocacy efforts, and 
                    opportunities for engagement. The Communications Executive advises the Office of the Executive 
                    President (OEVP) on matters calling for public address.
                </span>
                )}
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
        <div className="px-6 md:px-[10%] py-[4vh] text-center text-[15px] leading-relaxed max-w-screen-xl mx-auto">
        <p className={`transition-all duration-300 ease-in-out ${isExpanded ? "text-black" : "text-[#3E3E3E]"}`}>
            The Communications and PR team is responsible for managing strategic communications and public relations 
            initiatives that amplify the OEVP's mission and activities. The department develops social media outreach 
            strategies to increase interactive engagement between the student body and the ASUC and enhance the OEVP's 
            visibility within the campus community. 
            {!isExpanded && (
            <span className="text-[#9E9E9E]">
                {" "}
                Our team creates compelling content for various platforms, including social media, press releases, and the
                ASUC website, to keep students informed about...
            </span>
            )}
            {isExpanded && (
            <span>
                Our team creates compelling content for various platforms, including social media, press releases, and the
                ASUC website, to keep students informed about important initiatives, advocacy efforts, and opportunities for
                engagement. The Communications Executive advises the Office of the Executive President (OEVP) on matters
                calling for public address.
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


        {/* <div className="relative flex  items-center mx-[10%]">
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
            <span className="flex-shrink mx-4 text-[25px]">Our Work</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:mx-[10%] pt-5">
            <InstagramPostEmbed postId="DB7snwWJeB9"/>
            <InstagramPostEmbed postId="DCff6JySrrl"/>
            <InstagramPostEmbed postId="DB0UAelxK0v"/>
            <InstagramPostEmbed postId="DCDlkWhR_bq"/>
            <InstagramPostEmbed postId="DDNZUO0zFv1"/>
            <InstagramPostEmbed postId="DCZ5aD9z4-4"/>

        </div> */}
        {/* Our Work Section Title */}
        <div className="relative flex items-center max-w-screen-xl mx-auto px-6 lg:px-0 pt-10">
        <div className="flex-grow border-t border-[#A6A6A6]"></div>
        <span className="flex-shrink mx-4 text-[25px]">Our Work</span>
        <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>

        {/* Instagram Posts Grid */}
        <div className="lg:grid lg:grid-cols-3 px-[10%] pt-5">
        <InstagramPostEmbed postId="DB7snwWJeB9" />
        <InstagramPostEmbed postId="DCff6JySrrl" />
        <InstagramPostEmbed postId="DB0UAelxK0v" />
        <InstagramPostEmbed postId="DCDlkWhR_bq"/>
        <InstagramPostEmbed postId="DDNZUO0zFv1" />
        <InstagramPostEmbed postId="DCZ5aD9z4-4" />
        </div>

        <Footer />
    </div>

)}