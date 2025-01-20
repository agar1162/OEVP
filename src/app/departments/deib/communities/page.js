import Footer from "../../../../components/home/Footer";
import Navbar from "../../../../components/home/Navbar";
import { gridItem } from "../page";

export default function Page() {
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

    const images = () => {
        const data = []
        for (let i = 1; i < 10; i++) {
            data.push( 
                `/departments/deib/communities/co${i}.png`
            );
        }
        return data;
    }


    return (
        <div>
            <Navbar /> 
            <div className="text-center pt-10 text-2xl md:text-4xl mx-[25%]">
                <h1>Explore Our Campus’s Diverse Communities </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-[15%] py-10">
                {gridItem("Black/Afrikan Diaspora Community", "#Black/Afrikan", images()[0])}
                {gridItem("Chicanx/Latinx Community", "#Latinx/Chicanx", images()[1])}
                {gridItem("Indigenous/Native American Community", "/", images()[2])}
                {gridItem("Middle Eastern, North African, and Muslim Student Association", "/", images()[3])}
                {gridItem("Asian American and Pacific Islander (AAPI) Community", "/", images()[4])}
                {gridItem("Jewish Community", "/", images()[5])}
                {gridItem("LGBTQIA+ Community", "/", images()[6])}
                {gridItem("Disabled Community", "/", images()[7])}
                {gridItem("International Community", "/", images()[8])}
            </div>

            <div id="COMMUNITIES_DESCRIPTIONS_CONTAINER" className="mx-[5%] md:mx-[15%] pt-10">
                <div id="Black/Afrikan" className="md:flex p-10 gap-10">
                    <div className="basis-1/2 flex flex-wrap">
                        <h1 className="text-berkeley text-3xl pb-10 md:hidden"><i>Black/Afrikan Diaspora</i></h1>
                        <img src="/departments/deib/f1.png"/>
                        <div className="mt-10 border-2 border-black">
                            <p>Clubs/ Organizations: <a href="https://www.instagram.com/blackatberkeley/?hl=en">Black Student Union (BSU)</a>, <a href="https://star.berkeley.edu/resources/fannie-lou-hamer-black-resource-center">Fannie Lou Hamer 
                                Black Resource Center</a>, <a href="https://cejce.berkeley.edu/aasd"> African American Student Development 
                                (AASD)</a>, <a href="https://callink.berkeley.edu/organization/brrc">Black Recruitment and Retention Center (BRCC)</a></p>
                            <br/>
                            <p>Community Organizations: <a href="https://www.instagram.com/oasatuva/?hl=en">Organization of African Students (OAS)</a>, 
                                <a href="https://callink.berkeley.edu/organization/zawadi">Zawadi: Black LGBT Community at Cal</a></p>

                        </div>
                    </div>

                    <div className="basis-1/2 pt-10 md:pt-0">
                        <h1 className="text-berkeley text-3xl pb-10 hidden md:block"><i>Black/Afrikan Diaspora Community</i></h1>
                        <p>The Black/Afrikan Diaspora community at UC Berkeley plays an integral role 
                            in enriching the campus’s diversity and academic excellence. This community 
                            brings with them a rich tapestry of cultural traditions, activism, and intellectual 
                            contributions. Despite systemic challenges, Black students at Berkeley continue to 
                            thrive through collective empowerment and advocacy for Black liberation. </p>
                        <br/>
                        <h3>Resources:</h3>
                        <ul className="list-decimal list-inside">
                            <li> <a href="https://berkeleyclubs.com/club/BlackStudentsinHealthAssociation"> Professional Resources: Black Students in Health Association (BSHA)</a>, 
                                <a>Haas Undergraduate Black Business Association (HUBBA)</a>, <a href="https://ga.berkeley.edu/get-involved/projects/">Womxn of Color 
                                Initiative – Graduate Assembly</a>, Black Equal Opportunity Employment Journal, <a href="https://www.jopwell.com/">Jopwell</a></li>
                            <li><a href="https://alumni.berkeley.edu/get-involved/scholarships/aai/">Support Resources: African American Initiative Scholarship</a>, <a href="https://lsadvising.berkeley.edu/connect-through-mentorship">mentorship programs.</a></li>
                            <li>Events: <a href="https://diversity.berkeley.edu/celebrating-black-history-month">Black Heritage Month programmin</a>, <a href="https://news.berkeley.edu/2024/02/01/black-history-tour-at-uc-berkeley/">town halls</a>, and <a href="https://www.instagram.com/blackatberkeley/?hl=en">socials.</a></li>

                        </ul>
                    </div>
                </div>

                <div id="Latinx/Chicanx" className="md:flex p-10 gap-10">
                    <div className="basis-1/2 pt-10 md:pt-0">
                        <h1 className="text-berkeley text-3xl pb-10 md:hidden"><i>Latinx/Chicanx Community</i></h1>

                        <h1 className="text-berkeley text-3xl pb-10 hidden md:block"><i>Latinx/Chicanx Community</i></h1>
                        <p>The university supports the Latinx/Chicanx community by offering culturally relevant resources 
                            such as academic counseling, financial aid for undocumented students, and vibrant cultural 
                            programming. Dedicated spaces like the Latinx Resource Center provide opportunities for 
                            connection and advocacy, ensuring Latinx students can succeed academically and personally.</p>
                        <br/>

                        <h3>Appointment with EOP Success Counselor</h3>
                        <ul className="list-disc list-inside">
                            <li>Via Zoom and in person at the Latinx Student Resource Center.</li>
                            <li>To schedule an appointment with Sandra Arias, visit <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3VFYp6QjJM-qBIKPuZP5FEf2XyYtVDudpzmnj1DXD_GyJJnEW8YtHvMtHgh533pd5JOk9v8yfv">http://tinyurl.com/F24SandraEOPAdvising</a></li>
                        </ul>

                        <br/>
                        <h3>Resources:</h3>
                        <ul className="list-disc list-inside">
                            <li><a href="https://cejce.berkeley.edu/clsd/latinx-student-resource-center">Latinx Resource Center</a></li>
                            <li><a href="https://undocu.berkeley.edu/financial-aid-for-undocumented-students/#:~:text=Undocumented%20students%20with%20AB540%20and,and%20scholarships,%20and%20private%20scholarships.">Financial aid for undocumented students</a></li>
                            <li><a href="https://admission.universityofcalifornia.edu/tuition-financial-aid/types-of-aid/who-can-get-financial-aid/ca-dream-act.html">California Dream Act</a></li>
                        </ul>
                        <br/>
                        
                        <h3>Events</h3>
                        <ul className="list-disc list-inside">
                            <li>Día de los Muertos celebrations (cultural festivals) </li>
                            <li>Academic workshops</li>
                        </ul>
                    </div>
                    <div className="basis-1/2 flex flex-wrap">
                        <img src="/departments/deib/f2.png"/>
                        <div className="mt-10 border-2 border-black">
                            <p>Clubs/ Organizations: Black Student Union (BSU), Fannie Lou Hamer 
                                Black Resource Center, African American Student Development 
                                (AASD), Black Recruitment and Retention Center (BRCC)</p>
                            <br/>
                            <p>Community Organizations: Organization of African Students (OAS), 
                                Zawadi: Black LGBT Community at Cal</p>

                        </div>
                    </div>
                </div>

                

            </div>
            <Footer />
        </div>
    );
}
