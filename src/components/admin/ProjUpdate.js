import React, { useEffect, useState } from "react";
import Section from "./components/Section";
import Spinner from "./components/Spinner";
import Title from "./components/Title";
import Form from "./components/Form";
import TitleInput from "./components/TitleInput";
import DescriptionInput from "./components/DescriptionInput";
import ImagesShowing from "./components/ImagesShowing";
import UploadBtn from "./components/UploadBtn";
import UploadHandle from "./components/UploadFunction";
import SweetAlert from "./components/SweetAlert";
import ErrorAlert from "./components/ErrorAlert";

const ProjUpdate = () => {
    const [proj, setProj] = useState("");
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [waite, setWaite] = useState("no")

    useEffect(()=>{
        const lastPathName = (window.location.pathname).split("/");
        const projectId = lastPathName[lastPathName.length-1]
        runFetch(projectId);
    },[])
    const runFetch = async(projectId)=>{
        await fetch(`https://dark-portfolio-api.onrender.com/api/projects/${projectId}`)
        .then((res) => res.json())
        .then((data) => setProj(data))
        .catch((err)=> {console.log(err)})
    }

    const sweetAlert = (show)=>{
        return (
          <SweetAlert show={show} title={"saved successfully"}/>
        )
    }
    const sweetAlertErr = (show, text)=>{
        return (
          <ErrorAlert show={show} title={text || "bad network!"}/>
        )
    }
    const [alert, setAlert] = useState([sweetAlert(), false])
    useEffect(()=>{
        if(alert[1] === true){
            setTimeout(()=>{
            setAlert([sweetAlert(), false])
            }, 4000)
        }
    },[alert])

    const resetUploadedFile =()=>{
        setUploadedFiles([])
        document.querySelectorAll("#newUploadedFile").forEach((img)=>{
            document.getElementById(`${"showImage"+proj._id}`).removeChild(img)
        })
    }

    const updateProject = async (e)=>{
        e.preventDefault()
        setWaite("yes")
        const form = document.getElementById("UpdateProjectForm");
        const formData = new FormData(form);
        let imagesData = new FormData();
        if(uploadedFiles.length > 0){
            uploadedFiles.map((file)=>{
                imagesData.append("project", file)
            })
        }
        const data = Object.fromEntries(formData)
        if(!data.titleAr || !data.titleEn || !data.descriptionEn || !data.descriptionAr){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "please fill all fields"), true])
        }else if(data.titleAr.split("").length < 2 || data.titleEn.split("").length < 2 || data.descriptionEn.split("").length < 2 || data.descriptionAr.split("").length < 2 ){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "there is field too short"), true])
        }else if(data.titleAr.split("").length > 60 || data.titleEn.split("").length > 60){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "title must be less than 60 characters"), true])
        }else {
            if(uploadedFiles.length > 0){
                await fetch(`https://dark-portfolio-api.onrender.com/api/upload/project/${proj._id}`,{
                method:'POST',
                headers: {
                    'token': `${sessionStorage.getItem("token")}`
                },
                body: imagesData,
                })
                .then(res => res.json())
                .then(async images => {
                    if(images.data[0].url){
                        await fetch(`https://dark-portfolio-api.onrender.com/api/projects/${proj._id}`,{
                            method:'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                'token': `${sessionStorage.getItem("token")}`
                            },
                            body:JSON.stringify({
                                "title": {
                                    "en": data.titleEn,
                                    "ar": data.titleAr
                                },
                                "description": {
                                    "en": data.descriptionEn,
                                    "ar": data.descriptionAr
                                },
                                "images": images.data
                            }),
                        })
                        .then(res => res.json())
                        .then(project => {
                            setWaite("no"),
                            setAlert([sweetAlert("opacity-1"), true])
                        })            
                        .catch(err => {
                            setWaite("no"),
                            setAlert([sweetAlertErr("opacity-1", "somthing wrong!, try again"), true])
                        })
                    }else{
                        setWaite("no"),
                        setAlert([sweetAlertErr("opacity-1", "somthing wrong!, try again"), true]),
                        console.log(images.message)
                    }
                })
                .catch(err => {
                    setWaite("no"),
                    setAlert([sweetAlertErr("opacity-1"), true])
                })
            }else {
                await fetch(`https://dark-portfolio-api.onrender.com/api/projects/${proj._id}`,{
                    method:'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': `${sessionStorage.getItem("token")}`
                    },
                    body:JSON.stringify({
                        "title": {
                            "en": data.titleEn,
                            "ar": data.titleAr
                        },
                        "description": {
                            "en": data.descriptionEn,
                            "ar": data.descriptionAr
                        }
                    }),
                })
                .then(res => res.json())
                .then(project => {
                    setWaite("no"),
                    setAlert([sweetAlert("opacity-1"), true])
                })            
                .catch(err => {
                    setWaite("no"),
                    setAlert([sweetAlertErr("opacity-1", "somthing wrong!, try again"), true])
                })
            }
        }
    }

  return (
    <Section>
      {!proj.title
      ?(<Spinner/>)
      :(<>
        {alert[0]}
        <Title project={proj.title.en}/>
        <Form 
              formId={"UpdateProjectForm"} 
              onreset={resetUploadedFile} onsubmit={function(e){updateProject(e)}} 
              waite={waite} id={"updateProjSubmit"} title={"save"}
              >
              <TitleInput 
                  title={"title"} idEn={"titleInEnglish"} idAr={"titleInArabic"} 
                  nameEn={"titleEn"} nameAr={"titleAr"} 
                  defaultEn={proj.title.en} defaultAr={proj.title.ar}
              />
              <DescriptionInput
                  title={"description"} idEn={"descriptionInEnglish"} idAr={"descriptionInArabic"}
                  nameEn={"descriptionEn"} nameAr={"descriptionAr"}
                  defaultEn={proj.description.en} defaultAr={proj.description.ar}
              />
              <div className="flex flex-col gap-2 items-center justify-start col-span-2">
                <ImagesShowing 
                    id={"showImage"+proj._id} project={proj} state={uploadedFiles}
                />
                <UploadBtn 
                    id={"uploadImages"} state={uploadedFiles} 
                    onchange={function(e){setUploadedFiles(UploadHandle(e, "showImage"+proj._id))}}
                />
              </div>
        </Form>
        </>)}
    </Section>
  );
};

export default ProjUpdate;
