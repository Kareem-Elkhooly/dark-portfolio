import React, { useEffect, useState } from "react";
import Section from "./components/Section";
import Title from "./components/Title";
import Form from "./components/Form";
import TitleInput from "./components/TitleInput";
import SweetAlert from "./components/SweetAlert";
import ErrorAlert from "./components/ErrorAlert";

const AdminsAddNew = () => {
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

    const addNewAdmin = async (e)=>{
        e.preventDefault()
        setWaite("yes")
        const form = document.getElementById("newAdminForm");
        const formData = new FormData(form);
        const data = Object.fromEntries(formData)
        // Validate the form data
        const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        const emailValidate = emailRegExp.test(formData.get("email"));
        if(!data.name || !data.email || !data.password){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "please fill all fields"), true])
        }else if(!emailValidate){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "this is invalid email"), true])
        }else if(data.password.split("").length < 8){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "password is very weak"), true])
        }else {
             await fetch('https://dark-portfolio-api.onrender.com/api/admin',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${sessionStorage.getItem("token")}`
                },
                body:JSON.stringify({
                    "name": data.name,
                    "email": data.email,
                    "password": data.password
                }),
            })
            .then(res => res.json())
            .then(result => {
                setWaite("no")
                if(result.message){
                    setAlert([sweetAlertErr("opacity-1", "this email is already exists!"), true])
                }else{
                    setAlert([sweetAlert("opacity-1"), true])
                }
            })
            .catch(err => {
                setWaite("no"),
                setAlert([sweetAlertErr("opacity-1", "somthing wrong!, try again"), true])
            })
        }
    }

  return (
    <Section>
        {alert[0]}
        <Title addNewTitle={"new admin"}/>
        <Form 
            formId={"newAdminForm"} 
            onsubmit={function(e){addNewAdmin(e)}} 
            waite={waite} id={"addAdminSubmit"} title={"add"}
            >
            <TitleInput 
                justInput={true} title={"name"} id={"name"}
            />
            <TitleInput 
                justInput={true} title={"email"} id={"email"} type={"email"}
            />
            <TitleInput 
                justInput={true} title={"password"} id={"password"} type={"password"}
            />
        </Form>
    </Section>
  );
};

export default AdminsAddNew;
