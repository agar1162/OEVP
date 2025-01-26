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
  const [currentText, setCurrentText] = useState(0); // Tracks the selected text

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
    }, {
      url: "/backgrounds/slideshow/events.JPG",
      caption: "View past Senate meetings run by the EVP",
      title: "Events",
      link: "https://www.facebook.com/theASUC/"
    },
    {
      url: "/backgrounds/slideshow/com.JPG",
      caption: "Explore resources for the diverse communities we support!",
      title: "Communities",
      link: "/departments/deib/communities.html"
    },
    {
      url: "/backgrounds/slideshow/legis.JPG",
      caption: "Want to get involved? Learn about the different legislations in the ASUC senate and how to provide public comment!",
      title: "Legislation",
      link: "/departments/"
    },
    {
      url: "/backgrounds/slideshow/rso.JPG",
      caption: "Read about the benefits of getting your Registered Student Organization (RSO) ASUC-funded",
      title: "RSO",
      link: "/departments/rso.html"
    }
  ];

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 5000);
    console.log(currentIndex)

    return () => clearInterval(autoplay);
  }, []); 


    const texts = [
      {
        text: `Office of the Executive Vice President (OEVP) of the Associated 
               Students of the University of California (ASUC) is a student-led body 
               dedicated to empowering students by fostering transparency, equity, and 
               collaboration across campus. We strive to amplify student voices, bridge 
               communication between students and administration, and ensure the efficient 
               allocation of resources to meet the diverse needs of our community. By developing strategic 
               partnerships, advocating for students, and launching inclusive initiatives, the 
               OEVP supports overall student wellness. The office provides essential resources, 
               leadership development opportunities, and financial support to the campus community. 
               In facilitating collaborative events, coalition-building, and engaging students in 
               key campus decisions, we work to make UC Berkeley a more vibrant, inclusive, and empowering campus for all.`
      },
      {
        text: `The Executive Vice President (EVP) serves as the second-ranking representative of the ASUC, overseeing its 
               general operations and commercial activities, as well as chairing the Senate where they have the power to break 
               tie votes and appoint committee members. Additionally, the EVP ensures the execution of Senate directives, 
               leads the Senate Leadership Institute, and manages the allocation of office space and resources to 
               ASUC-sponsored organizations, while carrying out other duties as defined by the ASUC Constitution and EVP Bylaws.`
      }, {
        text: `Our office has various departments, each specializing in a specific area designed to enhance student life and 
              support our broader mission. These departments play key roles in facilitating campus-wide initiatives, building strategic 
              partnerships, engaging with campus groups & student leaders, and ensuring the fair and equitable distribution of resources.
              Together, we support the academic, personal, and professional growth of all UC Berkeley students and registered student 
              organizations (RSOs), ensuring they have the tools to succeed.`
      }, {
        text: `The OEVP provides free access to newspaper subscriptions such as the Wall Street Journal and New York Times, financial grants, & 
          campus spaces for RSO’s.`
      }
    ]
  
  
  

  return (
    <div>
      <Navbar />


      <div
        id="COVER"
        className="h-[75vh] md:m-10 bg-cover bg-center bg-no-repeat text-white text-center flex items-start justify-center relative"
      >
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
     
      <div id="WHO_WE_ARE" className="mx-8 pt-10">
        <h3 className="flex items-center mx-[10%] text-2xl lg:text-3xl text-center">
                <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
                <span className="px-4">Who We Are</span>
                <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
        </h3>

        <main className="flex flex-col md:flex-row  pt-10 text-[20px] mx-[10%] text-sm md:text-xl">

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
                Free Resources
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

        
        <div 
          id="ORGSTATS"
          className="flex flex-wrap transition-all duration-75 ease-in justify-center items-center gap-8 h-auto p-[5vh]">
            <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                <h1 className="text-[#003A70] text-5xl md:text-7xl  font-bold pb-5">400+</h1>
                <p className="text-lg text-center mx-4">Registered Student Organizations receive funding & resources</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                <h1  className="text-[#003A70] text-5xl md:text-7xl font-bold pb-5">100+</h1>
                <p className="text-lg text-center mx-4">Legislations implemented in collaboration with ASUC Senate</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                <h1 className="text-[#003A70] text-5xl md:text-7xl font-bold pb-5">180k</h1>
                <p className="text-lg text-center mx-4">New York Times articles read monthly by students</p>
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
              <a href="/resources" className="p-3 px-10 bg-white rounded-lg text-[#A6A6A6] hover:text-berkeley">
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
              <a href="/resources" className="p-3 px-10 bg-white rounded-lg text-[#A6A6A6] hover:text-berkeley">
                Register
              </a>
            </div>
          </div>
        </div>

        <div 
        id="EVENTS"
        className="mx-8 pb-10">
        <main className="flex flex-col pt-10 text-[20px] gap-8">
          <div className="flex mx-[10%] items-center drop-shadow-lg">
            <h3 className="flex items-center w-full text-2xl lg:text-3xl text-center">
              <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
              <span className="px-4">Come To Our Events</span>
              <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
            </h3>
          </div>

          <div id="text" className="flex md:flex-row flex-col items-center gap-6 mx-[10%]">
            <div className="basis-1/2 text-sm md:text-xl">
              <p>
                The Office of the Executive Vice President organizes a wide range of events, including those led independently 
                by one of our departments, collaborations with other ASUC offices or campus groups, and events in conjunction 
                with companies, external groups, or individuals. 
              </p>
              <br/>
              <p>
                These events vary in scope and purpose, serving the diverse needs of the campus community & beyond. Past events 
                have included professional development workshops, leadership panels, networking opportunities, community-building 
                events, and advocacy initiatives.
              </p>
            </div>
              
            <div className="basis-1/2 py-5 flex flex-col items-center">
              <div className="w-full max-w-md">
                <img
                  src="/backgrounds/e_1.png"
                  alt="example"
                  className="w-full"
                />
                <p className="w-full text-sm  mt-2">
                  <i>
                    The Office of the Executive Vice President held the PPIA Junior Summer Institute Panel and Mixer in collaboration with the Goldman School of Public Policy and the Student Policy Institute at Berkeley.                   </i>
                </p>
              </div>
          </div>

          </div>
        </main>
      </div>
      
      <div 
        id="PARTNER"
        className="mx-8  pb-10">
        <main className="flex flex-col pt-10 text-[20px] gap-8">
          <div className="flex mx-[10%] items-center drop-shadow-lg">
            <h3 className="flex items-center w-full text-2xl lg:text-3xl text-center">
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
                  <h1 className="text-[#003A70] text-5xl md:text-7xl font-bold">180K</h1>
                  <p className="text-center text-lg">Articles Read</p>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                  <h1  className="text-[#003A70] text-5xl md:text-7xl  font-bold">409</h1>
                  <p className="text-center text-lg">Registered Student Organizations</p>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                  <h1 className="text-[#003A70] text-5xl md:text-7xl font-bold">100+</h1>
                  <p className="text-center text-lg">Legislations drafted, passed, and implemented</p>
              </div>
          </div>
            <a href="/partnerships.html" className="bg-[#003A70] text-white py-3 px-6 rounded-full text-sm lg:text-base font-bold hover:bg-[#002957] transition-colors">
              Become a Partner
            </a>
          </div>
        </main>
      </div>


      <Footer />
    </div>
  );
}
