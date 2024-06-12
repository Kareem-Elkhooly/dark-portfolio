import React, { useState } from "react";
import { Link } from "react-router-dom";
import { enFontFamily } from "../Variables";;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSuitcase, faUserTie, faAddressCard, faTruckFast, faInbox, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faWpexplorer } from "@fortawesome/free-brands-svg-icons";

const DashSide = () => {

  const logOut = ()=>{
    sessionStorage.removeItem("adminId");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("admin");
    sessionStorage.setItem("login", false);
  }

  const link = (title, icon, to, textEdit)=>{
    return (
        <Link to={"/admin/dashboard/"+to} className={`${textEdit || "text-gainsboro-200"} flex gap-2 w-full items-center no-underline capitalize whitespace-nowrap hover:text-gainsboro-100 text-[1.1rem] maxmob:text-[1.3rem] transition-all duration-100 ease-in`}>
          <FontAwesomeIcon icon={icon} className="mb-[3.5px]" /><span className="maxmob:hidden">{title}</span>
        </Link>
    )
  }

  const sectionLink = (title, icon, to)=>{
    if(window.location.pathname === "/admin/dashboard/"+to){
      return(
        link(title, icon, to, "text-gainsboro-100")
      )
    }else {
      return(
        link(title, icon, to)
      )
    }
  }

  return (
    <section className={`${enFontFamily} w-[16rem] maxmob:w-fit pl-6 smmob:pl-[0.8rem] pt-[6rem] pb-5 pr-4 smmob:pr-[0.8rem] bg-gray overflow-auto h-[calc(100vh)] z-0`}>
      <div className="flex justify-between flex-col h-full items-start w-full ">
        <div className="flex flex-col items-start gap-4 maxmob:gap-6 w-full">
          {sectionLink("home", faHouse, "")}
          {sectionLink("informations", faAddressCard, "informations")}
          {sectionLink("projects", faSuitcase, "projects")}
          {sectionLink("quick projects", faTruckFast, "quickProjects")}
          {sectionLink("featured", faWpexplorer, "featured")}
          {sectionLink("admins", faUserTie, "admins")}
          {sectionLink("inbox", faInbox, "inbox")}
        </div>
        <div>
          <a href="/admin" onClick={logOut} className="text-[1rem] maxmob:text-[1.1rem] flex items-center justify-center gap-1 no-underline text-whitesmoke bg-red-600 font-medium hover:bg-red-500 transition-all duration-100 ease-in rounded-md px-3 maxmob:px-2 py-[4px]">
            <FontAwesomeIcon icon={faArrowRightFromBracket} /><span className="maxmob:hidden">Log out</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default DashSide;
