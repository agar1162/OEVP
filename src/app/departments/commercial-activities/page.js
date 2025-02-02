"use client"

import React, { useState, useEffect } from "react";
import Navbar from "../../../components/home/Navbar";
import Footer from "../../../components/home/Footer";
import Cover from "../components/Cover";

export default function departmentsPage() {

    const [isExpanded, setIsExpanded] = useState(false);
    const [currentText, setCurrentText] = useState(0); 

    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };

    const times = "/nyt.png";
    const wsj = "/wsj.png";
    const def =
    "Get free access to a variety of New York Times articles, games, and podcasts if you are an undergraduate or graduate student.";

    
    const texts = [
      {
        text: "The Commercial Activities and Student Services Agreement (CASSA) between the University of California, Berkeley (UCB), the ASUC, and the GA outlines how the ASUC's commercial activities support student services and programs: "
      },
      {
        text: "The ASUC's commercial activities provide financial support for student activities, services, and programs. "
      },
      {
        text: "The ASUC has partnerships with the New York Times and the Wall Street Journal that have been secured using the CASSA Fund. Campus students have subscriptions to these services for free. "
      },
      {
        text: "Funding for these contracts is negotiated by the ASUC and paid for using the Commercial Activities and Student Services Agreement (CASSA) revenues, which establishes standards for ASUC commercial activities, including a fund generated from the revenue from the Martin Luther King Jr. Student Union building that is used to pay for the contracts of the current fcommerciasubscription services. "
      },
      {
        text: "ASUC officials are allowed to propose potential partnerships with any public or private organization. Students can also propose any future partnerships as long as their proposal is sponsored by an ASUC official. In general, all proposals submitted to the CASSA Fund Advisory Committee (which the EVP is the chair of) through the CASSA Fund Proposal Application should be community oriented and student driven. "
      }
    ]

    const carousel = []

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
            className="flex flex-col lg:flex-row border-black border-2 py-[5vh]">
            {/* New York Times Section */}
            <div className="flex-1 flex justify-center">
                <div className="mx-[10vw]">
                <img src={times} alt="New York Times" className="h-[46px] w-[36px] mb-4" />
                <h1 className="text-[23px] font-bold mb-2">New York Times</h1>
                <p className="text-md leading-relaxed mb-4">{def}</p>
                <a href="https://www.nytimes.com/activate-access/edu-access" className="p-3 px-10 bg-white border-2 border-black rounded-sm hover:text-[#A6A6A6] hover:text-berkeley">
                    Register
                </a>
                <p className="pt-4"><i>180,000+ articles read per month</i></p>
                </div>
            </div>

            {/* Wall Street Journal Section */}
            <div className="flex-1 flex justify-center pt-14 pt-8 md:pt-0">
                <div className="mx-[10vw]">
                <img src={wsj} alt="Wall Street Journal" className="h-[36px] w-[62px] mb-4" />
                <h1 className="text-[23px] font-bold mb-2">Wall Street Journal</h1>
                <p className="text-md leading-relaxed mb-4">{def}</p>
                <a href="https://WSJ.com/ASUCBerkeley"  className="p-3 px-10 bg-white border-2 border-black rounded-sm hover:text-[#A6A6A6] hover:text-berkeley">
                    Register
                </a>
                <p className="pt-4"><i>18,224 Students for WSJ monthly</i></p>
                </div>
            </div>
        </div>


      <div id="CASSA" className="mx-8 py-[10vh]">
          <h3 className="flex items-center mx-[10%] text-2xl lg:text-3xl text-center">
                  <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
                  <span className="px-4">Commercial Activities and Student Services Agreement (CASSA)</span>
                  <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
          </h3>

          <main className="flex flex-col md:flex-row  pt-10 text-[20px] mx-[10%] text-sm md:text-xl">
              <div id="sidemenu" className="lg:basis-1/3 flex flex-col mx-[10%] justify-center ">
                  <h3>What is CSSA?</h3>

              <menu className="flex flex-col  border-2 border-t-4 border-t-[#003A70] divide-y-2 divide-gray-200  shadow-xl">
                  <a
                      onClick={() => setCurrentText(1)}
                      className="hover:bg-[#003A70] hover:text-white p-4  transition"
                  >
                      Purpose
                  </a>
                  <a
                      onClick={() => setCurrentText(2)}
                      className="hover:bg-[#003A70] hover:text-white p-4  transition"
                  >
                      Past Examples of CSSA Funding
                  </a>
                  <a
                      onClick={() => setCurrentText(3)}
                      className="hover:bg-[#003A70] hover:text-white p-4  transition"
                  >
                      How Does CSSA Funding Work?
                  </a>
                  <a
                      onClick={() => setCurrentText(4)}
                      className="hover:bg-[#003A70] hover:text-white p-4  transition"
                  >
                      Who Can Propose Initiatives?
                  </a>
              </menu>
          </div>

              {/* Main Content */}
              <div id="text" className="md:basis-2/3 pt-10 md:pt-0 ">
                  <p className="">
                  {texts[currentText].text}
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

        <div className="place-content-center text-center mx-[10%] pb-8">
              <p className="text-[#3D3D3D] text-md">Form for students to list what partnerships they want from the university, what increased functions/access they want from each app.</p>
        </div>

          
        <div className="flex justify-center items-center">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd0Xs2uIpKrg1rOQn6fB1CODypJsukz6WUfURqrwuy0iWJlCw/viewform?embedded=true" width="500" height="500">Loading…</iframe>
        </div>



      <div className="items-center mx-[10%] pt-[5vh] text-center">
          <div className="relative flex items-center ">
              <div className="flex-grow border-t border-[#A6A6A6] "></div>
              <span className="flex-shrink mx-4 text-[25px] font-bold md:font-normal">Our Work</span>
              <div className="flex-grow border-t border-[#A6A6A6]"></div>
          </div>
      </div>

      <div className="md:mx-[30%]  mx-[10%] py-5 place-items-center py-[5vh]">
            <img src='/departments/comm_act/c1.png' className="w-[35vw]"/>
            <p className="text-md md:text-lg w-fit mx-[10%]"><i>The OEVP provides free access to newspaper 
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