<<<<<<< HEAD
import React from "react";
import { enFontFamily, siteNameEnFont } from "../Variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const DashHeader = () => {

  return (
    <>
    {sessionStorage.getItem("login")==="false"||!sessionStorage.getItem("token")||!sessionStorage.getItem("adminId")?(null):(
    <header id="home" className={`${enFontFamily} h-[2.5rem] transition-all z-50 bg-gray w-full text-gainsboro-100 flex fixed top-0`}>
      <div className="flex justify-between items-center smmob:px-[0.8rem] px-6 w-full ">
        <div className="flex items-center gap-2 font-light align-middle text-[1rem] cursor-pointer">
          <FontAwesomeIcon icon={faCircleUser} />
          <div>{sessionStorage.getItem("admin")}</div>
        </div>
        <div>
          <a href="/" target="_blank" className="text-[1rem] no-underline font-medium text-gainsboro-100 hover:text-gainsboro-200 transition-all duration-100 ease-in rounded-md">
            Look at the website
          </a>
        </div>
      </div>
    </header>
    )}
    </>
  );
};
export default DashHeader;
=======
import React from "react";
import { enFontFamily, siteNameEnFont } from "../Variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const DashHeader = () => {

  return (
    <>
    {sessionStorage.getItem("login")==="false"||!sessionStorage.getItem("token")||!sessionStorage.getItem("adminId")?(null):(
    <header id="home" className={`${enFontFamily} h-[2.5rem] transition-all z-50 bg-gray w-full text-gainsboro-100 flex fixed top-0`}>
      <div className="flex justify-between items-center smmob:px-[0.8rem] px-6 w-full ">
        <div className="flex items-center gap-2 font-light align-middle text-[1rem] cursor-pointer">
          <FontAwesomeIcon icon={faCircleUser} />
          <div>{sessionStorage.getItem("admin")}</div>
        </div>
        <div>
          <a href="/" target="_blank" className="text-[1rem] no-underline font-medium text-gainsboro-100 hover:text-gainsboro-200 transition-all duration-100 ease-in rounded-md">
            Look at the website
          </a>
        </div>
      </div>
    </header>
    )}
    </>
  );
};
export default DashHeader;
>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
