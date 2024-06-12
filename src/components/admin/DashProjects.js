import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../redux/slices/projects-slice";
import Section from "./components/Section";
import SectionTitle from "./components/SectionTitle";
import TopSectionBtns from "./components/TopSectionBtns";
import SectionBody from "./components/SectionBody";
import Dates from "./components/Dates";
import EditBtn from "./components/EditBtn";
import DeleteBtn from "./components/DeleteBtn";
import SweetAlert from "./components/SweetAlert";
import ErrorAlert from "./components/ErrorAlert";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";

const DashProjects = () => {
  const projects = useSelector((state)=> state.projects)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjects());
  },[]);

  const sweetAlert = (show)=>{
    return (
      <SweetAlert show={show} title={"deleted successfully"}/>
    )
  }
  const sweetAlertErr = (show)=>{
    return (
      <ErrorAlert show={show} title={"bad network!"}/>
    )
  }
  const [alert, setAlert] = useState([sweetAlert(), false])
    useEffect(()=>{
        if(alert[1] === true){
            setTimeout(()=>{
            setAlert([sweetAlert(), false])
            }, 3000)
        }
    },[alert])

  const refresh = ()=>{
    dispatch(fetchProjects())
  }

  const deleteProject = async(id)=>{
    await fetch(`https://dark-portfolio-api.onrender.com/api/projects/${id}`,{
      method: "DELETE",
      headers: {
        "token": `${sessionStorage.getItem("token")}`
      }
    })
    .then(res => res.json())
    .then(message => (
      refresh(),
      setAlert([sweetAlert("opacity-1"), true])
      ))
    .catch(err => (
      setAlert([sweetAlertErr("opacity-1"), true])
      ))
  }
  
  return (
    <Section>
      {alert[0]}
      <SectionTitle title={"projects"} icon={faSuitcase} iconEdit={"mb-[1px]"}
        description={"You can update and remove any one and add new one too, but if you delete all, this section well be empty in your website"}
      />
      <div className="w-full">
        <TopSectionBtns state={projects} section={"projects"} onrefresh={refresh}/>
        <SectionBody state={projects} stateName={"projects"}>
          {projects.data.map((project)=>(
            <div key={project._id} className="flex flex-col gap-4 text-[1rem] text-darkslategray bg-gainsboro-100 rounded-md px-8 py-6 smmob:px-4 smmob:py-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 justify-between w-full items-center smmob:flex-col-reverse smmob:items-start">
                  <div className="flex flex-col gap-2 items-start justify-between">
                    <span className="capitalize">{project.title.en}</span>
                    <Dates object={project}/>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src={project.images[0].url} className="h-[5rem] rounded-l-md rounded-r-sm" />
                    <div className="h-[5rem] w-[3rem] text-[0.9rem] bg-darkslategray flex items-center rounded-r-md rounded-l-sm justify-center text-whitesmoke">
                      <span>{project.images.length-1}+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-6 w-full bg-darkslategray py-[6px] smmob:py-2 px-4 rounded-md">
                <DeleteBtn onclick={function(){deleteProject(project._id)}}/>
                <EditBtn section={"projects"} id={project._id}/>
              </div>
            </div>
           ))}
        </SectionBody>
      </div>
    </Section>
  );
};

export default DashProjects;
