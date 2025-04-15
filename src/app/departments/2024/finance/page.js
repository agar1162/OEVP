"use client"

import React, { useState } from "react";
import Navbar from "../../../../components/home/Navbar";
import Footer from "../../../../components/home/Footer";
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
        {/* <Cover 
            name="Finance"
            link="finance.jpg"
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
        </div> */}
        {/* Hero section for Finance */}
        <div className="w-full bg-white shadow-md mt-2">
            <div className="w-full flex flex-col md:flex-row items-stretch">

                {/* Left: Image */}
                <div className="w-full md:w-1/2">
                <img
                    src="/departments/finance.jpg"
                    alt="Finance Department"
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
                        Finance
                        </h1>
                        <p className="text-[14px] md:text-[15px] text-black mb-1">
                        Responsible for keeping track of the office budget
                        </p>
                        <p className="text-[12px] text-[#444444]">
                        Emily Melero (Director), Paola Moron (Associate)
                        </p>
                    </div>
                </div>

            </div>
        </div>

        {/* Expandable Caption for Finance */}
        <div className="px-6 md:px-[10%] py-[4vh] text-center text-[15px] leading-relaxed max-w-screen-xl mx-auto">
            <p className={`transition-all duration-300 ease-in-out ${isExpanded ? "text-black" : "text-[#3E3E3E]"}`}>
                This department ensures the Office of the Executive Vice President is informed about the finances of the Associated Students of the University of California (ASUC).
                The team is responsible for keeping track of the office budget, submitting purchase requests and reimbursements, as well as other projects relating to ASUC finances,
                such as working with the ASUC Chief Financial Officer when determining the CASSA Grant.{" "}
                {!isExpanded && (
                <span className="text-[#9E9E9E]">
                    They work closely with the Commercial Activities Department and Student Affairs Department on projects related to or requiring financial expertise...
                </span>
                )}
                {isExpanded && (
                <span>
                    They work closely with the Commercial Activities Department and Student Affairs Department on projects related to or requiring financial expertise.
                    Whether it involves evaluating funding proposals, managing financial resources for campus programs, or advising on long-term fiscal strategies,
                    this department ensures that financial decisions are both sustainable and impactful.
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


        <div className="relative flex items-center mx-[10%]">
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
            <span className="flex-shrink mx-4 text-[25px]">Finance Resources</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>

        {/* <div className="md:flex justify-center gap-8">
            <div className="flex flex-col items-center  py-5 md:w-1/3 md:max-w-[45%]">
                <img
                className="w-[40vh] md:w-[60vh]"
                src="/departments/finance/f1.jpg"
                alt="Grant Submission Portal"
                />
                <p className="mt-4 px-4 md:px-0 max-w-[60vh]">
                Grant Submission Portal: Allow RSOs or individuals to apply for the CASSA Grant directly from the website.
                </p>
            </div>

            <div className="flex flex-col items-center py-5 md:w-1/3 md:max-w-[45%]">
                <img
                className="w-[40vh] md:w-[60vh]"
                src="/departments/finance/f2.jpg"
                alt="Funding Information"
                />
                <p className="mt-4 px-4 md:px-0 max-w-[60vh]">
                Funding information for registered student organizations (RSOs), including funding opportunities.
                </p>
            </div>
        </div> */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 px-6 md:px-[10%] py-10">
            {/* CASSA Form Card */}
            <div className="w-full max-w-[440px] bg-white rounded-[2px] shadow-md overflow-hidden scale-[0.95]">
                <div className="h-[280px] md:h-[330px] overflow-hidden">
                <img
                    src="/departments/finance/f1.jpg"
                    alt="CASSA Proposal"
                    className="w-full h-full object-cover"
                />
                </div>
                <div className="border-t-[3px] border-[#003A70] bg-white bg-opacity-80 px-6 py-6 space-y-4">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdab72MM6omHHg6c5ZPGHeBEQ6lY4pGFfc1f-NaqnHfiGZUUg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#003A70] text-[12px] font-bold font-[Georgia]"
                >
                    Click Here to Access Form
                </a>
                <h3 className="text-black text-[22px] leading-[33px] font-[Georgia] font-normal">
                    CASSA Fund Proposal Form
                </h3>
                <p className="text-black text-[18.5px] leading-[20px] font-[Georgia] font-normal">
                    Students can submit funding proposals directly through the application for consideration and allocation from the CASSA Fund
                </p>
                </div>
            </div>

            {/* Fund Your Org Card */}
            <div className="w-full max-w-[440px] bg-white rounded-[2px] shadow-md overflow-hidden rounded-none scale-[0.95]">
                <div className="h-[280px] md:h-[330px] overflow-hidden">
                <img
                    src="/departments/finance/f2.png"
                    alt="Funding for RSOs"
                    className="w-full h-full object-cover"
                />
                </div>
                <div className="border-t-[3px] border-[#003A70] bg-white bg-opacity-80 px-6 py-6 space-y-4">
                <a
                    href="https://lead.berkeley.edu/student-orgs/manage-your-org/fund-your-org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#003A70] text-[12px] font-bold font-[Georgia]"
                >
                    Click Here to Access Website
                </a>
                <h3 className="text-black text-[22px] leading-[33px] font-[Georgia] font-normal">
                    Fund Your Org Website
                </h3>
                <p className="text-black text-[18.5px] leading-[20px] font-[Georgia] font-normal">
                    Funding information for Registered Student Organizations (RSOs) including funding opportunities.
                </p>
                </div>
            </div>
        </div>

        <div className="w-full px-6 md:px-[10%]">
        <div className="relative flex  items-center mx-[10%]">
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
            <span className="flex-shrink mx-4 text-[25px] md:hidden">FAQ</span>
            <span className="flex-shrink mx-4 text-[25px] sm:hidden md:block mb-2">Frequently Asked Questions</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>

        
        
        <div className="mx-8 pb-10 ">
            <FAQ 
                title="What is the CASSA Fund?"
                text="The Commercial Activities and Student Services Agreement (CASSA) funds are managed in collaboration with the ASUC Chief Financial Officer to support student-led programs, events, and initiatives. This fund provides financial resources to enrich student life at UC Berkeley. It comes from the commercial revenue accounts derived from the Student Union's business ventures."
            />

            <FAQ 
                title="Who is eligible to submit a proposal for the CASSA Fund?"
                text="Registered Student Organizations (RSOs) and other eligible campus groups or students may submit proposals for the CASSA Fund when applications open, as announced by the Executive Vice President (who is the chair of the CASSA Fund Advisory Committee). The proposal should support activities that benefit the student body. For detailed eligibility criteria and deadlines, please refer to the Office of the Executive Vice President's Instagram or Public Notice announcements from the Executive Vice President."
            />

            <FAQ 
                title="How can I submit a proposal for the CASSA Fund?"
                text="Through the Commercial Activities and Student Services Agreement (CASSA) Fund Proposal Application that opens during the school year from the Office of the Executive Vice President. You will need to provide a detailed budget, a description of your program or event, and an explanation of how it aligns with ASUC’s mission to enhance student life. Fund allocations are decided by the CASSA Fund Advisory Committee."
            />
            <FAQ
                title="Example of how these funds have been used in the past?"
                text="The ASUC has partnerships with the New York Times and the Wall Street Journal that have been secured using the CASSA Fund. Campus students have subscriptions to these services for free."
            />
            <FAQ
                title="How funding works for CASSA?"
                text="Funding for these contracts is negotiated by the ASUC and paid for using the Commercial Activities and Student Services Agreement (CASSA) revenues, which establishes standards for ASUC commercial activities, including a fund generated from the revenue from the Martin Luther King Jr. Student Union building that is used to pay for the contracts of the current commercial subscription services."
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
        <FAQ
        title="Can students provide input on how ASUC funds are allocated?"
        text={
            <>
            <div>
                While most ASUC funds are granted to ASUC-sponsored RSOs, students can show their support for certain programs they want to see ASUC funds go to.
                Some funding opportunities the ASUC provides include:
            </div>
            <div className="mt-2">
                <a href="https://callink.berkeley.edu/organization/sof" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Student Opportunity Fund</a>,{" "}
                <a href="https://crowdfund.berkeley.edu/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Crowdfunding</a>,{" "}
                <a href="http://tgif.berkeley.edu/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">The Green Initiative Fund</a>,{" "}
                <a href="https://wellnessfund.berkeley.edu/home" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Berkeley Wellness Fund</a>,{" "}
                <a href="https://sa.berkeley.edu/committee-on-student-services-and-fees/funding-requests" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">CACSSF Student Services Fee Discretionary Fund</a>,{" "}
                <a href="https://chancellor.berkeley.edu/gcr/local-community/programs-initiatives/ccpf" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Chancellor’s Community Partnership Fund</a>,{" "}
                <a href="https://campusclimate.berkeley.edu/students/ejce/big-c" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">The Big C Fund</a>, and more!
            </div>
            </>
        }
        />
        <FAQ
        title="What types of financial resources does the ASUC provide for students?"
        text={
            <>
            <div>The ASUC offers funding for:</div>
            <ul className="list-disc list-inside mt-2 ml-4">
                <li>Registered Student Organizations (RSOs)</li>
                <li>
                <a
                    href="https://callink.berkeley.edu/organization/gsf"
                    className="text-blue-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Grants and scholarships
                </a>
                </li>
                <li>Campus-wide events and initiatives</li>
                <li>Support for long-term projects benefiting students</li>
            </ul>
            </>
        }
        />



        </div>
        </div>

        <Footer />

    </div>
)}