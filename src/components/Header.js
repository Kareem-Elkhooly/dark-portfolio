import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BergurIcon from "../components/BergurIcon";
import LanguagesChange from "../components/LanguagesChange";
import { arFontFamily, enFontFamily } from "./Variables";

const Header = () => {

  const projects = useSelector((state) => state.projects);
  const globalInfo = useSelector((state) => state.globalInfo);
  const enInfo = useSelector((state) => state.enInfo);
  const arInfo = useSelector((state) => state.arInfo); 

  // get element by id function to easly use it in the following conditions
  const getById = (ele, getTop, topNum)=>{
    if(getTop === true){
      if(topNum){
        return document.getElementById(ele).getBoundingClientRect().top <= topNum;
      }else {
        return document.getElementById(ele).getBoundingClientRect().top <= 80;
      }
    }else{
      return document.getElementById(ele);
    }
  }
  window.onscroll = function(){
    // Show and hide the header && (up and down btns) in Work Page
    if(location.pathname === "/work"){
      // show and hide the header
      let currentScroll = document.documentElement.scrollTop;
      if (currentScroll > 100){
        getById("home",false).style.top = '-64px';
      }else {
        getById("home",false).style.top = '0';
      }
      if(!projects.loading && projects.data.length > 0){
        // show and hide the (up and down btns)----------------------------------
        if(getById(projects.data[0]._id,true)){
          getById("slideBtnsWork").style.display = "flex"
        }else {
          getById("slideBtnsWork").style.display = "none"
        }
        // Change the btns events when the  project is changed------------------
        for (let i = 0; i < projects.data.length; i++) {
          if(getById(projects.data[i]._id,true)){
            getById("slideBtnWorkDown").addEventListener("click",()=>{
              if(i !== projects.data.length-1){
                getById(projects.data[i+1]._id).scrollIntoView()
              }else {
                getById("descriptionJop").scrollIntoView()
              }
            })
            getById("slideBtnWorkUp").addEventListener("click",()=>{
              if(i === 0){
                window.scrollTo(0,0)
              }else if (i === projects.data.length-1 && getById(projects.data[i]._id,true, -100)) {
                getById(projects.data[i]._id).scrollIntoView()
              }else {
                getById(projects.data[i-1]._id).scrollIntoView()
              }
            })
          } 
        }
      }
      // End of the Work Page
      if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight || getById("descriptionJop",true)) {
        getById("slideBtnsWork").style.bottom = "5rem"
        getById("slideBtnWorkDown").style.display = "none"
      } else {
        getById("slideBtnsWork").style.bottom = "2rem"
        getById("slideBtnWorkDown").style.display = "block"
      }
    }
  }

  const siteName = (info)=> {
    return(
      <>
        {info.loading || info.error ? (
          <div className="bg-darkslategray w-[100px] h-8 maxmob:h-7 rounded-md animate-pulse"></div>
        ):(null)}
        {!info.loading && info.data.siteName ? (
          <div id="logo" className={`text-[2.1rem] maxmob:text-[1.85rem] smmob:text-[1.6rem] font-semibold inline-block whitespace-nowrap z-[1]`}>
            <Link to={"/"} className="siteName no-underline text-gainsboro-100">
              {info.data.siteName}
            </Link>
          </div>
        ):(null)}
      </>
    )
  }

  const pageTitle = (title, link, textEdit)=>{
    return(
      <li className="z-[1] hidden md:inline-block">
        <Link to={"/"+link} className={`${textEdit} no-underline text-gainsboro-100 hover:text-zinc-400`}>
          {title}
        </Link>
      </li>
    )
  }

  const resumeLink = (info, title, textEdit)=> {
    return(
      <>
        {info.loading || info.error ? (
          <div className="bg-darkslategray w-[70px] h-8 maxmob:h-7 rounded-md animate-pulse"></div>
        ):(null)}
        {!info.loading && info.data.resumeLink ?(
          <a href={info.data.resumeLink} className={`${textEdit} no-underline flex items-center text-darkslategray bg-gainsboro-200 hover:bg-darkslategray hover:text-gainsboro-200 font-semibold rounded px-5 py-1 transition-all duration-100 ease-in`}>
            {title}
          </a>
        ):(null)}
      </>
    )
  }

  return (
    <header id="home" dir="ltr" className={`h-[4rem] maxmob:h-[3.5rem] transition-all z-50 bg-darkslategray [backdrop-filter:blur(20px)] w-full text-gainsboro-100 flex fixed top-0`}>
      <div className="main-container flex justify-between items-center w-full">
        {siteName(globalInfo)}
        <ul className={`${enFontFamily} m-0 list-none flex flex-row items-center justify-between gap-[1.25rem] text-left text-[1.125rem]`}>
          <li className="tracking-[-0.5px] inline-block z-[1] md:hidden">
            <BergurIcon />
          </li>
          <li className="z-[1] hidden md:inline-block">
            <LanguagesChange />
          </li>
          {localStorage.getItem("language") === "arabic"
            ?(
              <>
                {pageTitle("الرئيسية", "", `${arFontFamily} text-[1.25rem]`)}
                {pageTitle("المشاريع", "work", `${arFontFamily} text-[1.25rem]`)}
                {pageTitle("الإتصال", "contact", `${arFontFamily} text-[1.25rem]`)}
              </>)
            :(
              <>
                {pageTitle("Home", "", "tracking-[-0.5px]")}
                {pageTitle("Work", "work", 'tracking-[-0.5px]')}
                {pageTitle("Contact", "contact", 'tracking-[-0.5px]')}
              </>)
          }
          <li className="z-[1] hidden md:inline-block h-fit ">
            {localStorage.getItem("language") === "arabic"
              ?(resumeLink(arInfo, "CV", `text-[1.2rem] ${arFontFamily}`))
              :resumeLink(enInfo, "Resume")
            }
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
