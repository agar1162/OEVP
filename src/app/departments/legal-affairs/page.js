import Navbar from "../../../components/home/Navbar";
import Footer from "../../../components/home/Footer";
import Cover from "../components/Cover"

export default function departmentsPage() {
    return(
    <div>
        <Navbar />
        <Cover 
            name="Legal Affairs"
            link="legal.png"
            desc="Responsible for managing strategic communications and  public relations initiatives"
            mem="Chloe Choi (Intern), Hailey Jung (Intern), Matt Blake (Associate)"
        />
        <Footer />
    </div>

)}