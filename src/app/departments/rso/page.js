import Navbar from "../../../components/home/Navbar";
import Footer from "../../../components/home/Footer";
import Cover from "../components/Cover"

export default function departmentsPage() {
    return(
    <div>
        <Navbar />
        <Cover 
            name="RSO Support"
            link="rso.png"
            desc="Ensures that registered student organizations have access to all resources provided by the ASUC."
            mem="Chloe Choi (Intern), Hailey Jung (Intern), Matt Blake (Associate)"
        />
        <Footer />
    </div>

)}