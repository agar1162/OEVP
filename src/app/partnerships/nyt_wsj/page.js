import Navbar from "../../../components/home/Navbar";
import Footer from "../../../components/home/Footer";

export default function resourcesPage() {
    const times = "/nyt.png";
    const wsj = "/wsj.png";
    const def = "Get free access to a variety of New York Times articles, games, and podcasts if you are an undergraduate or graduate student.";

    return (
        <div>
            <Navbar />
            <div 
                id="FRONTPAGE"
                style={{
                    backgroundImage:
                        "linear-gradient(180deg, rgba(165, 165, 165, 0.53) 4%, rgba(0, 58, 112, 0.53) 78.5%), url('/home/NYT.jpg')",
                }} className="h-fit bg-cover p-4 mx:p-10 bg-center bg-no-repeat">

                <div className="bg-[#FBFBFBCC] m-10 p-5 pb-20">
                    <h1 className="font-bold lg:text-[35px] pt-5">New York Times & Wall Street Journal Access</h1>
                    <ul className="list-disc list-inside p-5">
                        <li>Learn how to sign up for the <u>New York Times</u></li>
                        <li>Learn how to sign up for the <u>Wall Street Journal</u></li>
                        <li>Understand who is eligible for these subscriptions</li>
                    </ul>
                    <p className="px-5 text-[#3A3A3A]">Berkeley students have free & unlimited access to the online published content of these internationally known publications till the date of their graduation.</p>

                </div>
            </div>

            {/* <div 
                id="NYT_WALL_STREET_JOURNAL"
                className="flex flex-col lg:flex-row bg-gradient-to-r from-[#FFD67A] to-[#F9B315] py-[5vh]">
                
                <div className="flex-1 flex justify-center">
                    <div className="mx-[10vw]">
                    <img src={times} alt="New York Times" className="h-[54px] w-[54px] mb-4" />
                    <h1 className="text-[23px] mb-2">New York Times</h1>
                    <p className="text-md leading-relaxed mb-4">{def}</p>
                    <a href="https://www.nytimes.com/activate-access/edu-access" className="p-3 px-10 bg-white rounded-sm hover:text-[#A6A6A6] hover:text-berkeley">
                        Register
                    </a>
                    </div>
                </div>

                
                <div className="flex-1 flex justify-center pt-10 md:pt-0">
                    <div className="mx-[10vw]">
                    <img src={wsj} alt="Wall Street Journal" className="h-[36px] w-[62px] mb-4" />
                    <h1 className="text-[23px] mb-2">Wall Street Journal</h1>
                    <p className="text-md leading-relaxed mb-4">Get free access to a variety of WSJ articles, career advice, and job prep resources if you are an undergraduate student, graduate student, or faculty/staff.</p>
                    <a href="https://WSJ.com/ASUCBerkeley"  className="p-3 px-10 bg-white rounded-sm hover:text-[#A6A6A6] hover:text-berkeley">
                        Register
                    </a>
                    </div>
                </div>
            </div> */}
            <div id="NYT_WALL_STREET_JOURNAL" className="flex flex-col lg:flex-row bg-gradient-to-r from-[#FFD67A] to-[#F9B315] py-[5vh]">
                {/* New York Times Section */}
                <div className="flex-1 flex justify-center items-center">
                    <div className="mx-[5vw] flex flex-col items-start">
                    <img src={times} alt="New York Times" className="h-[50px] w-[50px] mb-4" />
                    <h1 className="text-[23px] mb-2">New York Times</h1>
                    <p className="text-md leading-relaxed mb-6">
                        Get free access to a variety of New York Times articles, games, and podcasts
                        if you are an undergraduate or graduate student.
                    </p>
                    <div className="w-full">
                        <a
                        href="https://www.nytimes.com/activate-access/edu-access"
                        className="block w-[140px] text-center p-2 bg-white rounded-md hover:text-[#A6A6A6] hover:text-berkeley"
                        >
                        Register
                        </a>
                    </div>
                    </div>
                </div>

                {/* Wall Street Journal Section */}
                <div className="flex-1 flex justify-center items-center">
                    <div className="mx-[5vw] flex flex-col items-start">
                    <img src={wsj} alt="Wall Street Journal" className="h-[36px] w-[62px] mb-4" />
                    <h1 className="text-[23px] mb-2">Wall Street Journal</h1>
                    <p className="text-md leading-relaxed mb-6">
                        Get free access to a variety of WSJ articles, career advice, and job prep resources
                        if you are an undergraduate student, graduate student, or faculty/staff.
                    </p>
                    <div className="w-full">
                        <a
                        href="https://WSJ.com/ASUCBerkeley"
                        className="block w-[140px] text-center p-2 bg-white rounded-md hover:text-[#A6A6A6] hover:text-berkeley"
                        >
                        Register
                        </a>
                    </div>
                    </div>
                </div>
            </div>




            <div className="lg:px-[20vh]">
                <div className="p-6 pb-0 my-[5vh]" >
                    <h1 className="font-bold pb-4 text-[25px]">How to Register for the <u>New York Times</u></h1>
                    <h3 className="font-bold">Steps to set up your subscription:</h3>
                    <ul className="list-decimal list-inside p-5 pt-0">
                        <li>Visit the Registration Site Go to <a className="text-blue-500" href="https://www.nytimes.com/activate-access/edu-access">www.accessnyt.com*</a>.</li>
                        <li>Select Your University From the drop-down menu, select University of California, Berkeley.</li>
                        <li>Create an Account Enter your @berkeley.edu email address and create a password to set up your account.</li>
                        <li>Verify Your Email You will receive a confirmation email to verify that your Berkeley email is active. If you don't see this email within a few minutes, check your spam filter.</li>
                        <li>Complete Registration Finish the registration process, and you'll have access to The New York Times online content. You’ll also be notified of the expiration date of your pass, and you can set a reminder to renew it when it expires.</li>
                    </ul>
                    <p className="text-[#3B3B3B]">*If you have a personally paid subscription with the NYT, you can cancel it by calling NYT Customer Care (800) 591-9233 and then activate your free Berkely account. For assistance with your ASUC NYTimes.com access, email edu@nytimes.com</p>
                    <hr className="mr-[60vw] left h-1 mx-auto mx-0 my-6 bg-berkeley border-0 rounded"/>

                </div>

                <div className="p-6 pt-0 my-[10vh]">
                    <h1 className="font-bold pb-4 text-[25px]">How to Register for the <u>Wall Street Journal</u></h1>
                    <h3 className="font-bold">Steps to set up your subscription:</h3>
                    <ul className="list-decimal list-inside p-5 pt-0">
                        <li>Visit the Registration Site Go to <a className="text-blue-500" href="https://WSJ.com/ASUCBerkeley">WSJ.com/ASUCBerkeley</a>*.</li>
                        <li>Create an Account Enter your @berkeley.edu email address and create a password to register.</li>
                        <li>Complete Your Profile Indicate whether you are a student or faculty member.</li>
                        <li>Verify Your Account You will not be required to confirm your email address through a verification process. However, you will need to check your account’s access settings to ensure that your subscription is activated correctly.</li>
                        <li>Access Your Subscription After registering, you will have full access to The Wall Street Journal's online content. As a subscriber, you'll also be able to enjoy benefits such as the WSJ+ membership program and curated content specifically for students.</li>
                        <li>Set Up a Calendar Reminder You will be notified when your pass is about to expire, and you can set a reminder to renew your subscription.</li>
                    </ul>
                    <p className="text-[#3B3B3B]">*If you have a personally paid membership with The Wall Street Journal, please call 1-800-JOURNAL to cancel your membership and activate your Free Berkeley account after previous membership is cancelled. For assistance with your ASUC WSJ membership, call: 1-800-568-7625</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}