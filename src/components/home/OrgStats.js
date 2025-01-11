export default function OrgStats() {
    return (
        <div className="flex flex-wrap transition-all duration-75 ease-in justify-center items-center gap-8 h-auto p-[5vh]">
            <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                <h1 id="gradient-text" className="text-[#003A70] text-[56px] font-bold">400+</h1>
                <p className="text-[20px] text-center mx-4">Registered Student Organizations receive funding & resources</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                <h1 id="gradient-text" className="text-[#003A70] text-[56px] font-bold">100+</h1>
                <p className="text-[20px] text-center mx-4">Legislations implemented in collaboration with ASUC Senate</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center max-w-[300px]">
                <h1 id="gradient-text" className="text-[#003A70] text-[56px] font-bold">180k</h1>
                <p className="text-[20px] text-center mx-4">New York Times articles read monthly by students</p>
            </div>
        </div>
    );
}
