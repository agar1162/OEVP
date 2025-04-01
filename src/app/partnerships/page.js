import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";

export default function partnershipPage() {

    const Cover = ({ name, link, desc, mem }) => { 
        return (
            <div> 
                <div className="border-t-8  bottom-0 border-berkeley bg-[#FFFFFFCC] w-fit lg: opacity-100 p-10 md:hidden">
                    <h3 className="text-berkeley font-bold text-lg">Department</h3>
                    <h1 className="font-bold text-4xl pt-3">{name}</h1>
                    <p className="text-lg pt-1">{desc}</p>
                    <p className="pt-4 text-sm">{mem}</p>
                </div>
                <div
                    style={{ backgroundImage: `url('${link}')` }}
                    className="h-[75vh] md:m-10 md:m-[5vh] bg-cover bg-center bg-no-repeat md:place-content-center relative align-center md:place-content-center"
                >
                
                    <div className="border-t-8  bottom-0 border-berkeley bg-[#FFFFFFCC] w-fit lg: opacity-100 p-10 absolute bottom-0 hidden md:block">
                        <h1 className="font-bold text-4xl pt-3">{name}</h1>
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div>
            <Navbar />

            <Cover 
            name="Partnerships"
            link="/prof.jpeg"
            />
            

            <div className="p-[5vh] lg:mx-[10%] text-[20px]">
                <p>
                The ASUC OEVP is committed to building meaningful partnerships with companies and organizations that enrich the UC Berkeley student experience. 
                We are dedicated to exploring new avenues for collaboration, ensuring that every partnership aligns with our mission of enhancing student success and well-being. 
                Past partnerships in the past have been with Wall Street Journal and New York Times, which have been covered through the CASSA (Commercial Activities and Student Services Agreement) revenues. 
                The EVP is incharge of deciding CASSA fund allocations to different proposals, and students have the opportunity to propose potential partnerships as well. 
                Learn more about CASSA <a href="/departments/commercial-activities.html" className="text-blue-500 underline">here</a>.
                </p>
            </div>

            {/* <div>
                <div className="items-center mx-[10%] pt-[5vh] text-center">
                <div className="relative flex items-center ">
                    <div className="flex-grow border-t border-[#A6A6A6] "></div>
                    <span className="flex-shrink mx-4 text-[25px] font-bold md:font-normal">Commercial Partnerships Form</span>
                    <div className="flex-grow border-t border-[#A6A6A6]"></div>
                </div>
                </div>

                <div className="place-content-center text-center mx-[30%]">
                    <p className="text-[#3D3D3D]">Form for companies to share what university initiatives they would like to sponsor such as grants, scholarships, resources, career and professional development programs, student discounts, etc.</p>
                </div>

                <div className="flex justify-center items-center">
                    <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSclkzXrhNg2mzCJUDPcC5JjWM1FoCUw1c68PEbXmXa0sBJU4A/viewform?usp=sf_link"
                    className="flex justify-center items-center"
                    >
                    <img src="/form.jpg" className="w-[20vw]" />
                    </a>
                </div>
            </div>

            <div>
                <div className="items-center mx-[10%] pt-[5vh] text-center">
                <div className="relative flex items-center ">
                    <div className="flex-grow border-t border-[#A6A6A6] "></div>
                    <span className="flex-shrink mx-4 text-[25px] font-bold md:font-normal">Partnerships Feedback Form</span>
                    <div className="flex-grow border-t border-[#A6A6A6]"></div>
                </div>
                </div>

                <div className="place-content-center text-center mx-[30%]">
                    <p className="text-[#3D3D3D]">Form for students to list what partnerships they want from the university, what increased functions/access they want from each app.</p>
                </div>

                <div className="flex justify-center items-center py-[10vh]">
                   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd0Xs2uIpKrg1rOQn6fB1CODypJsukz6WUfURqrwuy0iWJlCw/viewform?embedded=true" width="500" height="500">Loading…</iframe>
                </div>
            </div> */}
            <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-[10vw] py-[5vh]">
            {/* Company Form */}
            <div className="flex-1 text-center">
                <h2 className="text-[25px] font-bold">Commercial Partnerships Form</h2>
                <p className="text-[#3D3D3D] py-4">Form for companies to share what university initiatives they would like to sponsor...</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSclkzXrhNg2mzCJUDPcC5JjWM1FoCUw1c68PEbXmXa0sBJU4A/viewform?usp=sf_link">
                <img src="/form.jpg" className="w-[20vw] mx-auto" />
                </a>
            </div>

            {/* Feedback Form */}
            <div className="flex-1 text-center">
                <h2 className="text-[25px] font-bold">Partnerships Feedback Form</h2>
                <p className="text-[#3D3D3D] py-4">Form for students to list what partnerships they want from the university...</p>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd0Xs2uIpKrg1rOQn6fB1CODypJsukz6WUfURqrwuy0iWJlCw/viewform?embedded=true" width="100%" height="500">Loading…</iframe>
            </div>
            </div>

            <Footer />
        </div>
    )
}