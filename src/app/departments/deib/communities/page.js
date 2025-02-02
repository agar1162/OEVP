import Footer from "../../../../components/home/Footer";
import Navbar from "../../../../components/home/Navbar";

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
                    className="absolute bottom-4 right-4 px-4 py-2 text-white border border-white hover:bg-white hover:text-berkeley transition duration-300"
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
                {gridItem("Indigenous/Native American Community", "#Indigenous", images()[2])}
                {gridItem("Middle Eastern, North African, and Muslim Student Association", "#MENA/Muslim", images()[3])}
                {gridItem("Asian American and Pacific Islander (AAPI) Community", "#AAPI", images()[4])}
                {gridItem("Jewish Community", "#Jewish", images()[5])}
                {gridItem("LGBTQIA+ Community", "#LGBTQIA+", images()[6])}
                {gridItem("Disabled Community", "#DSP", images()[7])}
                {gridItem("International Community", "#International", images()[8])}
            </div>

            <div id="COMMUNITIES_DESCRIPTIONS_CONTAINER" className="mx-[5%] md:mx-[15%] pt-10">
                <div id="Black/Afrikan" className="md:flex p-10 gap-10">
                    <div className="basis-1/2 flex flex-wrap">
                        <h1 className="text-berkeley text-3xl pb-10 md:hidden"><i>Black/Afrikan Diaspora</i></h1>
                        <img src="/departments/deib/f1.png" className="w-full"/>
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

                <hr className="w-[50%] h-[3px] mx-auto my-4 bg-gray-300 border-0 rounded md:my-10" />


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
                        <img src="/departments/deib/f2.png" className="w-full"/>
                        <div className="mt-10 border-2 border-black">
                            <p>Affinity Groups: <a href="">Central Americans for Empowerment</a>, <a href="">CED Students of Color (CEDSOC)</a>, <a href="">Colombians at Berkeley</a></p>
                            <br/>
                            <p>Academic Clubs/ Organizations: <a href="https://www.ocf.berkeley.edu/~calche/">Comunidad for Health Equity (CHE)</a>, 
                                <a href="http://casa-ucberkeley.org/">Chicanx/Latinx Architecture Student Association (CASA)</a>, 
                                <a href="https://www.mccscu.com/cultural-clubs/hermanas">Hermanas Unidas (leadership opportunities)</a>, 
                                <a href="https://callink.berkeley.edu/organization/hermanosunidos">Hermanos Unidos</a>, 
                                <a href="https://callink.berkeley.edu/organization/hispanicengineersscientists">Hispanic Engineers and Scientists (HES)</a>, 
                                <a href="https://callink.berkeley.edu/organization/laalianza">La Alianza: Law Students of Latin American Decent</a>, 
                                <a href="https://www.law.berkeley.edu/library/ir/bljlp/">La Raza Law Journal</a>, 
                                <a href="https://callink.berkeley.edu/organization/LLS">Latin American Leadership Society (LLS)</a>, 
                                <a href="https://www.ucblbsa.org/">Latinx Business Association (LBSA)</a>, 
                                <a href="https://nature.berkeley.edu/latinxenvironment/">Latinxs and the Environment</a>
                            </p>
                            <br/>
                            <p>Fraternities/Sororoities: 
                                <a href="">Lambda Theta ALpha Latin SOrority</a>, 
                                <a href="">Lambda Theta Phi</a>, 
                                <a href="">La Unidad Latina</a>, 
                                <a href="">Lambda Upsilon Lambda Fraternity</a>
                            </p>
                            <br/>
                            <p>
                                Dance/Music Groups: Ballet Folklorico Reflejos del Sol de UCB, Danza in Xochitl in Cuicatl, Mariachi Luz de Oro
                            </p>


                        </div>
                    </div>
                </div>

                <hr className="w-[50%] h-[3px] mx-auto my-4 bg-gray-300 border-0 rounded md:my-10" />

                <div id="Indigenous" className="md:flex p-10 gap-10">
                    <div className="basis-1/2 flex flex-wrap">
                        <h1 className="text-berkeley text-3xl pb-10 md:hidden"><i>Indigenous Community</i></h1>
                        <img src="/departments/deib/f3.png" className="w-full"/>
                        <div className="mt-10 border-2 border-black">
                            <p>Development Organizations: 
                                <a href="https://callink.berkeley.edu/organization/nativeamericanrrc">Indigenous Native Coalition Recruitment and Retention Center</a>, 
                                <a href="https://issi.berkeley.edu/crnai">Joseph Myers Center for Research on Native American Issues</a>, 
                                <a href="">Indigenous Native Coalition (INC-RRC)</a>, 
                                <a href="https://soundcloud.com/indigenousunited">Indigenous United (Native American Student Development Podcast)</a>, 
                                <a href="https://cejce.berkeley.edu/calndnds">Cal NDNs (Natives of Diverse Nations)</a>
                            </p>
                            <br/>
                            <p>Academic Organizations: 
                                <a href="">Cal Nerds (STEM organization)</a>, 
                                <a href="">American Indian Science and Engineering Society (AISES)</a>, 
                                <a href="">Native American Law Students Association</a>
                            </p>

                        </div>
                    </div>


                    <div className="basis-1/2 pt-10 md:pt-0">
                        <h1 className="text-berkeley text-3xl pb-10 hidden md:block"><i>Indigenous Community</i></h1>
                        <p>UC Berkeley supports Indigenous students by recognizing the importance of cultural preservation and 
                            representation. Resources include the Native American Student Development Office, financial aid 
                            opportunities, and tools for meaningful land acknowledgments. The OEVP also organizes events and programming to
                             celebrate Indigenous cultures and foster a sense of community.</p>
                        <br/>
                        <p>
                        Land acknowledgment: The OEVP recognizes that Berkeley sits on the territory of xučyun (Huichin) (Hoo-Choon), 
                        the ancestral and unceded land of the Chochenyo (Cho-chen-yo) speaking Ohlone people, the successors of the 
                        historic and sovereign Verona Band of Alameda County. This land was and continues to be of great importance 
                        to the Muwekma (Muh-wek-muh) Ohlone Tribe and other familial descendants of the Verona Band. We recognize 
                        that every member of the Berkeley community has benefited, and continues to benefit, from the use and
                         occupation of this land since the institution's founding in 1868.
                        </p>
                        <br/>
                        <h3>Resources:</h3>
                        <ul className="list-decimal list-inside">
                            <li><a href="https://cejce.berkeley.edu/nasd">Native American Student Development Office</a></li>
                            <li><a href="https://jsp-ls.berkeley.edu/legal-studies-undergraduate-program/about-major/land-acknowledgement-statement">land acknowledgment tools</a></li>
                            <li><a href="https://financialaid.berkeley.edu/types-of-aid-at-berkeley/innovative-berkeley-aid-programs/native-american-opportunity-plan/#:~:text=American%20Opportunity%20Plan-,Native%20American%20Opportunity%20Plan,Indian,%20and%20Alaska%20Native%20tribes.">Financial Aid</a></li>
                        </ul>
                        <br/>
                        <h3>Events:</h3>
                        <ul className="list-decimal list-inside">
                            <li>Powwows</li>
                            <li>Indigenous Peopels' Day</li>
                            <li>Upcoming Events</li>
                        </ul>
                    </div>
                </div>

                <hr className="w-[50%] h-[3px] mx-auto my-4 bg-gray-300 border-0 rounded md:my-10" />

                <div id="MENA/Muslim" className="md:flex p-10 gap-10">
                    <div className="basis-1/2 pt-10 md:pt-0">
                        <h1 className="text-berkeley text-3xl pb-10 md:hidden"><i>Middle Eastern, North African, and Muslim Communities </i></h1>

                        <h1 className="text-berkeley text-3xl pb-10 hidden md:block"><i>Middle Eastern, North African, and Muslim Communities Middle Eastern, North African, and Muslim Communities </i></h1>
                        <p>UC Berkeley recognizes Middle Eastern, North African, and Muslim (MENA/Muslim) student communities. The university offers dedicated resources, including the Muslim Student 
                            Association (MSA), which organizes prayer spaces and Halal dining options, as well as the MENA Student Development Office, which provides cultural, academic, and emotional support.
                             Immigration and citizenship resources are also available to assist students navigating legal systems. We advocate for the representation, safety, and inclusivity of the MENA 
                             community on campus.
                        </p>
                        <br/>
                        <br/>

                        <h3>Resources:</h3>
                        <ul className="list-disc list-inside">
                            <li>
                                <a href="https://dining.berkeley.edu/nutrition/special-diets/#:~:text=Cafe%203%20is%20the%20dining,entree%20station%20are%20certified%20Halal.">Halal dining options</a> and  
                                <a href="https://berkeleymsa.org/spaces"> prayer/meditation spaces</a>.</li>
                        </ul>
                        <br/>

                        <h3>Events</h3>
                        <ul className="list-disc list-inside">
                            <li>Ramadan Iftars, cultural showcases, and interfaith dialogues.</li>
                            <li><a href="https://diversity.berkeley.edu/arab-american-heritage-month">Arab Heritage Month</a> and MENA cultural week programming</li>
                        </ul>
                        <br/>

                        <h3>Performences</h3>
                        <ul className="list-disc list-inside">
                            <li>
                                <a href="https://www.instagram.com/ucbazaad/">Azaad</a>, 
                                <a href="https://www.instagram.com/p/CMLb2o0FUmr/"> Cal Bhangra, Deewani</a>, 
                                <a href="https://www.instagram.com/ucbdeewani/"> Dil Se</a>, 
                                <a href="https://www.instagram.com/p/CMOB4J6ARAN/"> Laya of Berkeley</a>, 
                                <a href="https://www.facebook.com/MayaatBerkeley/"> Maya at Cal</a>, 
                                <a href="https://www.instagram.com/ucbzahanat/"> Natya at Berkeley</a>, 
                                <a href="https://www.instagram.com/nazakatatberkeley/"> Nazakat at Berkeley (Cal Kathak)</a>,
                                <a href="https://www.instagram.com/ucb.raasramzat/"> Raas Ramzat</a>, 
                                <a href="https://www.instagram.com/ucbzahanat/"> UC Berkeley Zahanat</a></li>
                        </ul>
                    </div>
                
                    <div className="basis-1/2 flex flex-wrap">
                        <img src="/departments/deib/f4.png" className="w-full"/>
                        <div className="mt-10 border-2 border-black">
                            <p>
                            Community and Identity-Based Organizations: 
                                <a href="https://mepi.state.gov/leadership/student-leaders-program/">MENA Student Development Office</a>, 
                                <a href="https://cejce.berkeley.edu/centers/asian-pacific-american-student-development/programs-initiatives/sswana-initiative"> SSWANA Initiative (South Asian, Southwest Asian, and North African Initiative)</a>, 
                                <a href="https://www.instagram.com/calmenarrc/"> Middle Eastern-North African Recruitment & Retention Center</a>
                            </p>
                            <br/>
                            
                            <p>
                                Faith-Based Student Organizations: 
                                    <a href="https://www.instagram.com/jsaberkeley/"> Jain Students Association</a>, 
                                    <a href="https://www.instagram.com/ucbssa/"> Sikh Students Association</a>, 
                                    <a href="https://callink.berkeley.edu/organization/MSA"> Muslim Student Association</a>
                            </p>
                            <br/>

                            <p>
                                Advocacy and Social Impact: 
                                    <a href="https://www.instagram.com/asha_berkeley/">Asha for Education, Berkeley (advocating for change through education in India)</a>, 
                                    <a href="https://www.instagram.com/berkeleybpshi/">BPSHI (initiative fighting for immigrant communities’ access to healthcare)</a>, 
                                    <a href="https://www.instagram.com/berkeleysahaara/">UC Berkeley Sahaara (anti-sex trafficking project)</a>
                            </p>
                            <br/>

                            <p>
                                Health and Wellness Initiatives: 
                                    <a href="https://www.instagram.com/jeevaclinic/"> Jeeva Clinic (clinic for awareness to cardiovascular health in the South Asian community)</a>, 
                                    <a href="https://www.projectrishi.org/"> Project RISHI (Rural India Social and Health Improvement)</a>, 
                                    <a href="https://www.instagram.com/ucb.pph/"> Palestinian Public Health at Berkeley</a>
                            </p>
                        </div>
                    </div>
                </div>

                <hr className="w-[50%] h-[3px] mx-auto my-4 bg-gray-300 border-0 rounded md:my-10" />

                <div id="AAPI" className="md:flex p-10 gap-10">
                    <div className="basis-1/2 flex flex-wrap">
                        <h1 className="text-berkeley text-3xl pb-10 md:hidden"><i>Asian American and Pacific Island Community </i></h1>
                        <img src="/departments/deib/f5.png" className="w-full"/>
                        <div className="mt-10 border-2 border-black">
                            <p>Professional Development: 
                                <a href="https://cejce.berkeley.edu/apasd"> Asian Pacific American Student Development (APASD)</a> , 
                                <a href="https://callink.berkeley.edu/organization/reachrrc"> Asian Pacific Islander Recruitment and Retention Center (REACH!)</a>, 
                                <a href="https://www.facebook.com/ucb.apapla/"> Asian Pacific American Pre-Law Association</a>, 
                                <a href="https://www.acareers.net/"> Asian Career Network</a>, 
                                <a href="https://callink.berkeley.edu/organization/bcssa"> Berkeley Chinese Students and Scholars Association</a>
                            </p>
                            <br/>
                            <p>Cultural Organizations: 
                                <a href="">Asian American Association</a>, 
                                <a href="">Berkeley Cambodian Students Association</a>, 
                            </p>

                        </div>
                    </div>

                    <div className="basis-1/2 pt-10 md:pt-0">
                        <h1 className="text-berkeley text-3xl pb-10 hidden md:block"><i>Asian American and Pacific Island Community </i></h1>
                        <p>UC Berkeley actively supports the Asian American and Pacific Islander (AAPI) community, which includes students 
                            from more than 50 ethnic groups with unique cultural and historical experiences. The university ensures that 
                            AAPI students have access to resources that address academic, social, and cultural needs. Through the Asian 
                            Pacific American Student Development Office and other advocacy organizations, students can find support for 
                            mental health, leadership development, and navigating identity challenges. It encompass more than 50 different 
                            ethnic groups – including 24.7 million Asians and Pacific Islanders in the United States
                        </p>
                        <br/>

                        <h3>Wellness Resources/Reports:</h3>
                        <ul className="list-decimal list-inside">
                            <li><a href="https://diversity.berkeley.edu/sites/default/files/aapisc-2021-report-final_0.pdf"> AAPI representation and diversity within the student body</a></li>
                            <li><a href="https://docs.google.com/document/d/18UOradc0WlJC6_M6yVdDzepL09yuFauy9-E-2KlPk4Y/edit?tab=t.0#heading=h.gugfmiro0i">AAPI Mental Wellness Guide.</a></li>
                        </ul>
                        <br/>

                        <h3>Events:</h3>
                        <ul className="list-decimal list-inside">
                            <li><a href="https://events.berkeley.edu/student-events/event/235245-lunar-new-year-celebration">Lunar New Year</a></li>
                            <li><a href="https://diversity.berkeley.edu/asian-american-and-pacific-islander-heritage-month">Heritage Celebrations</a></li>
                        </ul>
                    </div>
                </div>

                <hr className="w-[50%] h-[3px] mx-auto my-4 bg-gray-300 border-0 rounded md:my-10" />

                <div id="Jewish" className="md:flex p-10 gap-10">
                    <div className="basis-1/2 pt-10 md:pt-0">
                        <h1 className="text-berkeley text-3xl pb-10 md:hidden"><i>Jewish Community</i></h1>

                        <h1 className="text-berkeley text-3xl pb-10 hidden md:block"><i>Jewish Community</i></h1>
                        <p> 
                            UC Berkeley offers key resources for Jewish students including the Berkeley Hillel and 
                            Chabad Jewish Student Center, which offer opportunities for worship, community service, 
                            and Jewish learning. Students can access Kosher dining options and participate in events 
                            such as Shabbat dinners, Jewish holiday celebrations, and interfaith dialogues. 
                            The university also supports advocacy efforts to combat antisemitism and promote inclusivity,
                            providing safe spaces for students to discuss identity.
                        </p>
                        <br/>
                        <br/>

                        <h3>Resources:</h3>
                        <ul className="list-disc list-inside">
                            <li><a href="https://jewishstudies.berkeley.edu/about/affiliates-resources">Center for Jewish Studies - Resources</a></li>
                            <li><a href="https://berkeleyhillel.org/wellness/">Berkeley Hillel - Wellness Resources</a></li>
                            <li><a href="https://diversity.berkeley.edu/support-uc-berkeley-jewish-community">Support for the UC Berkeley Jewish Community</a></li>
                            <li><a href="https://magnes.berkeley.edu/">Magnes Collection for Jewish Art and Life</a></li>
                            <li><a href="https://jewishstudies.berkeley.edu/antisemitism-education/">Antisemitism Education Initiative</a></li>
                            <li><a href="https://deanofstudents.berkeley.edu/our-resources/support/resources-support-trauma-tragedies-loss/">Resources & Support for Trauma, Tragedies, and Loss</a></li> 
                        </ul>
                        <br/>

                        <h3>Events</h3>
                        <ul className="list-disc list-inside">
                            <li><a href="https://jewishstudies.berkeley.edu/news-events-media/events">Speaker Events</a></li>
                            <li><a href="https://diversity.berkeley.edu/jewish-american-heritage-month">Heritage Month Celebrations</a></li>

                        </ul>
                        <br/>
                    </div>
                
                    <div className="basis-1/2 flex flex-wrap">
                        <img src="/departments/deib/f6.png" className="w-full"/>
                        <div className="mt-10 border-2 border-black">
                            <p>
                                Community Organizations: 
                                    <a href="https://www.jewishucb.com/"> The Rohr Chabad Jewish Student Center</a>, 
                                    <a href="https://berkeleyhillel.org/jews-of-color-collective/"> Jews of Color Collective</a>, 
                                    <a href="https://berkeleyhillel.org/gaavah/"> Cal Ga’avah (Queer Judaism Organization)</a>, 
                                    <a href="https://berkeleyhillel.org/aepi/"> Alpha Epsilon Pi (Jewish Fraternity)</a>
                            </p>
                            <br/>
                        

                            <p>
                                Academic Centers: 
                                    <a href="https://helendillerinstitute.berkeley.edu/"> The Berkeley Institute for Jewish Law and Israel Studies</a> , 
                                    JEWSE: Jews in Science and Engineering
                            </p>
                        </div>
                    </div>
                </div>

                <hr className="w-[50%] h-[3px] mx-auto my-4 bg-gray-300 border-0 rounded md:my-10" />

                <div id="LGBTQIA+" className="md:flex p-10 gap-10">
                    <div className="basis-1/2 flex flex-wrap">
                        <h1 className="text-berkeley text-3xl pb-10 md:hidden"><i>LGBTQIA+</i></h1>
                        <img src="/departments/deib/f7.png" className="w-full"/>
                        <div className="mt-10 border-2 border-black">
                            <p>Professional Development and Academic Networks: 
                                <a href="https://www.instagram.com/berkeleylawqc/?hl=en">Berkeley Law Queer Caucus</a>, 
                                <a href="https://linktr.ee/qappaberkeley"> Queer + Allied Pre-Health Pre-Med Association (QAPPA)</a>,
                                <a href="https://www.qathaas.org/"> Q@Haas (LGBTQ MBA members at Haas Business School)</a>, 
                                <a href="https://berkeleyclubs.com/club/QueeringPublicHealth"> Queering Public Health</a>
                            </p>
                            <br/>

                            <p>Social Organizations: 
                                <a href="https://callink.berkeley.edu/organization/queerstudentunion"> Queer Student Union</a>, 
                                <a href="https://callink.berkeley.edu/organization/calqueerandasian"> Cal Queer & Asian</a>
                            </p>
                            <br/>

                            <p>Greek Life and Community: 
                                <a href="https://callink.berkeley.edu/organization/sigmaepsilonomegafraternity"> Sigma Epsilon Omega (Queer fraternity)</a>, 
                                <a href="https://www.gammarholambda.org/"> Gamma Rho Lambda (LBTQ Sorority)</a>

                            </p>



                        </div>
                    </div>

                    <div className="basis-1/2 pt-10 md:pt-0">
                        <h1 className="text-berkeley text-3xl pb-10 hidden md:block"><i>LGBTQIA+</i></h1>
                        <p>
                            UC Berkeley is deeply committed to supporting LGBTQIA+ students by creating a campus 
                            environment that prioritizes inclusivity, safety, and equity. The Gender Equity Resource Center (GenEq) 
                            serves as a hub for advocacy, providing access to counseling, ally training, and leadership opportunities. 
                            The university also hosts events like Pride Month celebrations and National Coming Out Day, which amplify 
                            LGBTQIA+ voices and foster a sense of belonging. Berkeley’s commitment extends to ensuring inclusive housing, 
                            offering mental health services tailored to LGBTQIA+ experiences, and supporting student organizations that 
                            empower queer and trans students across all disciplines. 
                        </p>
                        <br/>

                        <h3>Resources:</h3>
                        <ul className="list-decimal list-inside">
                            <li><a href="https://cejce.berkeley.edu/geneq">Gender Equity Resources Center (GenEq)</a></li>
                            <li><a href="https://docs.google.com/document/d/18UOradc0WlJC6_M6yVdDzepL09yuFauy9-E-2KlPk4Y/edit?tab=t.0#heading=h.gugfmiro0i">Queer Alliance & Resource Center</a></li>
                            <li><a href="https://uhs.berkeley.edu/pride">LGBTQ Counseling</a></li>

                        </ul>
                        <br/>

                        <h3>Events:</h3>
                        <ul className="list-decimal list-inside">
                            <li><a href="https://news.berkeley.edu/2022/06/01/celebrating-pride-month-a-year-of-returning-to-in-person-spaces-and-connection/">Pride Month programming</a></li>
                            <li><a href="https://events.berkeley.edu/ASUC/event/270669-national-coming-out-day">Coming Out Day</a></li>
                        </ul>
                    </div>
                </div>

                <hr className="w-[50%] h-[3px] mx-auto my-4 bg-gray-300 border-0 rounded md:my-10" />

                <div id="DSP" className="md:flex p-10 gap-10">
                    <div className="basis-1/2 pt-10 md:pt-0">
                        <h1 className="text-berkeley text-3xl pb-10 md:hidden"><i>Disabled Students Program</i></h1>

                        <h1 className="text-berkeley text-3xl pb-10 hidden md:block"><i>Disabled Students Program</i></h1>
                        <p> 
                            The Disabled Students’ Program (DSP) provides accommodations such as extended testing time, 
                            assistive technology, and note-taking services to support academic success. Beyond academics, 
                            the university offers workshops on disability awareness, advocacy initiatives, and networking 
                            events designed to build community among students with disabilities. Campus-wide accessibility 
                            is prioritized through ongoing audits and improvements to physical and digital spaces, ensuring 
                            every student can thrive in an inclusive environment.
                        </p>
                        <br/>

                        <p>
                            Cal students registered with the Disabled Student Program can schedule hour-long one-on-one appointments 
                            with an experienced <a href="https://career.berkeley.edu/about-us/meet-our-team/ricardo-flores/"> Career Counselor</a> to support their career exploration, preparation, and job seeking 
                            as an employee with a disability. 
                        </p>

                        <ul className="list-disc list-inside pl-4">
                            <li>Sign up on Handshake. Select <a href="https://berkeley.joinhandshake.com/login">“DSP Counseling” as the appointment type.</a></li>
                            <li>If you experience any accessibility difficulties with scheduling, email ricardo.flores@berkeley.edu</li>
                            <li>Documents: <a href="https://career.berkeley.edu/wp-content/uploads/Career-Readiness-Checklist-PDF.pdf">Career Readiness Checklist</a>, <a href="https://career.berkeley.edu/wp-content/uploads/Preparing-for-a-Career-Fair.pdf">Preparing for a Career Fair</a> </li>
                            <li className="pl-4 list-none">
                                <ul className="list-disc list-inside">    
                                    <li>Proof of disability form: <a href="https://career.berkeley.edu/wp-content/uploads/Sample-ScheduleALetter.pdf">Sample Schedule A</a></li>
                                    <li>Slideshow on informing potential employers about your disability: <a href="https://career.berkeley.edu/wp-content/uploads/Strength-Based-Disclosure-PDF.pdf">Strengths Based Disclosure</a></li>
                                </ul>
                            </li>
                        </ul>

                        <br/>

                        <h3>Resources:</h3>
                        <ul className="list-disc list-inside">
                            <li><a href="https://jewishstudies.berkeley.edu/about/affiliates-resources">DSP/TRIO Online Disability Resources</a></li>
                        </ul>
                        <br/>

                        <h3>Events</h3>
                        <ul className="list-disc list-inside">
                            <li><a href="https://dac.berkeley.edu/news/dap-digital-accessibility-workshop-series">Accessibility awareness workshops</a></li>
                            <li><a href="https://dsp.berkeley.edu/getting-involved-programs-services-and-opportunities">Community Events</a></li>

                        </ul>
                        <br/>
                    </div>
                
                    <div className="basis-1/2 flex flex-wrap">
                        <img src="/departments/deib/f8.png" className="w-full"/>
                        <div className="mt-10 border-2 border-black">
                            <p>
                                Community Organizations: 
                                    <a href="https://www.jewishucb.com/"> The Rohr Chabad Jewish Student Center</a>, 
                                    <a href="https://berkeleyhillel.org/jews-of-color-collective/"> Jews of Color Collective</a>, 
                                    <a href="https://berkeleyhillel.org/gaavah/"> Cal Ga’avah (Queer Judaism Organization)</a>, 
                                    <a href="https://berkeleyhillel.org/aepi/"> Alpha Epsilon Pi (Jewish Fraternity)</a>
                            </p>
                            <br/>
                        

                            <p>
                                Academic Centers: 
                                    <a href="https://helendillerinstitute.berkeley.edu/"> The Berkeley Institute for Jewish Law and Israel Studies</a> , 
                                    JEWSE: Jews in Science and Engineering
                            </p>
                        </div>
                    </div>
                </div>

                <hr className="w-[50%] h-[3px] mx-auto my-4 bg-gray-300 border-0 rounded md:my-10" />

                <div id="International" className="md:flex p-10 gap-10">
                    <div className="basis-1/2 flex flex-wrap">
                        <h1 className="text-berkeley text-3xl pb-10 md:hidden"><i>International Students</i></h1>
                        <img src="/departments/deib/f9.png" className="w-full"/>
                        <div className="mt-10 border-2 border-black">
                            <p>Academic and Language Programs: 
                                <a href="https://slc.berkeley.edu/international-student-program"> Student Learning Center International Student Program (ISP)</a>,
                                <a href="https://slc.berkeley.edu/language-exchange-program"> language exchange program</a>, 
                                <a href="https://internationaloffice.berkeley.edu/families/english_resources"> language programs</a>
                            </p>
                            <br/>

                            <p>Community: 
                                <a href="https://ihouse.berkeley.edu/admissions/why-i-house"> International House</a>
                            </p>
                            <br/>

                            <p>Visa and Immigration Services: 
                                <a href="https://internationaloffice.berkeley.edu/home"> Berkeley International Office</a>, 
                                <a href="https://internationaloffice.berkeley.edu/immigration"> visa/immigration services</a>
                            </p>



                        </div>
                    </div>

                    <div className="basis-1/2 pt-10 md:pt-0">
                        <h1 className="text-berkeley text-3xl pb-10 hidden md:block"><i>International Students</i></h1>
                        <p>
                            UC Berkeley fosters a welcoming and supportive environment for its diverse International Student population, 
                            which represents over 100 countries. The Berkeley International Office offers personalized guidance on visa 
                            processes, work authorization, and cultural adjustment. Language programs and conversation workshops help 
                            students refine their English skills and integrate into campus life. In addition to academic support, the 
                            university hosts global mixers, cultural showcases, and orientation programs tailored for international 
                            students. These initiatives ensure that students from around the world feel connected and supported as 
                            they navigate the academic, social, and cultural landscape at Berkeley.
                        </p>
                        <br/>

                        <h3>Career/Community Resources:</h3>
                        <ul className="list-decimal list-inside">
                            <li><a href="https://career.berkeley.edu/communities/international-students/">Berkeley Career Engagement Resources</a></li>
                            <li><a href="https://basicneeds.berkeley.edu/community-specific-resources/international-students">Community Resources for International Students</a></li>

                        </ul>
                        <br/>

                        <h3>Events:</h3>
                        <ul className="list-decimal list-inside">
                            <li><a href="https://events.berkeley.edu/events/event/259994-international-student-welcome-mixer">Global student mixers/ orientation events,</a></li>
                            <li><a href="https://events.berkeley.edu/ihouse/event/130193-international-culture-festival-around-the-world">Cultural showcases</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
