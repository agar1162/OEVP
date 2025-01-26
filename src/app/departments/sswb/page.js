"use client"
import Navbar from "../../../components/home/Navbar";
import Footer from "../../../components/home/Footer";
import Cover from "../components/Cover"
import InstagramPostEmbed from "../components/InstaPostEmbed";

export default function departmentsPage() {
    return(
    <div>
        <Navbar />
        <Cover 
            name="Student Safety, Wellnes & Success"
            link="safety.jpg"
            desc="Addresses the needs of the UC Berkeley campus."
            mem="Shea Davison (Deputy Director), Clara Hinsdale (Associate), Paige Clark (Director), Angel Zamora (Intern), Madison Hua (Associate), Karen Yhim (Associate)"
        />

        <div className="p-[5vh] lg:mx-[10%] text-[20px]">
            <p>
                About- This department addresses the needs of the UC Berkeley campus, ranging from topics such as housing, 
                food security, and access to higher education. Members of this department provide the Executive Vice President 
                with proposals to resolve and ease the concerns of students. The work of the members of this department also 
                consist of working closely with fellow ASUC offices as it pertains to student-related issues.

            </p>
        </div>

        <div className="relative flex  items-center mx-[10%]">
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
            <span className="flex-shrink mx-4 text-[25px]">Resources</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>

        <div className="flex mx-[10%] py-10 flex-wrap md:flex-regular justify-center">
        
            <div id="sidemenu" className="basis-1/3 flex flex-col items-center pb-5">

                <menu className="flex flex-col border-2 border-t-4 border-t-[#003A70] divide-y-2 divide-gray-200  shadow-xl">
                    <a
                        className="hover:bg-[#003A70] hover:text-white p-5  transition"
                    >
                        Wellness Resources
                    </a>
                    <a
                        className="hover:bg-[#003A70] hover:text-white p-5  transition"
                    >
                        Financial Resources
                    </a>
                </menu>
            </div>

            <div className="basis-2/3">
                <h3>Wellness Resources</h3>
                <ul className="list-decimal list-inside">  
                    <li>
                        Be Well at Work-Wellness Program: Current calendar of healthy lifestyle programs, health screenings, workshops, classes, and events that support you in leading a healthy lifestyle.
                    </li>
                    <li>
                    UC Living Well: UCOP's wellness initiative for faculty and staff. Find health plan resources, links to all UC Wellness Programs for faculty and staff, and additional resources. 
                    </li>
                    <li>
                        UHS Resources for Stress Management
                        <ul className="list-disc list-inside">
                            <li>Counseling Appointments</li>
                            <li>Health Coaching Appointments</li>
                            <li>Group Conseling</li>
                            <li>Message Chairs</li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>

        <div className="relative flex  items-center mx-[10%]">
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
            <span className="flex-shrink mx-4 text-[25px]">Upcoming Wellness Events</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:mx-[10%]">
            <InstagramPostEmbed postId="DB23Ktcxz6c"/>
            <InstagramPostEmbed postId="DBzVcxiTLil"/>
            <InstagramPostEmbed postId="DB0UAelxK0v"/>

            
        </div>
        

        <Footer />
    </div>

)}