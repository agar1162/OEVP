export default function Footer(){
    
    return(
        <footer className="bg-[#003A70] sticky h-[30rem] md:h-[20rem] flex flex-col md:flex-row text-[9px]">
            <div className="basis-1/4 hidden md:flex items-center justify-center">
                <img
                src="/ASUC-logo.png"
                alt="ASUC Logo"
                className="h-[200px] w-[200px] object-contain"
                />
            </div >
            <div className="basis-1/4 grid p-5 lg:block place-content-center w-[400px]" >
                <h1 className="p-2 text-[24px] font-bold text-[#F9B315]">ASUC Newsletter</h1>
                <p className="pl-2 pb- 2text-[14px]" id="geo">Want to stay updated? Get access to the latest free resources, contributions, and how your student government and support your endeavors. </p>
                <div className="p-2 py-3 flex text-[14px]">
                    <a href="https://asuc.substack.com/subscribe" className="rounded-md p-3 w-fit bg-white hover:bg-gray-200">
                        Register to the ASUC Newsletter
                    </a>
                
                </div>
            </div>
            <div id="blocks"className="basis-2/4 grid place-content-center">
                <div className="grid gap-4 grid-cols-2">
                    <div>
                        <h1 className="font-bold text-lg">Free Resources</h1>
                        <ul>
                            <li>Newspaper Subscriptions</li>
                            <li>Affinity Spaces</li>
                            <li>Equitable Resources</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg">Follow Us</h1>
                        <ul className="flex gap-2 pt-2">
                            <li><a href="https://www.instagram.com/ucbvicepresident/"><img src="./insta.png" className="w-9 p-1"/></a></li>
                            <li><a href="https://www.facebook.com/theASUC/"><img src="./face.png" className="w-9 "/></a></li>
                        </ul>
                    </div>
                    <div> 
                        <h1 className="font-bold text-lg">Inquires</h1>
                        <ul>
                            <li>(510) 664-7976</li>
                            <li>evp@asuc.org</li>
                            <li><a href="" className="font-bold underline">Have a Request?</a></li>

                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg"><a href="">Home</a></h1>
                        <ul>
                            <li><a>About Us</a></li>
                            <li><a href="/departments/communications.html">Departments</a></li>
                            <li><a className="underline font-bold" href="https://berkeley.zoom.us/j/6685684771?_x_zm_rtaid=MOwFCASdTuqDG7Yo6PLAEw.1736649189758.7b91ccafcde961b05952e5e32cf3d571&_x_zm_rhtaid=781#success">Link to Senate Meetings</a></li>
                        </ul>
                    </div>
                </div>
               <div className="h-[10px] w-[6rem] pt-2"> <a href="https://www.ocf.berkeley.edu/"><img src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"/></a></div>
            </div>
        </footer>
    );
}