'use client'
import Link from 'next/link'
import Navbar from '../../../components/home/Navbar'
import Footer from '../../../components/home/Footer'

export default function Departments2024Page() {
  const departmentData = [
    {
      slug: 'communications',
      name: 'Communications and Public Relations',
      description: 'Responsible for managing strategic communications and public relations initiatives.',
      members: 'Chloe Choi (Intern), Hailey Jung (Intern), Matt Blake (Associate), Not Featured: Shawntaya Jeanes (Director)',
      image: '/departments/comms.jpeg',
    },
    {
      slug: 'finance',
      name: 'Finance',
      description: 'Responsible for managing strategic communications and public relations initiatives.',
      members: 'Emily Melero (Director), Paola Moron (Associate)',
      image: '/departments/finance.jpg',
    },
    {
      slug: 'legal-affairs',
      name: 'Legislative Affairs',
      description: 'Responsible for managing strategic communications and public relations initiatives.',
      members: 'Crystal Kim (Intern), Dylan Lucks (Associate), Andrea Ugaz (Intern), Not Featured: Audrey Lee (Director)',
      image: '/departments/legal.jpeg',
    },
    {
      slug: 'commercial-activities',
      name: 'Commercial Activities',
      description: 'Responsible for managing strategic communications and public relations initiatives.',
      members: 'Vanessa Jensen (Intern), Hibba Adeel (Director), Jasmine Lucero Trujillo Mata (Associate), Mayra Aguilar Perez (Associate), Sanjna Shah (Associate)',
      image: '/departments/act.jpg',
    },
    {
      slug: 'deib',
      name: 'Diversity, Equity, Inclusion, and Belonging (DEIB)',
      description: 'Addresses the needs of the UC Berkeley campus.',
      members: 'Doah Obaid (Associate), Risha Jain (Intern), Rishi Reddy (Deputy Director), Josalyn Huynh (Intern), Not Featured: Joshua Agupogo (Director)',
      image: '/departments/deib.jpeg',
    },
    {
      slug: 'rso',
      name: 'Registered Student Organization (RSO) Support',
      description: 'Ensures that registered student organizations have access to all resources provided by the ASUC.',
      members: 'Kassandra Gomez (Deputy Director), Arisbeth Molina Ambriz (Director), Sumaya Owens (Associate), Melissa Lopez (Associate), Camillie Paucar (Intern), Heidi Andrade (Associate)',
      image: '/departments/rso.jpeg',
    },
    {
      slug: 'ssc',
      name: 'Senatorial and Committee Affairs',
      description: 'Encourages different Senatorial Offices, Commissions, and Committees.',
      members: 'Caroline Holm (Associate), Valerie Barajas (Associate), Aarja Singh (Interim Director), Esbeidy Campos (Deputy Director), Denise Barrios Lopez (Associate), Victoria Hernadez (Associate), Not featured: Maya Garica (Director)',
      image: '/departments/ssc.jpeg',
    },
    {
      slug: 'spaces',
      name: 'Spaces',
      description: 'Ensures that registered student organizations have access to all resources provided by the ASUC.',
      members: 'Ailyn Perez (Deputy Director), Chloe Kubedis (Associate), Max Wohlgezogen (Associate), Michael Moy (Director), Ariana Moran (Associate)',
      image: '/departments/spaces.jpg',
    },
    {
      slug: 'student-affairs',
      name: 'Student Affairs',
      description: 'Addresses the gaps in resources for students.',
      members: 'Jeremiah Lopez (Associate), Hailey Burnsed (Associate), Katiana Yazdani Bosdet (Director), Natalie Villalobos (Intern), Fiona Kim (Intern)',
      image: '/departments/affairs.jpg',
    },
    {
      slug: 'sswb',
      name: 'Student Safety, Success and Wellness',
      description: 'Addresses the needs of the UC Berkeley campus.',
      members: 'Shea Davison (Semester 1 Deputy Director), Clara Hinsdale (Associate), Paige Clark (Semester 1 Director), Angel Zamora (Intern), Madison Hua (Associate), Karen Yhim (Associate), Not featured: Aarja Singh (Director)',
      image: '/departments/safety.jpg',
    },
  ]

  return (
    <div>
      <Navbar />

      {/* Header */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 mt-10 mb-8 shadow-md border-t-[6px] border-[#003A70] bg-white">
        <div className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-[Georgia] font-bold leading-tight text-black">
            Office of the Executive Vice President <br /> Departments
          </h1>
        </div>
      </div>

      {/* Main layout */} 
      <main className="flex flex-col lg:flex-row max-w-[1300px] mx-auto px-6 md:px-10 gap-10">
        {/* Sidebar */}
        <aside className="w-full lg:w-[250px] flex-shrink-0">
          <div className="bg-[#003A70] text-white py-3 text-center text-[22px] font-[Georgia] border border-black">
            Departments By Year
          </div>
          <div className="bg-[#FCFCFC] border border-[#B2B2B2] shadow-md text-center py-4">
            <Link
              href={`/departments/2024`}
              className="text-black text-[22px] font-[Georgia]"
            >
              2024 - 2025
            </Link>
          </div>
        </aside>

        {/* Department Grid */}
        <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-5">
          {departmentData.map((dept) => (
            <Link
              key={dept.slug}
              href={`/departments/2024/${dept.slug}`}
              className="block bg-white shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all"
            >
              <img src={dept.image} alt={dept.name} className="w-full h-[208px] object-cover" />
              <div className="bg-white bg-opacity-80 border-t-[2px] border-[#003A70] px-4 py-5">
                <p className="text-[#003A70] text-[10px] font-bold font-[Georgia]">Department</p>
                <h3 className="text-[21px] font-[Georgia] leading-[24px]">{dept.name}</h3>
                <p className="text-[12px] font-[Georgia] leading-[14px] mt-1">{dept.description}</p>
                <p className="text-[8px] font-[Georgia] text-[#3D3D3D] leading-[10px] mt-2">
                  {dept.members}
                </p>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}
