export default function Stats() {
    return (
        <div className="flex h-[319px]">
            <div className="flex-1 flex flex-col items-center justify-center">
                <h1 id="gradient-text" className="bg-[#003A70] text-[56px] font-bold">180K</h1>
                <p>Articles Read</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <h1 id="gradient-text" className=" text-[56px] font-bold">409</h1>
                <p>Registered Student Organizations</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <h1 id="gradient-text" className="text-[56px] font-bold">100+</h1>
                <p>Legislations drafted, passed,
                and implemented</p>
            </div>
        </div>
    );
}
