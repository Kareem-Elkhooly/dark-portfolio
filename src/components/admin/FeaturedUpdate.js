<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Section from "./components/Section";
import Spinner from "./components/Spinner";
import Title from "./components/Title";
import Form from "./components/Form";
import TitleInput from "./components/TitleInput";
import ImagesShowing from "./components/ImagesShowing";
import UploadBtn from "./components/UploadBtn";
import UploadHandle from "./components/UploadFunction";
import SweetAlert from "./components/SweetAlert";
import ErrorAlert from "./components/ErrorAlert";

const FeaturedUpdate = () => {
    const [proj, setProj] = useState("");
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [waite, setWaite] = useState("no")

    useEffect(()=>{
        const lastPathName = (window.location.pathname).split("/");
        const projectId = lastPathName[lastPathName.length-1]
        runFetch(projectId);
    },[])
    const runFetch = async(projectId)=>{
        await fetch(`https://dark-portfolio-api.onrender.com/api/featured/${projectId}`)
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

    const updateFeatured = async (e)=>{
        e.preventDefault()
        setWaite("yes")
        const form = document.getElementById("UpdateFeaturedForm");
        const formData = new FormData(form);
        let imagesData = new FormData();
        if(uploadedFiles.length > 0){
            uploadedFiles.map((file)=>{
                imagesData.append("featured", file)
            })
        }
        const data = Object.fromEntries(formData)
        if(!data.enName || !data.arName){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "please fill all fields"), true])
        }else {
            if(uploadedFiles.length > 0){
                await fetch(`https://dark-portfolio-api.onrender.com/api/upload/featured/${proj._id}`,{
                method:'POST',
                headers: {
                    'token': `${sessionStorage.getItem("token")}`
                },
                body: imagesData,
                })
                .then(res => res.json())
                .then(async image => {
                    if(image.data.url){
                        await fetch(`https://dark-portfolio-api.onrender.com/api/featured/${proj._id}`,{
                            method:'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                'token': `${sessionStorage.getItem("token")}`
                            },
                            body:JSON.stringify({
                                "enName": data.enName,
                                "arName": data.arName,
                                "image": {
                                    "url": image.data.url,
                                    "id": image.data.id
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
                    }else{
                        setWaite("no"),
                        setAlert([sweetAlertErr("opacity-1", "somthing wrong!, try again"), true]),
                        console.log(image.message)
                    }
                })
                .catch(err => {
                    setWaite("no"),
                    setAlert([sweetAlertErr("opacity-1"), true]),
                    console.log(err.message)
                })
            }else {
                await fetch(`https://dark-portfolio-api.onrender.com/api/featured/${proj._id}`,{
                    method:'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': `${sessionStorage.getItem("token")}`
                    },
                    body:JSON.stringify({
                        "enName": data.enName,
                        "arName": data.arName,
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
      {!proj.name
      ?(<Spinner/>)
      :(<>
        {alert[0]}
        <Title project={proj.name}/>
        <Form 
              formId={"UpdateFeaturedForm"} 
              onreset={resetUploadedFile} onsubmit={function(e){updateFeatured(e)}} 
              waite={waite} id={"updateFeaturedSubmit"} title={"save"}
              >
              <TitleInput 
                title={"name"} idEn={"enName"} idAr={"arName"} nameEn={"enName"} nameAr={"arName"} 
                defaultEn={proj.enName} defaultAr={proj.arName}
              />
              <div className="flex flex-col gap-2 items-center justify-start col-span-2">
                <ImagesShowing 
                    id={"showImage"+proj._id} project={proj} state={uploadedFiles} justImage={true}
                />
                <UploadBtn 
                    id={"uploadImages"} state={uploadedFiles} justImage={true}
                    onchange={function(e){setUploadedFiles(UploadHandle(e, "showImage"+proj._id))}}
                />
              </div>
        </Form>
        </>)}
    </Section>
  );
};

export default FeaturedUpdate;
=======
import React, { useEffect, useState } from "react";
import Section from "./components/Section";
import Spinner from "./components/Spinner";
import Title from "./components/Title";
import Form from "./components/Form";
import TitleInput from "./components/TitleInput";
import ImagesShowing from "./components/ImagesShowing";
import UploadBtn from "./components/UploadBtn";
import UploadHandle from "./components/UploadFunction";
import SweetAlert from "./components/SweetAlert";
import ErrorAlert from "./components/ErrorAlert";

const FeaturedUpdate = () => {
    const [proj, setProj] = useState("");
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [waite, setWaite] = useState("no")

    useEffect(()=>{
        const lastPathName = (window.location.pathname).split("/");
        const projectId = lastPathName[lastPathName.length-1]
        runFetch(projectId);
    },[])
    const runFetch = async(projectId)=>{
        await fetch(`https://dark-portfolio-api.onrender.com/api/featured/${projectId}`)
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

    const updateFeatured = async (e)=>{
        e.preventDefault()
        setWaite("yes")
        const form = document.getElementById("UpdateFeaturedForm");
        const formData = new FormData(form);
        let imagesData = new FormData();
        if(uploadedFiles.length > 0){
            uploadedFiles.map((file)=>{
                imagesData.append("featured", file)
            })
        }
        const data = Object.fromEntries(formData)
        if(!data.enName || !data.arName){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "please fill all fields"), true])
        }else {
            if(uploadedFiles.length > 0){
                await fetch(`https://dark-portfolio-api.onrender.com/api/upload/featured/${proj._id}`,{
                method:'POST',
                headers: {
                    'token': `${sessionStorage.getItem("token")}`
                },
                body: imagesData,
                })
                .then(res => res.json())
                .then(async image => {
                    if(image.data.url){
                        await fetch(`https://dark-portfolio-api.onrender.com/api/featured/${proj._id}`,{
                            method:'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                'token': `${sessionStorage.getItem("token")}`
                            },
                            body:JSON.stringify({
                                "enName": data.enName,
                                "arName": data.arName,
                                "image": {
                                    "url": image.data.url,
                                    "id": image.data.id
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
                    }else{
                        setWaite("no"),
                        setAlert([sweetAlertErr("opacity-1", "somthing wrong!, try again"), true]),
                        console.log(image.message)
                    }
                })
                .catch(err => {
                    setWaite("no"),
                    setAlert([sweetAlertErr("opacity-1"), true]),
                    console.log(err.message)
                })
            }else {
                await fetch(`https://dark-portfolio-api.onrender.com/api/featured/${proj._id}`,{
                    method:'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': `${sessionStorage.getItem("token")}`
                    },
                    body:JSON.stringify({
                        "enName": data.enName,
                        "arName": data.arName,
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
      {!proj.name
      ?(<Spinner/>)
      :(<>
        {alert[0]}
        <Title project={proj.name}/>
        <Form 
              formId={"UpdateFeaturedForm"} 
              onreset={resetUploadedFile} onsubmit={function(e){updateFeatured(e)}} 
              waite={waite} id={"updateFeaturedSubmit"} title={"save"}
              >
              <TitleInput 
                title={"name"} idEn={"enName"} idAr={"arName"} nameEn={"enName"} nameAr={"arName"} 
                defaultEn={proj.enName} defaultAr={proj.arName}
              />
              <div className="flex flex-col gap-2 items-center justify-start col-span-2">
                <ImagesShowing 
                    id={"showImage"+proj._id} project={proj} state={uploadedFiles} justImage={true}
                />
                <UploadBtn 
                    id={"uploadImages"} state={uploadedFiles} justImage={true}
                    onchange={function(e){setUploadedFiles(UploadHandle(e, "showImage"+proj._id))}}
                />
              </div>
        </Form>
        </>)}
    </Section>
  );
};

export default FeaturedUpdate;
>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
