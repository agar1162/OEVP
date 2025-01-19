"use client"

import React, { useState } from "react";

export default function Component({ title, text  }) {

    const [toggleDesc, setToggleDesc] = useState(false)

    const toggle = () => {
        setToggleDesc(!toggleDesc);
      };
  

    return(
        <div className="p-4 m-2 lg:mx-[20vh] border-2 shadow-md">
            {/* Title Section */}
            <div className="flex cursor-pointer" onClick={toggle}>
                <h1 className="text-lg pt-1">{title}</h1>
                <img 
                    onClick={toggle} 
                    className={`ml-auto w-10 h-10 transform transition-transform duration-300 ${
                    toggleDesc ? "rotate-180" : "rotate-0"
                    }`} 
                    src="/down_gray.svg" 
                    alt="Icon" 
                />
            </div>

            <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                toggleDesc ? "max-h-[500px]" : "max-h-0"
                }`}
            >
                <p className="mt-2">{text}</p>
            </div>
        </div>

    )
    

}