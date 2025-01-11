
export default function Component() {
  const profiles = [
    { id: 1, name: "Robert Carrillo", title: "Executive Vice President", major: "Political Science, Public Policy and Rhetoric", year: "4th Year", contact: null },
    { id: 2, name: "Joselyn Espinoza", title: "Chief of Staff", major: "Sociology and Public Policy", year: null, contact: "j.espinoza@berkeley.edu" },
    { id: 3, name: "Dafne Rodriguez", title: "Chief of Staff", major: "Sociology and Public Policy", year: null, contact: "dcruzrodriguez@berkeley.edu" },
    { id: 4, name: null, title: null, major: null, year: null, contact: null },
    { id: 5, name: null, title: null, major: null, year: null, contact: null },
    { id: 6, name: null, title: null, major: null, year: null, contact: null },
    { id: 7, name: null, title: null, major: null, year: null, contact: null },
    { id: 8, name: null, title: null, major: null, year: null, contact: null },
    { id: 9, name: null, title: null, major: null, year: null, contact: null },
    { id: 10, name: null, title: null, major: null, year: null, contact: null },
    { id: 11, name: null, title: null, major: null, year: null, contact: null },
    { id: 12, name: null, title: null, major: null, year: null, contact: null },
    { id: 13, name: null, title: null, major: null, year: null, contact: null },
  ];

  const Person = (id, name, title, major, year, contact) => {
    this.id = id
    this.name = name
    this.title = title
    this.major = major 
    this.year = year 
    this.contact = contact
  }

  return (
    <div className="items-center pb-10">
      
      <div id="image_frame" className="mx-[20%] pt-5 grid grid-cols-3 place-self-center gap-[10rem]">
        {profiles.map((profile) => (
          <div key={profile.id} className="flex flex-col">
            <img
              src={`/profile/${profile.id}.png`}
              alt={`Profile picture ${profile.id}`}
              className="rounded-lg"
            />
            <h1 className="mt-2 font-bold text-gray-700">{profile.name}</h1>
            <p className="text-[#6d6d6d]">{profile.title}</p>
            <p className="">{profile.major}</p>
            <p className="">{profile.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
