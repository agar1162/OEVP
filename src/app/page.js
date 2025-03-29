"use client"
import React, { useState, useEffect } from "react";
import CountUp from 'react-countup';
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import "./globals.css";

export default function Home() {
  const times = "/nyt.png";
  const wsj = "/wsj.png";
  const def = "Get free access to a variety of New York Times articles, games, and podcasts if you are an undergraduate or graduate student.";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(0); 

  const nextSlide = () => {
    setCurrentIndex((currentIndex) => {
      const isLastSlide = currentIndex === slides.length - 1;
      return isLastSlide ? 0 : currentIndex + 1;
    });
  };
  

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(autoplay);
  }, []); 

  
  

  const slides = [
    {
      url: "/home/slideshow/team.jpeg",
      caption: "Find out more about the team and the work we do!",
      title: "Office",
      link: "/offices/2024.html"
    }, {
      url: "/home/slideshow/events.jpg",
      caption: "Check out the events the Office of the Executive Vice President coordinates for the student body!",
      title: "Events",
      link: "departments/student-affairs.html"
    },
    {
      url: "/home/slideshow/com.jpg",
      caption: "Explore resources for the diverse communities we support!",
      title: "Communities",
      link: "/departments/deib/communities.html"
    },
    {
      url: "/home/slideshow/legis.jpg",
      caption: "Want to get involved? Learn about the different resolutions in the ASUC senate.",
      title: "Legislation",
      link: "/departments/legal-affairs.html"
    },
    {
      url: "/home/slideshow/rso.jpg",
      caption: "Read about the benefits of getting your Registered Student Organization (RSO) ASUC-funded.",
      title: "RSOs",
      link: "/departments/rso.html"
    }
  ];



  const texts = [
    {
      text: `Office of the Executive Vice President (OEVP) of the Associated 
              Students of the University of California (ASUC) is a student-led body 
              dedicated to empowering students by fostering transparency, equity, and 
              collaboration across campus. We strive to amplify student voices, bridge 
              communication between students and administration, and ensure the efficient 
              allocation of resources to meet the diverse needs of our community. By developing strategic 
              partnerships, advocating for students, and launching inclusive initiatives, the 
              OEVP supports overall student wellness.`
    },
    {
      text: (
        <>
          The Executive Vice President (EVP) serves as the second-ranking representative of the ASUC, overseeing its
          general operations and commercial activities, as well as chairing the Senate where they have the power to break
          tie votes and appoint committee members. Additionally, the EVP ensures the execution of Senate directives,
          leads the Senate Leadership Institute, and manages the allocation of office space and resources to
          ASUC-sponsored organizations, while carrying out other duties as defined by the{' '}
          <a
            href="https://docs.google.com/document/d/1Qk565835nTJFky68YxK6bwRzsPLE1zRjK0a1psF2_9o/edit?tab=t.0"
            className="underline hover:text-[#003A70]"
            target="_blank"
            rel="noopener noreferrer"
          >
            ASUC Constitution
          </a>{' '}
          and{' '}
          <a
            href="https://docs.google.com/document/d/119xX22loigaKYddHGle9wpG1yrNkRa6sCXuUHuuHKeg/edit?tab=t.0#heading=h.div3mh1s3942"
            className="underline hover:text-[#003A70]"
            target="_blank"
            rel="noopener noreferrer"
          >
            EVP Bylaws
          </a>
          .
        </>
      ),
    }, {
      text: `Our office has various departments, each specializing in a specific area designed to enhance student life and 
            support our broader mission. These departments play key roles in facilitating campus-wide initiatives, building strategic 
            partnerships, engaging with campus groups & student leaders, and ensuring the fair and equitable distribution of resources.
            Together, we support the academic, personal, and professional growth of all UC Berkeley students and registered student 
            organizations (RSOs), ensuring they have the tools to succeed.`
    }, {
      text: (
        <>
          The OEVP provides free access to newspaper subscriptions such as the Wall Street Journal and New York Times,{' '}
          <a
            href="https://callink.berkeley.edu/organization/gsf"
            className="underline hover:text-[#003A70]"
            target="_blank"
            rel="noopener noreferrer"
          >
            financial grants
          </a>
          , &{' '}
          <a
            href="https://lead.berkeley.edu/student-orgs/manage-your-org/plan-events-for-your-org/reserve-space/"
            className="underline hover:text-[#003A70]"
            target="_blank"
            rel="noopener noreferrer"
          >
            campus spaces
          </a>{' '}
          for RSO’s.
        </>
      ),
    }
  ]
  
  return (
    <div>
      <Navbar />

      <div
        id="COVER"
        className="h-[90vh] bg-cover bg-center bg-no-repeat text-white text-center flex items-start justify-center relative"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute bg-cover bg-center b w-full h-full transition-opacity duration-1000 ease-in-out md:bg-fixed ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(165, 165, 165, 0.53) 4%, rgba(0, 58, 112, 0.53) 78.5%), url(${slide.url})`,
            }}
          ></div>
        ))}

      <div className="w-full pb-10">
        <div className="absolute p-8 rounded-md mt-14">
          <h1 className="text-4xl mx-[15%] lg:text-7xl font-extrabold tracking-wider">
            OFFICE OF THE EXECUTIVE VICE PRESIDENT
          </h1>
          <a href={slides[currentIndex].link}>
            <h3 className="text-2xl md:text-3xl mt-[5%] mx-[20%] flex items-center justify-center gap-2">
              {slides[currentIndex].caption}
              <i className="fa fa-long-arrow-right text-2xl ml-1" aria-hidden="true"></i>
            </h3>
          </a>
        </div>
        
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex md:text-2xl gap-[4vw] md:gap-[10vw] p-10 w-full justify-center">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-shrink-0">
              {currentIndex === index && (
                <hr className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-[60px] h-[2px] bg-white duration-700 ease-in-out" />
              )}
              <button onClick={() => setCurrentIndex(index)}>
                <h3 className="transition duration-500 ease-in-out">
                  {slide.title}
                </h3>
              </button>
            </div>
          ))}
          </div>
  
        </div>

      </div>
     
      <div id="WHO_WE_ARE" className="mx-8 py-[10vh]">
        <h3 className="flex items-center mx-[10%] text-2xl lg:text-3xl text-center">
                <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
                <span className="px-4">Who Are We?</span>
                <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
        </h3>

        <main className="flex flex-col md:flex-row  pt-10 text-xl mx-[10%] text-sm md:text-xl">

          <div id="sidemenu" className="lg:basis-1/2 flex flex-col items-center ">

            <menu className="flex flex-col mx-[10%] border-2 border-t-4 border-t-[#003A70] divide-y-2 divide-gray-200  shadow-xl">
              <a
                onClick={() => setCurrentText(0)}
                className="hover:bg-[#003A70] hover:text-white p-4  transition"
              >
                Our Mission
              </a>
              <a
                onClick={() => setCurrentText(1)}
                className="hover:bg-[#003A70] hover:text-white p-4  transition"
              >
                What is the Executive Vice President's (EVP) Role?
              </a>
              <a
                onClick={() => setCurrentText(2)}
                className="hover:bg-[#003A70] hover:text-white  p-4 transition"
              >
                What Does Our Office Do?
              </a>
              <a
                onClick={() => setCurrentText(3)}
                className="hover:bg-[#003A70] hover:text-white  p-4 transition"
              >
                Resources (RSO’s & Students)
              </a>
            </menu>
          </div>

          {/* Main Content */}
          <div id="text" className="lg:basis-1/2 pt-10 md:pt-0">
            <p className="">
              {texts[currentText].text}
            </p>
          </div>
        </main>
      </div>

        
        {/* <div 
          id="ORGSTATS"
          className="flex flex-wrap transition-all duration-75 ease-in justify-center items-center gap-[12vw] py-[10vh] pb-[15vh]">
            <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                <h1 className="text-[#003A70] text-5xl md:text-7xl  font-bold pb-5" >400+</h1>
                <p className="text-xl text-center mx-4">Registered Student Organizations receive funding & resources</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                <h1  className="text-[#003A70] text-5xl md:text-7xl font-bold pb-5" >100+</h1>
                <p className="text-xl text-center mx-4">Legislations implemented in collaboration with ASUC Senate</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                <h1 className="text-[#003A70] text-5xl md:text-7xl font-bold pb-5" >180k</h1>
                <p className="text-xl text-center mx-4">New York Times articles read monthly by students</p>
            </div>
        </div> */}
        <div 
          id="ORGSTATS"
          className="flex flex-wrap justify-center items-center gap-[12vw] py-[10vh] pb-[15vh]">
          <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
            <h1 className="text-[#003A70] text-5xl md:text-7xl font-bold pb-5">
              <CountUp end={400} duration={3} suffix="+"/>
            </h1>
            <p className="text-xl text-center mx-4">Registered Student Organizations receive funding & resources</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
            <h1 className="text-[#003A70] text-5xl md:text-7xl font-bold pb-5">
              <CountUp end={100} duration={3} suffix="+"/>
            </h1>
            <p className="text-xl text-center mx-4">Resolutions implemented in collaboration with ASUC Senate</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
            <h1 className="text-[#003A70] text-5xl md:text-7xl font-bold pb-5">
              <CountUp end={180} duration={3} suffix="k+"/>
            </h1>
            <p className="text-xl text-center mx-4">New York Times articles read monthly by students</p>
          </div>
        </div>

      
      {/* NYT and WSJ Section */}
      <div
        id="NYT_WSJ"
        className="w-full bg-gradient-to-r from-[#FFD67A] to-[#F9B315] px-10 py-20 flex flex-col lg:flex-row gap-10 justify-center"
      >
        {/* NYT */}
        <div className="flex flex-col gap-4 text-left max-w-[600px]">
          <img src={times} alt="nyt" className="w-[54px] h-[54px]" />
          <div className="text-[34.56px] font-normal font-[Georgia] leading-[35.98px]">
            New York Times
          </div>
          <div className="text-[23.93px] font-normal font-[Georgia] leading-[34.56px]">
            Get free access to a variety of New York Times articles, games, and podcasts if you are an undergraduate or graduate student.
          </div>
          <a
            href="https://www.nytimes.com/activate-access/edu-access"
            className="bg-white w-fit px-6 py-2 rounded text-[26.35px] font-[Georgia] text-black hover:bg-gray-200"
          >
            Register
          </a>
        </div>

        {/* WSJ */}
        <div className="flex flex-col gap-4 text-left max-w-[600px]">
          <img src={wsj} alt="wsj" className="w-[73px] h-[45px]" />
          <div className="text-[34.56px] font-normal font-[Georgia] leading-[35.98px]">
            Wall Street Journal
          </div>
          <div className="text-[23.93px] font-normal font-[Georgia] leading-[34.56px]">
            Get free access to a variety of WSJ articles, career advice, and job prep resources if you are an undergraduate student, graduate student, or faculty/staff.
          </div>
          <a
            href="https://WSJ.com/ASUCBerkeley"
            className="bg-white w-fit px-6 py-2 rounded text-[26.29px] font-[Georgia] text-black hover:bg-gray-200"
          >
            Register
          </a>
        </div>
      </div>

      {/* Events Section */}
      <div id="EVENTS" className="px-[10%] py-[10vh]">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-10">
          <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
          <h3 className="px-4 text-2xl lg:text-3xl font-[Georgia]">Come To Our Events</h3>
          <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Text */}
          <div className="lg:pl-[5%] flex-1 text-[18px] md:text-[20px] font-[Georgia] leading-[36px]">
            <p>
              The Office of the Executive Vice President organizes a wide range of events,
              including those led independently by one of our departments, collaborations with
              other ASUC offices or campus groups, and events in conjunction with companies,
              external groups, or individuals.
            </p>
            <br />
            <p>
              These events vary in scope and purpose, serving the diverse needs of the campus
              community & beyond. Past events have included professional development workshops,
              leadership panels, networking opportunities, community-building events, and
              advocacy initiatives.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:pr-[5%] flex-1">
            <img src="/home/e_1.png" alt="Event" className="w-full h-auto" />
            <p className="text-[13.36px] font-[Georgia] italic mt-2">
              The Office of the Executive Vice President held the{' '}
              <span className="underline">PPIA Junior Summer Institute</span> Panel and Mixer
              in collaboration with the Goldman School of Public Policy and the Student Policy
              Institute at Berkeley.
            </p>
          </div>
        </div>
      </div>

      <div id="PARTNER" className="px-[10%] pb-[15vh]">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-10">
          <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
          <h3 className="px-4 text-2xl lg:text-3xl font-[Georgia] text-center">Work With Us</h3>
          <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center text-justify">
          {/* Left Image */}
          <div className="flex-1 lg:pl-[5%] max-w-[500px]">
            <img
              src="/home/work.png"
              alt="Work With Us"
              className="w-full h-auto"
            />
          </div>

          {/* Right Text + CTA */}
          <div className="flex-1 lg:pr-[5%] max-w-[600px]">
            <p className="text-[22px] font-[Georgia] font-normal leading-[37.41px] mb-0.5 text-justify">
              Are you an<br />
              Organization or Company<br />
              that would like to work with us?
            </p>

            <p className="text-[12px] font-[Georgia] font-normal leading-[28px] mb-4 px-2 text-justify">
              The Office of the Executive Vice President can partner with services or platforms that address student needs and make them available to the student body, ensuring these resources are provided in the best interest of students, on behalf of the office.
            </p>

            <a
              href="/partnerships.html"
              className="inline-flex justify-center items-center px-4 py-[6px] bg-[#003A70] rounded-full outline outline-[2.67px] outline-white outline-offset-[-2.67px] font-[Georgia] text-white text-[26.79px] font-normal hover:bg-[#002957] transition-colors"
            >
              Partner with ASUC Here
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
