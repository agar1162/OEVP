import Navbar from "../../../components/home/Navbar";
import Footer from "../../../components/home/Footer";
import Cover from "../components/Cover"

export default function departmentsPage() {
    return(
    <div>
        <Navbar />
        <Cover 
            name="Student Affairs"
            link="affair.png"
            desc="Addresses the gaps in resources for students."
            mem="Chloe Choi (Intern), Hailey Jung (Intern), Matt Blake (Associate)"
        />

        <div className="p-[5vh] lg:mx-[10%] text-[20px]">
            <p>
            This department leads the efforts of various long-term projects pertaining 
            to student programs and specific funds within the ASUC in order to address 
            the gaps in resources for students. These projects include the UC Alianza 
            Mexico Trip, Decal Board, Multicultural Fair, Student Technology Fund, and 
            Weekly Email Updates. The members of this department work with each other to 
            successfully carry out the projects and create new projects for the student 
            body as well.
            </p>
        </div>

        <div className="relative flex  items-center mx-[10%]">
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
            <span className="flex-shrink mx-4 text-[25px]">Ongoing Work</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>

        <div className="md:mx-[25%]  mx-[10%] py-5 place-items-center">
            <img src="../backgrounds/stu_aff.png"/>
            <p className="text-[12px] md:text-lg"><i>To celebrate Hispanic Heritage Month, the Student Affairs
                 department organized a collaborative event with Cal Dining
                  and Berkeley Dining at CrossRoads Dining Hall for a night
                   full of delicious food, vibrant music, and fun performances.</i></p>
        </div>

        <Footer />
    </div>

)}