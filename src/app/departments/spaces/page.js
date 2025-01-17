import Navbar from "../../../components/home/Navbar";
import Footer from "../../../components/home/Footer";
import Cover from "../components/Cover"

export default function departmentsPage() {
    return(
    <div>
        <Navbar />
        <Cover 
            name="Spaces Support"
            link="spaces.png"
            desc="Ensures that registered student organizations have access to all resources provided by the ASUC."
            mem="Ailyn Perez (Deputy Director), Chloe Kubedis (Associate), Max Wohlgezogen (Associate), Michael Moy (Director), Ariana Moran (Associate)"
        />
        <Footer />
    </div>

)}