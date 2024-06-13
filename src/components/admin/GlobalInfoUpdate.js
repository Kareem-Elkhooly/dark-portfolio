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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";

const GlobalInfoUpdate = () => {
    const [info, setInfo] = useState("");
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [waite, setWaite] = useState("no")

    const runFetch = async()=>{
        await fetch(`https://dark-portfolio-api.onrender.com/api/info`)
        .then((res) => res.json())
        .then((data) => setInfo(data))
        .catch((err)=> {console.log(err)})

    }
    useEffect(()=>{
        runFetch()
    },[])

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

    const newAccount =(key, value, link)=>{
        return(
            <div key={key} id={key} className="flex flex-col w-[16rem] maxmob:w-[14rem] gap-2 justify-start items-start p-2 border border-solid border-gainsboro-200 rounded-md">
                <div className="flex gap-2 items-center w-full">
                    <select name={"accname"+key} defaultValue={value||null} className="w-full capitalize rounded-r-md rounded-l-sm font-['Cairo'] text-[0.9rem] px-2 bg-neutral-100 border-2 border-solid border-gainsboro-200 focus-visible:border-darkgray-200 focus-visible:outline-none">
                        <option value="dribbble">dribbble</option>
                        <option value="behance">behance</option>
                        <option value="facebook">facebook</option>
                        <option value="linkedin">linkedin</option>
                        <option value="figma">figma</option>
                        <option value="pinterest">pinterest</option>
                        <option value="x">x</option>
                        <option value="github">github</option>
                        <option value="sketch">sketch</option>
                        <option value="instagram">instagram</option>
                    </select>
                    <FontAwesomeIcon onClick={function(){handleDeleteAcc(key)}} icon={faTrashCan} className="cursor-pointer text-[1.1rem] hover:text-gray transition-all duration-100 ease-in" />
                </div>
                <input 
                    type={"text"} placeholder={"account link"} name={"acclink"+key} defaultValue={link||null}
                    className="w-full rounded-r-md rounded-l-sm font-['Cairo'] text-[0.9rem] px-2 bg-neutral-100 border-2 border-solid border-gainsboro-200 focus-visible:border-darkgray-200 focus-visible:outline-none"
                />
            </div>
        )
    } 
    const [accounts, setAccounts] = useState([])
    useEffect(()=>{
        if(info.accounts){
            showAccounts(info.accounts)
        }
    },[info])
    const showAccounts = (accounts)=>{
        let accountsArr = [];
        for (var key in accounts) {
            if (accounts.hasOwnProperty(key)) {
                accountsArr.push([key, accounts[key]])
            }
        }
        setAccounts(accountsArr)
    }
    
    const handleDeleteAcc = (id)=>{
        let accItem = document.getElementById(id);
        document.getElementById("accountsContainer").removeChild(accItem)
    }

    const addNewAccount = ()=>{
        const accArr = [...accounts, []]
        setAccounts(accArr) 
    }

    const resetUploadedFile =()=>{
        setUploadedFiles([])
        document.querySelectorAll("#newUploadedFile").forEach((img)=>{
            document.getElementById(`${"showImage"+proj._id}`).removeChild(img)
        })
    }

    const updateGlobalInfo = async (e)=>{
        e.preventDefault()
        setWaite("yes")
        const form = document.getElementById("UpdateGlobalInfoForm");
        const formData = new FormData(form);
        let imagesData = new FormData();
        if(uploadedFiles.length > 0){
            uploadedFiles.map((file)=>{
                imagesData.append("avatar", file)
            })
        }
        const data = Object.fromEntries(formData)
        const linkRegExp = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
        const accountsObj = {};
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                if(key.startsWith("accname")){
                    // get value for current key
                    for (var val in data) {
                        if (data.hasOwnProperty(val)) {
                            if(val.startsWith("acclink")){
                                if(key.slice(7) === val.slice(7)){
                                    if(linkRegExp.test(data[val])){
                                        accountsObj[data[key]] = data[val]
                                    }else{
                                        accountsObj.dontPass = true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        // Validate the form data
        const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        const emailValidate = emailRegExp.test(formData.get("email"));
        if(!data.siteName || !data.email || !data.clients || !data.timeAvrage || !data.totalProducts || accountsObj.length < 1){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "please fill all fields"), true])
        }else if(!emailValidate){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "invalid email"), true])
        }else if(accountsObj.dontPass){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "invalid link"), true])
        }else {
            if(uploadedFiles.length > 0){
                await fetch(`https://dark-portfolio-api.onrender.com/api/upload/avatar`,{
                method:'POST',
                headers: {
                    'token': `${sessionStorage.getItem("token")}`
                },
                body: imagesData,
                })
                .then(res => res.json())
                .then(async image => {
                    if(image.data.url){
                        await fetch(`https://dark-portfolio-api.onrender.com/api/info`,{
                            method:'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                'token': `${sessionStorage.getItem("token")}`
                            },
                            body:JSON.stringify({
                                "siteName": data.siteName,
                                "email": data.email,
                                "availability": JSON.parse(data.availability),
                                "statisticsNumbers":{
                                    "clients": +data.clients,
                                    "timeAvrage": +data.timeAvrage,
                                    "totalProducts": +data.totalProducts,
                                },
                                "accounts": accountsObj,
                                "personalPhoto": {
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
                await fetch(`https://dark-portfolio-api.onrender.com/api/info`,{
                    method:'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': `${sessionStorage.getItem("token")}`
                    },
                    body:JSON.stringify({
                        "siteName": data.siteName,
                        "email": data.email,
                        "availability": JSON.parse(data.availability),
                        "statisticsNumbers":{
                            "clients": +data.clients,
                            "timeAvrage": +data.timeAvrage,
                            "totalProducts": +data.totalProducts,
                        },
                        "accounts": accountsObj,
                    }),
                })
                .then(res => res.json())
                .then(project => {
                    setWaite("no"),
                    setAlert([sweetAlert("opacity-1"), true])
                })            
                .catch(err => {
                    setWaite("no"),
                    setAlert([sweetAlertErr("opacity-1", "somthing wrong!, try again"), true]),
                    console.log(err.message)
                })
            }
        }
    }

  return (
    <Section>
      {!info.personalPhoto
      ?(<Spinner/>)
      :(<>
        {alert[0]}
        <Title project={"global informations"}/>
        <Form 
            formId={"UpdateGlobalInfoForm"} 
            onreset={resetUploadedFile} onsubmit={function(e){updateGlobalInfo(e)}} 
            waite={waite} id={"updateGlobalInfoSubmit"} title={"save"}
            >
            <TitleInput 
                justInput={true} title={"site name"} id={"siteName"} defaultVal={info.siteName} name={"siteName"}
            />
            <TitleInput 
                justInput={true} title={"email"} type={"email"} id={"email"} defaultVal={info.email} name={"email"}
            />
            <TitleInput 
                justInput={true} title={"clients"} type={"number"} id={"clients"} defaultVal={info.statisticsNumbers.clients} name={"clients"}
            />
            <TitleInput 
                justInput={true} title={"time avrage"} type={"number"} id={"timeAvrage"} defaultVal={info.statisticsNumbers.timeAvrage} name={"timeAvrage"}
            />
            <TitleInput 
                justInput={true} title={"total products"} type={"number"} id={"totalProducts"} defaultVal={info.statisticsNumbers.totalProducts} name={"totalProducts"}
            />
            <div className="flex flex-col gap-2 items-start justify-start w-full">
                <div className="capitalize text-[1.1rem] font-semibold">availability</div>
                <div className="flex gap-7 text-darkslategray w-full max-w-[28rem] items-center justify-start border-t-2 border-solid pt-1 border-gainsboro-200">
                    <div className="flex gap-1 items-center justify-start">
                        {info.availability === true?(
                            <input type="radio" id="available" name="availability" value={true} defaultChecked className="w-[1.1rem] h-[1.1rem] ml-0"/>
                        ):(
                            <input type="radio" id="available" name="availability" value={true} className="w-[1.1rem] h-[1.1rem] ml-0"/>
                        )}
                        <label htmlFor="available">available</label>
                    </div>
                    <div className="flex gap-1 items-center justify-start">
                        {info.availability === false?(
                            <input type="radio" id="unavailable" name="availability" value={false} defaultChecked className="w-[1.1rem] h-[1.1rem] ml-0"/>
                        ):(
                            <input type="radio" id="unavailable" name="availability" value={false} className="w-[1.1rem] h-[1.1rem] ml-0"/>
                        )}
                        <label htmlFor="unavailable">unavailable</label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start col-span-2">
                <div className="capitalize text-[1.1rem] font-semibold">accounts</div>
                <div id="accountsContainer" className="flex flex-wrap gap-2 w-full  text-darkslategray items-start justify-start">
                    {accounts.length > 0 ?(
                        accounts.map((acc, index)=>{
                            const newId = index+(acc[0]||1)
                        return(
                            newAccount(newId, acc[0], acc[1]) 
                        )
                        })
                    ):(null)}
                    <div onClick={addNewAccount} className="capitalize self-stretch flex items-center justify-center cursor-pointer text-[1rem] text-darkslategray hover:text-darkgray-200 bg-gainsboro-100 px-4 hover:bg-gainsboro-200 py-[3px] border border-solid border-gainsboro-200 rounded-md transition-all duration-100 ease-in">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-start col-span-2">
                <ImagesShowing 
                    id={"showImage"+info._id} project={info} state={uploadedFiles} justImage={true} personal={true} containerTitle={"photo"}
                />
                <UploadBtn 
                    id={"uploadImages"} state={uploadedFiles} justImage={true}
                    onchange={function(e){setUploadedFiles(UploadHandle(e, "showImage"+info._id))}}
                />
            </div>
        </Form>
        </>)}
    </Section>
  );
};

export default GlobalInfoUpdate;
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";

const GlobalInfoUpdate = () => {
    const [info, setInfo] = useState("");
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [waite, setWaite] = useState("no")

    const runFetch = async()=>{
        await fetch(`https://dark-portfolio-api.onrender.com/api/info`)
        .then((res) => res.json())
        .then((data) => setInfo(data))
        .catch((err)=> {console.log(err)})

    }
    useEffect(()=>{
        runFetch()
    },[])

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

    const newAccount =(key, value, link)=>{
        return(
            <div key={key} id={key} className="flex flex-col w-[16rem] maxmob:w-[14rem] gap-2 justify-start items-start p-2 border border-solid border-gainsboro-200 rounded-md">
                <div className="flex gap-2 items-center w-full">
                    <select name={"accname"+key} defaultValue={value||null} className="w-full capitalize rounded-r-md rounded-l-sm font-['Cairo'] text-[0.9rem] px-2 bg-neutral-100 border-2 border-solid border-gainsboro-200 focus-visible:border-darkgray-200 focus-visible:outline-none">
                        <option value="dribbble">dribbble</option>
                        <option value="behance">behance</option>
                        <option value="facebook">facebook</option>
                        <option value="linkedin">linkedin</option>
                        <option value="figma">figma</option>
                        <option value="pinterest">pinterest</option>
                        <option value="x">x</option>
                        <option value="github">github</option>
                        <option value="sketch">sketch</option>
                        <option value="instagram">instagram</option>
                    </select>
                    <FontAwesomeIcon onClick={function(){handleDeleteAcc(key)}} icon={faTrashCan} className="cursor-pointer text-[1.1rem] hover:text-gray transition-all duration-100 ease-in" />
                </div>
                <input 
                    type={"text"} placeholder={"account link"} name={"acclink"+key} defaultValue={link||null}
                    className="w-full rounded-r-md rounded-l-sm font-['Cairo'] text-[0.9rem] px-2 bg-neutral-100 border-2 border-solid border-gainsboro-200 focus-visible:border-darkgray-200 focus-visible:outline-none"
                />
            </div>
        )
    } 
    const [accounts, setAccounts] = useState([])
    useEffect(()=>{
        if(info.accounts){
            showAccounts(info.accounts)
        }
    },[info])
    const showAccounts = (accounts)=>{
        let accountsArr = [];
        for (var key in accounts) {
            if (accounts.hasOwnProperty(key)) {
                accountsArr.push([key, accounts[key]])
            }
        }
        setAccounts(accountsArr)
    }
    
    const handleDeleteAcc = (id)=>{
        let accItem = document.getElementById(id);
        document.getElementById("accountsContainer").removeChild(accItem)
    }

    const addNewAccount = ()=>{
        const accArr = [...accounts, []]
        setAccounts(accArr) 
    }

    const resetUploadedFile =()=>{
        setUploadedFiles([])
        document.querySelectorAll("#newUploadedFile").forEach((img)=>{
            document.getElementById(`${"showImage"+proj._id}`).removeChild(img)
        })
    }

    const updateGlobalInfo = async (e)=>{
        e.preventDefault()
        setWaite("yes")
        const form = document.getElementById("UpdateGlobalInfoForm");
        const formData = new FormData(form);
        let imagesData = new FormData();
        if(uploadedFiles.length > 0){
            uploadedFiles.map((file)=>{
                imagesData.append("avatar", file)
            })
        }
        const data = Object.fromEntries(formData)
        const linkRegExp = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
        const accountsObj = {};
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                if(key.startsWith("accname")){
                    // get value for current key
                    for (var val in data) {
                        if (data.hasOwnProperty(val)) {
                            if(val.startsWith("acclink")){
                                if(key.slice(7) === val.slice(7)){
                                    if(linkRegExp.test(data[val])){
                                        accountsObj[data[key]] = data[val]
                                    }else{
                                        accountsObj.dontPass = true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        // Validate the form data
        const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        const emailValidate = emailRegExp.test(formData.get("email"));
        if(!data.siteName || !data.email || !data.clients || !data.timeAvrage || !data.totalProducts || accountsObj.length < 1){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "please fill all fields"), true])
        }else if(!emailValidate){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "invalid email"), true])
        }else if(accountsObj.dontPass){
            setWaite("no")
            setAlert([sweetAlertErr("opacity-1", "invalid link"), true])
        }else {
            if(uploadedFiles.length > 0){
                await fetch(`https://dark-portfolio-api.onrender.com/api/upload/avatar`,{
                method:'POST',
                headers: {
                    'token': `${sessionStorage.getItem("token")}`
                },
                body: imagesData,
                })
                .then(res => res.json())
                .then(async image => {
                    if(image.data.url){
                        await fetch(`https://dark-portfolio-api.onrender.com/api/info`,{
                            method:'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                'token': `${sessionStorage.getItem("token")}`
                            },
                            body:JSON.stringify({
                                "siteName": data.siteName,
                                "email": data.email,
                                "availability": JSON.parse(data.availability),
                                "statisticsNumbers":{
                                    "clients": +data.clients,
                                    "timeAvrage": +data.timeAvrage,
                                    "totalProducts": +data.totalProducts,
                                },
                                "accounts": accountsObj,
                                "personalPhoto": {
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
                await fetch(`https://dark-portfolio-api.onrender.com/api/info`,{
                    method:'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': `${sessionStorage.getItem("token")}`
                    },
                    body:JSON.stringify({
                        "siteName": data.siteName,
                        "email": data.email,
                        "availability": JSON.parse(data.availability),
                        "statisticsNumbers":{
                            "clients": +data.clients,
                            "timeAvrage": +data.timeAvrage,
                            "totalProducts": +data.totalProducts,
                        },
                        "accounts": accountsObj,
                    }),
                })
                .then(res => res.json())
                .then(project => {
                    setWaite("no"),
                    setAlert([sweetAlert("opacity-1"), true])
                })            
                .catch(err => {
                    setWaite("no"),
                    setAlert([sweetAlertErr("opacity-1", "somthing wrong!, try again"), true]),
                    console.log(err.message)
                })
            }
        }
    }

  return (
    <Section>
      {!info.personalPhoto
      ?(<Spinner/>)
      :(<>
        {alert[0]}
        <Title project={"global informations"}/>
        <Form 
            formId={"UpdateGlobalInfoForm"} 
            onreset={resetUploadedFile} onsubmit={function(e){updateGlobalInfo(e)}} 
            waite={waite} id={"updateGlobalInfoSubmit"} title={"save"}
            >
            <TitleInput 
                justInput={true} title={"site name"} id={"siteName"} defaultVal={info.siteName} name={"siteName"}
            />
            <TitleInput 
                justInput={true} title={"email"} type={"email"} id={"email"} defaultVal={info.email} name={"email"}
            />
            <TitleInput 
                justInput={true} title={"clients"} type={"number"} id={"clients"} defaultVal={info.statisticsNumbers.clients} name={"clients"}
            />
            <TitleInput 
                justInput={true} title={"time avrage"} type={"number"} id={"timeAvrage"} defaultVal={info.statisticsNumbers.timeAvrage} name={"timeAvrage"}
            />
            <TitleInput 
                justInput={true} title={"total products"} type={"number"} id={"totalProducts"} defaultVal={info.statisticsNumbers.totalProducts} name={"totalProducts"}
            />
            <div className="flex flex-col gap-2 items-start justify-start w-full">
                <div className="capitalize text-[1.1rem] font-semibold">availability</div>
                <div className="flex gap-7 text-darkslategray w-full max-w-[28rem] items-center justify-start border-t-2 border-solid pt-1 border-gainsboro-200">
                    <div className="flex gap-1 items-center justify-start">
                        {info.availability === true?(
                            <input type="radio" id="available" name="availability" value={true} defaultChecked className="w-[1.1rem] h-[1.1rem] ml-0"/>
                        ):(
                            <input type="radio" id="available" name="availability" value={true} className="w-[1.1rem] h-[1.1rem] ml-0"/>
                        )}
                        <label htmlFor="available">available</label>
                    </div>
                    <div className="flex gap-1 items-center justify-start">
                        {info.availability === false?(
                            <input type="radio" id="unavailable" name="availability" value={false} defaultChecked className="w-[1.1rem] h-[1.1rem] ml-0"/>
                        ):(
                            <input type="radio" id="unavailable" name="availability" value={false} className="w-[1.1rem] h-[1.1rem] ml-0"/>
                        )}
                        <label htmlFor="unavailable">unavailable</label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start col-span-2">
                <div className="capitalize text-[1.1rem] font-semibold">accounts</div>
                <div id="accountsContainer" className="flex flex-wrap gap-2 w-full  text-darkslategray items-start justify-start">
                    {accounts.length > 0 ?(
                        accounts.map((acc, index)=>{
                            const newId = index+(acc[0]||1)
                        return(
                            newAccount(newId, acc[0], acc[1]) 
                        )
                        })
                    ):(null)}
                    <div onClick={addNewAccount} className="capitalize self-stretch flex items-center justify-center cursor-pointer text-[1rem] text-darkslategray hover:text-darkgray-200 bg-gainsboro-100 px-4 hover:bg-gainsboro-200 py-[3px] border border-solid border-gainsboro-200 rounded-md transition-all duration-100 ease-in">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-start col-span-2">
                <ImagesShowing 
                    id={"showImage"+info._id} project={info} state={uploadedFiles} justImage={true} personal={true} containerTitle={"photo"}
                />
                <UploadBtn 
                    id={"uploadImages"} state={uploadedFiles} justImage={true}
                    onchange={function(e){setUploadedFiles(UploadHandle(e, "showImage"+info._id))}}
                />
            </div>
        </Form>
        </>)}
    </Section>
  );
};

export default GlobalInfoUpdate;
>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
