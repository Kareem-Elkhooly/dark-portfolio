 import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuickProjects } from "../../redux/slices/quickProjects-slice";
import Section from "./components/Section";
import SectionTitle from "./components/SectionTitle";
import TopSectionBtns from "./components/TopSectionBtns";
import SectionBody from "./components/SectionBody";
import Dates from "./components/Dates";
import EditBtn from "./components/EditBtn";
import DeleteBtn from "./components/DeleteBtn";
import SweetAlert from "./components/SweetAlert";
import ErrorAlert from "./components/ErrorAlert";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";

const DashQuickProjs = () => {
  const quickProjects = useSelector((state)=> state.quickProjects)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuickProjects());
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
    dispatch(fetchQuickProjects())
  }

  const deleteProject = async(id)=>{
    await fetch(`https://dark-portfolio-api.onrender.com/api/quickProjs/${id}`,{
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
      <SectionTitle title={"quick projects"} icon={faTruckFast} 
        description={"You can update and remove any one and you can add new one too, but if you delete all, this section well be hidden in your website"}
      />
      <div className="w-full">
        <TopSectionBtns state={quickProjects} section={"quickprojects"} onrefresh={refresh}/>
        <SectionBody state={quickProjects} stateName={"quick projects"}>
          {quickProjects.data.map((project)=>(
            <div key={project._id} className="flex flex-col gap-4 text-[1rem] text-darkslategray bg-gainsboro-100 rounded-md px-8 py-6 smmob:px-4 smmob:py-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 justify-between w-full items-center smmob:flex-col-reverse smmob:items-start">
                  <div className="flex flex-col gap-2 items-start justify-between">
                    <span className="capitalize">{project.name}</span>
                    <Dates object={project}/>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src={project.image.url} className="h-[5rem] rounded-md" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-6 w-full bg-darkslategray py-[6px] smmob:py-2 px-4 rounded-md">
                <DeleteBtn onclick={function(){deleteProject(project._id)}}/>
                <EditBtn section={"quickprojects"} id={project._id}/>
              </div>
            </div>
           ))}
        </SectionBody>
      </div>
    </Section>
  );
};

export default DashQuickProjs;
