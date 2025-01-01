export default function Stats() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-8 h-auto">
            <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                <h1 id="gradient-text" className="text-[#003A70] text-[56px] font-bold">180K</h1>
                <p className="text-center text-[20px]">Articles Read</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                <h1 id="gradient-text" className="text-[#003A70] text-[56px] font-bold">409</h1>
                <p className="text-center text-[20px]">Registered Student Organizations</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                <h1 id="gradient-text" className="text-[#003A70] text-[56px] font-bold">100+</h1>
                <p className="text-center text-[20px]">Legislations drafted, passed, and implemented</p>
            </div>
        </div>
    );
}
