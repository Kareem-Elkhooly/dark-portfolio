import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faDribbble, faLinkedinIn, faXTwitter, faBehance, faFigma, faGithub, faInstagram, faFacebookF, faPinterestP, faSketch
} from "@fortawesome/free-brands-svg-icons";
import { arFontFamily, enFontFamily } from "./Variables";
import { Link } from "react-router-dom";

const Footer = () => {
  const globalInfo = useSelector((state) => state.globalInfo);
  const accounts = [
  ["dribbble", faDribbble], ["linkedin", faLinkedinIn], ["x", faXTwitter], 
  ["behance", faBehance], ["figma", faFigma], ["github", faGithub], ["instagram", faInstagram], 
  ["facebook", faFacebookF], ["pinterest", faPinterestP], ["sketch", faSketch]
  ];

  return (
    <footer dir="ltr" className={`${enFontFamily} w-full bg-darkslategray pb-[0.7rem] pt-[0.7rem] text-left text-[1rem] text-darkgray-200`}>
      <div className="main-container flex flex-row maxmob:flex-col-reverse items-center justify-between gap-[1rem] maxmob:flex-wrap">
          {localStorage.getItem("language") === "arabic"?(
            <div dir="rtl" className={`${arFontFamily} text-center leading-[1.6rem] smmob:text-[0.9rem] font-semibold`}>
              <span>طور بواسطة كريم الخولي</span>
              <FontAwesomeIcon icon={faHeart} className="mx-[5px] text-[#f05151] transition"/>
              حقوق الطبع والنشر
              {" "}<FontAwesomeIcon icon={faCopyright} className="text-[0.9rem]" />{" "}
              2024 |   
              <span> كل الحقوق محفوظة.</span>
            </div>
          ):(
            <div className="tracking-[-0.5px] text-center leading-[1.5rem] smmob:text-[1rem] font-semibold">
              <Link to={"/admin"} className="no-underline text-darkgray-200">Developed by Karim Elkhouly</Link>
              <FontAwesomeIcon icon={faHeart} className="mx-[5px] text-[#f05151] transition"/>
              Copyright
              {" "}<FontAwesomeIcon icon={faCopyright} className="text-[0.9rem]" />{" "}
              2024 |
              <span> All rights reserved.</span>
            </div>
          )}
        <div className="flex flex-col items-center justify-start pt-[0.063rem]  ">
          {globalInfo.loading || globalInfo.error ? (
            <div className="flex flex-row items-center justify-between gap-[1.25rem] p-2 bg-darkslategray animate-pulse">
              <div className="bg-darkslategray rounded-md h-3 w-8"></div>
              <div className="bg-darkslategray rounded-md h-3 w-8"></div>
              <div className="bg-darkslategray rounded-md h-3 w-8"></div>
              <div className="bg-darkslategray rounded-md h-3 w-8"></div>
            </div>
          ):(null)}
          {!globalInfo.loading && globalInfo.data.accounts ?(
            <div className="flex flex-row items-center justify-between gap-[1.25rem] font-semibold text-[1.25rem]">
              {accounts.map((account)=>{
                if(globalInfo.data.accounts[account[0]]) {
                  return (
                    <a href={globalInfo.data.accounts[account[0]]} target="_blank" key={globalInfo.data.accounts[account[0]]}>
                      <FontAwesomeIcon icon={account[1]} className="cursor-pointer text-darkgray-200 hover:text-zinc-300"/>
                    </a>
                  )
                }
              })}
            </div>
          ):(null)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
