import Navbar from "../../../components/home/Navbar"
import Footer from "../../../components/home/Footer"
export default function officePage () {
    const profiles = [
{
      id: 1,
      name: "Robert Carrillo",
      title: "Executive Vice President",
      major: "Political Science, Public Policy, and Rhetoric",
      contact: "robertcarrillo@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/robertmcarrillo/"
    },
    {
      id: 2,
      name: "Joselyn Espinoza",
      title: "Chief of Staff",
      major: "Sociology and Public Policy",
      contact: "j.espinoza@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/joselyn-espinoza/"
    },
    {
      id: 3,
      name: "Dafne Rodriguez",
      title: "Chief of Staff",
      major: "Political Science, Public Health, and Public Policy",
      contact: "dcruzrodriguez@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/dafne-cruz-rodriguez/"
    },
    {
      id: 4,
      name: "Kianna Rodrate",
      title: "Chief of Staff Intern",
      major: "Economics and Political Science",
      contact: "katianayb@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/kiannarodarte/"
    },
    {
      id: 5,
      name: "Ernesto Barragan",
      title: "Chief of Staff Intern",
      major: "Political Economy and Environmental Economics & Policy, Data Science (minor)", 
      contact: "ernestobarragan@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/netobarragan/"
    },
    {
      id: 6,
      name: "Shawntaya Jeanes",
      title: "Communications and Public Relations Director",
      major: "Political Science",
      contact: "shawntaya.jeanes@berkeley.edu",
      linkedin: null
    },
    {
      id: 7,
      name: "Emily Melero",
      title: "Finance Director",
      major: "Political Science and Public Policy",
      contact: "emilycmelero@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/emily-melero-a99308254/"
    },
    {
      id: 8,
      name: "Audrey Lee",
      title: "Legislative Affairs Director",
      major: "Business Administration",
      contact: "audreylee2004@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/audrey-s-lee/"
    },
    {
      id: 9,
      name: "Hibba Adeel",
      title: "Commercial Activities Director",
      major: "Computer Science, Data Science, and Business",
      contact: "hadeel@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/hibba-a-73a709211/"
    },
    {
      id: 10,
      name: "Joshua Chukwuka Agupugo",
      title: "Diversity, Equity, Inclusion & Belonging (DEIB) Director",
      major: "Political Science and Government",
      contact: "joshuaagupugo@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/joshua-agupugo-532566263/"
    },
    {
      id: 11,
      name: "Arisbeth Ambriz",
      title: "(RSO) Support Director",
      major: "Social Welfare and Political Science",
      contact: "arisbethm1904@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/arisbeth-molina/"
    },
    {
      id: 12,
      name: "Maya Lia Garcia",
      title: "Senatorial and Committee Affairs Director",
      major: "Political Science and Government",
      contact: "mayalia@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/maya-lia-garcia-8196762b2/"
    },
    {
      id: 13,
      name: "Aarja Singh",
      title: "Student Safety, Success & Wellness Director",
      major: "Political Science",
      contact: "aarja@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/aarja-singh-978894304/"
    },
    {
      id: 14,
      name: "Michael Moy",
      title: "Spaces Director",
      major: "Political Science and Economics",
      contact: "moy.mike168@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/michael-h-moy/"
    },
    {
      id: 15,
      name: "Katiana Bosdet",
      title: "Student Affairs Director",
      major: "Business Analytics and Legal Studies, Data Science (minor)",
      contact: "katianayb@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/katianayb/"
    },
  ];

    return(
        <div>
            <Navbar />
            <main className="flex flex-col lg:flex-row max-w-[1300px] mx-auto px-6 md:px-10 py-10 gap-10">
              {/* Sidebar for term selection */} 
              <aside className="w-full lg:w-[250px] flex-shrink-0 py-32">
                <div className="shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] bg-white">
                  {/* Title */}
                  <div className="bg-[#003A70] text-white text-center py-3 text-sm tracking-wide font-normal">
                    Offices
                  </div>

                  {/* Option */}
                  <a
                    href="/office/2024"
                    className="block text-center py-3 text-sm font-normal border border-gray-300 border-t-0 text-black"
                  >
                    2024 - 2025
                  </a>
                </div>
              </aside>

              {/* Main content section: officer title + grid */}
              <section className="flex-1">
                <div className="w-full border border-[#E1E1E1] mx-auto text-center max-w-full sm:max-w-[720px] lg:max-w-[910px] shadow-md mb-10">
                  <div className="w-full h-[3px] bg-[#003A70]"></div>
                  <div className="px-6 py-5">
                    <h3 className="text-2xl md:text-3xl font-[Georgia] font-extrabold text-[#000]">
                      Office of Robert Carrillo
                    </h3>
                    <p className="text-base text-[#393838] font-[Georgia] mt-2">
                      Meet the 2024-2025 Team
                    </p>
                  </div>
                </div>

                <div className="items-center pb-10">
                  <div className="w-full flex justify-center">
                    <div
                      id="image_frame"
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 sm:gap-x-16 lg:gap-x-[5rem]"
                    >
                      {profiles.map((profile, index) => (
                        <div
                          key={profile.id}
                          className="flex flex-col items-start relative w-full max-w-[250px] mx-auto sm:mx-0"
                        >
                          {(index % 3 === 1 || index % 3 === 2) && (
                            <div className="absolute -left-[2.5rem] top-0 bottom-0 w-[1px] bg-[#D9D9D9] hidden lg:block"></div>
                          )}

                          <img
                            src={`/profile/${profile.id}.jpeg`}
                            alt={`Profile picture ${profile.id}`}
                            className="w-full h-auto mb-2"
                          />

                          <div className="relative w-full font-[Georgia] text-left text-[13px] leading-snug">
                            <div className="absolute top-0 right-0 flex flex-wrap gap-1">
                              {profile.linkedin && (
                                <a
                                  href={profile.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src="/linkedin.png"
                                    alt="LinkedIn"
                                    className="w-4 h-4 hover:scale-110 transition-transform"
                                  />
                                </a>
                              )}
                              {profile.contact && (
                                <a href={`mailto:${profile.contact}`}>
                                  <img
                                    src="/email.png"
                                    alt="Email"
                                    className="w-4 h-4 hover:scale-110 transition-transform"
                                  />
                                </a>
                              )}
                            </div>

                            <h1 className="text-[14px] leading-[16px] pr-6">{profile.name}</h1>
                            <p className="italic text-[13px] leading-[16px] pr-6">{profile.title}</p>
                            {profile.major && (
                              <p className="text-[#6d6d6d] text-[13px] leading-[16px] pr-6">
                                {profile.major}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </main>

            <Footer />
        </div>
    )
}
