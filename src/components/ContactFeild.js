import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { arFontFamily, enFontFamily } from "./Variables";

const ContactFeild = () => {
  
  return (
    <Link
      to="/contact"
      className={`${enFontFamily} no-underline align-middle text-darkslategray hover:text-gainsboro-200 px-8 py-4 smmob:self-center rounded-md flex items-center justify-center bg-gainsboro-200 hover:bg-darkslategray transition-all duration-200 ease-in font-semibold text-[1rem] maxmob:text-[1rem] smmob:text-[0.9rem] leading-none`}
    >
      {localStorage.getItem("language") === "arabic"
      ?(
        <>
          <FontAwesomeIcon icon={faEnvelope} className="ml-2 smmob:mb-[1px] text-[1.1rem] smmob:text-[1rem]" />
          <div className={`overflow-hidden text-ellipsis ${arFontFamily} text-[1.1rem] smmob:text-[1rem]`}>إبداء الطلب الآن</div>
        </>)
      :(
        <>
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          <div className="overflow-hidden text-ellipsis">Message Me</div>
        </>
      )}
    </Link>
  );
};

export default ContactFeild;
