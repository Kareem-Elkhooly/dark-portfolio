<<<<<<< HEAD
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { enFontFamily } from "../Variables";

const LoginFeilds = () => {
    const messageSent = ()=> {
        return (
            <div className="text-[1rem] text-gainsboro-100">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2" style={{color: "#63E6BE",}} />
                The reset Password link sent at your email
            </div>
        )
    }

    const messageError = (enMessage)=>{
        return (
            <div className="text-[1rem] text-gainsboro-100">
                <FontAwesomeIcon icon={faCircleExclamation} className="mr-2 mb-[3px] align-middle" style={{color: "#f05151",}} />
                {enMessage}
            </div>
        )
    }
    const [message,setMessage] = useState("") 
    const back = () => {
        window.history.back()
    };
    const submit = (e) => {
        e.preventDefault()
        const form = document.getElementById("loginForm");
        const formData = new FormData(form);
        const data = Object.fromEntries(formData)
        // Validate the form data
        const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        const emailValidate = emailRegExp.test(formData.get("email"));
        if(!emailValidate){
            setMessage(messageError("Insert a valid email!"))
            document.getElementById("email").focus()
        }else{

            fetch('https://dark-portfolio-api.onrender.com/admin/forgetpassword',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data),
            })
            .then(res => res.json())
            .then(data => data.message === "email not found" ?(
                setMessage(messageError("email not found"))
            ):(setMessage(messageSent())))
            .catch(err => setMessage(messageError("invalid email!")));
        }
    }

  return (
    <section id="contactMe" dir="ltr" className={`${enFontFamily} w-full flex items-center justify-center pt-[100px] pb-10 main-container contact-screen text-center text-[1.1rem] text-gainsboro-100`}>
      <form id="loginForm" onSubmit={submit} className="flex flex-col items-start justify-center gap-[1.3rem] w-[35rem] max-w-full border-4 border-darkslategray border-solid rounded-md">
        <div className="gap-1 w-full bg-darkslategray text-left mb-5 pt-3 px-8 pb-3">
            <p className="m-0 tracking-[-0.5px] flex items-center justify-between font-semibold text-[1.5rem] maxmob:text-[1.4rem] smmob:text-[1.1rem]">
                Forget Password<FontAwesomeIcon onClick={back} icon={faAngleLeft} className="text-[1.3rem] cursor-pointer"/>
            </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-[1.3rem] px-8 pb-5 w-full">
            <div className="text-left w-full text-gainsboro-200">
                Please enter your email
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
                <label htmlFor="email" className={`tracking-[-0.5px] font-bold`}>
                    Email
                </label>
                <input type="text" name="email" id="email" className="text-gainsboro-100 bg-darkslategray w-full p-3 text-[1rem] h-[2.4rem] border-2 border-transparent border-solid rounded focus-visible:border-zinc-700 focus-visible:outline-none"></input>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <div>
                    {message}
                </div>
                <button type="submit" value="send" className="text-[1rem] px-6 py-2 rounded cursor-pointer font-semibold bg-gainsboro-200 hover:bg-darkslategray text-darkslategray hover:text-gainsboro-200 transition-all duration-200 ease-in">Send</button>
            </div>
        </div>
      </form>
    </section>
  );
};

export default LoginFeilds;
=======
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { enFontFamily } from "../Variables";

const LoginFeilds = () => {
    const messageSent = ()=> {
        return (
            <div className="text-[1rem] text-gainsboro-100">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2" style={{color: "#63E6BE",}} />
                The reset Password link sent at your email
            </div>
        )
    }

    const messageError = (enMessage)=>{
        return (
            <div className="text-[1rem] text-gainsboro-100">
                <FontAwesomeIcon icon={faCircleExclamation} className="mr-2 mb-[3px] align-middle" style={{color: "#f05151",}} />
                {enMessage}
            </div>
        )
    }
    const [message,setMessage] = useState("") 
    const back = () => {
        window.history.back()
    };
    const submit = (e) => {
        e.preventDefault()
        const form = document.getElementById("loginForm");
        const formData = new FormData(form);
        const data = Object.fromEntries(formData)
        // Validate the form data
        const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        const emailValidate = emailRegExp.test(formData.get("email"));
        if(!emailValidate){
            setMessage(messageError("Insert a valid email!"))
            document.getElementById("email").focus()
        }else{

            fetch('https://dark-portfolio-api.onrender.com/admin/forgetpassword',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data),
            })
            .then(res => res.json())
            .then(data => data.message === "email not found" ?(
                setMessage(messageError("email not found"))
            ):(setMessage(messageSent())))
            .catch(err => setMessage(messageError("invalid email!")));
        }
    }

  return (
    <section id="contactMe" dir="ltr" className={`${enFontFamily} w-full flex items-center justify-center pt-[100px] pb-10 main-container contact-screen text-center text-[1.1rem] text-gainsboro-100`}>
      <form id="loginForm" onSubmit={submit} className="flex flex-col items-start justify-center gap-[1.3rem] w-[35rem] max-w-full border-4 border-darkslategray border-solid rounded-md">
        <div className="gap-1 w-full bg-darkslategray text-left mb-5 pt-3 px-8 pb-3">
            <p className="m-0 tracking-[-0.5px] flex items-center justify-between font-semibold text-[1.5rem] maxmob:text-[1.4rem] smmob:text-[1.1rem]">
                Forget Password<FontAwesomeIcon onClick={back} icon={faAngleLeft} className="text-[1.3rem] cursor-pointer"/>
            </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-[1.3rem] px-8 pb-5 w-full">
            <div className="text-left w-full text-gainsboro-200">
                Please enter your email
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
                <label htmlFor="email" className={`tracking-[-0.5px] font-bold`}>
                    Email
                </label>
                <input type="text" name="email" id="email" className="text-gainsboro-100 bg-darkslategray w-full p-3 text-[1rem] h-[2.4rem] border-2 border-transparent border-solid rounded focus-visible:border-zinc-700 focus-visible:outline-none"></input>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <div>
                    {message}
                </div>
                <button type="submit" value="send" className="text-[1rem] px-6 py-2 rounded cursor-pointer font-semibold bg-gainsboro-200 hover:bg-darkslategray text-darkslategray hover:text-gainsboro-200 transition-all duration-200 ease-in">Send</button>
            </div>
        </div>
      </form>
    </section>
  );
};

export default LoginFeilds;
>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
