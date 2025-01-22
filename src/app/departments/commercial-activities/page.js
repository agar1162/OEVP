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



        <div className="p-[5vh] lg:mx-[10%] text-[20px] indent-10">
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
                <span className="flex-shrink mx-4 text-[25px] font-bold md:font-normal">Commercial Activities and Student Services Agreement (CASSA)</span>
                <div className="flex-grow border-t border-[#A6A6A6]"></div>
            </div>
        </div>

        <div id="WHO_WE_ARE" className="mx-8 lg:mx-[5rem] text-[20px]  pb-10">
          <main className="flex flex-col lg:flex-row pt-10  gap-8">
            <div id="sidemenu" className="md:basis-1/2 flex flex-col items-center drop-shadow-lg">
              <h3 className="">What is CSSA?</h3>
              <menu className="flex flex-col pt-5 w-1/2 gap-4">
                <a
                  href="#mission"
                  className="hover:bg-[#003A70] hover:text-white border-2 border-[#003A70] p-4 text-center rounded-md transition"
                >
                  Purpose
                </a>
                <a
                  href="#resources"
                  className="hover:bg-[#003A70] hover:text-white border-2 border-gray-300 p-4 text-center  rounded-md transition"
                >
                  Past Examples of CSSA Funding
                </a>
                <a
                  href="#resources"
                  className="hover:bg-[#003A70] hover:text-white border-2 border-gray-300 p-4 text-center  rounded-md transition"
                >
                  How Does CSSA Funding Work?
                </a>
                <a
                  href="#resources"
                  className="hover:bg-[#003A70] hover:text-white border-2 border-gray-300 p-4 text-center  rounded-md transition"
                >
                  Who Can Propose Initiatives?
                </a>
            </menu>
          </div>

          {/* Main Content */}
          <div id="text" className="md:basis-1/2  ">
            <p className="">
            The Commercial Activities and Student Services Agreement (CASSA) between the University of California, Berkeley (UCB), 
            the ASUC, and the GA outlines how the ASUC's commercial activities support student services and programs: 
            </p>
          </div>
        </main>
      </div>
      <div className="items-center mx-[10%] pt-[5vh] text-center">
              <div className="relative flex items-center ">
                  <div className="flex-grow border-t border-[#A6A6A6] "></div>
                  <span className="flex-shrink mx-4 text-[25px] font-bold md:font-normal">Partner Feedback Form</span>
                  <div className="flex-grow border-t border-[#A6A6A6]"></div>
              </div>
        </div>

        <div className="place-content-center text-center mx-[30%]">
              <p className="text-[#3D3D3D]">Form for students to list what partnerships they want from the university, what increased functions/access they want from each app.</p>
        </div>

          
      <div className="place-items-center pb-10">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1KuBN9xP-FY7UD5JLEyeJ2D2aVWMxE9Wn6xgUKtC1O-RIQg/viewform?embedded=true" 
          width="85%" 
          height="500" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0">
            Loading…
          </iframe>
      </div>


      <div className="items-center mx-[10%] pt-[5vh] text-center">
          <div className="relative flex items-center ">
              <div className="flex-grow border-t border-[#A6A6A6] "></div>
              <span className="flex-shrink mx-4 text-[25px] font-bold md:font-normal">Our Work</span>
              <div className="flex-grow border-t border-[#A6A6A6]"></div>
          </div>
      </div>

      <div className="md:mx-[30%]  mx-[10%] py-5 place-items-center">
            <img src='/departments/comm_act/c1.png' className="w-full"/>
            <p className="text-[12px] md:text-lg"><i>The OEVP provides free access to newspaper 
              subscriptions such as the Wall Street Journal and New York Times, and financial grants.</i></p>
        </div>

        <div className="items-center mx-[10%] pt-[5vh] text-center">
          <div className="relative flex items-center ">
              <div className="flex-grow border-t border-[#A6A6A6] "></div>
              <span className="flex-shrink mx-4 text-[25px] font-bold md:font-normal">Our Past Work As Seen on Daily Cal</span>
              <div className="flex-grow border-t border-[#A6A6A6]"></div>
          </div>
        </div>
        
        



        <div className="flex flex-wrap pb-10 md:flex-regular mx-[10%] py-5">
            <div className=" md:flex md:basis-1/2 hover:bg-gray-100">
              <img src="/departments/comm_act/c2.jpg" className="w-[35vh]"/>
              <div className=" mt-4 md:mt-0 p-3">
                <a href="https://www.dailycal.org/news/campus/asuc/asuc-contracts-provide-students-more-than-new-york-times-subscription/article_37319cec-a702-11ef-a1e8-2bba65ea0e83.html">
                  <h3 className="font-bold text-xl">ASUC contracts provide students more than New York Times subscription</h3>
                  <p className="text-[#5E5E5E] text-sm">Through ASUC partnerships with the New York Times, the Wall Street Journal, and LinkedIn Premium.</p>
                </a>
                
              </div>
            </div>


          <div className=" md:flex md:basis-1/2 hover:bg-gray-100">
            <img src="/departments/comm_act/c3.png" className="w-[35vh]"/>
            <div className=" mt-4 md:mt-0 p-3">
              <a href="https://www.dailycal.org/archives/asuc-announces-partnerships-with-the-new-york-times-wall-street-journal/article_269c3ab0-59ae-5fcd-9322-85bfad8ece51.html">
                <h3 className="font-bold text-xl">ASUC contracts provide students more than Walls Street Journal subscription</h3>
                <p className="text-[#5E5E5E] text-sm">Through ASUC partnerships with the New York Times, the Wall Street Journal, and LinkedIn Premium.</p>
              </a>
              </div>
          </div>
        </div>

        <Footer />
    </div>

)}