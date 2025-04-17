// 'use client'
// import React, { useState } from 'react'
// import Navbar from "../../../../components/home/Navbar";
// import Footer from "../../../../components/home/Footer";
// import Cover from "../components/Cover"

// export default function departmentsPage() {
//     const [showMore, setShowMore] = useState(false);

//     return(
//     <div>
//         <Navbar />
//         <Cover 
//             name="RSO Support"
//             link="rso.jpeg"
//             desc="Ensures that registered student organizations have access to all resources provided by the ASUC."
//             mem="Kassandra Gomez (Deputy Director), Arisbeth Molina Ambriz (Director), Sumaya Owens (Associate), Melissa Lopez (Associate), Camillie Paucar (Intern), Heidi Andrade (Associate) "
//         />

//         <div className="p-[5vh] lg:mx-[10%] text-[20px]">
//             <p>
//                 Established to ensure UCB students and their respective registered student organizations 
//                 have access to all resources provided by the ASUC, ranging from spaces to funding. 
//                 This department promotes communication and transparency among the hundreds of RSOs 
//                 at our university, specifically liaising with organizations that are not already in
//                  direct contact with other elected officials of the ASUC. Members of this department 
//                  work closely with ASUC Senators to ensure their communities and RSOs are able to 
//                  receive information pertaining to their needs. 
//             </p>
//         </div>

//         <div className="relative flex  items-center mx-[10%]">
//             <div className="flex-grow border-t border-[#A6A6A6]"></div>
//             <span className="flex-shrink mx-4 text-[25px]">400+ RSO’s are currently ASUC Sponsored</span>
//             <div className="flex-grow border-t border-[#A6A6A6]"></div>
//         </div>

//         <div className="mx-[10%] pb-10">
//             <h3 className="font-bold">Benefits of ASUC Sponsorship:</h3>
//             <ul className="list-decimal list-inside p-4">
//                 <li>RSOs can apply for ASUC funding, special grants, and scholarships. They can also apply for the Senate Contingency Fund, which is available throughout the academic year for RSOs that need more funding than expected, missed deadlines, or are newly formed</li>
//                 <li>RSOs can apply for office and storage space, and can use the ASUC Tax ID for fundraising. They can also apply for a fee waiver to use rooms in the MLK Student Union.</li>
//                 <li>RSOs receive an on-campus mailing address</li>
//                 <li>RSOs have access to event insurance coverage</li>
//                 <li>RSOs can advertise for free on the digital screens in the Student Union</li>
//                 <li>RSOs have access to resources like Student Organizational Services (SOS), which provides support with finance, technology, event services, and more</li>
//                 <li>RSOs can use CalLink to manage their finances and banking</li>
//             </ul>
//             <p className="pb-5">To apply for ASUC Sponsorship and/or funding, fill out the form on the ASUC Senate’s CalLink page. Form is only available during the fall and spring semesters when the Senate is in session.</p>

//             <a className="text-berkeley" href="https://callink.berkeley.edu/submitter/form/step/1?guid=a70c2cc4-f157-4f74-9517-6f0c2311daad"><p>Click me to apply!</p></a>
//         </div>

//         <Footer />

//     </div>

// )}
'use client'

import React, { useState } from 'react';
import Navbar from '../../../../components/home/Navbar';
import Footer from '../../../../components/home/Footer';
import RSOSlideshow from '../components/RSO-Slideshow';


export default function departmentsPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="w-full bg-white shadow-md mt-2">
        <div className="w-full flex flex-col md:flex-row items-stretch">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/departments/rso.jpeg"
              alt="RSO Department"
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
                RSO Support
              </h1>
              <p className="text-[14px] md:text-[15px] text-black mb-1">
                Ensures that registered student organizations have access to all resources provided by the ASUC.
              </p>
              <p className="text-[12px] text-[#444444]">
                Kassandra Gomez (Deputy Director), Arisbeth Molina Ambriz (Director), Sumaya Owens (Associate), Melissa Lopez (Associate), Camillie Paucar (Intern), Heidi Andrade (Associate)
              </p>
            </div>
          </div>
        </div>
      </div>

        {/* Expandable Caption Section */}
        <div className="px-6 md:px-[10%] py-[4vh] text-center text-[15px] leading-relaxed max-w-screen-xl mx-auto">
            <p className={`transition-all duration-300 ease-in-out ${isExpanded ? "text-black" : "text-[#3E3E3E]"}`}>
                The RSO (Registered Student Organization) department supports recognized student groups on campus, fostering leadership, collaboration, and community engagement.
                {!isExpanded && (
                <span className="text-[#9E9E9E]">
                    {" "}
                    We aim to strengthen the student experience through various initiatives...
                </span>
                )}
                {isExpanded && (
                <span>
                    {" "}
                    We aim to strengthen the student experience through various initiatives that empower RSOs and connect them with the larger campus community. Our work includes providing resources, training, and event coordination for RSOs, helping student leaders navigate university policies and funding opportunities. By amplifying the voices of student groups, we aim to make Berkeley a place where every student finds a community that supports their growth and passions.
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

        <div className="relative flex  items-center mx-[10%]">
             <div className="flex-grow border-t border-[#A6A6A6]"></div>
             <span className="flex-shrink mx-4 text-[25px]">400+ ASUC Sponsored RSOs</span>
             <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>

        <div className="mx-[10%] pb-10 mt-8">
            <h3>ASUC Sponsorship- Info on benefits of sponsorship:</h3>
            <ul className="list-decimal list-inside p-4 md:leading-loose mt-6">
                 <li>RSOs can apply for ASUC funding, special grants, and scholarships. They can also apply for the Senate Contingency Fund, which is available throughout the academic year for RSOs that need more funding than expected, missed deadlines, or are newly formed</li>
                 <li>RSOs can apply for office and storage space, and can use the ASUC Tax ID for fundraising. They can also apply for a fee waiver to use rooms in the MLK Student Union.</li>
                 <li>RSOs receive an on-campus mailing address</li>
                 <li>RSOs have access to event insurance coverage</li>
                 <li>RSOs can advertise for free on the digital screens in the Student Union</li>
                 <li>RSOs have access to resources like Student Organizational Services (SOS), which provides support with finance, technology, event services, and more</li>
                 <li>RSOs can use CalLink to manage their finances and banking</li>
            </ul>
            <p className="pb-5 md:leading-loose mt-6">
            To apply for ASUC Sponsorship and/or funding, fill out the form on the{" "}
                <a
                    href="https://callink.berkeley.edu/submitter/form/step/1?guid=a70c2cc4-f157-4f74-9517-6f0c2311daad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                    title="Submit your ASUC Sponsorship or Funding Request Form via CalLink"
                >
                    ASUC Senate’s CalLink page
                </a>
                . The form is only available during the fall and spring semesters when the Senate is in session.
            </p>

        </div>        

        {/* <div className="relative flex items-center mx-[10%]">
             <div className="flex-grow border-t border-[#A6A6A6]"></div>
             <span className="flex-shrink mx-4 text-[25px]">Benefits of ASUC Sponsorship</span>
             <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div> */}
        <div className="relative flex flex-col sm:flex-row items-center mx-[10%] text-center">
            {/* Top line on small screens, left line on larger screens */}
            <div className="w-full sm:flex-grow border-t border-[#A6A6A6] sm:mr-4 mb-2 sm:mb-0"></div>

            {/* Title Text (always 25px) */}
            <span className="text-[25px] font-[Georgia]">Benefits of ASUC Sponsorship</span>

            {/* Bottom line on small screens, right line on larger screens */}
            <div className="w-full sm:flex-grow border-t border-[#A6A6A6] sm:ml-4 mt-2 sm:mt-0"></div>
        </div>

        <RSOSlideshow />

        <div className="relative flex items-center mx-[10%]">
             <div className="flex-grow border-t border-[#A6A6A6]"></div>
             <span className="flex-shrink mx-4 text-[25px]">Past Events</span>
             <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10 mb-16 px-6 md:px-[10%]">
            {/* Event 1 */}
            <div className="w-full md:w-[500px] flex flex-col items-center">
                <img
                src="/departments/rso/r1.png"
                alt="RSO Funding Workshop"
                className="w-full h-auto object-cover shadow-md"
                />
                <p className="text-sm mt-6 text-center font-[Georgia]">RSO Funding Workshop</p>
            </div>

            {/* Event 2 */}
            <div className="w-full md:w-[500px] flex flex-col items-center">
                <img
                src="/departments/rso/r2.jpg"
                alt="Prelaw Panel"
                className="w-full h-auto object-cover shadow-md"
                />
                <p className="text-sm mt-6 text-center font-[Georgia]">Prelaw Panel</p>
            </div>
        </div>
        

      <Footer />
    </div>
  );
}
