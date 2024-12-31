import SearchBar from "./search";

export default function Navbar() {
    const item = (name, link) => {
        return (
            <li className="p-8 flex items-center text-white">
                <a href={link} className="flex items-center text-lg hover:text-gray-500 2xl:text-2xl laptop:text-lg font-bold">
                    {name}
                </a>
            </li>
        )
    }

    const logoref = "evp-logo.png"    

    return (
        <nav className="flex flex-row bg-[#003A70] text-white" style={{height:'100px'}}>
            <a href="/" className="basis-1/6 flex justify-center items-center">
                <img
                        src={logoref}
                        alt="Logo"
                        className="block"
                        style={{
                            width: "20vh", // Set the desired width
                            height: "15vh", // Set the desired height
                            objectFit: "contain", 
                        }}
                    />
            </a>
            <ul className="basis-2/3  flex flex-row justify-center text-white self-center">
                {item("Home", "/")}
                {item("Offices", "/offices")}
                {item("Departments", "/departments")}
                {item("Resources", "/resources")}
                {item("Partnerships", "/partnerships")}

                <li className="flex items-center">
                    <button
                        className="rounded-md font-bold hover:bg-gray-200 text-lg 2xl:text-2xl bg-[#265885] block text-white px-4 py-2 flex items-center">
                        Partner With Us
                    </button>
                </li>
            </ul>

            

            <a className="basis-1/6 flex justify-center items-center  text-gray-800 font-bold">
            <SearchBar />
            </a>

            
        </nav> );
    
    
}

/*

*/