export default function Wedo() {
    return (
        <div className="mx-8 lg:mx-[5rem]">
            <main className="flex flex-col lg:flex-row pt-10 text-[20px] gap-8">
                {/* Side Menu */}
                <div
                    id="sidemenu"
                    className="lg:basis-1/3 flex flex-col items-center drop-shadow-lg">
                    <h3 className="flex items-center w-full text-2xl lg:text-3xl font-extrabold text-center">
                        <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
                        <span className="px-4">Who We Are</span>
                        <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
                    </h3>

                    <menu className="flex flex-col pt-5 w-1/2 gap-4">
                        <a
                            href="#mission"
                            className="hover:bg-[#003A70] hover:text-white border-2 border-[#003A70] p-4 text-center font-semibold rounded-md transition">
                            Our Mission
                        </a>
                        <a
                            href="#resources"
                            className="hover:bg-[#003A70] hover:text-white border-2 border-gray-300 p-4 text-center font-semibold rounded-md transition">
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
    );
}
