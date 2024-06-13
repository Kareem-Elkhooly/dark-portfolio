import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife, faAngleLeft, faAngleRight, faCircleExclamation, faSpinner, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { arFontFamily, enFontFamily } from "./Variables";

const ContactFeildsCom = () => {
    const [waite, setWaite] = useState("no")

    const messageSent = ()=> {
        if(localStorage.getItem("language") === "arabic"){
            return (
                <div className={`text-[1rem] text-gainsboro-100 ${arFontFamily}`}>
                    <FontAwesomeIcon icon={faCircleCheck} className="ml-2 align-middle" style={{color: "#63E6BE",}} />
                    تم الإرسال بنجاح
                </div>
            )
        }else{
            return (
                <div className="text-[1rem] text-gainsboro-100">
                    <FontAwesomeIcon icon={faCircleCheck} className="mr-2 mb-[3px] align-middle" style={{color: "#63E6BE",}} />
                    Message sent successfully
                </div>
            )
        }
    }
    const messageError = (enMessage, arMessage)=>{
        if(localStorage.getItem("language") === "arabic"){
            return (
                <div className={`text-[1rem] text-gainsboro-100 ${arFontFamily}`}>
                    <FontAwesomeIcon icon={faCircleExclamation} className="ml-2 mb-[2px] align-middle" style={{color: "#f05151",}} />
                    {arMessage}
                </div>
            )
        }else {
            return (
                <div className="text-[1rem] text-gainsboro-100">
                    <FontAwesomeIcon icon={faCircleExclamation} className="mr-2 mb-[3px] align-middle" style={{color: "#f05151",}} />
                    {enMessage}
                </div>
            )
        }
    }
    const [message,setMessage] = useState("") 
    const back = () => {
        window.history.back()
    };

    const submit = async (e) => {
        e.preventDefault()
        setWaite("yes")
        const form = document.getElementById("form");
        const formData = new FormData(form);
        if(formData.get("name") === ""){
            formData.delete("name")
        }
        if(formData.get("phone") === ""){
            formData.delete("phone")
        }
        const data = Object.fromEntries(formData)
        // Validate the form data
        const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        const emailValdate = emailRegExp.test(formData.get("email"));
        if(!emailValdate){
            setWaite("no")
            setMessage(messageError("Insert a valid email!", "قم بإدخال إيميل صالح!"))
            document.getElementById("email").focus()
        }else if(!parseFloat(formData.get("phone")) && formData.get("phone") ) {
            setWaite("no")
            setMessage(messageError("Phone must be a number!", "الهاتف يجب ان يكون رقم!"))
            document.getElementById("phone").focus()
        }else if(formData.get("message").split("").length < 2){
            setWaite("no")
            setMessage(messageError("Message is very short!", "الرسالة قصيرة جدا!"))
            document.getElementById("message").focus()
        }else{
            await fetch('https://dark-portfolio-api.onrender.com/api/message',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data),
            })
            .then(res => res.json())
            .then(data => data.message ? (
                setWaite("no"),
                setMessage(messageSent()),
                setTimeout(()=>setMessage(""),3000),
                document.getElementById("name").value = "",
                document.getElementById("email").value = "",
                document.getElementById("phone").value = "",
                document.getElementById("message").value = ""
                ):(
                setWaite("no"),
                setMessage(messageError("Connection fild, try again!", "اتصال سئ، اعد المحاولة!")),
                setTimeout(()=>setMessage(""),3000)
                ))
        }
    }

    const label = (to, title, required, textEdit, optional)=>{
        if(required === true){
            return (
                <label htmlFor={to} className={`${textEdit} font-bold`}>
                    <FontAwesomeIcon className="text-[0.5rem] text-zinc-400 pr-1" icon={faStarOfLife} />{title}
                </label>
            )
        }else {
            return (
                <label htmlFor={to} className={`${textEdit} font-bold`}>
                    {title} <span className="text-[0.95rem] text-gainsboro-200">({optional})</span>
                </label>
            )
        }
    }

  return (
    <section id="contactMe" className={`${enFontFamily} w-full flex items-center justify-center pt-[100px] pb-10 main-container contact-screen text-center text-[1.1rem] text-gainsboro-100`}>
      <form id="form" className="flex flex-col items-start justify-center gap-[1.3rem] w-[35rem] max-w-full border-4 border-darkslategray border-solid rounded-xl">
        {localStorage.getItem("language") === "arabic"
        ?(
            <div className="gap-1 w-full bg-darkslategray rounded-md text-left mb-5 pt-4 px-8 pb-3">
                <p className={`${arFontFamily} text-[1.4rem] maxmob:text-[1.2rem] smmob:text-[1.1rem] flex items-center justify-between font-bold m-0`}>
                    معـلومات الإتصال<FontAwesomeIcon onClick={back} icon={faAngleRight} className="text-[1.3rem] cursor-pointer"/>
                </p>
            </div>
        )
        :(
            <div className="gap-1 w-full bg-darkslategray rounded-md text-left mb-5 pt-4 px-8 pb-3">
                <p className="m-0 tracking-[-0.5px] flex items-center justify-between font-bold text-[1.6rem] maxmob:text-[1.4rem] smmob:text-[1.1rem]">
                    Contact Informations<FontAwesomeIcon onClick={back} icon={faAngleLeft} className="text-[1.3rem] cursor-pointer"/>
                </p>
            </div>
        )}
        <div className="flex flex-col items-start justify-center gap-[1.3rem] pb-5 px-8 w-full">
            <div className="flex flex-col items-start gap-1 w-full">
                {localStorage.getItem("language") === "arabic"
                    ?(label("name", "الإسم", false, `${arFontFamily} smmob:text-[1.05rem]`, "إختياري"))
                    :(label("name", "Name", false, "tracking-[-0.5px]", "optional"))
                }
                <input type="text" name="name" id="name" className="font-['Cairo'] text-gainsboro-100 w-full p-2 text-[1rem] h-[2.2rem] bg-darkslategray border-2 border-transparent border-solid rounded focus-visible:border-zinc-700 focus-visible:outline-none"></input>
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
                {localStorage.getItem("language") === "arabic"
                    ?(label("email", "الإيميل", true, `${arFontFamily} smmob:text-[1.05rem]`))
                    :(label("email", "Email", true, "tracking-[-0.5px]"))
                }
                <input type="text" name="email" id="email" className="font-['Cairo'] text-gainsboro-100 bg-darkslategray w-full p-2 text-[1rem] h-[2.2rem] border-2 border-transparent border-solid rounded focus-visible:border-zinc-700 focus-visible:outline-none"></input>
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
                {localStorage.getItem("language") === "arabic"
                    ?(label("phone", "رقم الهاتف", false, `${arFontFamily} smmob:text-[1.05rem]`, "إختياري"))
                    :(label("phone", "Phone", false, "tracking-[-0.5px]", "optional"))
                }
                <input type="text" name="phone" id="phone" className="font-['Cairo'] text-gainsboro-100 bg-darkslategray w-full p-2 text-[1rem] h-[2.2rem] border-2 border-transparent border-solid rounded focus-visible:border-zinc-700 focus-visible:outline-none"></input>
            </div>
            <div className="flex flex-col items-start gap-1 w-full max-w-full ">
                {localStorage.getItem("language") === "arabic"
                    ?(label("message", "الرسالة", true, `${arFontFamily} smmob:text-[1.05rem]`))
                    :(label("message", "Message", true, "tracking-[-0.5px]"))
                }
                <textarea id="message" name="message" className="font-['Cairo'] text-gainsboro-100 bg-darkslategray p-2 text-[1rem] w-full h-[5rem] border-2 border-transparent border-solid rounded focus-visible:border-zinc-700 focus-visible:outline-none"></textarea>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <div>
                    {message}
                </div>
                {waite==="yes"?(
                    <button type="submit" disabled className="opacity-70 flex items-center justify-center gap-2 text-[1rem] px-6 py-2 rounded font-semibold bg-gainsboro-200 text-darkslategray transition-all duration-200 ease-in">
                        <FontAwesomeIcon icon={faSpinner} spinPulse spin className="mb-[1px]" /> 
                    </button>
                ):(
                    <>
                        {localStorage.getItem("language") === "arabic"
                            ?(<button type="submit" id="sendMessageSubmit" onClick={function(e){submit(e)}} className={`${arFontFamily} flex items-center justify-center gap-2 text-[1rem] px-6 py-2 rounded cursor-pointer font-semibold bg-gainsboro-200 hover:bg-darkslategray text-darkslategray hover:text-gainsboro-200 transition-all duration-200 ease-in`}>
                                إرسال
                                <FontAwesomeIcon icon={faPaperPlane} className="mb-[1px] smmob:mb-[2px]" />
                            </button>)
                            :(<button type="submit" id="sendMessageSubmit" onClick={function(e){submit(e)}} className="flex items-center justify-center gap-2 text-[1rem] px-6 py-2 rounded cursor-pointer font-semibold bg-gainsboro-200 hover:bg-darkslategray text-darkslategray hover:text-gainsboro-200 transition-all duration-200 ease-in">
                                Send
                                <FontAwesomeIcon icon={faPaperPlane} className="mb-[1px]" />
                            </button>)
                        }
                    </>
                )}
            </div>
        </div>
      </form>
    </section>
  );
};

export default ContactFeildsCom;
