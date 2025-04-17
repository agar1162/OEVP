"use client"

import React, { useState, useEffect } from "react";
import Navbar from "../../../../components/home/Navbar";
import Footer from "../../../../components/home/Footer";
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
        {/* <Cover 
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
        </div> */}
        {/* Hero Section: Commercial Activities */}
        <div className="w-full bg-white shadow-md mt-2">
          <div className="w-full flex flex-col md:flex-row items-stretch">
            {/* Left: Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/departments/act.jpg"
                alt="Commercial Activities Department"
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
                  Commercial Activities
                </h1>
                <p className="text-[14px] md:text-[15px] text-black mb-1">
                  Responsible for managing strategic communications and public relations initiatives.
                </p>
                <p className="text-[12px] text-[#444444]">
                  Vanessa Jensen (Intern), Hibba Adeel (Director), Jasmine Lucero Trujillo Mata (Associate), Mayra Aguilar Perez (Associate), Sanjna Shah (Associate) 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Caption Section */}
        <div className="px-6 md:px-[10%] py-[4vh] text-center text-[15px] leading-relaxed max-w-screen-xl mx-auto">
          <p className={`transition-all duration-300 ease-in-out ${isExpanded ? "text-black" : "text-[#3E3E3E]"}`}>
            Commercial Activities works closely on both ongoing and future partnerships with the ASUC and UC Berkeley students. Our department ensures that important platforms, such as the Wall Street Journal and the New York Times, remain accessible to students.
            {!isExpanded && (
              <span className="text-[#9E9E9E]">
                {" "}
                Beyond maintaining these existing relationships, we also explore and establish new partnerships with platforms that are heavily used by students...
              </span>
            )}
            {isExpanded && (
              <span>
                {" "}
                Beyond maintaining these existing relationships, we also explore and establish new partnerships with platforms that are heavily used by students. Additionally, we oversee all aspects of commercial activity within the ASUC and familiarize ourselves with the ASUC-Student Union partnership and Commercial Activities and Student Services Agreement (CASSA). Collaboration is a key part of our role, and our department works closely with both the ASUC Chief Legal Officer (CLO) and the ASUC Chief Financial Officer (CFO) to ensure that all partnerships and initiatives align with legal and financial standards.
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


       {/* <div 
            id="NYT_WALL_STREET_JOURNAL"
            className="flex flex-col lg:flex-row border-black border-2 py-[5vh]">
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
        </div> */}
        <div
          id="NYT_WALL_STREET_JOURNAL"
          className="bg-[#DFE9F5] py-[5vh] px-4 md:px-[8vw] flex flex-col lg:flex-row gap-10"
        >
          {/* New York Times */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <img
                src="/nyt.png"
                alt="New York Times"
                className="h-[55px] w-auto mb-3"
              />
              <h1 className="text-[24px] font-[400] font-[Georgia] leading-[35.98px] mb-1">
                New York Times
              </h1>
              <p className="text-[18px] font-[Georgia] font-[400] leading-[34.56px] mb-6">
                Get free access to a variety of New York Times articles, games, and
                podcasts if you are an undergraduate or graduate student.
              </p>
            </div>
            <a
              href="https://www.nytimes.com/activate-access/edu-access"
              className="text-[18px] font-[Georgia] px-6 py-3 bg-white rounded-[10px] border border-black w-fit"
            >
              Register
            </a>
          </div>

          {/* Wall Street Journal */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <img
                src="/wsj.png"
                alt="Wall Street Journal"
                className="h-[45px] w-auto mb-3"
              />
              <h1 className="text-[24px] font-[400] font-[Georgia] leading-[35.98px] mb-1">
                Wall Street Journal
              </h1>
              <p className="text-[18px] font-[Georgia] font-[400] leading-[34.56px] mb-6">
                Get free access to a variety of WSJ articles, career advice, and job
                prep resources if you are an undergraduate student, graduate student, or
                faculty/staff.
              </p>
            </div>
            <a
              href="https://WSJ.com/ASUCBerkeley"
              className="text-[18px] font-[Georgia] px-6 py-3 bg-white rounded-[10px] border border-black w-fit"
            >
              Register
            </a>
          </div>
        </div>



      {/* <div id="CASSA" className="mx-8 py-[10vh]">
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

              
              <div id="text" className="md:basis-2/3 pt-10 md:pt-0 ">
                  <p className="">
                  {texts[currentText].text}
                  </p>
              </div>
          </main>
      </div> */}

      <div className="items-center mx-[10%] pt-[5vh] text-center">
              <div className="relative flex items-center mt-10">
                  <div className="flex-grow border-t border-[#A6A6A6] "></div>
                  <span className="flex-shrink mx-4 text-[25px] font-bold md:font-normal">Partnership Feedback</span>
                  <div className="flex-grow border-t border-[#A6A6A6]"></div>
              </div>
        </div>

        <div className="place-content-center text-center mx-[10%] pb-8 mt-10">
              <p className="text-[#3D3D3D] text-md">Are you a student? Let us know how you’re liking our current partnerships (like NYT and WSJ), and suggest new ones you’d love to see!</p>
        </div>

          
        <div className="flex justify-center items-center mt-5">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd0Xs2uIpKrg1rOQn6fB1CODypJsukz6WUfURqrwuy0iWJlCw/viewform?embedded=true" className="w-[500px] h-[500px] shadow-lg rounded-[20px] border-0">Loading…</iframe>
        </div>

      <div className="items-center mx-[10%] pt-[5vh] text-center">
        <div className="relative flex items-center ">
            <div className="flex-grow border-t border-[#A6A6A6] "></div>
            <span className="flex-shrink mx-4 text-[25px] font-bold md:font-normal">Projects</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>
      </div>

      {/* <div className="md:mx-[30%]  mx-[10%] py-5 place-items-center py-[5vh]">
          <img src='/departments/comm_act/c1.png' className="w-[35vw]"/>
          <p className="text-md md:text-lg w-fit mx-[10%]"><i>The OEVP provides free access to newspaper 
            subscriptions such as the Wall Street Journal and New York Times, and financial grants.</i></p>
      </div> */}
      <div className="px-[10%] mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Project 1: WSJ Election Tabling */}
        <div className="bg-white bg-opacity-85 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border-x border-b border-[#D3D3D3] overflow-hidden">
          <img
            src="/departments/comm_act/c1.png"
            alt="WSJ Election"
            className="w-full h-auto object-cover"
          />
          <div className="p-4">
            <h3 className="text-[15.05px] font-bold font-[Georgia] leading-[25.38px] mb-2">
              Wall Street Journal Election Tabling
            </h3>
            <p className="text-[12.04px] font-[Georgia] leading-[25.38px]">
              Teamed up with Wall Street Journal (WSJ) during the 2024 election for an event in which free WSJ merchandise was offered to students who activated their WSJ accounts — free WSJ resources were also used to educate students on the latest election coverage!
            </p>
          </div>
        </div>

        {/* Project 2: OEVP Website */}
        <div className="bg-white bg-opacity-85 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border-x border-b border-[#D3D3D3] overflow-hidden">
          <img
            src="/departments/comm_act/c4.png"
            alt="OEVP Website"
            className="w-full h-auto object-cover"
          />
          <div className="p-4">
            <h3 className="text-[15.05px] font-bold font-[Georgia] leading-[25.38px] mb-2">
              ASUC Office of the Executive Vice President Website
            </h3>
            <p className="text-[12.04px] font-[Georgia] leading-[25.38px]">
              Developed a website to inform the campus community about the Executive Vice President’s office, highlighting projects and free resources offered on behalf of the office.
            </p>
          </div>
        </div>

        {/* Project 3: Whistleblower Event */}
        <div className="bg-white bg-opacity-85 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border-x border-b border-[#D3D3D3] overflow-hidden">
          {/* Images */}
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2">
              <img
                src="/departments/comm_act/c5.png"
                alt="Whistleblower Event 1"
                className="w-full h-full object-cover aspect-[1/1] md:aspect-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/departments/comm_act/c6.png"
                alt="Whistleblower Event 2"
                className="w-full h-full object-cover aspect-[1/1] md:aspect-auto"
              />
            </div>
          </div>

          {/* Caption */}
          <div className="p-4">
            <h3 className="text-[20.51px] font-bold font-[Georgia] leading-[34.58px] mb-2">
              Whistleblower Event
            </h3>
            <p className="text-[16.41px] font-[Georgia] leading-[34.58px]">
              Commercial Activities welcomed Tyler Shultz on April 10, 2025 to discuss his role in exposing the $9B Theranos scandal and the ethics of whistleblowing in healthcare.
            </p>
          </div>
        </div>
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
            <img src="/departments/comm_act/c3.png" className="w-[40vh]"/>
            <div className=" mt-4 md:mt-0 p-3">
              <a href="https://www.dailycal.org/news/campus/asuc/asuc-contracts-provide-students-more-than-new-york-times-subscription/article_37319cec-a702-11ef-a1e8-2bba65ea0e83.html">
                <h3 className="font-bold text-xl leading-[32px]">ASUC contracts provide students more than New York Times subscription</h3>
                <p className="text-[#5E5E5E] text-sm leading-[32px]">Through ASUC partnerships with the New York Times, the Wall Street Journal and LinkedIn Premium.</p>
              </a>                
            </div>
          </div>


          <div className=" md:flex md:basis-1/2 hover:bg-gray-100">
            <img src="/departments/comm_act/c2.png" className="w-[40vh]"/>
            <div className=" mt-4 md:mt-0 p-3">
              <a href="https://www.dailycal.org/archives/asuc-announces-partnerships-with-the-new-york-times-wall-street-journal/article_269c3ab0-59ae-5fcd-9322-85bfad8ece51.html">
                <h3 className="font-bold text-xl leading-[32px]">ASUC announces partnerships with New York Times, Wall Street Journal</h3>
                <p className="text-[#5E5E5E] text-sm leading-[32px]">Through ASUC partnerships with the New York Times, the Wall Street Journal and LinkedIn Premium.</p>
              </a>
            </div>
          </div>
        </div>

        <Footer />
    </div>

)}