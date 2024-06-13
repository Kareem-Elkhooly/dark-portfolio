import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { arFontFamily, enFontFamily } from "./Variables";

const SmallProjects = () => {
  const [currentImg, setCurrentImg] = useState(null)
  const quickProjects = useSelector((state) => state.quickProjects);
  const ProjectsSlideRight = ()=> {
    document.getElementById("smallProjectsSlide").scrollBy(document.body.clientWidth/3, 0);
  }
  const ProjectsSlideLeft = ()=> {
    document.getElementById("smallProjectsSlide").scrollBy(-document.body.clientWidth/3, 0);
  }
  
  return (
    <section id="smallprojects" className={`${enFontFamily} main-container pb-[7rem] w-full text-center text-[2rem] text-gainsboro-100`}>
      <div className="w-full flex flex-col items-start justify-start gap-[4.063rem] maxmob:gap-[3.5rem] pt-[2rem]">
        {localStorage.getItem("language") === "arabic"
        ?(
          <p id="smallProjectsTitle" className={`${arFontFamily} m-0 font-medium text-[1.7rem] maxmob:text-[1.6rem] smmob:text-[1.3rem] inline-block`}>
            مشاريع صغيرة
          </p>)
        :(
          <p id="smallProjectsTitle" className="m-0 text-inherit maxmob:text-[1.8rem] smmob:text-[1.5rem] font-bold font-inherit inline-block">
            Quick Projects
          </p>)
        }
        <div className="relative w-full">
          {quickProjects.loading || quickProjects.error ? (
            <div className="projects flex flex-row items-start justify-start gap-[1.5rem] w-full overflow-hidden rounded animate-pulse">
              <div className="bg-darkslategray rounded-md h-[25.5rem] min-w-[25rem] maxmob:h-[20.5rem] maxmob:min-w-[20rem]"></div>
              <div className="bg-darkslategray rounded-md h-[25.5rem] min-w-[25rem] maxmob:h-[20.5rem] maxmob:min-w-[20rem]"></div>
              <div className="bg-darkslategray rounded-md h-[25.5rem] min-w-[25rem] maxmob:h-[20.5rem] maxmob:min-w-[20rem]"></div>
            </div>
          ):(null) }
          {!quickProjects.loading && quickProjects.data.length?(
            <>
              <FontAwesomeIcon  
                className="absolute text-[1.3rem] text-darkslategray bg-gainsboro-100 hover:bg-zinc-300 rounded px-[6px] py-4 shadow-lg -translate-y-1/2 top-[50%] right-[12px] cursor-pointer smmob:hidden" 
                icon={faCaretRight} onClick={ProjectsSlideRight}
              />
              <div id="smallProjectsSlide" className="projects flex flex-row items-start justify-start gap-[1.5rem] w-full rounded-sm overflow-x-auto no-scrollbar">
              {quickProjects.data.map((project) => {
                return (
                    <img
                      onClick={()=>{setCurrentImg(project.image.url)}}
                      className="rounded-sm overflow-hidden object-cover h-[25.5rem] min-w-[25rem] maxmob:h-[20.5rem] maxmob:min-w-[20rem]"
                      key={project._id}
                      loading="lazy"
                      alt={"image-for-"+project.name}
                      src={project.image.url}
                    />
                );
              })}
              </div>
              {/* popup image */}
              <div className={`${currentImg?"fixed":"hidden"} top-0 left-0 z-50 bg-darkslategray w-full h-full`}>
                <span onClick={()=>{setCurrentImg(null)}} className="absolute top-6 right-5 font-semibold text-[2.2rem] z-50 cursor-pointer text-whitesmoke select-none">
                  &times;
                </span>
                <img src={currentImg} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 block max-w-[95%] max-h-[95%] object-contain"/>
              </div>
              <FontAwesomeIcon  
                className="absolute text-[1.3rem] text-darkslategray bg-gainsboro-100 hover:bg-zinc-300 rounded px-[6px] py-4 shadow-lg -translate-y-1/2 top-[50%] left-[12px] cursor-pointer smmob:hidden" 
                icon={faCaretLeft} onClick={ProjectsSlideLeft}
              />
            </>
          ):(null)}
        </div>
      </div>
    </section>
  );
};

export default SmallProjects;
