export default function Cover() {
    return (
        <div
            className="h-screen bg-cover bg-center bg-no-repeat text-white text-center flex items-start justify-center"
            style={{
                backgroundImage:
                    "linear-gradient(180deg, rgba(165, 165, 165, 0.53) 4%, rgba(0, 58, 112, 0.53) 78.5%), url('/slideshow/b1.png')",
            }}
        >
            <div className="mt-[8rem] p-8 rounded-md max-w-[80%] md:max-w-[60%] lg:max-w-[50%]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wider mb-8">
                    OFFICE OF THE EXECUTIVE VICE PRESIDENT
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-wide">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                    enim in eros elementum tristique.
                </p>
            </div>
        </div>
    );
}
