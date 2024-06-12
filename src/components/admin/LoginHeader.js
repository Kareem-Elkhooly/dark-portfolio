import React from "react";
import { useSelector } from "react-redux";
import { siteNameEnFont } from "../Variables";

const LoginHeader = () => {

    const enInfo = useSelector((state) => state.enInfo);

  const siteName = (textEdit)=> {
    return(
      <>
        {enInfo.loading || enInfo.error ? (
          <div className="bg-darkslategray w-[100px] h-8 maxmob:h-7 rounded-md animate-pulse"></div>
        ):(null)}
        {!enInfo.loading && enInfo.data.siteName ? (
          <div id="logo" className={`${textEdit} font-semibold inline-block whitespace-nowrap z-[1]`}>
            <a href={"/"} className="no-underline text-gainsboro-100">
              {enInfo.data.siteName}
            </a>
          </div>
        ):(null)}
      </>
    )
  }

  return (
    <header id="home" className={`${siteNameEnFont} h-[4rem] maxmob:h-[3.5rem] transition-all z-50 bg-darkslategray [backdrop-filter:blur(20px)] w-full text-gainsboro-100 flex fixed top-0`}>
      <div className="main-container flex justify-center items-center w-full ">
          {siteName("text-[2rem] maxmob:text-[1.7rem] smmob:text-[1.5rem] tracking-[-0.5px]")}
      </div>
    </header>
  );
};
export default LoginHeader;
