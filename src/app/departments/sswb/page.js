import Navbar from "../../../components/home/Navbar";
import Footer from "../../../components/home/Footer";
import Cover from "../components/Cover"

export default function departmentsPage() {
    return(
    <div>
        <Navbar />
        <Cover 
            name="Student Safety, Wellnes & Success"
            link="safety.png"
            desc="Addresses the needs of the UC Berkeley campus."
            mem="Shea Davison (Deputy Director), Clara Hinsdale (Associate), Paige Clark (Director), Angel Zamora (Intern), Madison Hua (Associate), Karen Yhim (Associate)"
        />
        <Footer />
    </div>

)}