import Header from "../components/Header";
import ContactFeildsCom from "../components/ContactFeildsCom";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] tracking-[normal]">
      <Header />
      <ContactFeildsCom />
      <Footer />
    </div>
  );
};

export default Contact;
