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

        <div id="WHO_WE_ARE" className="mx-8 py-[10vh]">
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

                {/* Main Content */}
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
        </div>

        <Footer />

    </div>

)}