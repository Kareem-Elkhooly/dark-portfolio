import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft, faArrowRightLong, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { arFontFamily, enFontFamily } from "./Variables";

function Projects() {
  const projects = useSelector((state) => state.projects);
  const ProjectsSlideRight = ()=> {
    document.getElementById("projectsSlide").scrollBy(document.body.clientWidth / 2, 0);
  }
  const ProjectsSlideLeft = ()=> {
    document.getElementById("projectsSlide").scrollBy(-document.body.clientWidth / 2,0);
  }
  
  return (
    <section id="projects" className={`${enFontFamily} main-container pb-[5rem] w-full text-center text-[2rem] text-gainsboro-100`}>
      <div className="flex flex-col items-start justify-start gap-[4.063rem] maxmob:gap-[3.5rem]">
        <div className="flex justify-between w-full items-end pt-[4rem]">
          {localStorage.getItem("language") === "arabic"
          ?(
            <>
              <p id="projectsTitle" className={`${arFontFamily} m-0 font-medium text-[1.7rem] maxmob:text-[1.6rem] smmob:text-[1.3rem] inline-block`}>
                المشاريع
              </p>
              <Link to={"/work"} className={`${arFontFamily} no-underline text-[1.2rem] smmob:text-[1.1rem] -mb-[2rem] maxmob:-mb-[1.5rem] smmob:-mb-[1rem] text-darkgray-200 hover:text-darkgray-100`}>
                المزيد من التفاصيل{" "}
                <FontAwesomeIcon className="align-middle mr-2" icon={faArrowLeftLong} shake />
              </Link>
            </>)
          :(
            <>
              <p id="projectsTitle" className="m-0 text-inherit font-bold font-inherit inline-block maxmob:text-[1.8rem] smmob:text-[1.5rem]">
                Projects
              </p>
              <Link to={"/work"} className="no-underline text-[1rem] -mb-[2rem] maxmob:-mb-[1.5rem] smmob:-mb-[1rem] text-darkgray-200 hover:text-darkgray-100">
                View Details{" "}
                <FontAwesomeIcon className="align-middle ml-2" icon={faArrowRightLong} shake />
              </Link>
            </>)
          }
        </div>
        <div className="relative w-full">
          {projects.loading || projects.error ? (
            <div className="projects flex flex-row items-start justify-start gap-[1.5rem] w-full overflow-hidden rounded pb-12 animate-pulse">
              <div className="bg-darkslategray rounded-md h-[35rem] min-w-[29rem] maxmob:h-[30rem] maxmob:min-w-[22rem] smmob:h-[27rem]"></div>
              <div className="bg-darkslategray rounded-md h-[35rem] min-w-[29rem] maxmob:h-[30rem] maxmob:min-w-[22rem] smmob:h-[27rem]"></div>
              <div className="bg-darkslategray rounded-md h-[35rem] min-w-[29rem] maxmob:h-[30rem] maxmob:min-w-[22rem] smmob:h-[27rem]"></div>
            </div>
          ):(null)}
          {!projects.loading && projects.data.length ?(
            <>
              <FontAwesomeIcon  
                className="absolute text-[1.3rem] text-darkslategray bg-gainsboro-100 hover:bg-zinc-300 rounded px-2 py-4 shadow-lg -translate-y-1/2 top-[50%] right-[12px] cursor-pointer smmob:hidden" 
                icon={faCaretRight} onClick={ProjectsSlideRight}
              />
              <div id="projectsSlide" className="projects flex flex-row items-start justify-start gap-[1.5rem] w-full rounded overflow-x-auto no-scrollbar pb-12">
                {projects.data.map((project) => {
                  return (
                    <div key={project._id} className="rounded overflow-hidden object-center h-[35rem] min-w-[29rem] maxmob:h-[30rem] maxmob:min-w-[22rem] smmob:h-[27rem]">
                      <img
                        className="w-full h-full object-cover"
                        loading="lazy"
                        alt={"image-for-"+project.title.en}
                        src={project.images[0].url}
                      />
                    </div>
                  );
                })}
              <FontAwesomeIcon  
                className="absolute text-[1.3rem] text-darkslategray bg-gainsboro-100 hover:bg-zinc-300 rounded px-2 py-4 shadow-lg -translate-y-1/2 top-[50%] left-[12px] cursor-pointer smmob:hidden" 
                icon={faCaretLeft} onClick={ProjectsSlideLeft} 
              />
              </div>
            </>
          ):(null)}
        </div>
      </div>
    </section>
  );
}

export default Projects;
