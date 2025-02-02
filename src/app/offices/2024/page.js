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
      id: 11,
      name: "Paige Clark",
      title: "Student Safety, Success & Wellness Director",
      major: "Political Science",
      contact: "paigeclark21@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/paige-clark-820a14173/"
    },
    {
      id: 6,
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
      id: 14,
      name: "Audrey Lee",
      title: "Legislative Affairs Director",
      major: "Business Administration",
      contact: "audreylee2004@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/audrey-s-lee/"
    },
    {
      id: 6,
      name: "Hibba Adeel",
      title: "XXX",
      major: "XXX",
      contact: "hadeel@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/hibba-a-73a709211/"
    },
    {
      id: 7,
      name: "Rishi Reddy",
      title: "DEI&B Director",
      major: "Neuroscience & Business",
      contact: "rishireddy@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/rishi-reddy-228a041ba/"
    },
    {
      id: 15,
      name: "Arisbeth Ambriz",
      title: "(RSO) Support Director",
      major: "Political Science & Social Welfare",
      contact: "arisbethm1904@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/arisbeth-molina/"
    },
    {
      id: 10,
      name: "Aarja Singh",
      title: "Senatorial and Committee Affairs Director",
      major: "Political Science",
      contact: "aarja@berkeley.edu",
      linkedin: null
    },
    {
      id: 13,
      name: "Katiana Bosdet",
      title: "Student Affairs Director",
      major: "Business Administration",
      contact: "katianayb@berkeley.edu",
      linkedin: "https://www.linkedin.com/in/katianayb/"
    },
    {
      id: 69,
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
            <div className="flex flex-wrap mx-[10%] pt-10 justify-center items-center drop-shadow-lg">
                <h3 className="flex items-center w-full text-2xl lg:text-3xl font-extrabold text-center">
                    <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
                    <span className="px-4">Office of Robert Carillo </span>
                    <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
                </h3>
                <p>Meet the 2024-2025 Team</p>
            </div>

            <div className="items-center pb-10">
            
            <div id="image_frame" className="mx-[20%] lg:mx-[10%]  pt-5 lg:grid lg:grid-cols-3 place-self-center gap-[5rem]">
                {profiles.map((profile) => (
                <div key={profile.id} className="flex flex-col p-5 relative">
                    <img
                    src={`/profile/${profile.id}.jpeg`}
                    alt={`Profile picture ${profile.id}`}
                    className="rounded-lg"
                    />
                    <h1 className="mt-2 font-bold text-gray-700">{profile.name}</h1>
                    <p className="text-[#6d6d6d]">{profile.title}</p>
                    <p>{profile.major}</p>
                    
                    <div className="block ml-auto flex space-x-2">
                        {profile.linkedin && (
                            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                                <img
                                src="/linkedin.png"
                                alt="LinkedIn"
                                className="w-6 h-6 hover:scale-110 transition-transform"
                                />
                                </a>
                            )}
                            {profile.contact && (
                                <a href={`mailto:${profile.contact}`}>
                                    <img
                                    src="/email.png"
                                    alt="Email"
                                    className="w-6 h-6 hover:scale-110 transition-transform"
                                    />
                      </a>
                    )}
                  </div>
                </div>
                ))}
            </div>
            </div>
            <Footer />
        </div>
    )
}
