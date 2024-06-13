import React from "react";
import { siteNameEnFont } from "../Variables";

const LoginHeader = () => {

  return (
    <header id="home" className={`${siteNameEnFont} h-[4rem] maxmob:h-[3.5rem] transition-all z-50 bg-darkslategray [backdrop-filter:blur(20px)] w-full text-gainsboro-100 flex fixed top-0`}>
      <div className="main-container flex justify-center items-center w-full ">
        <div id="logo" className={`text-[2rem] maxmob:text-[1.7rem] smmob:text-[1.5rem] tracking-[-0.5px] font-semibold text-gainsboro-100 inline-block whitespace-nowrap z-[1]`}>
          Dashboard
        </div>
      </div>
    </header>
  );
};
export default LoginHeader;
