import Navbar from "../../../components/home/Navbar"
import Footer from "../../../components/home/Footer"
export default function officePage () {
    const profiles = [
        { id: 1, name: "Robert Carrillo", title: "Executive Vice President", major: "Political Science, Public Policy and Rhetoric", contact: null },
        { id: 2, name: "Joselyn Espinoza", title: "Chief of Staff", major: "Sociology and Public Policy", contact: "j.espinoza@berkeley.edu" },
        { id: 3, name: "Dafne Rodriguez", title: "Chief of Staff", major: "Sociology and Public Policy", contact: "dcruzrodriguez@berkeley.edu" },
        { id: 4, name:"Kianna Rodrate", title: "Chief of Staff Intern", major: "Economics & Political Science", contact: null },
        { id: 5, name: "Ernesto Barragan", title: "Chief of Staff Intern", major: "Political Economy, Environmental Econmics", contact: null },
        { id: 6, name: "Shawntaya Jeanes", title: "Communications and Public Relations Director", major: null, contact: null },
        { id: 8, name: "Emily Melero", title: "Finance Director", major: "Political Science & Public Policy", contact: null },
        { id: 14, name: "Emily Melero", title: "Legislative Affairs Director", major: "Business Administration", contact: null },
        { id: 7, name: "Rishi Reddy", title: "DEI&B Director", major: "Neuroscience & Business", contact: null },
        { id: 15, name: "Arisbeth Ambriz", title: "(RSO) Support Director", major: "Political Science & Social Welfar", contact: null },
        { id: 10, name: "Aarja Singh", title: "Senatorial and Committee Affairs Director", major: "Political Science", contact: null },
        { id: 9, name: "Micheal Moy", title: "Spaces Director", major: "Political Science & Economics", contact: null },
        { id: 13, name: "Katiana Bosdet", title: "Student Affairs Director", major: "Business Adminstration", contact: null },
        {id: 11, name: "Paige Clark", title: "Student Safety, Success & Wellness Director", major: "Political Science ", contact: null },
        {id: 11, name: "Hibba", title: "XXX", major: "XXX", contact: null }

      ];

    return(
        <div>
            <Navbar />
            <div className="flex flex-wrap mx-[10%] pt-10 justify-center items-center drop-shadow-lg">
                <h3 className="flex items-center w-full text-2xl lg:text-3xl font-extrabold text-center">
                    <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
                    <span className="px-4">Office Leadership</span>
                    <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
                </h3>
                <p>Meet the 2024-2025 Team</p>
            </div>

            <div className="items-center pb-10">
            
            <div id="image_frame" className="mx-[20%] lg:mx-[10%]  pt-5 lg:grid lg:grid-cols-3 place-self-center gap-[10rem]">
                {profiles.map((profile) => (
                <div key={profile.id} className="flex flex-col p-5">
                    <img
                    src={`/profile/${profile.id}.png`}
                    alt={`Profile picture ${profile.id}`}
                    className="rounded-lg"
                    />
                    <h1 className="mt-2 font-bold text-gray-700">{profile.name}</h1>
                    <p className="text-[#6d6d6d]">{profile.title}</p>
                    <p className="">{profile.major}</p>
                </div>
                ))}
            </div>
            </div>
            <Footer />
        </div>
    )
}