<<<<<<< HEAD
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { arFontFamily, enFontFamily } from "./Variables";

const ContactFeild = () => {
  
  return (
    <Link
      to="/contact"
      className={`${enFontFamily} no-underline align-middle text-darkslategray hover:text-gainsboro-200 smmob:self-center w-[14.5rem] h-[3.3rem] maxmob:h-[2.8rem] maxmob:w-[14rem] smmob:h-[2.6rem] smmob:w-[13rem] rounded-md flex items-center justify-center bg-gainsboro-200 hover:bg-darkslategray transition-all duration-200 ease-in font-semibold text-[1.125rem] maxmob:text-[1rem] smmob:text-[0.9rem]`}
    >
      {localStorage.getItem("language") === "arabic"
      ?(
        <>
          <FontAwesomeIcon icon={faEnvelope} className="ml-2 smmob:mb-[1px] text-[1.2rem] smmob:text-[1.1rem]" />
          <div className={`overflow-hidden text-ellipsis ${arFontFamily} text-[1.2rem] smmob:text-[1.1rem]`}>إبداء الطلب الآن</div>
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
=======
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { arFontFamily, enFontFamily } from "./Variables";

const ContactFeild = () => {
  
  return (
    <Link
      to="/contact"
      className={`${enFontFamily} no-underline align-middle text-darkslategray hover:text-gainsboro-200 smmob:self-center w-[14.5rem] h-[3.3rem] maxmob:h-[2.8rem] maxmob:w-[14rem] smmob:h-[2.6rem] smmob:w-[13rem] rounded-md flex items-center justify-center bg-gainsboro-200 hover:bg-darkslategray transition-all duration-200 ease-in font-semibold text-[1.125rem] maxmob:text-[1rem] smmob:text-[0.9rem]`}
    >
      {localStorage.getItem("language") === "arabic"
      ?(
        <>
          <FontAwesomeIcon icon={faEnvelope} className="ml-2 smmob:mb-[1px] text-[1.2rem] smmob:text-[1.1rem]" />
          <div className={`overflow-hidden text-ellipsis ${arFontFamily} text-[1.2rem] smmob:text-[1.1rem]`}>إبداء الطلب الآن</div>
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
>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
