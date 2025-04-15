"use client"

import React, { useState, useEffect } from "react";
import Navbar from "../../../../components/home/Navbar";
import Footer from "../../../../components/home/Footer";
import Cover from "../components/Cover"

export default function departmentsPage() {
    const [isExpanded, setIsExpanded] = useState(false);

    const [currentText, setCurrentText] = useState(0); 

    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };


    const texts = [
        {
            text: "Wait until the General Public Comment portion of the Senate meeting. At this point in time, any member of the public may make a general public comment relating to any issue that concerns the Association or its members. Individuals who wish to speak may make one general public comment which may not exceed two minutes. Speakers cannot yield their time at any point."
        },
        {
            text: "If you would like to be added to the public comment list, please record on a slip of paper your name and relationship to the University or lack thereof and submit said slip to the Chair. We will go on a ‘first-come first-served basis’."
        },
        {
            text: "The Chair will mute speakers or any members of the general public if they do not abide by the rules already outlined. If you would like to be added to the speakers list, directly message the vice chair with your name and affiliation to the University or lack thereof, identify if it is a general comment or comment on Agenda item, and the topic or item of your public comment. We will go in order of names received from the private message to the vice chair. "
        }
    ]

    return(
    <div>
        <Navbar />
        {/* <Cover 
            name="Legislative Affairs"
            link="legal.jpeg"
            desc="Responsible for managing strategic communications and  public relations initiatives"
            mem="Chloe Choi (Intern), Hailey Jung (Intern), Matt Blake (Associate)"
        />

        <div className="p-[5vh] lg:mx-[10%] text-[20px]">
            <p>
            The Legislative Affairs department provides the EVP along with other department 
            leaders council on bylaws and policy initiatives by reviewing current and prospective 
            ASUC governing documents. We also provide both the Chiefs of Staff and the EVP updates 
            on bills that have entered the Senate and those that have passed, along with drafting and 
            managing legislation ourselves for consideration by the Senate. 
            </p>
        </div> */}
        {/* Hero Section: Legislative Affairs */}
        <div className="w-full bg-white shadow-md mt-2">
        <div className="w-full flex flex-col md:flex-row items-stretch">
            {/* Left: Image */}
            <div className="w-full md:w-1/2">
            <img
                src="/departments/legal.jpeg"
                alt="Legislative Affairs Department"
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
                Legislative Affairs
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

        {/* Expandable Caption Section */}
        <div className="px-6 md:px-[10%] py-[4vh] text-center text-[15px] leading-relaxed max-w-screen-xl mx-auto">
        <p className={`transition-all duration-300 ease-in-out ${isExpanded ? "text-black" : "text-[#3E3E3E]"}`}>
            The Legislative Affairs department provides the EVP along with other department leaders council on bylaws and policy initiatives by reviewing current and prospective ASUC governing documents. We also provide both the Chiefs of Staff and the EVP updates on bills that have entered the Senate and those that have passed, along with drafting and managing legislation ourselves for consideration by the Senate.{" "}
            {!isExpanded && (
            <span className="text-[#9E9E9E]">
                This includes resolutions related to student rights, DEI, and campus-wide advocacy efforts...
            </span>
            )}
            {isExpanded && (
            <span>
                This includes resolutions related to student rights, DEI, and campus-wide advocacy efforts, helping the student body navigate legislation that directly impacts them. The team collaborates with senators and other student leaders to ensure legislation is inclusive, equitable, and aligned with student needs.
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


        {/* <div id="WHO_WE_ARE" className="mx-8 py-[10vh]">
            <h3 className="flex items-center mx-[10%] text-2xl lg:text-3xl text-center">
                    <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
                    <span className="px-4">Who We Are</span>
                    <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
            </h3>

            <main className="flex flex-col md:flex-row  pt-10 text-[20px] mx-[10%] text-sm md:text-xl">
                <div id="sidemenu" className="lg:basis-1/3 flex flex-col mx-[10%] justify-center ">
                    <h3>Public Coment Guide</h3>

                <menu className="flex flex-col  border-2 border-t-4 border-t-[#003A70] divide-y-2 divide-gray-200  shadow-xl">
                    <a
                        onClick={() => setCurrentText(1)}
                        className="hover:bg-[#003A70] hover:text-white p-4  transition"
                    >
                        In-Person Commenters
                    </a>
                    <a
                        onClick={() => setCurrentText(2)}
                        className="hover:bg-[#003A70] hover:text-white p-4  transition"
                    >
                        Online Commenters
                    </a>
                </menu>
            </div>

                
                <div id="text" className="md:basis-2/3 pt-10 md:pt-0 ">
                    <p className="">
                    {texts[currentText].text}
                    </p>
                </div>
            </main>
      </div>

        <div className="p-5 place-items-center md:mx-[50vh]">
            <img src="../home/legal.png"/>
            <i>LGBTQ+ rights bill, Indigenous Women Resolution, Students’ Rights resolution passed unanimously on November 22, 2024</i>
        </div>

        <div className="relative flex  items-center mx-[10%]">
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
            <span className="flex-shrink mx-4 text-[25px]">Legislation Passed</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>


        <div className="p-5 place-items-center">
            <p className="pb-5 mx-4 text-[#595959]">100+ legislations drafted, passed, and implemented by OEVP in collaboration with the ASUC Senate.</p>
            <img src="../home/legis.png"/>
            <a className="text-berkeley" href="https://docs.google.com/spreadsheets/d/1VZvZXj5SnRYNmMwoJuFMcAf3actc0e6YN4wg9z3LRxs/edit?gid=643676931#gid=643676931"><u><i>ASUC Historical Resolution Tracker</i></u></a>
        </div> */}
        <div className="relative flex  items-center mx-[10%]">
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
            <span className="flex-shrink mx-4 text-[25px]">Our Work</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-[10%] py-10">
            {[
                {
                title: "Student Tech Fund Fee (STFF) Referendum",
                link: "https://docs.google.com/document/d/1dQwG2S03nhfK_LrX0S2c1zMXtTbARmeC/edit?usp=sharing&ouid=106504022530916931612&rtpof=true&sd=true"
                },
                {
                title: "Authorizing the Allocation of Space for University Staff",
                link: "#"
                },
                {
                title: "In Support of a Contract between the Association and the New York Times",
                link: "https://docs.google.com/document/d/1TnxAMpBGFA1qwSQCS5tJ5DLvDKRnFJ9mNA12pCaWm9g/edit?tab=t.0"
                },
                {
                title: "Amending ASUCBL 2204: Updating and Modernizing the Spaces Director Responsibilities",
                link: "#"
                },
                {
                title: "Resolution Against Branding Changes to the ASUC Student Union",
                link: "#"
                }
            ].map((item, index) => (
                <div
                key={index}
                className="bg-white bg-opacity-85 shadow-md border-t-[3px] border-[#003A70] p-6 rounded-none w-full max-w-[425px] mx-auto flex flex-col justify-between"
                >
                <p className="text-center text-black text-[20px] font-[Georgia] leading-[37px]">
                    {item.title}
                </p>
                <div className="mt-6 flex justify-center">
                    <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#003A70] text-white text-[13.8px] font-[Times New Roman] underline rounded-sm border border-white/50"
                    >
                    View Resolution
                    </a>
                </div>
                </div>
            ))}
        </div>

        <Footer />

    </div>

)}