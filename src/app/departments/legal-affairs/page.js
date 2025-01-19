"use client"

import React, { useState } from "react";
import Navbar from "../../../components/home/Navbar";
import Footer from "../../../components/home/Footer";
import Cover from "../components/Cover"

export default function departmentsPage() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };

    return(
    <div>
        <Navbar />
        <Cover 
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
        </div>

        <div
        id="WHO_WE_ARE"
        className="mx-8 lg:mx-[5rem] pb-10">
            <main className="flex flex-col lg:flex-row pt-10 text-[20px] gap-8">
                {/* Side Menu */}
                <div
                    id="sidemenu"
                    className="lg:basis-1/3 flex flex-col items-center drop-shadow-lg">
                    <h3 className="flex items-center w-full text-[25px] text-center">
                        <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
                        <span className="px-4">Who We Are</span>
                        <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
                    </h3>

                    <menu className="flex flex-col pt-5 w-1/2 gap-4">
                        <a
                            href="#mission"
                            className="hover:bg-[#003A70] hover:text-white border-2 border-[#003A70] p-4 text-center font-semibold rounded-md transition">
                            Our Mission
                        </a>
                        <a
                            href="#resources"
                            className="hover:bg-[#003A70] hover:text-white border-2 border-gray-300 p-4 text-center font-semibold rounded-md transition">
                            Free Resources
                        </a>
                    </menu>
                </div>

                {/* Main Content */}
                <div id="text" className="lg:basis-2/3">
                    <p className="text-center">
                        Wait until the General Public Comment portion of the Senate meeting. 
                        At this point in time, any member of the public may make a general public 
                        comment relating to any issue that concerns the Association or its members. 
                        Individuals who wish to speak may make one general public comment which may not 
                        exceed two minutes. Speakers cannot yield their time at any point.  This portion 
                        of the meeting is dedicated to general matters relating to the ASUC; public comments 
                        related to items on the Consent Calendar or Immediate Consideration may not be made at 
                        this time and are reserved for later in the meeting.
                    </p>
                </div>
            </main>
        </div>

        <div className="p-5 place-items-center md:mx-[50vh]">
            <img src="../backgrounds/legal.png"/>
            <i>LGBTQ+ rights bill, Indigenous Women Resolution, Students’ Rights resolution passed unanimously on November 22, 2024</i>
        </div>

        <div className="relative flex  items-center mx-[10%]">
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
            <span className="flex-shrink mx-4 text-[25px]">Legislation Passed</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>


        <div className="p-5 place-items-center">
            <p className="pb-5 mx-4 text-[#595959]">100+ legislations drafted, passed, and implemented by OEVP in collaboration with the ASUC Senate.</p>
            <img src="../backgrounds/legis.png"/>
            <a className="text-berkeley" href="https://docs.google.com/spreadsheets/d/1VZvZXj5SnRYNmMwoJuFMcAf3actc0e6YN4wg9z3LRxs/edit?gid=643676931#gid=643676931"><u><i>ASUC Historical Resolution Tracker</i></u></a>
        </div>

        <Footer />

    </div>

)}