<<<<<<< HEAD
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

import { enFontFamily } from "../Variables";

const LoginFeilds = () => {
    const [waite, setWaite] = useState("no")
    const messageError = (enMessage)=>{
        return (
            <div className="text-[1rem] text-gainsboro-100">
                <FontAwesomeIcon icon={faCircleExclamation} className="mr-2 mb-[3px] align-middle" style={{color: "#f05151",}} />
                {enMessage}
            </div>
        )
    }
    const [message,setMessage] = useState("") 

    const submit = (e) => {
        e.preventDefault()
        setWaite("yes")
        const form = document.getElementById("loginForm");
        const formData = new FormData(form);
        const data = Object.fromEntries(formData)
        // Validate the form data
        const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        const emailValidate = emailRegExp.test(formData.get("email"));
        if(!emailValidate){
            setWaite("no")
            setMessage(messageError("Insert a valid email!"))
            document.getElementById("email").focus()
        }else if(formData.get("password") === ""){
            setWaite("no")
            setMessage(messageError("Insert a password!"))
            document.getElementById("password").focus()
        }else{
            fetch('https://dark-portfolio-api.onrender.com/admin/login',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data),
            })
            .then(res => res.json())
            .then(data => data._id ?(
                setWaite("no"),
                sessionStorage.setItem("login", true),
                sessionStorage.setItem("token", data.token),
                sessionStorage.setItem("admin", data.name),
                sessionStorage.setItem("adminId", data._id),
                setMessage(""),
                window.location.href = "/admin/dashboard"
            ):(
                setWaite("no"),
                setMessage(messageError("invalid email or password")
            )))
        }
    }
    function showPassword() {
        let input = document.getElementById("password");
        if (input.type === "password") {
                input.type = "text";
        } else {
                input.type = "password";
            }
        }

  return (
    <section id="contactMe" dir="ltr" className={`${enFontFamily} w-full flex items-center justify-center pt-[100px] pb-10 main-container contact-screen text-center text-[1.1rem] text-gainsboro-100`}>
      <form id="loginForm" onSubmit={submit} className="flex flex-col items-start justify-center gap-[1.3rem] w-[30rem] max-w-full border-darkslategray border-solid rounded-md">
        <div className="gap-1 w-full bg-darkslategray mb-9 pt-4 rounded-md pb-3">
            <p className="m-0 tracking-[-0.5px] text-center font-semibold text-[1.5rem] maxmob:text-[1.4rem] smmob:text-[1.1rem]">
                Admin Login
            </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-[1.5rem] w-full">
            <div className="flex flex-col items-start gap-1 w-full">
                <label htmlFor="email" className={`tracking-[-0.5px] font-bold`}>
                    Email
                </label>
                <input type="text" name="email" id="email" className="text-gainsboro-100 bg-darkslategray w-full p-3 text-[1.1rem] h-[2.4rem] border-2 border-transparent border-solid rounded focus-visible:border-zinc-700 focus-visible:outline-none"/>
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
                <label htmlFor="password" className={`tracking-[-0.5px] font-bold`}>
                    Password
                </label>
                <div className="w-full relative h-fit">
                    <input type="password" name="password" id="password" className="text-gainsboro-100 bg-darkslategray w-full p-3 text-[1.1rem] h-[2.4rem] border-2 border-transparent border-solid rounded focus-visible:border-zinc-700 focus-visible:outline-none"/>
                    <div 
                        onClick={function(){showPassword()}} 
                        className="absolute text-[1rem] top-1/2 -translate-y-1/2 right-2 cursor-pointer text-gainsboro-200 hover:text-gainsboro-100 transition-all duration-100 ease-in"
                    >
                        <FontAwesomeIcon icon={faEyeSlash} />
                    </div>
                </div>
            </div>
            <div className="flex items-center w-full justify-between">
                <div>
                    {message}
                </div>
                <Link to="/admin/forgetPassword" className="text-[1rem] cursor-pointer font-semibold text-gainsboro-200 hover:text-gainsboro-100 transition-all duration-200 ease-in">forget password?</Link>
            </div>
            <div className="flex items-end justify-end w-full mt-6">
                {waite==="yes"?(
                    <button type="submit" disabled className="opacity-70 text-[1.1rem] px-8 py-2 rounded font-semibold bg-gainsboro-200 text-darkslategray transition-all duration-200 ease-in">
                        <FontAwesomeIcon icon={faSpinner} spin fade className="mb-[1px]" /> 
                    </button>
                ):(
                    <button 
                        type="submit" value="login" 
                        className="text-[1.1rem] px-8 py-2 rounded cursor-pointer font-semibold bg-gainsboro-200 hover:bg-darkslategray text-darkslategray hover:text-gainsboro-200 transition-all duration-200 ease-in"
                    >
                        Login
                    </button>
                )}
            </div>
        </div>
      </form>
    </section>
  );
};

export default LoginFeilds;
=======
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

import { enFontFamily } from "../Variables";

const LoginFeilds = () => {
    const [waite, setWaite] = useState("no")
    const messageError = (enMessage)=>{
        return (
            <div className="text-[1rem] text-gainsboro-100">
                <FontAwesomeIcon icon={faCircleExclamation} className="mr-2 mb-[3px] align-middle" style={{color: "#f05151",}} />
                {enMessage}
            </div>
        )
    }
    const [message,setMessage] = useState("") 

    const submit = (e) => {
        e.preventDefault()
        setWaite("yes")
        const form = document.getElementById("loginForm");
        const formData = new FormData(form);
        const data = Object.fromEntries(formData)
        // Validate the form data
        const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        const emailValidate = emailRegExp.test(formData.get("email"));
        if(!emailValidate){
            setWaite("no")
            setMessage(messageError("Insert a valid email!"))
            document.getElementById("email").focus()
        }else if(formData.get("password") === ""){
            setWaite("no")
            setMessage(messageError("Insert a password!"))
            document.getElementById("password").focus()
        }else{
            fetch('https://dark-portfolio-api.onrender.com/admin/login',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data),
            })
            .then(res => res.json())
            .then(data => data._id ?(
                setWaite("no"),
                sessionStorage.setItem("login", true),
                sessionStorage.setItem("token", data.token),
                sessionStorage.setItem("admin", data.name),
                sessionStorage.setItem("adminId", data._id),
                setMessage(""),
                window.location.href = "/admin/dashboard"
            ):(
                setWaite("no"),
                setMessage(messageError("invalid email or password")
            )))
        }
    }
    function showPassword() {
        let input = document.getElementById("password");
        if (input.type === "password") {
                input.type = "text";
        } else {
                input.type = "password";
            }
        }

  return (
    <section id="contactMe" dir="ltr" className={`${enFontFamily} w-full flex items-center justify-center pt-[100px] pb-10 main-container contact-screen text-center text-[1.1rem] text-gainsboro-100`}>
      <form id="loginForm" onSubmit={submit} className="flex flex-col items-start justify-center gap-[1.3rem] w-[30rem] max-w-full border-darkslategray border-solid rounded-md">
        <div className="gap-1 w-full bg-darkslategray mb-9 pt-4 rounded-md pb-3">
            <p className="m-0 tracking-[-0.5px] text-center font-semibold text-[1.5rem] maxmob:text-[1.4rem] smmob:text-[1.1rem]">
                Admin Login
            </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-[1.5rem] w-full">
            <div className="flex flex-col items-start gap-1 w-full">
                <label htmlFor="email" className={`tracking-[-0.5px] font-bold`}>
                    Email
                </label>
                <input type="text" name="email" id="email" className="text-gainsboro-100 bg-darkslategray w-full p-3 text-[1.1rem] h-[2.4rem] border-2 border-transparent border-solid rounded focus-visible:border-zinc-700 focus-visible:outline-none"/>
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
                <label htmlFor="password" className={`tracking-[-0.5px] font-bold`}>
                    Password
                </label>
                <div className="w-full relative h-fit">
                    <input type="password" name="password" id="password" className="text-gainsboro-100 bg-darkslategray w-full p-3 text-[1.1rem] h-[2.4rem] border-2 border-transparent border-solid rounded focus-visible:border-zinc-700 focus-visible:outline-none"/>
                    <div 
                        onClick={function(){showPassword()}} 
                        className="absolute text-[1rem] top-1/2 -translate-y-1/2 right-2 cursor-pointer text-gainsboro-200 hover:text-gainsboro-100 transition-all duration-100 ease-in"
                    >
                        <FontAwesomeIcon icon={faEyeSlash} />
                    </div>
                </div>
            </div>
            <div className="flex items-center w-full justify-between">
                <div>
                    {message}
                </div>
                <Link to="/admin/forgetPassword" className="text-[1rem] cursor-pointer font-semibold text-gainsboro-200 hover:text-gainsboro-100 transition-all duration-200 ease-in">forget password?</Link>
            </div>
            <div className="flex items-end justify-end w-full mt-6">
                {waite==="yes"?(
                    <button type="submit" disabled className="opacity-70 text-[1.1rem] px-8 py-2 rounded font-semibold bg-gainsboro-200 text-darkslategray transition-all duration-200 ease-in">
                        <FontAwesomeIcon icon={faSpinner} spin fade className="mb-[1px]" /> 
                    </button>
                ):(
                    <button 
                        type="submit" value="login" 
                        className="text-[1.1rem] px-8 py-2 rounded cursor-pointer font-semibold bg-gainsboro-200 hover:bg-darkslategray text-darkslategray hover:text-gainsboro-200 transition-all duration-200 ease-in"
                    >
                        Login
                    </button>
                )}
            </div>
        </div>
      </form>
    </section>
  );
};

export default LoginFeilds;
>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
