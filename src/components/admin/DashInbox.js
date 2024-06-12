import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../../redux/slices/messages-slice";
import SweetAlert from "./components/SweetAlert";
import ErrorAlert from "./components/ErrorAlert";
import Section from "./components/Section";
import SectionTitle from "./components/SectionTitle";
import SectionBody from "./components/SectionBody";
import DeleteBtn from "./components/DeleteBtn";
import TopSectionBtns from "./components/TopSectionBtns";
import Dates from "./components/Dates";

const DashInbox = () => {
  const messages = useSelector((state)=> state.messages)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessages());
  },[]);

  const sweetAlert = (show)=>{
    return (
      <SweetAlert show={show} title={"deleted successfully"}/>
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

  const [selectedMessages, setSelectedMessages] = useState([])
  const [selectAllTitle, setSelectAllTitle] = useState("select all")

  const deleteSelection = ()=>{
    return (
      <div id="deleteSelected" onClick={
        function (){
          if(selectedMessages.length > 0){
            selectedMessages.map(async(ele, index)=>{
              await fetch(`https://dark-portfolio-api.onrender.com/api/message/${ele}`,{
                method: "DELETE",
                headers: {
                  "token": `${sessionStorage.getItem("token")}`
                }
              }).then(res => res.json())
                .then(message => message)
                .catch(err => console.log(err))
              if(index === selectedMessages.length-1){
                dispatch(fetchMessages()),
                setAlert([sweetAlert("opacity-1"), true]),
                setSelectedMessages([])
              }
            });
          }
        }}
      className="whitespace-nowrap cursor-pointer capitalize flex gap-2 items-center justify-center text-[0.9rem] text-whitesmoke bg-red-600 px-3 hover:bg-red-500 py-1 rounded-md transition-all duration-100 ease-in">
        <span className="smmob:hidden">delete selected</span>
        <FontAwesomeIcon icon={faTrashCan} className="text-[0.85rem] py-1"></FontAwesomeIcon>
      </div>
    )
  }
  const [deleteSelected, setDeleteSelected] = useState(null)

  const deleteMessage = async(id)=>{
    await fetch(`https://dark-portfolio-api.onrender.com/api/message/${id}`,{
      method: "DELETE",
      headers: {
        "token": `${sessionStorage.getItem("token")}`
      }
    })
    .then(res => res.json())
    .then(message => (
      refresh(),
      setAlert([sweetAlert("opacity-1"), true])
      ))
    .catch(err => (
      setAlert([sweetAlertErr("opacity-1"), true])
      ))
  }

  const addSelected = (e, id)=>{
    if(e.target.checked){
      setSelectedMessages([...selectedMessages, id])
      if(selectedMessages.length+1 === messages.data.length){
        document.getElementById("selectAll").selected = true
        setSelectAllTitle("unselect")
      }
    }else if(!e.target.checked){
      let newArr = selectedMessages.filter((messID)=>{return messID !== id});
      setSelectedMessages(newArr)
      if(document.getElementById("selectAll").selected){
        document.getElementById("selectAll").selected = false
        setSelectAllTitle("select all")
      }
    }
  }

  const selectAll = (e)=>{
    if(e.target.selected === false){
      e.target.selected = true
      document.querySelectorAll(".check").forEach((ele)=>{!ele.checked?ele.click():(null)})
      let arr = [];
      messages.data.map((message)=>{arr.push(message._id)})
      setSelectedMessages(arr)
      setSelectAllTitle("unselect")
    }else {
      e.target.selected = false
      document.querySelectorAll(".check").forEach((ele)=>{ele.click()})
      setSelectedMessages([])
      setSelectAllTitle("select all")
    }
  }

  const refresh = ()=>{
    dispatch(fetchMessages()),
    setSelectedMessages([])
    if(document.getElementById("selectAll")){
      document.getElementById("selectAll").selected = false;
    }
    setSelectAllTitle("select all")
  }

  useEffect(()=>{
    if(selectedMessages.length >= 1){
      setDeleteSelected(deleteSelection)
    }else {
      setDeleteSelected(null)
    }
  },[selectedMessages])
  
  return (
    <Section>
      {alert[0]}
      <SectionTitle title={"Inbox"} icon={faInbox} description={"They are all we have."}/>
      <div className="w-full">
        <div className="flex w-full justify-end gap-2 items-center">
          {!messages.loading && messages.data.length >= 1?(
            <>
              {deleteSelected}
              <span selected={false} id="selectAll" onClick={function(e){selectAll(e)}} 
                className="whitespace-nowrap capitalize cursor-pointer text-[0.9rem] text-darkslategray hover:text-darkgray-200 bg-gainsboro-100 px-3 hover:bg-gainsboro-200 py-1 rounded-md transition-all duration-100 ease-in">
                {selectAllTitle}
              </span>
            </>
          ):(null)}
          <TopSectionBtns state={messages} onrefresh={refresh} side={true}/>
        </div>
        <SectionBody state={messages} stateName={"messages"}>
          {messages.data.toReversed().map((message, index) => (
            <div key={message.email+index} className="font-['Cairo'] flex gap-2 flex-col">
              <div className="bg-gainsboro-100 text-left py-5 px-8 smmob:px-4 smmob:py-2 rounded-b-sm rounded-t-md">
                <div className="w-full flex justify-between items-center text-[1rem] text-darkgray-200">
                  <div className="lowercase">{!message.name?("Guest"):(message.name)}</div>
                  <Dates object={message} createdJust={true}/>
                </div>
                <div className="my-8 p-2 text-center text-[1.1rem]">{message.message}</div>
                <div className="text-[1rem] text-darkgray-200 text-right">{!message.phone?(""):(message.phone)}</div>
                <div className="text-[1rem] text-darkgray-200 text-right self-end">{message.email}</div>
              </div>
              <div className="flex text-[0.9rem] items-center justify-between gap-4 w-full bg-darkslategray py-[6px] smmob:py-2 px-4 rounded-t-sm rounded-b-md">
                <DeleteBtn onclick={function(){deleteMessage(message._id)}}/>
                <label htmlFor={"check"+message._id} className="cursor-pointer flex items-center gap-2 text-whitesmoke hover:text-gainsboro-200 rounded-sm transition-all duration-100 ease-in">
                  <div className="checkboxContainer">
                    <input 
                      type="checkbox" id={"check"+message._id} value={message._id} 
                      onClick={function(e){addSelected(e, message._id)}}
                      className="check"/>
                    <span className="checkmark"></span>
                  </div>
                  <span className="smmob:hidden text-[0.95rem] smmob:text-[1.05rem] capitalize mt-[2px]">select</span>
                </label>
              </div>
            </div>
          ))}
        </SectionBody>
      </div>
    </Section>
  );
};

export default DashInbox;
