import React from "react";
import { useSelector } from "react-redux";
import CountUp from 'react-countup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { arFontFamily, enFontFamily } from "./Variables";

const Informations = () => {
  const globalInfo = useSelector((state) => state.globalInfo);
  const enInfo = useSelector((state) => state.enInfo);
  const arInfo = useSelector((state) => state.arInfo);
  const projects = useSelector((state) => state.projects);

  const statisticsTitles = (info, titleP1, textEditP1 , titleP2, textEditP2)=>{
  return (
    <>
      {globalInfo.loading || info.loading || globalInfo.error || info.error ?(
        <div className="flex flex-col items-start justify-start gap-[1.5rem] smmob:gap-[1rem] w-full rounded-md animate-pulse">
          <div className="bg-darkslategray mb-6 w-[50%] h-5 maxmob:h-4 rounded-md"></div>
          <div className="bg-darkslategray w-[90%] h-6 maxmob:h-5 rounded-md"></div>
        </div>
      ):(null)}
      {!info.loading && info.data.typeOfJopWithClients && !globalInfo.loading && globalInfo.data.statisticsNumbers?(
        <div className="flex flex-col items-start justify-start gap-[0.75rem]">
          <p className={`${textEditP1} m-0 uppercase inline-block`}>
            {titleP1}
          </p>
          <p className={`${textEditP2} m-0 leading-[3.375rem] smmob:leading-[2rem] maxmob:leading-[2.688rem] font-bold text-gainsboro-100`}>
            {titleP2}
          </p>
        </div>
      ):(null)}
    </>)}

  const showProjectsBtn = (title, textEdit)=>{
  return (
    <>
      {projects.loading || projects.error ?(
        <div className="w-full">
          <div className="bg-darkslategray w-[190px] h-7 maxmob:h-6 rounded-md animate-pulse"></div>
        </div>
      ):(null)}
      {!projects.loading && projects.data.length > 0 ? (
        <a onClick={function(){document.getElementById(projects.data[0]._id).scrollIntoView()}} 
          className={`${textEdit} flex gap-2 items-center justify-center no-underline text-gainsboro-200 hover:text-gainsboro-100 transition-all duration-75 ease-in cursor-pointer uppercase px-4 py-[6px] bg-darkslategray rounded-md`}>
          {title}{" "}           
          <FontAwesomeIcon
            icon={faAnglesDown}
            flip
            className={`text-[1rem] cursor-pointer transition-all duration-75 ease-in`}
          />
        </a>
      ):(null)}
    </>)}

  const statistics = (info, titleEdit, textEdit, [clients, jop, totalProducts, timeAvrage])=>{
  return (
    <>
      {globalInfo.loading || info.loading || globalInfo.error || info.error ?(
      <div className="flex flex-row items-end w-full bg-darkslategray rounded-md justify-between gap-5 maxmob:flex-wrap maxmob:justify-start animate-pulse">
        <div className="flex flex-row maxmob:flex-col w-full p-2 gap-5 justify-around flex-1">
          <div className="flex flex-col items-start justify-between gap-[0.75rem] w-full">
            <div className="bg-darkslategray w-[30%] h-5 maxmob:h-4 rounded-md"></div>
            <div className="bg-darkslategray w-[50%] h-3 rounded-md"></div>
          </div>
          <div className="flex flex-col items-start justify-between gap-[0.75rem] w-full">
            <div className="bg-darkslategray w-[30%] h-5 maxmob:h-4 rounded-md"></div>
            <div className="bg-darkslategray w-[50%] h-3 rounded-md"></div>
          </div>
        </div>
        <div className="flex flex-row maxmob:flex-col w-full p-2 gap-5 justify-around flex-1">
          <div className="flex flex-col items-start justify-between gap-[0.75rem] w-full">
            <div className="bg-darkslategray w-[30%] h-5 maxmob:h-4 rounded-md"></div>
            <div className="bg-darkslategray w-[50%] h-3 rounded-md"></div>
          </div>
          <div className="flex flex-col items-start justify-between gap-[0.75rem] w-full">
            <div className="bg-darkslategray w-[30%] h-5 maxmob:h-4 rounded-md"></div>
            <div className="bg-darkslategray w-[50%] h-3 rounded-md"></div>
          </div>
        </div>
      </div>
      ):(null) }
      {!info.loading && info.data.typeOfJopWithClients && !globalInfo.loading && globalInfo.data.statisticsNumbers ?(
      <div className="flex flex-row items-end w-full justify-between gap-5 maxmob:flex-wrap maxmob:justify-start">
        <div className="flex flex-row maxmob:flex-col gap-5 justify-around flex-1">
          <div className="flex flex-col items-start justify-between gap-[0.75rem]">
            <b className={`${titleEdit} uppercase inline-block`}>
              {clients}
            </b>
            <b className={`${textEdit} inline-block`}>
              <CountUp end={globalInfo.data.statisticsNumbers.clients} duration={5} />
            </b>
          </div>
          <div className="flex flex-col items-start justify-between gap-[0.75rem] ">
            <b className={`${titleEdit} uppercase inline-block`}>
              {jop}
            </b>
            <b className={`${textEdit} inline-block`}>
              {info.data.typeOfJopWithClients}
            </b>
          </div>
        </div>
        <div className="flex flex-row maxmob:flex-col gap-5 justify-around flex-1">
          <div className="flex flex-col items-start justify-between gap-[0.75rem]">
            <b className={`${titleEdit} uppercase inline-block`}>
              {totalProducts}
            </b>
            <b className={`${textEdit} inline-block`}>
              <CountUp end={globalInfo.data.statisticsNumbers.totalProducts} duration={5} />
            </b>
          </div>
          <div className="flex flex-col items-start justify-between gap-[0.75rem] ">
            <b className={`${titleEdit} uppercase inline-block whitespace-nowrap`}>
              {timeAvrage}
            </b>
            <b className={`${textEdit} inline-block`}>
              <CountUp end={globalInfo.data.statisticsNumbers.timeAvrage} duration={5} />{" "}
              {info.data.typeOfAvrageCalendar}
            </b>
          </div>
        </div>
      </div>
      ):(null)}
    </>)}

  return (
    <section className={`${enFontFamily} main-container h-screen w-full flex items-center text-left text-[1rem] text-gainsboro-200`}>
      <div className="flex flex-col w-full items-start justify-start gap-[5rem] maxmob:gap-[4rem] smmob:gap-[3rem]">
        {localStorage.getItem("language") === "arabic"
        ?(
          statisticsTitles(arInfo, "مشاريع وإحصائيات", 
          `${arFontFamily} leading-[0.8rem] text-[1.2rem] smmob:text-[1.1rem] font-semibold`, 
          "إطلع على بعض الإحصائيات عن عملي.", 
          `text-[1.35rem] maxmob:text-[1.25rem] smmob:text-[1.15rem] ${arFontFamily}`)
        ):(
          statisticsTitles(enInfo, "Projects and Statistics", 
          "tracking-[1.5px] leading-[1rem]", 
          "Look at some statistics about my business.", 
          "text-[1.4rem] maxmob:text-[1.4rem] smmob:text-[1.17rem] tracking-[-0.5px]")
        )}
        {localStorage.getItem("language") === "arabic"
        ?(statistics(arInfo, `leading-[1rem] text-[1.2rem] smmob:text-[1.1rem] ${arFontFamily}`, 
        `${arFontFamily} text-[1.2rem] smmob:text-[1.15rem] leading-[1.875rem] smmob:leading-[1.5rem] text-gainsboro-100`,
        ["العملاء", "العمل", "إجمالي المشاريع", "متوسط الوقت"]))
        :(statistics(enInfo, "tracking-[1.5px] leading-[1rem]", 
        "text-[1.2rem] smmob:text-[1.15rem] leading-[1.875rem] smmob:leading-[1.5rem] tracking-[-0.5px] text-gainsboro-100",
        ["clients", "jop", "total products", "time avrage"]))
        }
        {localStorage.getItem("language") === "arabic"
          ?(showProjectsBtn("إبداء عرض المشاريع", `${arFontFamily} text-[1rem]`))
          :(showProjectsBtn("Start Show My Projects", "tracking-[1.5px] text-[0.9rem]"))
        }
      </div>
    </section>
  );
};

export default Informations;
