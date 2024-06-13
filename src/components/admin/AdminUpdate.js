<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Section from "./components/Section";
import Spinner from "./components/Spinner";
import Title from "./components/Title";
import Form from "./components/Form";
import TitleInput from "./components/TitleInput";
import SweetAlert from "./components/SweetAlert";
import ErrorAlert from "./components/ErrorAlert";

const AdminUpdate = () => {
    const [admin, setAdmin] = useState("");
    const [waite, setWaite] = useState("no")

    useEffect(()=>{
        const lastPathName = (window.location.pathname).split("/");
        const adminId = lastPathName[lastPathName.length-1]
        runFetch(adminId);
    },[])
    const runFetch = async(adminId)=>{
        await fetch(`https://dark-portfolio-api.onrender.com/api/admin/${adminId}`, {
            headers : {
                'token': `${sessionStorage.getItem("token")}`
            }
        })
        .then((res) => res.json())
        .then((data) => setAdmin(data))
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
    
    const updateAdmin = async (e)=>{
        e.preventDefault()
        setWaite("yes")
        const form = document.getElementById("updateAdminForm");
        const formData = new FormData(form);
        const data = Object.fromEntries(formData)
        // Validate the form data
        const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        const emailValidate = emailRegExp.test(formData.get("email"));
        if(data.email && !emailValidate){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "this is invalid email"), true])
        }else if(data.password && data.password.split("").length < 8){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "password is very weak"), true])
        }else if(data.password){
        await fetch(`https://dark-portfolio-api.onrender.com/api/admin/${admin._id}`,{
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${sessionStorage.getItem("token")}`
                },
                body:JSON.stringify({
                    name: data.name? data.name : admin.name,
                    email: data.email? data.email : admin.email,
                    password: data.password,
                }),
            })
            .then(res => res.json())
            .then(result => {
                setWaite("no")
                if(result.message){
                    setAlert([sweetAlertErr("opacity-1", "this email is already exists!"), true])
                }else{
                    setAlert([sweetAlert("opacity-1"), true]),
                    sessionStorage.setItem("admin", data.name? data.name : admin.name)
                }
            })
            .catch(err => {
                setWaite("no"),
                setAlert([sweetAlertErr("opacity-1", "somthing wrong!, try again"), true])
            })
        }else{
            await fetch(`https://dark-portfolio-api.onrender.com/api/admin/${admin._id}`,{
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${sessionStorage.getItem("token")}`
                },
                body:JSON.stringify({
                    name: data.name? data.name : admin.name,
                    email: data.email? data.email : admin.email,
                }),
            })
            .then(res => res.json())
            .then(result => {
                setWaite("no")
                if(result.message){
                    setAlert([sweetAlertErr("opacity-1", "this email is already exists!"), true])
                }else{
                    setAlert([sweetAlert("opacity-1"), true]),
                    sessionStorage.setItem("admin", data.name? data.name : admin.name)
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
      {!admin.name
      ?(<Spinner/>)
      :(<>
        {alert[0]}
        <Title project={admin.name}/>
        <Form 
            formId={"updateAdminForm"} 
            onsubmit={function(e){updateAdmin(e)}} 
            waite={waite} id={"updateAdminSubmit"} title={"save"}
            >
            <TitleInput 
                justInput={true} title={"name"} id={"name"} defaultVal={admin.name} placeholder={"change it or leave it as it"}
            />
            <TitleInput 
                justInput={true} title={"email"} id={"email"} type={"email"} defaultVal={admin.email} placeholder={"change it or leave it as it"}
            />
            <TitleInput 
                justInput={true} title={"password"} id={"password"} type={"password"} placeholder={"change it or leave it as it"}
            />
        </Form>
        </>)}
    </Section>
  );
};

export default AdminUpdate;
=======
import React, { useEffect, useState } from "react";
import Section from "./components/Section";
import Spinner from "./components/Spinner";
import Title from "./components/Title";
import Form from "./components/Form";
import TitleInput from "./components/TitleInput";
import SweetAlert from "./components/SweetAlert";
import ErrorAlert from "./components/ErrorAlert";

const AdminUpdate = () => {
    const [admin, setAdmin] = useState("");
    const [waite, setWaite] = useState("no")

    useEffect(()=>{
        const lastPathName = (window.location.pathname).split("/");
        const adminId = lastPathName[lastPathName.length-1]
        runFetch(adminId);
    },[])
    const runFetch = async(adminId)=>{
        await fetch(`https://dark-portfolio-api.onrender.com/api/admin/${adminId}`, {
            headers : {
                'token': `${sessionStorage.getItem("token")}`
            }
        })
        .then((res) => res.json())
        .then((data) => setAdmin(data))
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
    
    const updateAdmin = async (e)=>{
        e.preventDefault()
        setWaite("yes")
        const form = document.getElementById("updateAdminForm");
        const formData = new FormData(form);
        const data = Object.fromEntries(formData)
        // Validate the form data
        const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        const emailValidate = emailRegExp.test(formData.get("email"));
        if(data.email && !emailValidate){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "this is invalid email"), true])
        }else if(data.password && data.password.split("").length < 8){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "password is very weak"), true])
        }else if(data.password){
        await fetch(`https://dark-portfolio-api.onrender.com/api/admin/${admin._id}`,{
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${sessionStorage.getItem("token")}`
                },
                body:JSON.stringify({
                    name: data.name? data.name : admin.name,
                    email: data.email? data.email : admin.email,
                    password: data.password,
                }),
            })
            .then(res => res.json())
            .then(result => {
                setWaite("no")
                if(result.message){
                    setAlert([sweetAlertErr("opacity-1", "this email is already exists!"), true])
                }else{
                    setAlert([sweetAlert("opacity-1"), true]),
                    sessionStorage.setItem("admin", data.name? data.name : admin.name)
                }
            })
            .catch(err => {
                setWaite("no"),
                setAlert([sweetAlertErr("opacity-1", "somthing wrong!, try again"), true])
            })
        }else{
            await fetch(`https://dark-portfolio-api.onrender.com/api/admin/${admin._id}`,{
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${sessionStorage.getItem("token")}`
                },
                body:JSON.stringify({
                    name: data.name? data.name : admin.name,
                    email: data.email? data.email : admin.email,
                }),
            })
            .then(res => res.json())
            .then(result => {
                setWaite("no")
                if(result.message){
                    setAlert([sweetAlertErr("opacity-1", "this email is already exists!"), true])
                }else{
                    setAlert([sweetAlert("opacity-1"), true]),
                    sessionStorage.setItem("admin", data.name? data.name : admin.name)
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
      {!admin.name
      ?(<Spinner/>)
      :(<>
        {alert[0]}
        <Title project={admin.name}/>
        <Form 
            formId={"updateAdminForm"} 
            onsubmit={function(e){updateAdmin(e)}} 
            waite={waite} id={"updateAdminSubmit"} title={"save"}
            >
            <TitleInput 
                justInput={true} title={"name"} id={"name"} defaultVal={admin.name} placeholder={"change it or leave it as it"}
            />
            <TitleInput 
                justInput={true} title={"email"} id={"email"} type={"email"} defaultVal={admin.email} placeholder={"change it or leave it as it"}
            />
            <TitleInput 
                justInput={true} title={"password"} id={"password"} type={"password"} placeholder={"change it or leave it as it"}
            />
        </Form>
        </>)}
    </Section>
  );
};

export default AdminUpdate;
>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
