export default function Footer(){
    
    return(
        <footer className="bg-[#003A70] h-[30rem] flex flex-row">
            <a className="basis-1/4 grid place-content-center"><img src="/ASUC-logo.png" height='200px' width='200px' alt="logo"/></a>
            <div className="basis-1/4 grid place-content-center" style={{width:"394.864px"}}>
                <h1 className="p-2" style={{color:"#F9B315", fontWeight: "bold", fontSize: '24px'}}>ASUC Newsletter</h1>
                <p className="p-2" id="geo">Want to stay updated? Get access to the latest free resources, contributions, and how your student government and support your endeavors. </p>
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
                        <h1 className="font-bold text-[19.5px]">Free Resources</h1>
                        <ul>
                            <li>Newspaper Subscriptions</li>
                            <li>Affinity Spaces</li>
                            <li>Equitable Resources</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold text-[19.5px]">Follow Us</h1>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                    <div> 
                        <h1 className="font-bold text-[19.5px]">Inquires</h1>
                        <ul>
                            <li>123-456-7890</li>
                            <li>Email</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold text-[19.5px]">Home</h1>
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