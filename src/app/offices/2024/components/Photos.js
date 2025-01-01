import LineHeader from "../../../../components/home/lineHeader";

export default function Component() {
  const profiles = [
    { id: 1, name: "Robert Carrillo", title: "Executive Vice President", major: "Political Science, Public Policy and Rhetoric", contact: null },
    { id: 2, name: "Joselyn Espinoza", title: "Chief of Staff", major: "Sociology and Public Policy", contact: "j.espinoza@berkeley.edu" },
    { id: 3, name: "Dafne Rodriguez", title: "Chief of Staff", major: "Sociology and Public Policy", contact: "dcruzrodriguez@berkeley.edu" },
    { id: 4, name: null, title: null, major: null, contact: null },
    { id: 5, name: null, title: null, major: null, contact: null },
    { id: 6, name: null, title: null, major: null, contact: null },
    { id: 7, name: null, title: null, major: null, contact: null },
    { id: 8, name: null, title: null, major: null, contact: null },
    { id: 9, name: null, title: null, major: null, contact: null },
    { id: 10, name: null, title: null, major: null, contact: null },
    { id: 11, name: null, title: null, major: null, contact: null },
    { id: 12, name: null, title: null, major: null, contact: null },
    { id: 13, name: null, title: null, major: null, contact: null },

  ];

  return (
    <div className="items-center pb-10">
      <LineHeader title="Office Leadership" />
      
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
            <p className="">{profile.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
