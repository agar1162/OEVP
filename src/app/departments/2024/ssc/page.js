'use client'
import React, { useState, useEffect } from "react";
import Navbar from "../../../../components/home/Navbar";
import Footer from "../../../../components/home/Footer";
import Cover from "../components/Cover"

export default function DepartmentsPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentText, setCurrentText] = useState(0); 

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return(
      <div>
          <Navbar />
          {/* <Cover
              name="Senatorial and Student affairs Committe"
              link="/departments/ssc.jpeg"
              desc="Encourages different Senatorial Offices, Commissions, and Committees."
              mem="Caroline Holm (Associate), Valerie Barajas (Associate), Aarja Singh (Semester 1 Interim Director), Esbeidy Campos (Deputy Director), Denise Barrios Lopez (Associate), Victoria Hernadez (Associate), Not featured: Maya Garica (Director)"
              />

          <div className="p-10 lg:mx-[10%] text-[20px] indent-10">
              <p>
                Established to ensure timely communication between the OEVP, Senate Offices, Commissions, and Committees. Associates are assigned issue portfolios and are responsible for liaising with Senate Offices, Commissions, and Committees on a weekly basis and reporting upcoming events, legislation, or requests for support to the SCA Executive. This department encourages collaboration among the different Senatorial Offices, Commissions, and Committees, in an attempt to mitigate polarization in the Senate and increase the. 
              </p>
          </div> */}
          {/* Hero Section: Senatorial and Student affairs Committe */}
          <div className="w-full bg-white shadow-md mt-2">
            <div className="w-full flex flex-col md:flex-row items-stretch">
              {/* Left: Image */}
              <div className="w-full md:w-1/2">
                <img
                  src="/departments/ssc.jpeg"
                  alt="Senatorial and Student affairs Committe"
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
                    Senatorial and Student Affairs Committe
                  </h1>
                  <p className="text-[14px] md:text-[15px] text-black mb-1">
                    Encourages different Senatorial Offices, Commissions, and Committees
                  </p>
                  <p className="text-[12px] text-[#444444]">
                    Caroline Holm (Associate), Valerie Barajas (Associate), Aarja Singh (Semester 1 Interim Director), Esbeidy Campos (Deputy Director), Denise Barrios Lopez (Associate), Victoria Hernadez (Associate), Not featured: Maya Garica (Director) 
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Caption Section */}
          <div className="px-6 md:px-[10%] py-[4vh] text-center text-[15px] leading-relaxed max-w-screen-xl mx-auto">
            <p className={`transition-all duration-300 ease-in-out ${isExpanded ? "text-black" : "text-[#3E3E3E]"}`}>
              Established to ensure timely communication between the OEVP, Senate Offices, Commissions, and Committees. Associates are assigned issue portfolios and are responsible for liaising with Senate Offices, Commissions, and Committees on a weekly basis and reporting upcoming events, legislation, or requests for support to the SCA Executive. 
              {!isExpanded && (
                <span className="text-[#9E9E9E]">
                  This department encourages collaboration among the different Senatorial Offices, Commissions, and Committees, in an attempt to mitigate polarization in the Senate and increase the...
                </span>
              )}
              {isExpanded && (
                <span>
                  This department encourages collaboration among the different Senatorial Offices, Commissions, and Committees, in an attempt to mitigate polarization in the Senate and increase the.
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
          <span className="flex-shrink mx-4 text-[25px]">Ongoing Work</span>
          <div className="flex-grow border-t border-[#A6A6A6]"></div>
      </div>

      <div className="md:mx-[30%]  mx-[10%] py-5 place-items-center">
          <img src="../backgrounds/stu_aff.png" />
          <p className="text-[12px] md:text-lg"><i>To celebrate Hispanic Heritage Month, the Student Affairs
                department organized a collaborative event with Cal Dining
                and Berkeley Dining at CrossRoads Dining Hall for a night
                  full of delicious food, vibrant music, and fun performances.</i>
          </p>
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
                <h3 className="font-bold text-xl">ASUC focuses on endorsements and campus presence</h3>
                <p className="text-[#5E5E5E] text-sm">Several ASUC resolutions this semester have focused on the ASUC’s reputation and relationship to the student body.</p>
              </a>
              
            </div>
          </div>


        <div className=" md:flex md:basis-1/2 hover:bg-gray-100">
          <img src="/departments/comm_act/c3.png" className="w-[35vh]"/>
          <div className=" mt-4 md:mt-0 p-3">
            <a href="https://www.dailycal.org/archives/asuc-announces-partnerships-with-the-new-york-times-wall-street-journal/article_269c3ab0-59ae-5fcd-9322-85bfad8ece51.html">
              <h3 className="font-bold text-xl">ASUC officials emphasize student support, supporting transparency </h3>
              <p className="text-[#5E5E5E] text-sm">Senators and executives have several overlapping platforms that demonstrate the major goals of the 2024-25 student government.</p>
            </a>
            </div>
        </div>
      </div>



      <Footer />
  </div>
  )
}