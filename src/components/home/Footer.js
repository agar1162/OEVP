export default function Footer(){
    
    return(
        <footer className="bg-[#003A70] h-[30rem] flex flex-col md:flex-row text-[9px]">
        <div className="basis-1/4 hidden lg:flex items-center justify-center">
                <img
                src="/ASUC-logo.png"
                alt="ASUC Logo"
                className="h-[200px] w-[200px] object-contain"
        />
      </div>
            <div className="basis-1/4 grid p-5 place-content-center w-[400px]" >
                <h1 className="p-2 text-[24px] font-bold text-[#F9B315]">ASUC Newsletter</h1>
                <p className="p-2 lg:text-[12px]" id="geo">Want to stay updated? Get access to the latest free resources, contributions, and how your student government and support your endeavors. </p>
                <div className="p-2 py-3">
                <input 
                    placeholder="Enter Email"
                    type="text"
                    className="rounded-md p-3 w-fit"

                />
                </div>
            </div>
            <div id="blocks"className="basis-2/4 grid place-content-center">
                <div className="grid gap-4 grid-cols-2">
                    <div>
                        <h1 className="font-bold">Free Resources</h1>
                        <ul>
                            <li>Newspaper Subscriptions</li>
                            <li>Affinity Spaces</li>
                            <li>Equitable Resources</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold">Follow Us</h1>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                    <div> 
                        <h1 className="font-bold">Inquires</h1>
                        <ul>
                            <li>123-456-7890</li>
                            <li>Email</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold">Home</h1>
                        <ul>
                            <li>About Us</li>
                            <li>Committes</li>
                            <li>Equitable Resources</li>
                        </ul>
                    </div>
                </div>
               <div className="h-[10px] w-[6rem]"> <a href="https://www.ocf.berkeley.edu/"><img src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"/></a></div>
            </div>
        </footer>
    );
}