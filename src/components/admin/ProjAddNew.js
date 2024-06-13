<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Section from "./components/Section";
import Title from "./components/Title";
import Form from "./components/Form";
import TitleInput from "./components/TitleInput";
import DescriptionInput from "./components/DescriptionInput";
import ImagesShowing from "./components/ImagesShowing";
import UploadBtn from "./components/UploadBtn";
import UploadHandle from "./components/UploadFunction";
import SweetAlert from "./components/SweetAlert";
import ErrorAlert from "./components/ErrorAlert";

const ProjAddNew = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [waite, setWaite] = useState("no")

    const sweetAlert = (show)=>{
        return (
          <SweetAlert show={show} title={"added successfully"}/>
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
            }, 6000)
        }
    },[alert])

    const resetUploadedFile =()=>{
        setUploadedFiles([])
        document.querySelectorAll("#newUploadedFile").forEach((img)=>{
            document.getElementById("showUploadedImages").removeChild(img)
        })
    }

    const addNewProject = async (e)=>{
        e.preventDefault()
        setWaite("yes")
        const form = document.getElementById("newProjectForm");
        const formData = new FormData(form);
        let imagesData = new FormData();
        if(uploadedFiles.length > 0){
            uploadedFiles.map((file)=>{
                imagesData.append("project", file)
            })
        }
        const data = Object.fromEntries(formData)
        if(!data.titleAr || !data.titleEn || !data.descriptionEn || !data.descriptionAr || uploadedFiles.length<1){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "please fill all fields"), true])
        }else if(data.titleAr.split("").length < 2 || data.titleEn.split("").length < 2 || data.descriptionEn.split("").length < 2 || data.descriptionAr.split("").length < 2 ){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "there is field too short"), true])
        }else if(data.titleAr.split("").length > 60 || data.titleEn.split("").length > 60){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "title must be less than 60 characters"), true])
        }else {
            await fetch(`https://dark-portfolio-api.onrender.com/api/upload/project`,{
            method:'POST',
            headers: {
                'token': `${sessionStorage.getItem("token")}`
            },
            body: imagesData,
            })
            .then(res => res.json())
            .then(async images => {
                if(images.data[0].url){
                    await fetch('https://dark-portfolio-api.onrender.com/api/projects',{
                        method:'POST',
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
            }).catch(err => {
                setWaite("no"),
                setAlert([sweetAlertErr("opacity-1"), true])
            })
        }
    }

  return (
    <Section>
        {alert[0]}
        <Title/>
        <Form 
            formId={"newProjectForm"} 
            onreset={resetUploadedFile} onsubmit={function(e){addNewProject(e)}} 
            waite={waite} id={"addProjSubmit"} title={"add"}
            >
            <TitleInput 
                title={"title"} idEn={"titleInEnglish"} idAr={"titleInArabic"} 
                nameEn={"titleEn"} nameAr={"titleAr"} 
            />
            <DescriptionInput
                title={"description"} idEn={"descriptionInEnglish"} idAr={"descriptionInArabic"}
                nameEn={"descriptionEn"} nameAr={"descriptionAr"}
            />
            <div className="flex flex-col gap-2 items-center justify-start col-span-2">
                <ImagesShowing 
                    id={"showUploadedImages"}
                />
                <UploadBtn 
                    id={"uploadImages"} state={uploadedFiles} 
                    onchange={function(e){setUploadedFiles(UploadHandle(e, "showUploadedImages"))}}
                />
            </div>
        </Form>
    </Section>
  );
};

export default ProjAddNew;
=======
import React, { useEffect, useState } from "react";
import Section from "./components/Section";
import Title from "./components/Title";
import Form from "./components/Form";
import TitleInput from "./components/TitleInput";
import DescriptionInput from "./components/DescriptionInput";
import ImagesShowing from "./components/ImagesShowing";
import UploadBtn from "./components/UploadBtn";
import UploadHandle from "./components/UploadFunction";
import SweetAlert from "./components/SweetAlert";
import ErrorAlert from "./components/ErrorAlert";

const ProjAddNew = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [waite, setWaite] = useState("no")

    const sweetAlert = (show)=>{
        return (
          <SweetAlert show={show} title={"added successfully"}/>
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
            }, 6000)
        }
    },[alert])

    const resetUploadedFile =()=>{
        setUploadedFiles([])
        document.querySelectorAll("#newUploadedFile").forEach((img)=>{
            document.getElementById("showUploadedImages").removeChild(img)
        })
    }

    const addNewProject = async (e)=>{
        e.preventDefault()
        setWaite("yes")
        const form = document.getElementById("newProjectForm");
        const formData = new FormData(form);
        let imagesData = new FormData();
        if(uploadedFiles.length > 0){
            uploadedFiles.map((file)=>{
                imagesData.append("project", file)
            })
        }
        const data = Object.fromEntries(formData)
        if(!data.titleAr || !data.titleEn || !data.descriptionEn || !data.descriptionAr || uploadedFiles.length<1){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "please fill all fields"), true])
        }else if(data.titleAr.split("").length < 2 || data.titleEn.split("").length < 2 || data.descriptionEn.split("").length < 2 || data.descriptionAr.split("").length < 2 ){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "there is field too short"), true])
        }else if(data.titleAr.split("").length > 60 || data.titleEn.split("").length > 60){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "title must be less than 60 characters"), true])
        }else {
            await fetch(`https://dark-portfolio-api.onrender.com/api/upload/project`,{
            method:'POST',
            headers: {
                'token': `${sessionStorage.getItem("token")}`
            },
            body: imagesData,
            })
            .then(res => res.json())
            .then(async images => {
                if(images.data[0].url){
                    await fetch('https://dark-portfolio-api.onrender.com/api/projects',{
                        method:'POST',
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
            }).catch(err => {
                setWaite("no"),
                setAlert([sweetAlertErr("opacity-1"), true])
            })
        }
    }

  return (
    <Section>
        {alert[0]}
        <Title/>
        <Form 
            formId={"newProjectForm"} 
            onreset={resetUploadedFile} onsubmit={function(e){addNewProject(e)}} 
            waite={waite} id={"addProjSubmit"} title={"add"}
            >
            <TitleInput 
                title={"title"} idEn={"titleInEnglish"} idAr={"titleInArabic"} 
                nameEn={"titleEn"} nameAr={"titleAr"} 
            />
            <DescriptionInput
                title={"description"} idEn={"descriptionInEnglish"} idAr={"descriptionInArabic"}
                nameEn={"descriptionEn"} nameAr={"descriptionAr"}
            />
            <div className="flex flex-col gap-2 items-center justify-start col-span-2">
                <ImagesShowing 
                    id={"showUploadedImages"}
                />
                <UploadBtn 
                    id={"uploadImages"} state={uploadedFiles} 
                    onchange={function(e){setUploadedFiles(UploadHandle(e, "showUploadedImages"))}}
                />
            </div>
        </Form>
    </Section>
  );
};

export default ProjAddNew;
>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
