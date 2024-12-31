


const times = "/nyt.png"
const wsj = "/wsj.png"
const def = "Get free access to a variety of New York Times articles, games, and podcasts if you are an undergraduate or graduate student. "

export default function Subscription() {
    return(
      <div className="h-[319px] flex bg-gradient-to-r from-[#FFD67A] to-[#F9B315]">
            <div className="flex-1 flex">
                <div className="place-content-center  m-12">
                <img src={times} className="h-[46px] w-[36px]"/>
                <h1 className="text-[23px]">New York Times</h1>
                <p className="p-1">{def}</p>
                <input
                  type="text"
                  placeholder="Register"
                  className="border-2 border-black p-2"
                />
              </div>
            </div>
            <div className="flex-1 flex">
                <div className="place-content-center m-12">
                <img src={wsj} className="h-[36px] m-1 w-[62px]"/>
                <h1 className="text-[23px]">Wall Street Journal</h1>
                <p className="p-1">{def}</p>
                <input
                  type="text"
                  placeholder="Register"
                  className="border-2 border-black p-2"

                />
              </div>
            </div>
      </div> 
    );
}