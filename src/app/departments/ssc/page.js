import Navbar from "../../../components/home/Navbar";
import Footer from "../../../components/home/Footer";
import Cover from "../components/Cover"

export default function DepartmentsPage() {


    return(
        <div>
            <Navbar />
            <Cover
                name="Senatorial and Student affairs Committe"
                link="ssc.jpeg"
                desc="Encourages different Senatorial Offices, Commissions, and Committees."
                mem="Chloe Choi (Intern), Hailey Jung (Intern), Matt Blake (Associate)"
                />

            <div className="p-10 lg:mx-[10%] text-[20px] indent-10">
                <p>
                    The Legislative Affairs department provides the EVP along with other department 
                    leaders council on bylaws and policy initiatives by reviewing current and prospective 
                    ASUC governing documents. We also provide both the Chiefs of Staff and the EVP updates 
                    on bills that have entered the Senate and those that have passed, along with drafting 
                    and managing legislation ourselves for consideration by the Senate. 
                </p>
            </div>

            <div className="relative flex  items-center mx-[10%]">
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
            <span className="flex-shrink mx-4 text-[25px]">Ongoing Work</span>
            <div className="flex-grow border-t border-[#A6A6A6]"></div>
        </div>

        <div className="md:mx-[30%]  mx-[10%] py-5 place-items-center">
            <img src="../backgrounds/stu_aff.png" />
            <p className="text-[12px] md:text-lg"><i>To celebrate Hispanic Heritage Month, the Student Affairs
                 department organized a collaborative event with Cal Dining
                  and Berkeley Dining at CrossRoads Dining Hall for a night
                   full of delicious food, vibrant music, and fun performances.</i>
            </p>
        </div>

        <div className="items-center mx-[10%] pt-[5vh] text-center">
          <div className="relative flex items-center ">
              <div className="flex-grow border-t border-[#A6A6A6] "></div>
              <span className="flex-shrink mx-4 text-[25px] font-bold md:font-normal">Our Past Work As Seen on Daily Cal</span>
              <div className="flex-grow border-t border-[#A6A6A6]"></div>
          </div>
        </div>
        
        



        <div className="flex flex-wrap pb-10 md:flex-regular mx-[10%] py-5">
            <div className=" md:flex md:basis-1/2 hover:bg-gray-100">
              <img src="/departments/comm_act/c2.jpg" className="w-[35vh]"/>
              <div className=" mt-4 md:mt-0 p-3">
                <a href="https://www.dailycal.org/news/campus/asuc/asuc-contracts-provide-students-more-than-new-york-times-subscription/article_37319cec-a702-11ef-a1e8-2bba65ea0e83.html">
                  <h3 className="font-bold text-xl">ASUC focuses on endorsements and campus presence</h3>
                  <p className="text-[#5E5E5E] text-sm">Several ASUC resolutions this semester have focused on the ASUC’s reputation and relationship to the student body.</p>
                </a>
                
              </div>
            </div>


          <div className=" md:flex md:basis-1/2 hover:bg-gray-100">
            <img src="/departments/comm_act/c3.png" className="w-[35vh]"/>
            <div className=" mt-4 md:mt-0 p-3">
              <a href="https://www.dailycal.org/archives/asuc-announces-partnerships-with-the-new-york-times-wall-street-journal/article_269c3ab0-59ae-5fcd-9322-85bfad8ece51.html">
                <h3 className="font-bold text-xl">ASUC officials emphasize student support, supporting transparency </h3>
                <p className="text-[#5E5E5E] text-sm">Senators and executives have several overlapping platforms that demonstrate the major goals of the 2024-25 student government.</p>
              </a>
              </div>
          </div>
        </div>



        <Footer />
    </div>
    )
}