import Navbar from "../../../components/home/Navbar"
import Footer from "../../../components/home/Footer"
export default function officePage () {
    const profiles = [
{
      id: 1,
      name: "Robert Carrillo",
      title: "Executive Vice President",
      major: "Political Science, Public Policy and Rhetoric",
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
      major: "Sociology and Public Policy",
      contact: "dcruzrodriguez@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/dafne-cruz-rodriguez/"
    },
    {
      id: 4,
      name: "Kianna Rodrate",
      title: "Chief of Staff Intern",
      major: "Economics & Political Science",
      contact: "katianayb@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/katianayb/"
    },
    {
      id: 5,
      name: "Ernesto Barragan",
      title: "Chief of Staff Intern",
      major: "Political Economy, Environmental Economics",
      contact: "ernestobarragan@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/netobarragan/"
    },
    {
      id: 6,
      name: "Aarja Singh",
      title: "Student Safety, Success & Wellness Director",
      major: "Political Science",
      contact: "aarja@berkeley.edu",
      linkedin: null
    },
    {
      id: 7,
      name: "Shawntaya Jeanes",
      title: "Communications and Public Relations Director",
      major: null,
      contact: "shawntaya.jeanes@berkeley.edu",
      linkedin: null
    },
    {
      id: 8,
      name: "Emily Melero",
      title: "Finance Director",
      major: "Political Science & Public Policy",
      contact: "emilycmelero@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/emily-melero-a99308254/"
    },
    {
      id: 9,
      name: "Audrey Lee",
      title: "Legislative Affairs Director",
      major: "Business Administration",
      contact: "audreylee2004@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/audrey-s-lee/"
    },
    {
      id: 10,
      name: "Hibba Adeel",
      title: "Commercial Activities Director",
      major: null,
      contact: "hadeel@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/hibba-a-73a709211/"
    },
    {
      id: 11,
      name: "Joshua Chukwuka Agupugo",
      title: "Diversity, Equity, Inclusion & Belonging (DEIB) Director",
      major: "Neuroscience & Business",
      contact: "joshuaagupugo@berkeley.edu",
      linkedin: null
    },
    {
      id: 12,
      name: "Arisbeth Ambriz",
      title: "(RSO) Support Director",
      major: "Political Science & Social Welfare",
      contact: "arisbethm1904@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/arisbeth-molina/"
    },
    {
      id: 13,
      name: "Maya Lia Garcia",
      title: "Senatorial and Committee Affairs Director",
      major: "Political Science and Government",
      contact: "aarja@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/maya-lia-garcia-8196762b2/"
    },
    {
      id: 14,
      name: "Katiana Bosdet",
      title: "Student Affairs Director",
      major: "Business Administration",
      contact: "katianayb@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/katianayb/"
    },
    {
      id: 15,
      name: "Michael Moy",
      title: "Spaces Director",
      major: "Political Science & Economics",
      contact: "moy.mike168@berkeley.edu,",
      linkedin: "https://www.linkedin.com/in/michael-h-moy/"
    },
  ];

    return(
        <div>
            <Navbar />
            <div className="flex flex-wrap mx-[5%] md:mx-[10%] pt-10 justify-center items-center">
                <h3 className="flex items-center w-full text-2xl lg:text-3xl text-center">
                    <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
                    <span className="px-4">Office of Robert Carrillo </span>
                    <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
                </h3>
                <p className="text-center text-base font-[Georgia] mt-3 mb-9" style={{ color: "#393838" }}>Meet the 2024-2025 Team</p>
            </div>
        
            <div className="items-center pb-10">
              <div className="w-full flex justify-center">
                <div id="image_frame" className="grid grid-cols-3 gap-x-[5rem] gap-y-20">
                  {profiles.map((profile, index) => (
                    <div key={profile.id} className="flex flex-col items-start relative w-[250px]">
                      {/* Divider between profiles (center-aligned after each column 1 and 2) */}
                      {(index % 3 === 1 || index % 3 === 2) && (
                        <div className="absolute -left-[2.5rem] top-0 bottom-0 w-[1px] bg-[#D9D9D9]"></div>
                      )}

                      {/* Image */}
                      <img
                        src={`/profile/${profile.id}.jpeg`}
                        alt={`Profile picture ${profile.id}`}
                        className="w-full h-auto mb-2"
                      />

                      {/* Info Block */}
                      <div className="relative w-full font-[Georgia] text-left text-[14px]">
                        {/* Icons in top-right of text area */}
                        <div className="absolute top-0 right-0 flex space-x-1">
                          {profile.linkedin && (
                            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                              <img src="/linkedin.png" alt="LinkedIn" className="w-4 h-4 hover:scale-110 transition-transform" />
                            </a>
                          )}
                          {profile.contact && (
                            <a href={`mailto:${profile.contact}`}>
                              <img src="/email.png" alt="Email" className="w-4 h-4 hover:scale-110 transition-transform" />
                            </a>
                          )}
                        </div>

                        {/* Name */}
                        <h1 className="text-[14px] leading-[16px] pr-6">
                          {profile.name}
                        </h1>

                        {/* Title */}
                        <p className="italic text-[13px] leading-[16px] pr-6">
                          {profile.title}
                        </p>

                        {/* Major */}
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
            <Footer />
        </div>
    )
}
