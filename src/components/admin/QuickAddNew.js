import React, { useEffect, useState } from "react";
import Section from "./components/Section";
import Title from "./components/Title";
import Form from "./components/Form";
import TitleInput from "./components/TitleInput";
import ImagesShowing from "./components/ImagesShowing";
import UploadBtn from "./components/UploadBtn";
import UploadHandle from "./components/UploadFunction";
import SweetAlert from "./components/SweetAlert";
import ErrorAlert from "./components/ErrorAlert";

const QuickAddNew = () => {
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
            document.getElementById("showUploadedImagesQuickProjs").removeChild(img)
        })
    }

    const addNewQuickProject = async (e)=>{
        e.preventDefault()
        setWaite("yes")
        const form = document.getElementById("newQuickProjectForm");
        const formData = new FormData(form);
        let imagesData = new FormData();
        if(uploadedFiles.length > 0){
            uploadedFiles.map((file)=>{
                imagesData.append("quickProj", file)
            })
        }
        const data = Object.fromEntries(formData)
        if(!data.name || uploadedFiles.length<1){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "please fill all fields"), true])
        }else {
            await fetch('https://dark-portfolio-api.onrender.com/api/upload/quickProject',{
            method:'POST',
            headers: {
                'token': `${sessionStorage.getItem("token")}`
            },
            body: imagesData,
            })
            .then(res => res.json())
            .then(async image => {
                if(image.data.url){
                    await fetch('https://dark-portfolio-api.onrender.com/api/quickProjs',{
                        method:'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'token': `${sessionStorage.getItem("token")}`
                        },
                        body:JSON.stringify({
                            "name": data.name,
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
            formId={"newQuickProjectForm"} 
            onreset={resetUploadedFile} onsubmit={function(e){addNewQuickProject(e)}} 
            waite={waite} id={"addQuickProjSubmit"} title={"add"}
            >
            <TitleInput 
                justInput={true} title={"name"} id={"name"}
            />
            <div className="flex flex-col gap-2 items-center justify-start col-span-2">
                <ImagesShowing 
                    id={"showUploadedImagesQuickProjs"}
                />
                <UploadBtn 
                    id={"uploadImages"} state={uploadedFiles} justImage={true}
                    onchange={function(e){setUploadedFiles(UploadHandle(e, "showUploadedImagesQuickProjs"))}}
                />
            </div>
        </Form>
    </Section>
  );
};

export default QuickAddNew;
