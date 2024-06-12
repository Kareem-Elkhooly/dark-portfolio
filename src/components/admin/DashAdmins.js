 import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdmins } from "../../redux/slices/admins-slice";
import Section from "./components/Section";
import SectionTitle from "./components/SectionTitle";
import TopSectionBtns from "./components/TopSectionBtns";
import SectionBody from "./components/SectionBody";
import Dates from "./components/Dates";
import EditBtn from "./components/EditBtn";
import DeleteBtn from "./components/DeleteBtn";
import SweetAlert from "./components/SweetAlert";
import ErrorAlert from "./components/ErrorAlert";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const DashAdmins = () => {
  const admins = useSelector((state)=> state.admins)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdmins());
  },[]);
  
  const refresh = ()=>{
    dispatch(fetchAdmins())
  }

  const sweetAlert = (show)=>{
    return (
      <SweetAlert show={show} title={"admin deleted!"}/>
    )
  }
  const sweetAlertErr = (show)=>{
    return (
      <ErrorAlert show={show} title={"bad network!"}/>
    )
  }
  const [alert, setAlert] = useState([sweetAlert(), false])
    useEffect(()=>{
        if(alert[1] === true){
            setTimeout(()=>{
            setAlert([sweetAlert(), false])
            }, 3000)
        }
    },[alert])

  const deleteAdmin = async(id)=>{
    await fetch(`https://dark-portfolio-api.onrender.com/api/admin/${id}`,{
      method: "DELETE",
      headers: {
        "token": `${sessionStorage.getItem("token")}`
      }
    })
    .then(res => res.json())
    .then(message => (
      refresh(),
      setAlert([sweetAlert("opacity-1"), true]),
      id === sessionStorage.getItem("adminId")? (sessionStorage.removeItem("adminId"), window.location.reload()): null
      ))
    .catch(err => (
      setAlert([sweetAlertErr("opacity-1"), true])
      ))
  }
  
  return (
    <Section>
      {alert[0]}
      <SectionTitle title={"admins"} icon={faUserTie} iconEdit={"mb-[2px]"}
        description={"You can remove any one and you can add new one too, but the last one you can't delete him and you can just edit your profile"}
      />
      <div className="w-full">
        <TopSectionBtns state={admins} section={"admins"} onrefresh={refresh}/>
        <SectionBody state={admins} stateName={"admins"}>
          {admins.data.map((admin, index)=>(
            <div key={admin._id} className="flex gap-4 justify-between items-start text-[1rem] text-darkslategray bg-gainsboro-100 rounded-md px-8 py-6 smmob:px-4 smmob:py-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1 justify-start w-full items-start">
                    <span className="capitalize">{admin.name}</span>
                    <span className=" text-darkgray-200">{admin.email}</span>
                    <Dates object={admin} admin={true}/>
                </div>
              </div>
              <div className="flex flex-col items-start justify-between gap-4 bg-darkslategray py-[6px] smmob:py-2 px-4 rounded-md">
                {admins.data.length < 2?(
                    <></>
                ):(
                    <DeleteBtn onclick={function(){deleteAdmin(admin._id)}}/>
                )}
                {admin._id === sessionStorage.getItem("adminId")?(
                    <EditBtn section={"admins"} id={admin._id}/>
                ):(
                    <></>
                )}
              </div>
            </div>
           ))}
        </SectionBody>
      </div>
    </Section>
  );
};

export default DashAdmins;
