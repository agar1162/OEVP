import Navbar from "../../../../components/home/Navbar";
import Footer from "../../../../components/home/Footer";
import Cover from "../components/Cover";

const gridItem = (name, link = "", img = "") => (
    <div className="relative p-20 border border-gray-300 bg-berkeley text-white">
        {/* Black Tint Overlay */}
        {img && (
            <div 
                className="absolute inset-0 bg-black opacity-75" 
                style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
        )}
        <h1 className="font-semibold text-center relative z-10">{name}</h1>
        {link ? (
            <a
                href={link}
                className="absolute bottom-4 right-4 px-4 py-2 bg-berkeley text-white border border-white hover:bg-white hover:text-berkeley transition duration-300"
            >
                Read More
            </a>
        ) : (
            <button
                className="absolute bottom-4 right-4 px-4 py-2 bg-white text-berkeley border border-berkeley hover:bg-berkeley hover:text-white transition duration-300"
            >
                Read More
            </button>
        )}
    </div>
);


export default function DepartmentsPage() {
    // const communities = [
    //     { name: "Black/Afrikan Diaspora Community", link: "/departments/deib/communities.html#Black/Afrikan" },
    //     { name: "Latinx/Chicanx Community", link: "/departments/deib/communities.html#Latinx/Chicanx" },
    //     { name: "Indigenous/Native American Community", link: "/departments/deib/communities.html#Indigenous" },
    //     { name: "Middle Eastern, North African, and Muslim Student Community", link: "/departments/deib/communities.html#MENA/Muslim" },
    //     { name: "Asian American and Pacific Islander (AAPI) Community", link: "/departments/deib/communities.html#AAPI" },
    //     { name: "Jewish Community", link: "/departments/deib/communities.html#Jewish" },
    //     { name: "LGBTQIA+ Community", link: "/departments/deib/communities.html#LGBTQIA+" },
    //     { name: "Disability Community", link: "/departments/deib/communities.html#DSP" },
    //     { name: "International Student Community", link: "/departments/deib/communities.html#International" },
    // ];
    const communities = [
        { name: "Black/Afrikan Diaspora Community", link: "/departments/deib/communities#Black/Afrikan" },
        { name: "Latinx/Chicanx Community", link: "/departments/deib/communities#Latinx/Chicanx" },
        { name: "Indigenous/Native American Community", link: "/departments/deib/communities#Indigenous" },
        { name: "Middle Eastern, North African, and Muslim Student Community", link: "/departments/deib/communities#MENA/Muslim" },
        { name: "Asian American and Pacific Islander (AAPI) Community", link: "/departments/deib/communities#AAPI" },
        { name: "Jewish Community", link: "/departments/deib/communities#Jewish" },
        { name: "LGBTQIA+ Community", link: "/departments/deib/communities#LGBTQIA+" },
        { name: "Disability Community", link: "/departments/deib/communities#DSP" },
        { name: "International Student Community", link: "/departments/deib/communities#International" },
    ];

    
    

    return (
        <div>
            <Navbar />
            <Cover
                name="Diversity, Equity, Inclusion & Belonging"
                link="deib.jpeg"
                desc="Addresses the needs of the UC Berkeley campus."
                mem="Doah Obaid (Associate), Risha Jain (Intern), Rishi Reddy (Director), Josalyn Huynh (Intern)"
            />

            <div className="p-10 lg:mx-[10%] text-[20px] indent-10">
                <p>
                    Created to ensure the Office of the Executive President (OEVP) and its
                    departments have the research to support projects, public statements,
                    and information for the wider campus community. We are tasked with
                    supporting the development of policy briefs and crafting and analyzing
                    surveys and student climate data. This department is the primary bridge
                    between the OEVP and various cultural and identity caucuses across
                    campus. Lastly, this department works closely with the Vice Chancellor
                    for Diversity, Equity, and Inclusion, to ensure their office is properly
                    serving the student body.
                </p>
            </div>

            <div className="items-center mx-[10%] py-[5vh] text-center">
                <div className="relative flex items-center">
                    <div className="flex-grow border-t border-[#A6A6A6]"></div>
                    <span className="flex-shrink mx-4 text-[25px] font-bold md:font-normal">
                        Explore UC Berkeley’s Diverse Student Community
                    </span>
                    <div className="flex-grow border-t border-[#A6A6A6]"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-[10%] pb-10">
                {communities.map((community, index) => (
                    <div key={index}>
                        {gridItem(community.name, community.link)}
                    </div>
                ))}
            </div>


            <div className="text-center p-5">
                <a href="/departments/deib/communities.html" className="border-2 border-black p-5 hover:bg-gray-200">
                    Learn More About All DEI Initiatives
                </a>
            </div>

            <div className="items-center mx-[10%] pt-[5vh] text-center">
            <div className="relative flex items-center ">
                <div className="flex-grow border-t border-[#A6A6A6] "></div>
                <span className="flex-shrink mx-4 text-[25px] font-bold md:font-normal">Our Past Work As Seen on Daily Cal</span>
                <div className="flex-grow border-t border-[#A6A6A6]"></div>
            </div>
            </div>
        
        



        <div className="flex flex-wrap pb-10 md:flex-regular mx-[10%] py-5">
            <div className=" md:flex md:basis-1/2 hover:bg-gray-100">
              <img src="/departments/deib/d1.jpg" className="w-[35vh]"/>
              <div className=" mt-4 md:mt-0 p-3">
                <a href="https://www.dailycal.org/news/campus/asuc/asuc-130k-multicultural-initiative-fund-opens-applications/article_2652cca4-90f3-11ef-9610-2b734167d8cc.html">
                  <h3 className="font-bold text-xl">ASUC $130K Multicultural Initiative Fund opens application</h3>
                  <p className="text-[#5E5E5E] text-sm">ASUC offers the Multicultural Initiatitiave Fund to uplift cultural groups on campus.</p>
                </a>
              </div>
            </div>


          <div className=" md:flex md:basis-1/2 hover:bg-gray-100">
            <img src="/departments/deib/d2.jpg" className="w-[35vh]"/>
            <div className=" mt-4 md:mt-0 p-3">
              <a href="https://www.dailycal.org/news/campus/asuc/newsom-approves-bill-establishing-disability-access-and-compliance-training/article_dad9eb1c-7fd2-11ef-98f9-e3c106b4346a.html">
                <h3 className="font-bold text-xl">Newsom approves bill establishing disability access and compliance training</h3>
                <p className="text-[#5E5E5E] text-sm">Assembly Bill 2821 was signed and approved by California Gov. Gavin Newsom on Saturday.</p>
              </a>
              </div>
          </div>
        </div>


            <Footer />
        </div>
    );
}
