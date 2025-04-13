export default function Component({ name, link, desc, mem }) {
    return (
        <div> 
            <div className="border-t-8  bottom-0 border-berkeley bg-[#FFFFFFCC] w-fit lg: opacity-100 p-10 md:hidden">
                <h3 className="text-berkeley font-bold text-lg">Department</h3>
                <h1 className="font-bold text-4xl pt-3">{name}</h1>
                <p className="text-lg pt-1">{desc}</p>
                <p className="pt-4 text-sm">{mem}</p>
            </div>
        <div
            style={{ backgroundImage: `url('/departments/${link}')` }}
            className="h-[75vh] md:m-10 md:m-[5vh] bg-cover bg-center bg-no-repeat md:place-content-center relative align-center md:place-content-center"
        >
        
            <div className="border-t-8  bottom-0 border-berkeley bg-[#FFFFFFCC] w-fit lg: opacity-100 p-10 absolute bottom-0 hidden md:block">
                <h3 className="text-berkeley font-bold text-lg">Department</h3>
                <h1 className="font-bold text-4xl pt-3">{name}</h1>
                <p className="text-lg pt-1">{desc}</p>
                <p className="pt-4 text-sm">{mem}</p>
            </div>
        </div>
        </div>

    );
}
