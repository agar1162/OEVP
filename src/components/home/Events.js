
export default function Events() {
    var text1 = "The Office of the Executive Vice President organizes a wide range of events, including those led independently by one of our departments, collaborations with other ASUC offices or campus groups, and events in conjunction with companies, external groups, or individuals." 
    var text2 = "These events vary in scope and purpose, serving the diverse needs of the campus community & beyond. Past events have included professional development workshops, leadership panels, networking opportunities, community-building events, and advocacy initiatives."
    
    return(
        <div>
            <LineHeader title="Come to our events"/>
            <div className="flex flex-row mx-[15rem] 2xl:mx-[25rem]   gap-[5rem] pt-8">
                <div className="basis-2/3">
                    <p>{text1}</p>
                    <br/>
                    <p>{text2}</p>
                </div>

                <div className="flex flex-col w-[20rem] basis-1/3">
                    <img src="/slideshow/e_1.png" className=""/>
                    <p className="italic text-[10px]">The Office of the Executive Vice President held the PPIA Junior Summer Institute Panel and Mixer in collaboration with the Goldman School of Public Policy and the Student Policy Institute at Berkeley.</p>
                </div>
            </div>
            
        </div>
    )
}