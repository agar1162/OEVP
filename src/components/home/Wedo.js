import LineHeader from "./lineHeader";

export default function Wedo() {
    return (
        <div className="mx-[5rem]">
            <LineHeader title="What We Do"/>
            <main className="flex flex-row pt-10 text-[20px]">
                <div
                    id="sidemenu"
                    className="basis-1/3 flex flex-col justify-center items-center drop-shadow-lg">
                    <h3 className=" w-1/2 ">Who We Are</h3>
                    <menu className="flex flex-col  pt-5 w-1/2">
                        <a className="hover:bg-[#003A70] hover:text-white border-4 p-4  border-t-[#003A70]">Our Mission</a>
                        <a className="hover:bg-[#003A70] hover:text-white  border-4 border-t-[white] p-4">Free Resources</a>
                    </menu>
                </div>

                <div id="text" className="basis-2/3">
                    <p className="mx-[5rem]">
                        "The Office of the Executive Vice President (OEVP) of the Associated Students of the University of California (ASUC) is dedicated to empowering students by fostering transparency, equity, and collaboration across campus. We strive to amplify student voices, bridge communication between students and administration, and ensure the efficient allocation of resources to meet the diverse needs of our community."
                    </p>
                </div>
            </main>
        </div>
    );
}
