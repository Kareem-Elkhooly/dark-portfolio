import Header from "../components/Header";
import Landing from "../components/Landing";
import Featured from "../components/Featured";
import SmallProjects from "../components/SmallProjects";
import Projects from "../components/Projects";
import ContactComp from "../components/ContactComp";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] tracking-[normal]">
      <Header />
      <Landing />
      <Featured />
      <Projects />
      <SmallProjects />
      <ContactComp />
      <Footer />
    </div>
  );
};

export default Home;
