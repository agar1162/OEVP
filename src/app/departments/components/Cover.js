export default function Component({ name, link, desc, mem }) {
    return (
        <div
            style={{ backgroundImage: `url('/departments/${link}')` }}
            className="h-[90vh] bg-cover bg-center bg-no-repeat md:place-content-center relative md:place-content-center"
        >
            <div className="border-t-8  bottom-0 border-berkeley bg-[#FFFFFFCC] w-fit lg: opacity-80 p-10 absolute bottom-0 md:bottom-40">
                <h3 className="text-berkeley font-bold text-lg">Department</h3>
                <h1 className="font-bold text-4xl pt-3">{name}</h1>
                <p className="text-lg pt-1">{desc}</p>
                <p className="pt-4 text-sm">{mem}</p>
            </div>
        </div>
    );
}
