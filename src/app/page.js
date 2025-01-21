"use client"
import React, { useState, useEffect } from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import "./globals.css";

export default function Home() {
  const times = "/nyt.png";
  const wsj = "/wsj.png";
  const def =
    "Get free access to a variety of New York Times articles, games, and podcasts if you are an undergraduate or graduate student.";

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex) => {
      const isLastSlide = currentIndex === slides.length - 1;
      return isLastSlide ? 0 : currentIndex + 1;
    });
  };
  
  

  const slides = [
    {
      url: "/backgrounds/slideshow/team.jpeg",
      caption: "Find out more about the team and the work we do!",
      title: "Office",
      link: "/offices/2024.html"
    },
    {
      url: "/backgrounds/slideshow/rso.JPG",
      caption: "Read about the benefits of getting your Registered Student Organization (RSO) ASUC-funded",
      title: "RSO",
      link: "/departments/rso.html"
    },
    {
      url: "/backgrounds/slideshow/com.JPG",
      caption: "Explore resources for the diverse communities we support!",
      title: "Communities",
      link: "/departments/deib.html"
    },
    {
      url: "/backgrounds/slideshow/events.JPG",
      caption: "View past Senate meetings run by the EVP",
      title: "Events",
      link: "https://www.facebook.com/theASUC/"
    },
    {
      url: "/backgrounds/slideshow/legis.JPG",
      caption: "Want to get involved? Learn about the different legislations in the ASUC senate and how to provide public comment!",
      title: "Legislature",
      link: ""
    }
  ];

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoplay);
  }, []);


  return (
    <div>
      <Navbar />



      <div
        id="COVER"
        className="h-[75vh] md:m-10 bg-cover bg-center bg-no-repeat text-white text-center flex items-start justify-center relative"
      >
        {/* Background images with transition */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute bg-cover bg-center b w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(165, 165, 165, 0.53) 4%, rgba(0, 58, 112, 0.53) 78.5%), url(${slide.url})`,
            }}
          ></div>
        ))}

        <div className="absolute p-8 rounded-md max-w-[90%]  h-full py-10">
          <h1 className="text-4xl lg:text-7xl font-extrabold tracking-wider" style={{ textShadow: "6px 4px 5px rgba(0,0,0,0.3)" }}>
          OFFICE OF THE EXECUTIVE VICE PRESIDENT
          </h1>
          
        </div>
      <div className="absolute bottom-0 w-full pb-10">
        {/* Captions with rec.svg */}
        <h3 className="text-2xl md:text-3xl mx-[10vw]">{slides[currentIndex].caption}</h3>
        <div className="flex justify-center md:text-2xl gap-[4vw] md:gap-[10vw] p-10">
          {slides.map((slide, index) => (
            <div key={index} className="relative text-center ">

              {currentIndex === index && (
                <img
                  src="rec.svg"
                  alt="rec icon"
                  className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 h-4 duration-700 ease-in-out"
                />
              )}
                  <a href={`${slide.link}`}>
                    <h3
                      className={`transition duration-500 ease-in-out ${
                        currentIndex === index ? "text-[#FDB515]" : "text-white"
                      }`}
                    >
                      {slide.title}
                    </h3>
                  </a>
                </div>
              ))}
        </div>
      </div>

      </div>


      {/* Progress bar */}
      

      {/* Rest of your content */}
      <div id="WHO_WE_ARE" className="mx-8 lg:mx-[5rem]">
        <main className="flex flex-col lg:flex-row pt-10 text-[20px] gap-8">
          {/* Side Menu */}
          <div id="sidemenu" className="lg:basis-1/3 flex flex-col items-center drop-shadow-lg">
            <h3 className="flex items-center w-full text-2xl lg:text-3xl text-center">
              <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
              <span className="px-4">Who We Are</span>
              <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
            </h3>

            <menu className="flex flex-col pt-5 w-1/2 gap-4">
              <a
                href="#mission"
                className="hover:bg-[#003A70] hover:text-white border-2 border-[#003A70] p-4 text-center font-semibold rounded-md transition"
              >
                Our Mission
              </a>
              <a
                href="#resources"
                className="hover:bg-[#003A70] hover:text-white border-2 border-gray-300 p-4 text-center font-semibold rounded-md transition"
              >
                Free Resources
              </a>
            </menu>
          </div>

          {/* Main Content */}
          <div id="text" className="lg:basis-2/3">
            <p className="text-center">
              "The Office of the Executive Vice President (OEVP) of the Associated
              Students of the University of California (ASUC) is dedicated to empowering
              students by fostering transparency, equity, and collaboration across campus. 
              We strive to amplify student voices, bridge communication between students 
              and administration, and ensure the efficient allocation of resources to meet 
              the diverse needs of our community."
            </p>
          </div>
        </main>
      </div>

        
        <div 
          id="ORGSTATS"
          className="flex flex-wrap transition-all duration-75 ease-in justify-center items-center gap-8 h-auto p-[5vh]">
            <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                <h1 className="text-[#003A70] text-[56px] font-bold">400+</h1>
                <p className="text-[20px] text-center mx-4">Registered Student Organizations receive funding & resources</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                <h1  className="text-[#003A70] text-[56px] font-bold">100+</h1>
                <p className="text-[20px] text-center mx-4">Legislations implemented in collaboration with ASUC Senate</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                <h1 className="text-[#003A70] text-[56px] font-bold">180k</h1>
                <p className="text-[20px] text-center mx-4">New York Times articles read monthly by students</p>
            </div>
        </div>

        <div 
          id="NYT_WALL_STREET_JOURNAL"
          className="flex flex-col lg:flex-row bg-gradient-to-r from-[#FFD67A] to-[#F9B315] p-10">
          {/* New York Times Section */}
          <div className="flex-1 flex justify-center items-center p-6">
            <div className="text-center max-w-sm">
              <img src={times} alt="New York Times" className="h-[46px] w-[36px] mx-auto mb-4" />
              <h1 className="text-[23px] font-bold mb-2">New York Times</h1>
              <p className="text-sm leading-relaxed mb-4">{def}</p>
              <a href="/access" className="p-3 px-10 bg-white rounded-lg text-[#A6A6A6] hover:text-berkeley">
                Register
              </a>
            </div>
          </div>

          {/* Wall Street Journal Section */}
          <div className="flex-1 flex justify-center items-center p-6">
            <div className="text-center max-w-sm">
              <img src={wsj} alt="Wall Street Journal" className="h-[36px] w-[62px] mx-auto mb-4" />
              <h1 className="text-[23px] font-bold mb-2">Wall Street Journal</h1>
              <p className="text-sm leading-relaxed mb-4">{def}</p>
              <a href="/access" className="p-3 px-10 bg-white rounded-lg text-[#A6A6A6] hover:text-berkeley">
                Register
              </a>
            </div>
          </div>
        </div>

      <div 
        id="PARTNER"
        className="mx-8 lg:mx-[5rem] pb-10">
        <main className="flex flex-col pt-10 text-[20px] gap-8">
          <div className="flex mx-[10%] items-center drop-shadow-lg">
            <h3 className="flex items-center w-full text-2xl lg:text-3xl font-extrabold text-center">
              <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
              <span className="px-4">Partner With Us</span>
              <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
            </h3>
          </div>

          <div id="text" className="flex flex-col items-center gap-6">
            <p className="text-center">
              Are you a campus group, company, or organization that would like to partner with us?
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 h-auto">
              <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                  <h1 className="text-[#003A70] text-[56px] font-bold">180K</h1>
                  <p className="text-center text-[20px]">Articles Read</p>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                  <h1  className="text-[#003A70] text-[56px] font-bold">409</h1>
                  <p className="text-center text-[20px]">Registered Student Organizations</p>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                  <h1 className="text-[#003A70] text-[56px] font-bold">100+</h1>
                  <p className="text-center text-[20px]">Legislations drafted, passed, and implemented</p>
              </div>
          </div>
            <button className="bg-[#003A70] text-white py-3 px-6 rounded-full text-sm lg:text-base font-bold hover:bg-[#002957] transition-colors">
              Become a Partner
            </button>
          </div>
        </main>
      </div>


      <Footer />
    </div>
  );
}
