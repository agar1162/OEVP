import Stats from "./Stats";

export default function Partner() {
  return (
    <div className="mx-8 lg:mx-[5rem] pb-10">
      <main className="flex flex-col pt-10 text-[20px] gap-8">
        <div className="flex mx-[10%] items-center drop-shadow-lg">
          <h3 className="flex items-center w-full text-2xl lg:text-3xl font-extrabold text-center">
            <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
            <span className="px-4">Partner With Us</span>
            <span className="flex-grow h-[2px] bg-[#A6A6A6]"></span>
          </h3>
        </div>

        <div id="text" className="flex flex-col items-center gap-6">
          <p className="text-center">
            Are you a campus group, company, or organization that would like to partner with us?
          </p>
          <Stats />
          <button className="bg-[#003A70] text-white py-3 px-6 rounded-full text-sm lg:text-base font-bold hover:bg-[#002957] transition-colors">
            Become a Partner
          </button>
        </div>
      </main>
    </div>
  );
}
