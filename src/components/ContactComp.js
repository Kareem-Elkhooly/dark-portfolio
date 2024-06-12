import React from "react";
import { useSelector } from "react-redux";
import ContactFeild from "./ContactFeild";
import { arFontFamily, enFontFamily } from "./Variables";

const ContactComp = () => {
  const enInfo = useSelector((state) => state.enInfo);
  const arInfo = useSelector((state) => state.arInfo); 

  const description = (info, textEdit)=>{
    return (
      <>
        {info.loading || info.error ? (
          <div className="flex flex-col items-center justify-center gap-[1.5rem] p-4 smmob:gap-[1rem] bg-darkslategray max-w-[650px] w-[60%] maxmob:w-[70%] smmob:w-ful rounded-md animate-pulse">
            <div className="bg-darkslategray w-[50%] h-9 maxmob:h-7 rounded-md"></div>
            <div className="bg-darkslategray w-[80%] h-9 maxmob:h-7 rounded-md"></div>
            <div className="bg-darkslategray w-[80%] h-9 maxmob:h-7 rounded-md"></div>
          </div>
        ):(null)}
        {!info.loading && info.data.contactDescription ? (
          <div className="flex flex-col items-center max-w-[650px] w-[60%] maxmob:w-[70%] smmob:w-full justify-center gap-[1.5rem] leading-[2.6rem] smmob:leading-[2.25rem] text-darkgray-200 maxmob:gap-[1.5rem_3rem]">
            <p className={`${textEdit} m-0 font-medium mb-4`}>
              {info.data.contactDescription}
            </p>
            <ContactFeild />
          </div>
        ):(null)}
      </>
    )
  }

  return (
    <section id="contactMe" className={`${enFontFamily} main-container pb-[5rem] mb-8 text-center text-[2rem] text-gainsboro-100`}>
      <div className="flex flex-col items-center justify-center gap-[1.5rem]">
        {localStorage.getItem("language") === "arabic"
        ?(
          <p className={`${arFontFamily} m-0 text-[1.7rem] maxmob:text-[1.6rem] font-medium smmob:text-[1.3rem] inline-block"`}>
            تواصل معي
          </p>
        ):(
          <p className="m-0 text-inherit maxmob:text-[1.8rem] smmob:text-[1.5rem] tracking-[-0.5px] font-bold font-inherit inline-block">
            Contact Me
          </p>
        )}
        {localStorage.getItem("language") === "arabic"
          ?(description(arInfo, `${arFontFamily} text-[1.25rem] smmob:text-[1.1rem]`))
          :(description(enInfo, "tracking-[-0.5px] text-[1.4rem] maxmob:text-[1.3rem] smmob:text-[1.2rem]"))
        }
      </div>
    </section>
  );
};

export default ContactComp;
