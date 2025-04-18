// OEVP/src/app/departments/2024/deib/page.js
"use client";
import React, { useState } from "react";
import Navbar from "../../../../components/home/Navbar";
import Footer from "../../../../components/home/Footer";
import Cover from "../components/Cover";

// const gridItem = (name, link = "", img = "") => (
//     <div className="relative p-20 border border-gray-300 bg-berkeley text-white">
//         {/* Black Tint Overlay */}
//         {img && (
//             <div 
//                 className="absolute inset-0 bg-black opacity-75" 
//                 style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//             />
//         )}
//         <h1 className="font-semibold text-center relative z-10">{name}</h1>
//         {link ? (
//             <a
//                 href={link}
//                 className="absolute bottom-4 right-4 px-4 py-2 bg-berkeley text-white border border-white hover:bg-white hover:text-berkeley transition duration-300"
//             >
//                 Read More
//             </a>
//         ) : (
//             <button
//                 className="absolute bottom-4 right-4 px-4 py-2 bg-white text-berkeley border border-berkeley hover:bg-berkeley hover:text-white transition duration-300"
//             >
//                 Read More
//             </button>
//         )}
//     </div>
// );



export default function DepartmentsPage() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const gridItem = (name, link = "", img = "") => (
        <div
          className="relative w-full aspect-[4/3] bg-cover bg-center overflow-hidden m-0 p-0"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute inset-0 bg-[#003A70] bg-opacity-50 group-hover:bg-opacity-40 transition-opacity" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 z-10">
            <h1 className="text-sm md:text-md font-semibold leading-tight text-white drop-shadow-md">
              {name}
            </h1>
            <a
              href={link}
              className="mt-2 px-3 py-1 text-xs border border-white hover:bg-white hover:text-berkeley transition"
            >
              Read More
            </a>
          </div>
        </div>
    );

    const images = () => {
        const data = []
        for (let i = 1; i < 10; i++) {
            data.push(`/departments/deib/communities/co${i}.png`);
        }
        return data;
    };

    // const communities = [
    //     { name: "Black/Afrikan Diaspora Community", link: "/departments/deib/communities.html#Black/Afrikan" },
    //     { name: "Latinx/Chicanx Community", link: "/departments/deib/communities.html#Latinx/Chicanx" },
    //     { name: "Indigenous/Native American Community", link: "/departments/deib/communities.html#Indigenous" },
    //     { name: "Middle Eastern, North African, and Muslim Student Community", link: "/departments/deib/communities.html#MENA/Muslim" },
    //     { name: "Asian American and Pacific Islander (AAPI) Community", link: "/departments/deib/communities.html#AAPI" },
    //     { name: "Jewish Community", link: "/departments/deib/communities.html#Jewish" },
    //     { name: "LGBTQIA+ Community", link: "/departments/deib/communities.html#LGBTQIA+" },
    //     { name: "Disability Community", link: "/departments/deib/communities.html#DSP" },
    //     { name: "International Student Community", link: "/departments/deib/communities.html#International" },
    // ];

    // const communities = [
    //     { name: "Black/Afrikan Diaspora Community", link: "/departments/deib/communities#Black/Afrikan" },
    //     { name: "Latinx/Chicanx Community", link: "/departments/deib/communities#Latinx/Chicanx" },
    //     { name: "Indigenous/Native American Community", link: "/departments/deib/communities#Indigenous" },
    //     { name: "Middle Eastern, North African, and Muslim Student Community", link: "/departments/deib/communities#MENA/Muslim" },
    //     { name: "Asian American and Pacific Islander (AAPI) Community", link: "/departments/deib/communities#AAPI" },
    //     { name: "Jewish Community", link: "/departments/deib/communities#Jewish" },
    //     { name: "LGBTQIA+ Community", link: "/departments/deib/communities#LGBTQIA+" },
    //     { name: "Disability Community", link: "/departments/deib/communities#DSP" },
    //     { name: "International Student Community", link: "/departments/deib/communities#International" },
    // ];

    return (
        <div>
            <Navbar />
            {/* <Cover
                name="Diversity, Equity, Inclusion & Belonging"
                link="deib.jpeg"
                desc="Addresses the needs of the UC Berkeley campus."
                mem="Doah Obaid (Associate), Risha Jain (Intern), Rishi Reddy (Director), Josalyn Huynh (Intern), Not Featured: Joshua Agupogo (Director)"
            />

            <div className="p-10 lg:mx-[10%] text-[20px] indent-10">
                <p>
                    Created to ensure the Office of the Executive President (OEVP) and its
                    departments have the research to support projects, public statements,
                    and information for the wider campus community. We are tasked with
                    supporting the development of policy briefs and crafting and analyzing
                    surveys and student climate data. This department is the primary bridge
                    between the OEVP and various cultural and identity caucuses across
                    campus. Lastly, this department works closely with the Vice Chancellor
                    for Diversity, Equity, and Inclusion, to ensure their office is properly
                    serving the student body.
                </p>
            </div> */}
            {/* Hero Section: Diversity, Equity, Inclusion & Belonging */}
            <div className="w-full bg-white shadow-md mt-2">
            <div className="w-full flex flex-col md:flex-row items-stretch">
                {/* Left: Image */}
                <div className="w-full md:w-1/2">
                <img
                    src="/departments/deib.jpeg"
                    alt="Diversity, Equity, Inclusion & Belonging"
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
                    Diversity, Equity, Inclusion & Belonging
                    </h1>
                    <p className="text-[14px] md:text-[15px] text-black mb-1">
                        Serves and supports the diverse communities of UC Berkeley.
                    </p>
                    <p className="text-[12px] text-[#444444]">
                    Doah Obaid (Associate), Risha Jain (Intern), Rishi Reddy (Director), Josalyn Huynh (Intern), Not Featured: Joshua Agupogo (Director)
                    </p>
                </div>
                </div>
            </div>
            </div>

            {/* Introductory Paragraph */}
            <div className="px-6 md:px-[10%] py-[4vh] text-center text-[15px] leading-relaxed max-w-screen-xl mx-auto">
                <p className={`transition-all duration-300 ease-in-out ${isExpanded ? "text-black" : "text-[#3E3E3E]"}`}>
                    Created to ensure the Office of the Executive President (OEVP) and its departments have the research to support projects, public statements, and information for the wider campus community. We are tasked with supporting the development of policy briefs and crafting and analyzing surveys and student climate data.
                    {!isExpanded && (
                    <span className="text-[#9E9E9E]">
                        {" "}
                        This department is the primary bridge between the OEVP and various cultural and identity caucuses across campus...
                    </span>
                    )}
                    {isExpanded && (
                    <span>
                        {" "}
                        This department is the primary bridge between the OEVP and various cultural and identity caucuses across campus. Lastly, this department works closely with the Vice Chancellor for Diversity, Equity, and Inclusion, to ensure their office is properly serving the student body.
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

            <div className="items-center mx-[10%] py-[5vh] text-center">
                <div className="relative flex items-center">
                    <div className="flex-grow border-t border-[#A6A6A6]"></div>
                    <span className="flex-shrink mx-4 text-[25px] md:font-normal">
                        Explore UC Berkeley’s Diverse Student Community
                    </span>
                    <div className="flex-grow border-t border-[#A6A6A6]"></div>
                </div>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-[10%] pb-10">
                {communities.map((community, index) => (
                    <div key={index}>
                        {gridItem(community.name, community.link)}
                    </div>
                ))}
            </div> */}
            <div className="w-full max-w-screen-lg mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1px] max-w-screen-lg mx-auto">
                    {gridItem("Black/Afrikan Diaspora Community", "/departments/2024/deib/communities/#Black/Afrikan", images()[0])}
                    {gridItem("Chicanx/Latinx Community", "/departments/2024/deib/communities/#Latinx/Chicanx", images()[1])}
                    {gridItem("Indigenous/Native American Community", "/departments/2024/deib/communities/#Indigenous", images()[2])}
                    {gridItem("Middle Eastern, North African, and Muslim Community", "/departments/2024/deib/communities/#MENA/Muslim", images()[3])}
                    {gridItem("Asian American and Pacific Islander (AAPI) Community", "/departments/2024/deib/communities/#AAPI", images()[4])}
                    {gridItem("Jewish Community", "/departments/2024/deib/communities/#Jewish", images()[5])}
                    {gridItem("LGBTQIA+ Community", "/departments/2024/deib/communities/#LGBTQIA+", images()[6])}
                    {gridItem("Disabled Community", "/departments/2024/deib/communities/#DSP", images()[7])}
                    {gridItem("International Community", "/departments/2024/deib/communities/#International", images()[8])}
                </div>
            </div>

            <div className="items-center mx-[10%] pt-[5vh] text-center">
            <div className="relative flex items-center ">
                <div className="flex-grow border-t border-[#A6A6A6] "></div>
                <span className="flex-shrink mx-4 text-[25px] md:font-normal">Project</span>
                <div className="flex-grow border-t border-[#A6A6A6]"></div>
            </div>
            </div>

            {/* <div className="mt-12 flex justify-center">
            <div className="w-full max-w-[20%] bg-white bg-opacity-85 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border-x border-b border-[#D3D3D3] overflow-hidden"> */}
            <div className="mt-12 flex justify-center px-6">
                <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white bg-opacity-85 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] border-x border-b border-[#D3D3D3] overflow-hidden">
                    <img
                    src="/departments/deib/deib-proj-1.png"
                    alt="FAFSA Fridays event"
                    className="w-full h-auto object-cover"
                    />
                    <div className="p-4">
                    <h3 className="text-[15.05px] font-bold font-[Georgia] leading-[25.38px] mb-2">
                        FAFSA Fridays
                    </h3>
                    <p className="text-[12.04px] font-[Georgia] leading-[25.38px]">
                        Collaborating with Office of AID AND SCHOLARSHIPS for FAFSA to help students with financial aid.
                    </p>
                    </div>
                </div>
            </div>



            <div className="items-center mx-[10%] pt-[5vh] text-center">
            <div className="relative flex items-center ">
                <div className="flex-grow border-t border-[#A6A6A6] "></div>
                <span className="flex-shrink mx-4 text-[25px] md:font-normal">Past Work As Seen on Daily Cal</span>
                <div className="flex-grow border-t border-[#A6A6A6]"></div>
            </div>
            </div>
        
        {/* <div className="flex flex-wrap pb-10 md:flex-regular mx-[10%] py-5">
            <div className=" md:flex md:basis-1/2 hover:bg-gray-100">
              <img src="/departments/deib/d1.jpg" className="w-[35vh]"/>
              <div className=" mt-4 md:mt-0 p-3">
                <a href="https://www.dailycal.org/news/campus/asuc/asuc-130k-multicultural-initiative-fund-opens-applications/article_2652cca4-90f3-11ef-9610-2b734167d8cc.html">
                  <h3 className="font-bold text-xl">ASUC $130K Multicultural Initiative Fund opens application</h3>
                  <p className="text-[#5E5E5E] text-sm">ASUC offers the Multicultural Initiatitiave Fund to uplift cultural groups on campus.</p>
                </a>
              </div>
            </div>


          <div className=" md:flex md:basis-1/2 hover:bg-gray-100">
            <img src="/departments/deib/d2.jpg" className="w-[35vh]"/>
            <div className=" mt-4 md:mt-0 p-3">
              <a href="https://www.dailycal.org/news/campus/asuc/newsom-approves-bill-establishing-disability-access-and-compliance-training/article_dad9eb1c-7fd2-11ef-98f9-e3c106b4346a.html">
                <h3 className="font-bold text-xl">Newsom approves bill establishing disability access and compliance training</h3>
                <p className="text-[#5E5E5E] text-sm">Assembly Bill 2821 was signed and approved by California Gov. Gavin Newsom on Saturday.</p>
              </a>
              </div>
          </div>
        </div> */}
        <div className="flex flex-wrap pb-10 md:flex-regular mx-[10%] py-5 mt-10">
            <div className=" md:flex md:basis-1/2 hover:bg-gray-100">
                <img src="/departments/deib/d1.jpeg" className="w-[40vh]"/>
                <div className=" mt-4 md:mt-0 p-3">
                    <a href="https://docs.google.com/document/d/1H5XnSkaslibeLXc-U2n5ivEg1HgUM6mhiy4tvol4fv4/edit?tab=t.0">
                    <h3 className="font-bold text-xl leading-[32px]">ASUC passes bill supporting LGBTQ+ rights</h3>
                    <p className="text-[#5E5E5E] text-sm leading-[32px]">During the ASUC Senate meeting Wednesday, ASUC senators passed with a resolution with no objections that aims to protect LGBTQ+ rights.</p>
                    </a>
                    
                </div>
            </div>

            <div className=" md:flex md:basis-1/2 hover:bg-gray-100">
                <img src="/departments/deib/d2.jpeg" className="w-[40vh]"/>
                <div className=" mt-4 md:mt-0 p-3">
                    <a href="https://www.dailycal.org/news/campus/asuc/asuc-senate-discusses-five-new-resolutions/article_0ac3a9d6-a3bd-11ef-a730-73af5a8a0ead.html">
                        <h3 className="font-bold text-xl leading-[32px]">ASUC Senate discusses five new resolutions</h3>
                        <p className="text-[#5E5E5E] text-sm leading-[32px]">The ASUC senate saw five new resolutions up for approval this Wednesday, including protecting LGBTQ+ rights on campus.</p>
                    </a>
                </div>
            </div>
        </div>


            <Footer />
        </div>
    );
}
