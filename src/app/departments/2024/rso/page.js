import Navbar from "../../../../components/home/Navbar";
import Footer from "../../../../components/home/Footer";
import Cover from "../components/Cover"

export default function departmentsPage() {
    return(
    <div>
        <Navbar />
        <Cover 
            name="RSO Support"
            link="rso.jpeg"
            desc="Ensures that registered student organizations have access to all resources provided by the ASUC."
            mem="Chloe Choi (Intern), Hailey Jung (Intern), Matt Blake (Associate)"
        />

        <div className="p-[5vh] lg:mx-[10%] text-[20px]">
            <p>
                Established to ensure UCB students and their respective registered student organizations 
                have access to all resources provided by the ASUC, ranging from spaces to funding. 
                This department promotes communication and transparency among the hundreds of RSOs 
                at our university, specifically liaising with organizations that are not already in
                 direct contact with other elected officials of the ASUC. Members of this department 
                 work closely with ASUC Senators to ensure their communities and RSOs are able to 
                 receive information pertaining to their needs. 
            </p>
        </div>

        <div className="relative flex  items-center mx-[10%]">
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
            <span className="flex-shrink mx-4 text-[25px]">400+ RSO’s are currently ASUC Sponsored</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>

        <div className="mx-[10%] pb-10">
            <h3 className="font-bold">Benefits of ASUC Sponsorship:</h3>
            <ul className="list-decimal list-inside p-4">
                <li>RSOs can apply for ASUC funding, special grants, and scholarships. They can also apply for the Senate Contingency Fund, which is available throughout the academic year for RSOs that need more funding than expected, missed deadlines, or are newly formed</li>
                <li>RSOs can apply for office and storage space, and can use the ASUC Tax ID for fundraising. They can also apply for a fee waiver to use rooms in the MLK Student Union.</li>
                <li>RSOs receive an on-campus mailing address</li>
                <li>RSOs have access to event insurance coverage</li>
                <li>RSOs can advertise for free on the digital screens in the Student Union</li>
                <li>RSOs have access to resources like Student Organizational Services (SOS), which provides support with finance, technology, event services, and more</li>
                <li>RSOs can use CalLink to manage their finances and banking</li>
            </ul>
            <p className="pb-5">To apply for ASUC Sponsorship and/or funding, fill out the form on the ASUC Senate’s CalLink page. Form is only available during the fall and spring semesters when the Senate is in session.</p>

            <a className="text-berkeley" href="https://callink.berkeley.edu/submitter/form/step/1?guid=a70c2cc4-f157-4f74-9517-6f0c2311daad"><p>Click me to apply!</p></a>
        </div>

        <Footer />

    </div>

)}