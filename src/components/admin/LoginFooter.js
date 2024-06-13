import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { arFontFamily, enFontFamily } from "../Variables";

const LoginFooter = () => {

  return (
    <footer dir="ltr" className={`${enFontFamily} w-full bg-darkslategray pb-[0.7rem] pt-[0.7rem] text-left text-[1rem] text-darkgray-200`}>
      <div className="main-container flex flex-row maxmob:flex-col-reverse items-center justify-center gap-[1rem] maxmob:flex-wrap">
        <div className="tracking-[-0.5px] text-center group leading-[1.5rem] smmob:text-[0.8rem] font-semibold">
          <span>Made With</span>
          <FontAwesomeIcon icon={faHeart} className="mx-[5px] group-hover:text-[#f05151] transition"/>
          Copyright
          {" "}<FontAwesomeIcon icon={faCopyright} className="text-[0.9rem]" />{" "}
          2024 Karim Elkhouly.
          <span> All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default LoginFooter;
