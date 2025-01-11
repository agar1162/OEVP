import Navbar from "../components/home/Navbar";
import Cover from "../components/home/Cover";
import Partner from "../components/home/Partner";
import Subscription from "../components/home/Subscription";
import Footer from "../components/home/Footer";
import Wedo from "../components/home/Wedo"
import "./globals.css";
import OrgStats from "../components/home/OrgStats";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Cover />
      <Wedo />
      <OrgStats/>
      <Subscription />
      <Partner />
      <Footer />
    </div>
  );
}
