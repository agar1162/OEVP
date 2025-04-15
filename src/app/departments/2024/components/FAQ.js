// "use client"

// import React, { useState } from "react";

// export default function Component({ title, text  }) {

//     const [toggleDesc, setToggleDesc] = useState(false)

//     const toggle = () => {
//         setToggleDesc(!toggleDesc);
//       };
  

//     return(
//         <div className="p-4 m-2 lg:mx-[20vh] border-2 shadow-md">
//             {/* Title Section */}
//             <div className="flex cursor-pointer" onClick={toggle}>
//                 <h1 className="text-lg pt-1">{title}</h1>
//                 <img 
//                     onClick={toggle} 
//                     className={`ml-auto w-10 h-10 transform transition-transform duration-300 ${
//                     toggleDesc ? "rotate-180" : "rotate-0"
//                     }`} 
//                     src="/down_gray.svg" 
//                     alt="Icon" 
//                 />
//             </div>

//             <div
//                 className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
//                 toggleDesc ? "max-h-[500px]" : "max-h-0"
//                 }`}
//             >
//                 <p className="mt-2">{text}</p>
//             </div>
//         </div>

//     )
    

// }
// src/app/departments/2024/components/FAQ.js
import { useState } from "react";

export default function FAQ({ title, text }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white border border-t-0 border-[#DADADA] rounded-[9.36px] mb-2 shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
      {/* Optional subtle top highlight */}
      <div className="h-[1.5px] w-full bg-[#DADADA]/10 rounded-t-[9.36px]" />

      <button
        className="w-full text-left px-6 py-5 md:py-6"
        onClick={() => setOpen(!open)}
      >
        <div className="flex justify-between items-start">
          <h3 className="font-[Georgia] text-[18px] md:text-[20px] font-normal leading-[28px] text-black">
            {title}
          </h3>
          <img
            src={open ? "/read-less-arrow.png" : "/read-more-arrow.png"}
            alt="Toggle Arrow"
            className="w-[16px] h-[16px] mt-1"
          />
        </div>
      </button>

      {open && (
        <div className="px-6 pb-6 text-[#3D3D3D] text-[16px] md:text-[18px] leading-[28px] font-[Georgia] font-normal">
          {typeof text === "string" ? <p>{text}</p> : <div>{text}</div>}
        </div>
      )}
    </div>
  );
}

