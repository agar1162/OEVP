export default function LineHeader({ title }) {
    return(
        <header className="pt-[64px] flex flex-col items-center">
                <div className="flex items-center space-x-4">
                    {/* Left Line */}
                    <svg
                        width="331"
                        height="1"
                        viewBox="0 0 331 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line x1="331" y1="0.5" y2="0.5" stroke="#A6A6A6" />
                    </svg>

                    {/* Title */}
                    <h2 className="text-[35px]">{title}</h2>

                    {/* Right Line */}
                    <svg
                        width="331"
                        height="1"
                        viewBox="0 0 331 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line x1="331" y1="0.5" y2="0.5" stroke="#A6A6A6" />
                    </svg>
                </div>
            </header>
    )
}