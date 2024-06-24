import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { arFontFamily, enFontFamily } from "../components/Variables";

const Project = () => {
    const [project, setProject] = useState("");
    const [currentImg, setCurrentImg] = useState(null)
    const [currentProj, setCurrentProj] = useState(null)

    useEffect(()=>{
        const lastPathName = (window.location.pathname).split("/");
        const projectId = lastPathName[lastPathName.length-1]
        runFetch(projectId);
    },[])
    const runFetch = async(projectId)=>{
        await fetch(`https://dark-portfolio-api.onrender.com/api/projects/${projectId}`)
        .then((res) => res.json())
        .then((data) => setProject(data))
        .catch((err)=> {console.log(err)})
    }
    
    const back = () => {
        window.history.back()
    };

  const nextImage = (proj)=> {
    // step 1 , know the current image
    const currentImg = document.getElementById(`img_${proj._id}`).getAttribute("src");
    // step 2 , know the current image index
    const currentImgIndex = proj.images.findIndex((ele)=> ele.url === currentImg);
    // step 3 ,  get the next Image or stop if we are in the last one
    if(currentImgIndex !==  proj.images.length -1) {
      document.getElementById(`img_${proj._id}`).src = proj.images[currentImgIndex+1].url;
      document.getElementById(`prevOf_${proj._id}`).classList.remove("hidden")
    }
    if(currentImgIndex ===  proj.images.length -2) {
      document.getElementById(`nextOf_${proj._id}`).classList.add("hidden")
    }
  }
  const prevImage = (proj)=> {
    // step 1 , know the current image
    const currentImg = document.getElementById(`img_${proj._id}`).getAttribute("src");
    // step 2 , know the current image index
    const currentImgIndex = proj.images.findIndex((ele)=> ele.url === currentImg);
    // step 3 ,  get the prev Image or stop if we are in the first one
    if(currentImgIndex !==  0) {
      document.getElementById(`img_${proj._id}`).src = proj.images[currentImgIndex-1].url;
      document.getElementById(`nextOf_${proj._id}`).classList.remove("hidden")
    }
    if(currentImgIndex ===  1) {
      document.getElementById(`prevOf_${proj._id}`).classList.add("hidden")
    }
  }

  const projectShow = (project, language, titleEdit, textEdit, dir)=>{
    return (
       <div id={project._id} className={`${dir} w-full min-h-screen flex items-center`}>
        <div className="relative w-full flex items-center maxmob:items-start justify-center maxmob:flex-wrap maxmob:flex-col gap-[2.125rem] maxmob:gap-[3rem]">
            <FontAwesomeIcon 
                onClick={back} icon={localStorage.getItem("language") === "arabic"?faAngleLeft:faAngleRight} 
                className={`${localStorage.getItem("language") === "arabic"?"right-0":"left-0"} text-[1.3rem] bg-darkslategray px-4 py-2 maxmob:text-[1.2rem] rounded-md cursor-pointer absolute maxmob:relative top-2`}
            />
            <div className="flex flex-1 maxmob:flex-initial items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[0.75rem] maxmob:gap-1">
                <p className={`${titleEdit} uppercase inline-block text-nowrap max-w-full text-ellipsis pb-2 m-0`}>
                    {language === "ar" ?(project.title.ar):(project.title.en)}
                </p>
                <p className={`${textEdit} m-0 font-bold text-gainsboro-100`}>
                    {language === "ar" ?(project.description.ar):(project.description.en)}
                </p>
                </div>
            </div>
            <div className="relative flex justify-center proj h-[47.688rem] w-[722px] maxlg:h-[40.688rem] maxlg:max-w-[600px] maxmob:max-w-full maxmob:max-h-[30rem] maxmob:self-center bg-darkslategray rounded-md">
            <FontAwesomeIcon onClick={function(){nextImage(project)}} id={"nextOf_"+project._id} icon={faCaretRight}
              className={`absolute z-10 text-[1.3rem] text-gainsboro-100 bg-[#2D2D2D] hover:bg-gray transition-all duration-100 ease-in ${localStorage.getItem("language") === "arabic"?"rounded-e-md":"rounded-s-md"} pl-[6px] pr-3 py-4 -translate-y-1/2 top-[50%] right-[0px] cursor-pointer`} 
            />
            <img
                onClick={()=>{setCurrentImg(document.getElementById(`img_${project._id}`).src), setCurrentProj(project)}}
                id={"img_" + project._id}
                src={project.images[0].url}
                className="object-center max-w-full max-h-full absolute -translate-y-1/2 top-1/2 py-2 px-2"
                loading="lazy"
                alt={"project-image"}
            />
            {/* popup image */}
            <div className={`${currentImg?"fixed":"hidden"} top-0 left-0 z-50 bg-darkslategray w-full h-full`}>
                <FontAwesomeIcon onClick={function(){nextImage(currentProj),setCurrentImg(document.getElementById(`img_${currentProj?._id}`).src)}} icon={faAngleRight}
                className="absolute z-50 text-[1.6rem] text-gainsboro-100 rounded px-2 py-4 -translate-y-1/2 top-[50%] right-10 smmob:right-5 cursor-pointer" 
                />
                <span onClick={()=>{setCurrentImg(null)}} className="absolute top-6 right-5 font-semibold text-[2.2rem] z-50 cursor-pointer text-whitesmoke select-none">
                &times;
                </span>
                <img src={currentImg} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 block max-w-[95%] max-h-[95%] object-contain"/>
                <FontAwesomeIcon onClick={function(){prevImage(currentProj),setCurrentImg(document.getElementById(`img_${currentProj?._id}`).src)}} icon={faAngleLeft}
                className="absolute z-50 text-[1.6rem] text-gainsboro-100 rounded px-2 py-4 -translate-y-1/2 top-[50%] left-10 smmob:left-5 cursor-pointer" 
                />
            </div>
            <FontAwesomeIcon onClick={function(){prevImage(project)}} id={"prevOf_"+project._id} icon={faCaretLeft}
              className={`hidden z-10 absolute text-[1.3rem] text-gainsboro-100 bg-[#2D2D2D] hover:bg-gray transition-all duration-100 ease-in ${localStorage.getItem("language") === "arabic"?"rounded-s-md":"rounded-e-md"} pr-[6px] pl-3 py-4 -translate-y-1/2 top-[50%] left-[0px] cursor-pointer`} 
            />
            </div>
        </div>
      </div>
    )
  }

  const projectRun = (language, titleEdit, textEdit)=>{
    return (
      <>
        {project === "" ?(
        <div className="main-container w-full min-h-screen flex items-center">
            <div className="w-full bg-darkslategray animate-pulse rounded-md p-4 maxmob:flex-col-reverse flex items-center maxmob:items-start justify-center maxmob:flex-wrap gap-[2.125rem] maxmob:gap-[2rem]">
                <div className="bg-darkslategray rounded-md flex justify-center proj h-[47.688rem] w-[722px] maxlg:h-[40.688rem] maxlg:max-w-[600px] maxmob:max-w-full maxmob:max-h-[30rem] maxmob:self-center"></div>
                <div className="flex flex-1 maxmob:flex-initial items-start justify-start w-[40%] maxmob:w-[60%]">
                <div className="flex flex-col items-start justify-start gap-[0.75rem] maxmob:gap-1 w-full">
                    <div className="bg-darkslategray w-[50%] h-5 mb-8 rounded-md"></div>
                    <div className="flex flex-col gap-5 w-[80%] maxmob:w-full rounded-md">
                    <div className="bg-darkslategray w-full h-4 rounded-md"></div>
                    <div className="bg-darkslategray w-full h-4 rounded-md"></div>
                    <div className="bg-darkslategray w-full h-4 rounded-md"></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        ):(null)}
        {project !== "" ?(
            <>
                <section
                id={project._id}
                key={project._id}
                className={`${enFontFamily} main-container text-left text-[1rem] text-gainsboro-200 w-full`}
                >
                {projectShow(project, language, titleEdit, textEdit)}
                </section>
            </>
      ):(null)}
      </>)}

  return (
    <div className="w-full relative bg-gray overflow-hidden tracking-[normal] flex flex-col gap-[3rem] smmob:gap-[1rem]">
      {localStorage.getItem("language") === "arabic"
      ?(projectRun("ar", `${arFontFamily} leading-[0.8rem] text-[1.2rem] smmob:text-[1.1rem] font-semibold`, 
      `${arFontFamily} text-right text-[1.4rem] maxmob:text-[1.25rem] smmob:text-[1.15rem] leading-[3rem] maxmob:leading-[2.65rem] smmob:leading-[2.45rem]`))
      :(projectRun("en", "tracking-[2px] leading-[1rem]", 
      "text-[1.7rem] maxmob:text-[1.5rem] smmob:text-[1.25rem] leading-[3.25rem] maxmob:leading-[2.75rem] smmob:leading-[2.55rem] tracking-[-0.5px]"))}
    </div>
  );
};

export default Project;
