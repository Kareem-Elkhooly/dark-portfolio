import React, { useEffect, useState } from "react";
import Section from "./components/Section";
import Title from "./components/Title";
import Form from "./components/Form";
import TitleInput from "./components/TitleInput";
import DescriptionInput from "./components/DescriptionInput";
import SweetAlert from "./components/SweetAlert";
import ErrorAlert from "./components/ErrorAlert";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";

const LanguageInfoUpdate = () => {
    const enInfo = useSelector((state) => state.enInfo)
    const arInfo = useSelector((state) => state.arInfo)
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

    const updateLanguageInfos = async (e)=>{
        e.preventDefault()
        setWaite("yes")
        const form = document.getElementById("updateLanguageInfoForm");
        const formData = new FormData(form);
        const data = Object.fromEntries(formData)
        if( !data.firstNameEn 
            || !data.firstNameAr || !data.lastNameEn || !data.lastNameAr || !data.jopEn || !data.jopAr 
            || !data.jopDescriptionEn || !data.jopDescriptionAr || !data.contactDescriptionEn
            || !data.contactDescriptionAr || !data.fainalLetterTitleEn || !data.fainalLetterTitleAr
            || !data.fainalLetterEn || !data.fainalLetterAr || !data.typeOfAvrageCalendarEn
            || !data.typeOfAvrageCalendarAr || !data.typeOfJopWithClientsEn || !data.typeOfJopWithClientsAr
            || !data.resumeLinkEn || !data.resumeLinkAr
        ){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "please fill all fields"), true])
        }else {
            await fetch('https://dark-portfolio-api.onrender.com/api/en-info',{
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${sessionStorage.getItem("token")}`
                },
                body:JSON.stringify({
                    "firstName": data.firstNameEn,
                    "lastName": data.lastNameEn,
                    "jop": data.jopEn,
                    "jopDescription": data.jopDescriptionEn,
                    "contactDescription": data.contactDescriptionEn,
                    "fainalLetterTitle": data.fainalLetterTitleEn,
                    "fainalLetter": data.fainalLetterEn,
                    "typeOfAvrageCalendar": data.typeOfAvrageCalendarEn,
                    "typeOfJopWithClients": data.typeOfJopWithClientsEn,
                    "resumeLink": data.resumeLinkEn,
                }),
            })
            .then(res => res.json())
            .then(async project => {
                await fetch('https://dark-portfolio-api.onrender.com/api/ar-info',{
                    method:'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': `${sessionStorage.getItem("token")}`
                    },
                    body:JSON.stringify({
                        "firstName": data.firstNameAr,
                        "lastName": data.lastNameAr,
                        "jop": data.jopAr,
                        "jopDescription": data.jopDescriptionAr,
                        "contactDescription": data.contactDescriptionAr,
                        "fainalLetterTitle": data.fainalLetterTitleAr,
                        "fainalLetter": data.fainalLetterAr,
                        "typeOfAvrageCalendar": data.typeOfAvrageCalendarAr,
                        "typeOfJopWithClients": data.typeOfJopWithClientsAr,
                        "resumeLink": data.resumeLinkAr,
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

            })
            .catch(err => {
                setWaite("no"),
                setAlert([sweetAlertErr("opacity-1", "somthing wrong!, try again"), true])
            })
        }
    }

  return (
    <Section>
        {enInfo.loading || arInfo.loading?(
            <Spinner/>
        ):(null)}
        {enInfo.error && !enInfo.loading && arInfo.error && !arInfo.loading?(
            <div>
                <p className="text-[1.1rem] pt-[13rem] text-darkslategray text-center">
                    bad connection!, please try again later.
                </p>
            </div>
        ):(null)}
        {!enInfo.loading && enInfo.data && !arInfo.loading && arInfo.data?(
        <>
            {alert[0]}
            <Title project={"language informations"}/>
            <Form 
                formId={"updateLanguageInfoForm"} 
                onsubmit={function(e){updateLanguageInfos(e)}} 
                waite={waite} id={"updateLanguageInfoSubmit"} title={"save"}
                >
                <TitleInput 
                    title={"first name"} idEn={"firstNameInEnglish"} idAr={"firstNameInArabic"} 
                    nameEn={"firstNameEn"} nameAr={"firstNameAr"}
                    defaultEn={enInfo.data.firstName} defaultAr={arInfo.data.firstName}
                />
                <TitleInput 
                    title={"last name"} idEn={"lastNameInEnglish"} idAr={"lastNameInArabic"} 
                    nameEn={"lastNameEn"} nameAr={"lastNameAr"}
                    defaultEn={enInfo.data.lastName} defaultAr={arInfo.data.lastName}
                />
                <TitleInput 
                    title={"jop"} idEn={"jopInEnglish"} idAr={"jopInArabic"} 
                    nameEn={"jopEn"} nameAr={"jopAr"}
                    defaultEn={enInfo.data.jop} defaultAr={arInfo.data.jop}
                />
                <DescriptionInput
                    title={"jop description"} idEn={"jopDescriptionInEnglish"} idAr={"jopDescriptionInArabic"}
                    nameEn={"jopDescriptionEn"} nameAr={"jopDescriptionAr"}
                    defaultEn={enInfo.data.jopDescription} defaultAr={arInfo.data.jopDescription}
                />
                <DescriptionInput 
                    title={"contact description"} idEn={"contactDescriptionInEnglish"} 
                    idAr={"contactDescriptionInArabic"} 
                    nameEn={"contactDescriptionEn"} nameAr={"contactDescriptionAr"}
                    defaultEn={enInfo.data.contactDescription} defaultAr={arInfo.data.contactDescription}
                />
                <TitleInput 
                    title={"fainal letter title"} idEn={"fainalLetterTitleInEnglish"} idAr={"fainalLetterTitleInArabic"} 
                    nameEn={"fainalLetterTitleEn"} nameAr={"fainalLetterTitleAr"}
                    defaultEn={enInfo.data.fainalLetterTitle} defaultAr={arInfo.data.fainalLetterTitle}
                />
                <DescriptionInput 
                    title={"fainal letter"} idEn={"fainalLetterInEnglish"} 
                    idAr={"fainalLetterInArabic"} 
                    nameEn={"fainalLetterEn"} nameAr={"fainalLetterAr"}
                    defaultEn={enInfo.data.fainalLetter} defaultAr={arInfo.data.fainalLetter}
                />
                <TitleInput 
                    title={"time avrage type"} idEn={"typeOfAvrageCalendarInEnglish"} 
                    idAr={"typeOfAvrageCalendarInArabic"} 
                    nameEn={"typeOfAvrageCalendarEn"} nameAr={"typeOfAvrageCalendarAr"}
                    defaultEn={enInfo.data.typeOfAvrageCalendar} defaultAr={arInfo.data.typeOfAvrageCalendar}
                />
                <TitleInput 
                    title={"jop type"} idEn={"typeOfJopWithClientsInEnglish"} 
                    idAr={"typeOfJopWithClientsInArabic"} 
                    nameEn={"typeOfJopWithClientsEn"} nameAr={"typeOfJopWithClientsAr"}
                    defaultEn={enInfo.data.typeOfJopWithClients} defaultAr={arInfo.data.typeOfJopWithClients}
                />
                <TitleInput 
                    title={"resume link"} idEn={"resumeLinkInEnglish"} idAr={"resumeLinkInArabic"} 
                    nameEn={"resumeLinkEn"} nameAr={"resumeLinkAr"}
                    defaultEn={enInfo.data.resumeLink} defaultAr={arInfo.data.resumeLink} arDir={true}
                />
            </Form>
        </>
        ):(null)}
    </Section>
  );
};

export default LanguageInfoUpdate;
