// export default function Footer(){
    
//     return(
//         <footer className="bg-berkeley h-fit flex flex-col md:flex-row text-[9px]">
//             <div className="basis-1/4 hidden md:flex items-center justify-center">
//                 <img
//                 src="/ASUC-logo.png"
//                 alt="ASUC Logo"
//                 className="h-[200px] w-[200px] object-contain"
//                 />
//             </div >
            
//             <div className="basis-1/4 grid p-5 lg:block place-content-center w-[400px]">
//                 <h1 className="p-2 text-2xl font-bold text-[#F9B315]">ASUC Newsletter</h1>
//                 <p className="pl-2 pb-2 text-[16px]" id="geo">Want to stay updated? Get access to the latest free resources, contributions, and how your student government and support your endeavors. </p>
//                 <a href="https://asuc.substack.com/subscribe" className="flex ml-1">
//                     <img src="/link.png" className="w-7 h-7"/>
//                 </a>

//             </div>

//             <div id="blocks"className="basis-2/4 grid place-content-center m-8">
//                 <div className="grid gap-4 grid-cols-2">
//                     <div>
//                         <h1 className="font-bold text-lg">Free Resources</h1>
//                         <ul>
//                             <li>Newspaper Subscriptions</li>
//                             <li>Affinity Spaces</li>
//                             <li>Equitable Resources</li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h1 className="font-bold text-lg">Follow Us</h1>
//                         <ul className="underline">
//                             <li><a href="https://www.instagram.com/ucbvicepresident/">FaceBook</a></li>
//                             <li><a href="https://www.facebook.com/theASUC/">Instagram</a></li>
//                         </ul>
//                     </div>
//                     <div> 
//                         <h1 className="font-bold text-lg">Inquires</h1>
//                         <ul>
//                             <li>(510) 664-7976</li>
//                             <li>evp@asuc.org</li>
//                             <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfqJ1pIDmCFu9Rg-14QRCYSre3DAYxHUmOkRW05Part_E98jg/viewform?usp=sf_link" className="font-bold underline">Have a Website Feature Request?</a></li>

//                         </ul>
//                     </div>
//                     <div>
//                         <h1 className="font-bold text-lg"><a href="">Home</a></h1>
//                         <ul>
//                             <li><a>About Us</a></li>
//                             <li><a href="/departments/communications.html">Departments</a></li>
//                             <li><a className="underline font-bold" href="https://berkeley.zoom.us/j/6685684771?_x_zm_rtaid=MOwFCASdTuqDG7Yo6PLAEw.1736649189758.7b91ccafcde961b05952e5e32cf3d571&_x_zm_rhtaid=781#success">Link to Senate Meetings</a></li>
//                         </ul>
//                     </div>
//                     <div className="w-20"> <a href="https://www.ocf.berkeley.edu/"><img src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"/></a></div>
//                 </div>
//             </div>

            
//         </footer>
//     );
// }

// export default function Footer() {
//     return (
//       <footer className="bg-berkeley text-white px-10 pt-[60px] pb-[80px] font-[Georgia] text-[14px]">
//         <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row justify-between gap-12 items-start">
//           {/* Left: Logo + Newsletter */}
//           <div className="flex flex-col sm:flex-row items-start gap-8 flex-1 min-w-[300px]">
//             <img
//               src="/ASUC-logo.png"
//               className="h-[160px] w-[160px] object-contain"
//               alt="ASUC Logo"
//             />
//             <div className="max-w-[420px] flex flex-col gap-3">
//               <h2 className="text-[#F9B416] text-[24px] font-normal leading-[30px]">
//                 ASUC Newsletter
//               </h2>
//               <p className="leading-[24px] text-[13px]">
//                 Get access to the latest resources, discover the projects and initiatives student leaders are driving, and learn how your student government can support your goals
//               </p>
//               <a
//                 href="https://asuc.substack.com/subscribe"
//                 className="mt-2 bg-[#F9B416] px-5 py-2 rounded text-black text-[13px] w-fit"
//               >
//                 Sign Up for the ASUC Newsletter
//               </a>
//             </div>
//           </div>
  
//           {/* Right Columns */}
//           <div className="flex flex-col sm:flex-row justify-between gap-16 items-start flex-1 pt-2">
//             {/* Home Column */}
//             <div className="flex flex-col gap-1 min-w-[120px]">
//               <h3 className="text-[17px] mb-1">Home</h3>
//               <a href="/office/2024.html">Office</a>
//               <a href="/departments/communications.html">Departments</a>
//               <a href="/departments/deib/communities">DEI Resources</a>
//               <a href="/partnerships.html">Partnerships</a>
//               <a
//                 href="https://berkeley.zoom.us/j/6685684771?_x_zm_rtaid=MOwFCASdTuqDG7Yo6PLAEw.1736649189758.7b91ccafcde961b05952e5e32cf3d571&_x_zm_rhtaid=781#success"
//                 className="underline"
//               >
//                 Join Senate Live!
//               </a>
//             </div>
  
//             {/* Inquiries Column */}
//             <div className="flex flex-col gap-1 min-w-[180px] pt-[6px]">
//               <h3 className="text-[17px] mb-1">Inquiries</h3>
//               <p>
//                 Email:{" "}
//                 <a href="mailto:evp@asuc.org" className="underline">
//                   evp@asuc.org
//                 </a>
//               </p>
//               <a
//                 href="https://docs.google.com/forms/d/e/1FAIpQLSfqJ1pIDmCFu9Rg-14QRCYSre3DAYxHUmOkRW05Part_E98jg/viewform?usp=sf_link"
//                 className="underline"
//               >
//                 Request a Site Feature!
//               </a>
//             </div>
  
//             {/* Follow Us Column */}
//             <div className="flex flex-col items-start gap-3 pt-[6px]">
//               <h3 className="text-[17px] mb-1">Follow Us</h3>
//               <div className="flex items-center gap-3">
//                 <a href="https://www.instagram.com/ucbvicepresident/">
//                   <img src="/insta.png" alt="Instagram" className="w-[43px] h-[43px]" />
//                 </a>
//                 <a href="https://www.facebook.com/theASUC/">
//                   <img
//                     src="/face.png"
//                     alt="Facebook"
//                     className="w-[43px] h-[43px] object-contain"
//                   />
//                 </a>
//               </div>
//               <div className="mt-[40px]">
//                 <a href="https://www.ocf.berkeley.edu/">
//                   <img
//                     src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"
//                     alt="Hosted by the OCF"
//                     className="w-[110px]"
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     );
// }

export default function Footer() {
    return (
      <footer className="bg-berkeley text-white font-[Georgia] text-[14px] px-8 py-[55px]">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-[70px] items-start">
          {/* Left: Logo + Newsletter */}
          <div className="flex flex-col sm:flex-row gap-[40px] items-start w-full lg:w-auto">
            <img
              src="/ASUC-logo.png"
              alt="ASUC Logo"
              className="h-[208px] w-[209px] object-contain mt-2"
            />
            <div className="max-w-[400px] flex flex-col gap-[6px] pt-5">
              <h2 className="text-[#F9B416] text-[24px]">ASUC Newsletter</h2>
              <p className="leading-[26px] tracking-wide max-w-[400px]">
                Get access to the latest resources, discover the projects and
                initiatives student leaders are driving, and learn how your student
                government can support your goals
              </p>
              <a
                href="https://asuc.substack.com/subscribe"
                className="bg-[#F9B416] text-black text-[14px] py-2 px-4 rounded w-fit mt-7
                "
              >
                Sign Up for the ASUC Newsletter
              </a>
            </div>
          </div>
  
          {/* Middle + Right Columns */}
          <div className="flex flex-wrap gap-[20px] items-start pt-[10px] mt-[10px]"> 
            {/* Column: Home */}
            <div className="flex flex-col gap-3 min-w-[140px] mr-[12px]">
              <h3 className="text-[18px] mb-1 mb-[6px]">Home</h3>
              <a href="/office/2024.html">Office</a>
              <a href="/departments/communications.html">Departments</a>
              <a href="/departments/deib/communities">DEI Resources</a>
              <a href="/partnerships.html">Partnerships</a>
              <a
                href="https://berkeley.zoom.us/j/6685684771?_x_zm_rtaid=MOwFCASdTuqDG7Yo6PLAEw.1736649189758.7b91ccafcde961b05952e5e32cf3d571&_x_zm_rhtaid=781#success"
              >
                Join Senate Live!
              </a>
            </div>
  
            {/* Column: Inquiries */}
            <div className="flex flex-col gap-3 min-w-[200px] mr-[38px]">
              <h3 className="text-[18px] mb-1 mb-[6px]">Inquiries</h3>
              <p>
                Email:{" "}
                <a href="mailto:evp@asuc.org" className="underline">
                  evp@asuc.org
                </a>
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfqJ1pIDmCFu9Rg-14QRCYSre3DAYxHUmOkRW05Part_E98jg/viewform?usp=sf_link"
                className="underline"
              >
                Request a Site Feature!
              </a>
            </div>
  
            {/* Column: Follow Us */}
            <div className="flex flex-col gap-3 min-w-[130px] ml-auto">
              <h3 className="text-[18px] mb-1 mb-[6px]">Follow Us</h3>
              <div className="flex items-center gap-[4px]">
                <a href="https://www.instagram.com/ucbvicepresident/">
                  <img src="/insta.png" alt="Instagram" className="w-[36px] h-[36px]" />
                </a>
                <a href="https://www.facebook.com/theASUC/">
                  <img
                    src="/face.png"
                    alt="Facebook"
                    className="w-[43px] h-[43px] object-contain"
                  />
                </a>
              </div>
              <a href="https://www.ocf.berkeley.edu/" className="mt-8">
                <img
                  src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"
                  alt="Hosted by the OCF"
                  className="w-[110px] mt-[40px]"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}
  