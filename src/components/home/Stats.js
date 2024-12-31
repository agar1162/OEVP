export default function Stats() {
    return (
        <div className="flex h-[319px]">
            <div className="flex-1 flex flex-col items-center justify-center">
                <h1 id="gradient-text" className="bg-[#003A70] text-[56px] font-bold">4000+</h1>
                <p>Clubs Sponsored</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <h1 id="gradient-text" className=" text-[56px] font-bold">$70,000</h1>
                <p>Spent on DEI & Equity Initiatives</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <h1 id="gradient-text" className="text-[56px] font-bold">$1 mill</h1>
                <p>On Resources for Students</p>
            </div>
        </div>
    );
}
