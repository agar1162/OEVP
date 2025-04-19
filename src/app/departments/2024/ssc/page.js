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
              Encourages different Senatorial Offices, Commissions, and Committees.
            </p>
            <p className="text-[12px] text-[#444444]">
              Caroline Holm (Associate), Valerie Barajas (Associate), Aarja Singh (Semester 1 Interim Director), Esbeidy Campos (Deputy Director), Denise Barrios Lopez (Associate), Victoria Hernadez (Associate), Not Featured: Maya Garica (Director) 
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
            {" "}
            This department encourages collaboration among the different Senatorial Offices, Commissions, and Committees, in an attempt to...
          </span>
        )}
        {isExpanded && (
          <span>
            {" "}
            This department encourages collaboration among the different Senatorial Offices, Commissions, and Committees, in an attempt to mitigate polarization in the Senate and increase the impact of events held by each Office.
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

    <div className="relative flex  items-center mx-[10%] mt-14">
        <div className="flex-grow border-t border-[#A6A6A6]"></div>
        <span className="flex-shrink mx-4 text-[25px]">Our Work</span>
        <div className="flex-grow border-t border-[#A6A6A6]"></div>
    </div>

    {/* <div className="md:mx-[30%]  mx-[10%] py-5 place-items-center">
        <img src="../backgrounds/stu_aff.png" />
        <p className="text-[12px] md:text-lg"><i>To celebrate Hispanic Heritage Month, the Student Affairs
              department organized a collaborative event with Cal Dining
              and Berkeley Dining at CrossRoads Dining Hall for a night
              full of delicious food, vibrant music, and fun performances.</i>
        </p>
    </div> */}
    <div className="px-[10%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
      {/* Work 1 */}
      <div className="bg-white bg-opacity-85 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border-x border-b border-[#D3D3D3] overflow-hidden">
        <img
          src="/departments/ssc/s1.png"
          alt="CHCI Alumni Panel"
          className="w-full h-auto object-cover"
        />
        <div className="p-4">
          <p className="text-[12.04px] font-[Georgia] leading-[25.38px]">
            Helped to host Congressional Hispanic Caucus Institute (CHCI) Alumni Panel in conjunction with Senator Gonzales
          </p>
        </div>
      </div>

      {/* Work 2 */}
      <div className="bg-white bg-opacity-85 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border-x border-b border-[#D3D3D3] overflow-hidden">
        <img
          src="/departments/ssc/s2.png"
          alt="Nutrition 101"
          className="w-full h-auto object-cover"
        />
        <div className="p-4">
          <p className="text-[12.04px] font-[Georgia] leading-[25.38px]">
            Developed a website to inform the campus community about the Executive Vice President’s office, highlighting projects and free resources offered on behalf of the office.
          </p>
        </div>
      </div>

      {/* Work 3 */}
      <div className="bg-white bg-opacity-85 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border-x border-b border-[#D3D3D3] overflow-hidden">
        <img
          src="/departments/ssc/s3.png"
          alt="Town Hall"
          className="w-full h-auto object-cover"
        />
        <div className="p-4">
          <p className="text-[12.04px] font-[Georgia] leading-[25.38px]">
            Collaborated with Senator Grottel-Brown and OASIS for RSO Affairs Town Hall
          </p>
        </div>
      </div>

      {/* Work 4 */}
      <div className="bg-white bg-opacity-85 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border-x border-b border-[#D3D3D3] overflow-hidden">
        <img
          src="/departments/ssc/s4.png"
          alt="PPIA Panel"
          className="w-full h-auto object-contain"
        />
        <div className="border-t-[3px] border-[#003A70] bg-white bg-opacity-80 px-6 py-6">
          <p className="text-[12.04px] font-[Georgia] leading-[25.38px]">
            Hosted PPIA Junior Summer Institute Panel and Mixer with Senator Ordukhanian and the Student Policy Institute of Berkeley (SPIB)
          </p>
        </div>
      </div>

      {/* Work 5 */}
      <div className="bg-white bg-opacity-85 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border-x border-b border-[#D3D3D3] overflow-hidden">
        <img
          src="/departments/ssc/s5.jpg"
          alt="Tenants Rights"
          className="w-full h-auto object-contain"
        />
        <div className="border-t-[3px] border-[#003A70] bg-white bg-opacity-80 px-6 py-6">
          <p className="text-[12.04px] font-[Georgia] leading-[25.38px]">
            Assisted ASUC Legal Clinic with Tenants Rights Workshop
          </p>
        </div>
      </div>
    </div>

    {/* <div className="items-center mx-[10%] pt-[5vh] text-center">
      <div className="relative flex items-center ">
          <div className="flex-grow border-t border-[#A6A6A6] "></div>
          <span className="flex-shrink mx-4 text-[25px] md:font-normal">Past Work As Seen on Daily Cal</span>
          <div className="flex-grow border-t border-[#A6A6A6]"></div>
      </div>
    </div> */}
    <div className="relative flex flex-col sm:flex-row items-center mx-[10%] text-center mt-14 mb-2">
        {/* Top line on small screens, left line on larger screens */}
        <div className="w-full sm:flex-grow border-t border-[#A6A6A6] sm:mr-4 mb-2 sm:mb-0"></div>

        {/* Title Text (always 25px) */}
        <span className="text-[25px] font-[Georgia]">Past Work As Seen on Daily Cal</span>

        {/* Bottom line on small screens, right line on larger screens */}
        <div className="w-full sm:flex-grow border-t border-[#A6A6A6] sm:ml-4 mt-2 sm:mt-0"></div>
    </div>    

    {/* <div className="flex flex-wrap pb-10 md:flex-regular mx-[10%] py-5">
        <div className=" md:flex md:basis-1/2 hover:bg-gray-100">
          <img src="/departments/comm_act/c2.jpg" className="w-[35vh]"/>
          <div className=" mt-4 md:mt-0 p-3">
            <a href="https://www.dailycal.org/news/campus/asuc/midsemester-report-asuc-focuses-on-endorsements-multiculturalism-and-campus-presence/article_831fcdc0-9b51-11ef-a10d-67db3d1c6511.html">
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
    </div> */}

    <div className="flex flex-wrap pb-10 md:flex-regular mx-[10%] py-5">
      <div className=" md:flex md:basis-1/2 hover:bg-gray-100">
        <img src="/departments/ssc/s6.png" className="w-[30vh] h-auto"/>
        <div className=" mt-4 md:mt-0 p-3">
          <a href="https://www.dailycal.org/news/campus/asuc/midsemester-report-asuc-focuses-on-endorsements-multiculturalism-and-campus-presence/article_831fcdc0-9b51-11ef-a10d-67db3d1c6511.html">
            <h3 className="font-bold text-xl leading-[32px]">ASUC focuses on endorsements and campus presence</h3>
            <p className="text-[#5E5E5E] text-sm leading-[32px]">Several ASUC resolutions this semester have focused on the ASUC’s reputation and relationship to the student body.</p>
          </a>                
        </div>
      </div>


      <div className=" md:flex md:basis-1/2 hover:bg-gray-100">
        <img src="/departments/ssc/s7.png" className="w-[30vh] h-auto"/>
        <div className=" mt-4 md:mt-0 p-3">
          <a href="https://www.dailycal.org/news/campus/asuc/asuc-officials-emphasize-student-support-transparency-in-2024-25-platforms/article_9d9022b2-7582-11ef-9f20-a78692d9fb22.html">
            <h3 className="font-bold text-xl leading-[32px]">ASUC officials emphasize student support, supporting transparency </h3>
            <p className="text-[#5E5E5E] text-sm leading-[32px]">Senators and executives have several overlapping platforms that demonstrate the major goals of the 2024-25 student government.</p>
          </a>
        </div>
      </div>
    </div>


    <Footer />
  </div>
  )
}