export default function Cover() {
    return (
        <div
            className="h-screen bg-cover bg-center bg-no-repeat text-white text-center flex flex-col items-center"
            style={{
                backgroundImage: 
                    "linear-gradient(180deg, rgba(165, 165, 165, 0.53) 4%, rgba(0, 58, 112, 0.53) 78.5%), url('/slideshow/b1.png')",
            }}>
                <div className="pt-[10rem]">
                    <h1 className="text-[70px] font-bold w-[700px] h-[240px] mb-20">OFFICE OF THE EXECUTIVE VICE PRESIDENT</h1>
                    <p className="text-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
        </div>
    );
}
