"use client"

import React, { useState } from "react";
import Navbar from "../../../components/home/Navbar";
import Footer from "../../../components/home/Footer";
import Cover from "../components/Cover";

export default function departmentsPage() {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };

    const times = "/nyt.png";
    const wsj = "/wsj.png";
    const def =
    "Get free access to a variety of New York Times articles, games, and podcasts if you are an undergraduate or graduate student.";


    return(
    <div>
        <Navbar />
        <Cover 
            link="act.jpg"
            name="Commerical Activities"
            desc="Responsible for managing strategic communications and public relations initiatives "
            members="Chloe Choi (Intern), Hailey Jung (Intern), Matt Blake (Associate) "
            />



        <div className="p-[5vh] lg:mx-[10%] text-[20px]">
            <p>
                Commercial Activities works closely on both ongoing and future partnerships with the ASUC 
                and UC Berkeley students. Our department ensures that important platforms, such as the 
                Wall Street Journal and the New York Times, remain accessible to students. 
                Beyond maintaining these existing relationships, we also explore and establish 
                new partnerships with platforms that are heavily used by students, broadening the 
                range of resources available to the campus community.
                {!isExpanded && "..."}
                {isExpanded && (
                <span>
                    Additionally, we also oversee all aspects of commercial activity within the ASUC 
                    and familiarize ourselves with the ASUC-Student Union partnership and Commercial 
                    Activities and Student Services Agreement (CASSA). Collaboration is a key part of
                     our role, and our department works closely with both the ASUC Chief Legal Officer 
                     (CLO) and the ASUC Chief Financial Officer (CFO) to ensure that all partnerships 
                     and initiatives align with legal and financial standards.
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

        <div 
          id="NYT_WALL_STREET_JOURNAL"
          className="flex flex-col lg:flex-row border-2 border-[#808080] p-10">
          {/* New York Times Section */}
          <div className="flex-1 flex justify-center items-center p-6">
            <div className="text-center max-w-sm">
              <img src={times} alt="New York Times" className="h-[46px] w-[36px] mx-auto mb-4" />
              <h1 className="text-[23px] font-bold mb-2">New York Times</h1>
              <p className="text-sm leading-relaxed mb-4">{def}</p>
              <a href="/access" className="p-3 px-10 bg-white border-2 border-black rounded-lg hover:text-berkeley">
                Register
              </a>
            </div>
          </div>

          {/* Wall Street Journal Section */}
          <div className="flex-1 flex justify-center items-center p-6">
            <div className="text-center max-w-sm">
              <img src={wsj} alt="Wall Street Journal" className="h-[36px] w-[62px] mx-auto mb-4" />
              <h1 className="text-[23px] font-bold mb-2">Wall Street Journal</h1>
              <p className="text-sm leading-relaxed mb-4">{def}</p>
              <a href="/access" className="p-3 px-10 bg-white rounded-lg border-2 border-black hover:text-berkeley">
                Register
              </a>
            </div>
          </div>
        </div>

        <div className="items-center mx-[10%] pt-[5vh] text-center">
            <div className="relative flex items-center ">
                <div className="flex-grow border-t border-[#A6A6A6] "></div>
                <span className="flex-shrink mx-4 text-[25px] md:hidden">C.A.S.S.A.</span>
                <span className="flex-shrink mx-4 text-[25px] sm:hidden md:block">Commercial Activities and Student Services Agreement (CASSA)</span>

                <div className="flex-grow border-t border-[#A6A6A6]"></div>
            </div>
            <p className="text-[#808080] md:hidden"><i>Commercial Activities and Student Services Agreement</i></p>
        </div>
       
        


        <Footer />
    </div>

)}