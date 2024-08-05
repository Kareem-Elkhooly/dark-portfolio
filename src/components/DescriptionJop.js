import React from "react";
import { useSelector } from "react-redux";
import { arFontFamily, enFontFamily } from "./Variables";

export default function DescriptionJop() {
  const enInfo = useSelector((state) => state.enInfo);
  const arInfo = useSelector((state) => state.arInfo); 

  const fainalLetter = (info, titleEdit, textEdit)=>{
    return (
      <>
        {info.loading || info.error ?(
          <div className="flex flex-col items-start justify-start gap-[1.5rem] p-4 smmob:gap-[1rem] bg-darkslategray w-full rounded-md animate-pulse">
            <div className="bg-darkslategray mb-6 w-[50%] h-8 maxmob:h-7 rounded-md"></div>
            <div className="bg-darkslategray w-[100%] h-8 maxmob:h-7 rounded-md"></div>
            <div className="bg-darkslategray w-[100%] h-8 maxmob:h-7 rounded-md"></div>
            <div className="bg-darkslategray w-[100%] h-8 maxmob:h-7 rounded-md"></div>
          </div>
        ):(null)}
        {!info.loading && info.data.fainalLetter ? (
          <div className="flex flex-col items-start justify-start gap-[0.75rem]">
            <p className={`${titleEdit} uppercase inline-block text-nowrap max-w-full text-ellipsis`}>
              {info.data.fainalLetterTitle}
            </p>
            <p className={`${textEdit} m-0 font-bold font-inherit text-gainsboro-100`}>
              {info.data.fainalLetter}
            </p>
          </div>
        ):(null)}
      </>
    )
  }

  return (
    <section id="descriptionJop" className={`${enFontFamily} main-container pt-[3rem] pb-[2rem] maxmob:pt[2rem] text-[1rem] text-gainsboro-200`}>
      {localStorage.getItem("language") === "arabic"
      ?(fainalLetter(arInfo, 
        `${arFontFamily} text-[1.2rem] smmob:text-[1.1rem] leading-[1rem] font-semibold`, 
        `${arFontFamily} text-[1.3rem] maxmob:text-[1.2rem] smmob:text-[1.1rem] leading-[3rem] maxmob:leading-[2.6rem] smmob:leading-[2.3rem]`))
      :(fainalLetter(enInfo, 
        "tracking-[1.5px] leading-[1rem]", 
        "text-[1.4rem] maxmob:text-[1.3rem] smmob:text-[1.2rem] leading-[2.95rem] maxmob:leading-[2.55rem] smmob:leading-[2.35rem] tracking-[-0.5px]"))
      }
    </section>
  );
}
