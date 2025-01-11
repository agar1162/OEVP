const times = "/nyt.png";
const wsj = "/wsj.png";
const def =
  "Get free access to a variety of New York Times articles, games, and podcasts if you are an undergraduate or graduate student.";

export default function Subscription() {
  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-r from-[#FFD67A] to-[#F9B315] p-10">
      {/* New York Times Section */}
      <div className="flex-1 flex justify-center items-center p-6">
        <div className="text-center max-w-sm">
          <img src={times} alt="New York Times" className="h-[46px] w-[36px] mx-auto mb-4" />
          <h1 className="text-[23px] font-bold mb-2">New York Times</h1>
          <p className="text-sm leading-relaxed mb-4">{def}</p>
          <a href="/access" className="p-5 px-10 bg-white rounded-lg text-[#A6A6A6] hover:text-berkeley">
            Register
          </a>
        </div>
      </div>

      {/* Wall Street Journal Section */}
      <div className="flex-1 flex justify-center items-center p-6">
        <div className="text-center max-w-sm">
          <img src={wsj} alt="Wall Street Journal" className="h-[36px] w-[62px] mx-auto mb-4" />
          <h1 className="text-[23px] font-bold mb-2">Wall Street Journal</h1>
          <p className="text-sm leading-relaxed mb-4">{def}</p>
          <a href="/access" className="p-5 px-10 bg-white rounded-lg text-[#A6A6A6] hover:text-berkeley">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
