"use client"

import React, { useState } from "react";
import Navbar from "../../../components/home/Navbar";
import Footer from "../../../components/home/Footer";
import Cover from "../components/Cover"
import FAQ from "../components/FAQ"
export default function departmentsPage() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };

    // const 
    return(
    <div>
        <Navbar />
        <Cover 
            name="Finance"
            link="finance.png"
            desc="Responsible for keeping track of the office budget"
            mem="Emily Melero (Director), Paola Moron (Associate)"
                />
            
        <div className="p-[5vh] lg:mx-[10%] text-[20px]">
            <p>
                This department ensures the Office of the Executive Vice President is
                informed about the finances of the Associated Students of the University of California (ASUC).
                The team is responsible for keeping track of the office budget,{" "}
                <span >
                submitting purchase requests and reimbursements, as well as other projects relating to ASUC finances,
                such as working with the ASUC Chief Financial Officer when determining the CASSA Grant.{" "}
                {!isExpanded && "..."}
                </span>
                {isExpanded && (
                <span>
                    They work closely with the Commercial Activities Department and Student 
                    Affairs Department on projects related to or requiring financial expertise. 
                    Whether it involves evaluating funding proposals, managing financial resources for campus programs, 
                    or advising on long-term fiscal strategies, this department ensures that financial decisions are 
                    both sustainable and impactful.
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
            <span className="flex-shrink mx-4 text-[25px] md:hidden">FAQ</span>
            <span className="flex-shrink mx-4 text-[25px] sm:hidden md:block">Frequently Asked Questions</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>
        
        <div className="mx-8 pb-10 ">
            <FAQ 
                title="What is the CASSA Grant"
                text="The CASSA Grant (Campus Activity Support and Sponsorship Allocation) is a 
                fund managed in collaboration with the ASUC Chief Financial Officer to support student-led programs, events, and initiatives. It provides financial resources to enrich student life at UC Berkeley."
            />

            <FAQ 
                title="Who can apply for the CASSA Grant?"
                text="Registered Student Organizations (RSOs) and other eligible campus groups or members can apply for the CASSA Grant to fund activities that benefit the student body. Specific eligibility criteria and deadlines are available on the ASUC website."
            />

            <FAQ 
                title="How can I apply for the CASSA Grant?"
                text="Applications for the CASSA Grant can be submitted through a form when the CASSA Fund Advisory Committee convenes during the school year. You will need to provide a detailed budget, a description of your program or event, and an explanation of how it aligns with ASUC’s mission to enhance student life."
            />
            <FAQ
                title="Can students provide input on how ASUC funds are allocated?"
                text="Yes! Students can share their feedback on ASUC funding priorities through surveys, open forums, or by contacting the Finance Department directly. Input from the campus community helps guide financial decision-making."
            />
            <FAQ 
                title="What types of financial resources does the ASUC provide for students?"
                text="Registered Student Organizations (RSOs),
                    Campus-wide events and initiatives,
                    Grants, and
                    Support for long-term projects benefiting students"
            />
        </div>
        

        <Footer />



    </div>
)}