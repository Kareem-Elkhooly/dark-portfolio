import React from "react";
import { useSelector } from "react-redux";
import ContactFeild from "../components/ContactFeild";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { arFontFamily, enFontFamily } from "./Variables";


function Landing(){
  const globalInfo = useSelector((state) => state.globalInfo);
  const enInfo = useSelector((state) => state.enInfo);
  const arInfo = useSelector((state) => state.arInfo);

  const textSide = (info,[hiP1,hiP2] , textEditMain, textEditH1, textEditP)=>{
    return (
      <>
        {info.loading || info.error ?(
          <div className="w-[50%] smmob:w-[90%] h-[500px] smmob:h-[350px] pt-7 pb-4 smmob:p-0 animate-pulse rounded-md flex flex-col items-start justify-start smmob:items-center gap-[3rem] maxmob:gap-[2.5rem] smmob:gap-[2rem]">
            <div className="flex flex-col items-start justify-start gap-[1.5rem] smmob:items-center smmob:justify-center smmob:gap-[1rem] w-full">
              <div className="flex flex-col items-start justify-start gap-[1.5rem] p-4 smmob:items-center smmob:justify-center smmob:gap-[1rem] bg-darkslategray w-full rounded-md">
                <div className="bg-darkslategray w-[50%] h-9 maxmob:h-7 rounded-md"></div>
                <div className="bg-darkslategray w-[80%] h-9 maxmob:h-7 rounded-md"></div>
                <div className="bg-darkslategray w-[80%] h-9 maxmob:h-7 rounded-md"></div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[1rem] p-4 smmob:items-center smmob:justify-center smmob:gap-[0.8rem] bg-darkslategray w-full rounded-md">
                <div className="bg-darkslategray w-full h-6 maxmob:h-4 rounded-md"></div>
                <div className="bg-darkslategray w-full h-6 maxmob:h-4 rounded-md"></div>
                <div className="bg-darkslategray w-full h-6 maxmob:h-4 rounded-md"></div>
              </div>
            </div>
            <div className="bg-darkslategray w-[40%] h-11 maxmob:h-8 rounded-md"></div>
          </div>
        ):(null)}
        {!info.loading && info.data.jop ? (
          <div className="flex flex-col items-start justify-start smmob:items-center smmob:justify-center gap-[3.5rem] maxmob:gap-[4rem] smmob:gap-[2rem]">
            <div className={`${textEditMain} flex flex-col justify-start items-start gap-[1.5rem] smmob:text-center smmob:items-center smmob:justify-center smmob:gap-[1rem]`}>
              <h1 className={`${textEditH1} m-0 tracking-[-0.5px] font-bold font-inherit z-[1]`}>
                <p className="m-0">{hiP1}</p>
                <p className="m-0">{hiP2} <span className="capitalize">{info.data.firstName + " " + info.data.lastName}</span></p>
                <p className="m-0">{info.data.jop}</p>
              </h1>
              <div className="text-[1.2rem] maxmob:text-[1.1rem] smmob:text-[1rem] leading-[2.1rem] maxmob:leading-[1.7rem] smmob:text-center font-medium text-darkgray-200 z-[1]">
                <p className={`${textEditP} m-0 max-w-[28rem] maxmob:max-w-[23rem] smmob:max-w-[19rem] text-pretty`}>
                  {info.data.jopDescription}
                </p>
              </div>
            </div>
            <ContactFeild />
          </div>
        ):(null)}
      </>
    )
  }

  const photoSide = (info, [trueText, falseText], textEdit, iconEdit)=>{
    return (
      <>
        {info.loading || info.error ?(
          <div className="bg-darkslategray w-[70%] h-6 rounded-md animate-pulse"></div>
        ):(null)}
        {!info.loading && info.data.availability === true ? (
          <p className={`${textEdit} flex m-0 items-center gap-2 text-gainsboro-200`}>
            <FontAwesomeIcon icon={faCircle} fade className="text-gainsboro-100 text-[0.6rem] smmob:text-[0.5rem] rounded-[50%]"/>
            {trueText}
          </p>
        ):(null)}
        {!info.loading && info.data.availability === false ? (
          <p className={`${textEdit} flex m-0 items-center gap-2 text-gainsboro-200`}>
            <FontAwesomeIcon icon={faCircleNotch} spin className={`${iconEdit} text-gainsboro-100 text-[0.7rem] smmob:text-[0.6rem] rounded-[50%]`}/>
            {falseText}
          </p>
        ):(null)}
      </>
    )
  }

  return (
    <section className={`${enFontFamily} main-container mt-[10rem] maxmob:mt-[7rem] smmob:mt-[5rem] w-full pb-[1.813rem] text-gainsboro-100`}>
      <div className="w-full flex flex-row justify-between smmob:flex-col-reverse gap-[1.5rem] smmob:items-center">
        {localStorage.getItem("language") === "arabic"
          ?(textSide(arInfo, ["تحياتي!", "أنـا"], `${arFontFamily} mt-4`, "text-[2.3rem] maxmob:text-[1.9rem] smmob:text-[1.7rem] leading-[3.5rem] maxmob:leading-[2.95rem] smmob:leading-[2.6rem]", "text-[1.1rem] maxmob:text-[1.02rem] leading-[2.1rem] maxmob:leading-[1.8rem]"))
          :(textSide(enInfo, ["Hi There", "I'am"], "", "text-[2.8rem] maxmob:text-[2rem] smmob:text-[1.8rem] leading-[3.7rem] maxmob:leading-[2.9rem] smmob:leading-[2.7rem]", "tracking-[-0.2px]"))
        }
        <div className="flex flex-col justify-center items-center gap-[2rem] maxmob:gap-[1rem]">
          <div className="w-[25rem] maxmob:w-[18rem] smmob:w-[16rem] h-[25rem] maxmob:h-[18rem] smmob:h-[16rem]">
            {globalInfo.loading || globalInfo.error ? (
              <div className="rounded-[50%] bg-darkslategray w-full h-full animate-pulse"></div>
            ):(null)}
            {!globalInfo.loading && globalInfo.data.personalPhoto ? (
              <img
                className="grayscale object-cover w-full h-full rounded-[50%]"
                loading="lazy"
                alt="avatar"
                src={globalInfo.data.personalPhoto.url}
              />
            ) :(null)}
          </div>
          {localStorage.getItem("language") === "arabic"
            ?(photoSide(globalInfo, ["متاح للعمل الآن", "يعمل على مشروع"], `${arFontFamily} text-[1rem]`, "mt-1"))
            :(photoSide(globalInfo, ["Avaliable for hire", "Working on a project"], "text-[1rem]"))
          }
        </div>
      </div>
    </section>
  );
};

export default Landing;
