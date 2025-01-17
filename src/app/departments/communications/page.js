"use client"

import React, { useState } from "react";
import Navbar from "../../../components/home/Navbar";
import Footer from "../../../components/home/Footer";
import Cover from "../components/Cover"
import InstagramPostEmbed from "../components/InstaPostEmbed";
import InstagramReelEmbed from "../components/InstaReelEmbed";


export default function DepartmentsPage() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };

    return(
    <div>
        <Navbar />

        <Cover 
            name="Communications & Public Relations"
            link="comms.jpeg"
            desc="Responsible for managing strategic communications and public relations initiatives "
            members="Responsible for managing strategic communications and public relations initiatives "
            />
    
        <div className="p-[5vh] lg:mx-[10%] text-[20px]">
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
        </div>

        <div className="relative flex  items-center mx-[10%]">
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
            <span className="flex-shrink mx-4 text-[25px]">Our Work</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:mx-[10%]">
            <InstagramPostEmbed postId="DDNZUO0zFv1"/>
            <InstagramReelEmbed postId="DCff6JySrrl"/>
            <InstagramReelEmbed postId="DCDlkWhR_bq"/>
            <InstagramPostEmbed postId="DB7snwWJeB9"/>
            <InstagramPostEmbed postId="DCZ5aD9z4-4"/>
        </div>
       
            
        <Footer />
    </div>

)}