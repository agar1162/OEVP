// import Navbar from "../../components/home/Navbar";
// import Footer from "../../components/home/Footer";

// export default function partnershipPage() {

//     const Cover = ({ name, link, desc, mem }) => { 
//         return (
//             <div> 
//                 <div className="border-t-8  bottom-0 border-berkeley bg-[#FFFFFFCC] w-fit lg: opacity-100 p-10 md:hidden">
//                     <h3 className="text-berkeley font-bold text-lg">Department</h3>
//                     <h1 className="font-bold text-4xl pt-3">{name}</h1>
//                     <p className="text-lg pt-1">{desc}</p>
//                     <p className="pt-4 text-sm">{mem}</p>
//                 </div>
//                 <div
//                     style={{ backgroundImage: `url('${link}')` }}
//                     className="h-[75vh] md:m-10 md:m-[5vh] bg-cover bg-center bg-no-repeat md:place-content-center relative align-center md:place-content-center"
//                 >
                
//                     <div className="border-t-8  bottom-0 border-berkeley bg-[#FFFFFFCC] w-fit lg: opacity-100 p-10 absolute bottom-0 hidden md:block">
//                         <h1 className="font-bold text-4xl pt-3">{name}</h1>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
    
//     return (
//         <div>
//             <Navbar />

//             <Cover 
//             name="Partnerships"
//             link="/partnerships.png"
//             />
            

//             <div className="p-[5vh] lg:mx-[10%] text-[20px]">
//                 <p>
//                 The ASUC OEVP is committed to building meaningful partnerships with companies and organizations that enrich the UC Berkeley student experience. 
//                 We are dedicated to exploring new avenues for collaboration, ensuring that every partnership aligns with our mission of enhancing student success and well-being. 
//                 Past partnerships in the past have been with Wall Street Journal and New York Times, which have been covered through the CASSA (Commercial Activities and Student Services Agreement) revenues. 
//                 The EVP is incharge of deciding CASSA fund allocations to different proposals, and students have the opportunity to propose potential partnerships as well. 
//                 Learn more about CASSA <a href="/departments/commercial-activities.html" className="text-blue-500 underline">here</a>.
//                 </p>
//             </div>

//             <div className="p-[5vh] lg:mx-[10%] text-[20px]">
//                 <p>(Coming up)</p>
//             </div>

//             {/* <div>
//                 <div className="items-center mx-[10%] pt-[5vh] text-center">
//                 <div className="relative flex items-center ">
//                     <div className="flex-grow border-t border-[#A6A6A6] "></div>
//                     <span className="flex-shrink mx-4 text-[25px] font-bold md:font-normal">Commercial Partnerships Form</span>
//                     <div className="flex-grow border-t border-[#A6A6A6]"></div>
//                 </div>
//                 </div>

//                 <div className="place-content-center text-center mx-[30%]">
//                     <p className="text-[#3D3D3D]">Form for companies to share what university initiatives they would like to sponsor such as grants, scholarships, resources, career and professional development programs, student discounts, etc.</p>
//                 </div>

//                 <div className="flex justify-center items-center">
//                     <a
//                     href="https://docs.google.com/forms/d/e/1FAIpQLSclkzXrhNg2mzCJUDPcC5JjWM1FoCUw1c68PEbXmXa0sBJU4A/viewform?usp=sf_link"
//                     className="flex justify-center items-center"
//                     >
//                     <img src="/form.jpg" className="w-[20vw]" />
//                     </a>
//                 </div>
//             </div>

//             <div>
//                 <div className="items-center mx-[10%] pt-[5vh] text-center">
//                 <div className="relative flex items-center ">
//                     <div className="flex-grow border-t border-[#A6A6A6] "></div>
//                     <span className="flex-shrink mx-4 text-[25px] font-bold md:font-normal">Partnerships Feedback Form</span>
//                     <div className="flex-grow border-t border-[#A6A6A6]"></div>
//                 </div>
//                 </div>

//                 <div className="place-content-center text-center mx-[30%]">
//                     <p className="text-[#3D3D3D]">Form for students to list what partnerships they want from the university, what increased functions/access they want from each app.</p>
//                 </div>

//                 <div className="flex justify-center items-center py-[10vh]">
//                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd0Xs2uIpKrg1rOQn6fB1CODypJsukz6WUfURqrwuy0iWJlCw/viewform?embedded=true" width="500" height="500">Loading…</iframe>
//                 </div>
//             </div> */}

//             {/* keep this code here for reference */}
//             {/* <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-[10vw] py-[5vh]"> */}
//             {/* Company Form */}
//             {/* <div className="flex-1 text-center">
//                 <h2 className="text-[25px] font-bold">Commercial Partnerships Form</h2>
//                 <p className="text-[#3D3D3D] py-4">Form for companies to share what university initiatives they would like to sponsor...</p>
//                 <a href="https://docs.google.com/forms/d/e/1FAIpQLSclkzXrhNg2mzCJUDPcC5JjWM1FoCUw1c68PEbXmXa0sBJU4A/viewform?usp=sf_link">
//                 <img src="/form.jpg" className="w-[20vw] mx-auto" />
//                 </a>
//             </div> */}

//             {/* Feedback Form */}
//             {/* <div className="flex-1 text-center">
//                 <h2 className="text-[25px] font-bold">Partnerships Feedback Form</h2>
//                 <p className="text-[#3D3D3D] py-4">Form for students to list what partnerships they want from the university...</p>
//                 <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd0Xs2uIpKrg1rOQn6fB1CODypJsukz6WUfURqrwuy0iWJlCw/viewform?embedded=true" width="100%" height="500">Loading…</iframe>
//             </div> */}
//             {/* </div> */}

//             <Footer />
//         </div>
//     )
// }

import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";

export default function PartnershipsPage() {
    return (
      <div className="bg-white">
        <Navbar />
  
        {/* Hero Section */}
        <div className="bg-white shadow-md border-t-[6px] border-berkeley mx-auto mt-10 mb-16 px-6 sm:px-8 md:px-12 lg:px-[8vw] py-10 max-w-[95vw] lg:max-w-[80vw] bg-opacity-[0.83]">
          <h2 className="text-berkeley text-[28px] sm:text-[30px] md:text-[32px] font-[Georgia] font-bold leading-tight mb-2">
            Partnerships
          </h2>
          <h1 className="text-black text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-[Georgia] font-bold leading-tight mb-6">
            Office of the Executive Vice President Partnerships
          </h1>
          <p className="text-black text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-[Georgia] leading-[1.8]">
            The ASUC OEVP is committed to building meaningful partnerships with companies and organizations that enrich the UC Berkeley student experience. We are dedicated to exploring new avenues for collaboration, ensuring that every partnership aligns with our mission of enhancing student success and well-being. Past partnerships in the past have been with The Wall Street Journal and The New York Times, which have been covered through the CASSA (Commercial Activities and Student Services Agreement) revenues. The CASSA Fund Advisory Committee that the EVP is the chair of is in charge of deciding CASSA fund allocations to different proposals, and students have the opportunity to propose potential partnerships as well. Learn more about CASSA{" "}
            <a href="/departments/2024/finance" className="underline text-berkeley hover:text-[#002f56]">
              here
            </a>.
          </p>
        </div>
  
        {/* Feedback Form Section */}
        <section className="text-center px-6 sm:px-10 md:px-[10vw] mb-20">
          <h2 className="text-[22px] sm:text-[26px] md:text-[28.15px] font-[Georgia] font-bold leading-[1.3] mb-4">
            Partnerships Feedback Form
          </h2>
          <p className="text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28.15px] font-[Georgia] font-normal leading-[1.6] mb-6 max-w-[800px] mx-auto">
            Are you a student? Let us know how you’re liking our current partnerships (like NYT and WSJ), and suggest new ones you’d love to see!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd0Xs2uIpKrg1rOQn6fB1CODypJsukz6WUfURqrwuy0iWJlCw/viewform?embedded=true"
            className="bg-berkeley text-white px-6 py-3 rounded-md font-[Georgia] text-[16px] sm:text-[17px] md:text-[18.6px] hover:bg-[#002f56] transition"
          >
            Partnership Feedback Form
          </a>
        </section>
  
        <Footer />
      </div>
    );
  }
