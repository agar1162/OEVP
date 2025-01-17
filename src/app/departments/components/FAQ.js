"use client"

import React, { useState } from "react";

export default function Component({ title, text  }) {

    const [toggleDesc, setToggleDesc] = useState(false)

    const toggle = () => {
        setToggleDesc(!toggleDesc);
      };
  

    return(
        <div className="p-4 m-2 lg:mx-[20vh] border-2 shadow-md">
            <div className="flex">
                <h1 className="text-lg pt-1 font-bold">{title}</h1>
                <img onClick={toggle} className="ml-auto w-10 h-10" src="/down_gray.svg" alt="Icon" />
            </div>
            {toggleDesc && 
                <p>{text}</p>
            }
        </div>
    )
    

}