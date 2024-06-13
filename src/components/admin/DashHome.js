import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { enFontFamily } from "../Variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faEnvelopeOpenText, faListOl, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../../redux/slices/messages-slice";
import Dates from "./components/Dates";

const DashHome = () => {
  const messages = useSelector((state)=> state.messages)
  const globalInfo = useSelector((state)=> state.globalInfo)
  const projects = useSelector((state)=> state.projects)
  const quickProjects = useSelector((state)=> state.quickProjects)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessages());
  },[]);

  const statsItem = (title, value, lastUpdate, available)=>{
    return(
      <div className="text-[1rem] font-medium py-2 font-['Cairo']">
        <div className="flex justify-between items-center smmob:items-start bg-gainsboro-200 rounded-md py-1 px-6 smmob:py-3">
          <div className="text-gray capitalize">{title}</div>
          <div className="flex gap-10 items-center justify-center smmob:items-end smmob:flex-col smmob:gap-1">
            <div className="flex gap-2 items-center justify-center">
              {available === true?(
                <span className="h-[0.5rem] w-[0.5rem] mt-[2.4px] bg-green-600 rounded-[50%]"></span>
              ):(available === false ?(
                <span className="h-[0.5rem] w-[0.5rem] mt-[2.4px] bg-darkslategray rounded-[50%]"></span>
              ):(null))}
              <span className="capitalize">{value}</span>
            </div>
            <div className="flex flex-col text-[0.9rem] text-darkslategray items-start justify-center smmob:flex-row smmob:gap-2">
              <span className="capitalize">last update</span>
              <div className="">
                <span>{new Date(lastUpdate).getDate()}</span>{"/"}
                <span>{new Date(lastUpdate).getMonth()}</span>{"/"}
                <span>{new Date(lastUpdate).getFullYear()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <section className={`${enFontFamily} flex flex-col justify-start gap-10 items-center w-full text-[1.1rem] text-gray`}>
      <div className="w-full flex flex-col items-start justify-start gap-2 mb-[3rem] smmob:mb-[1rem]">
        <h2 className="m-0 capitalize">Welcome, {sessionStorage.getItem("admin").split(" ")[0]}</h2>
        <p className="m-0 text-darkslategray">Let's go, you can start update the website informations now.</p>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center w-full text-[1.3rem]">
          <div className="flex justify-start gap-2 items-center">
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="mb-[2.5px]"/>
            <span className="whitespace-nowrap">Messages</span>
          </div>
          <div className="flex justify-start gap-2 items-center">
            {!messages.loading && messages.data.length >= 1?(
              <span className="whitespace-nowrap text-[0.9rem] text-whitesmoke bg-darkslategray px-3 py-1 rounded-md">
                {messages.data.length}+
              </span>
            ):(null)}
          </div>
        </div>
        <div className="flex flex-col gap-3 p-3 w-full mt-4 border-2 border-solid border-gainsboro-200 rounded-md">
          <div className="flex justify-between items-center text-[1.1rem]">
            <div className="text-gray capitalize">last one</div>
            <Link to="/admin/dashboard/inbox" className="no-underline text-gray hover:text-darkslategray flex justify-end items-center">
              view all
              <FontAwesomeIcon icon={faArrowRightLong} className="ml-1 mt-[3px] text-[1rem]" />
            </Link>
          </div>
            {messages.loading ? (
              <div className="text-[1.5rem] mb-[2.5rem] text-center animate-pulse text-darkslategray font-semibold">
                <FontAwesomeIcon icon={faSpinner} spinPulse spin />
              </div>
            ):(null)}
            {messages.error && !messages.loading ?(
              <div>
                <p className="text-[1.1rem] mb-[2.5rem] text-darkslategray text-center">bad connection!, please try again later.</p>
              </div>
            ):(null)}
            {!messages.loading && messages.data.length >= 1?(
              <div className="bg-gainsboro-200 text-left rounded-md p-5 font-['Cairo']">
                <div className="w-full flex justify-between items-center text-[1rem] text-darkslategray">
                  <div className="lowercase">{!messages.data[messages.data.length-1].name?("Guest"):(messages.data[messages.data.length-1].name)}</div>
                  <Dates object={messages.data[messages.data.length-1]} createdJust={true}/>
                </div>
                <div className="py-6 px-2 text-center">{messages.data[messages.data.length-1].message}</div>
                <div className="text-[1rem] text-darkslategray text-right">{!messages.data[messages.data.length-1].phone?(""):(messages.data[messages.data.length-1].phone)}</div>
                <div className="text-[1rem] text-darkslategray text-right">{messages.data[messages.data.length-1].email}</div>
              </div>
            ):!messages.loading && messages.data.length === 0 && !messages.error ?(
              <div>
                <p className="text-[1.2rem] text-darkslategray text-center">No messages yet.</p>
              </div>
            ):(null)}
        </div>
      </div>
      <div className="w-full">
        <div className="w-full text-[1.3rem]">
          <div className="flex justify-start gap-2 items-center">
            <FontAwesomeIcon icon={faListOl} className="mb-[2.5px]"/>
            <span className="whitespace-nowrap">Stats</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-3 w-full mt-4 border-2 border-solid border-gainsboro-200 rounded-md">
          {globalInfo.loading || projects.loading || quickProjects.loading ?(
            <div className="text-[1.5rem] py-8 text-center animate-pulse text-darkslategray font-semibold"><FontAwesomeIcon icon={faSpinner} spinPulse spin /></div>
          ):(null)}
          {!globalInfo.loading && !projects.loading && !quickProjects.loading && globalInfo.error && projects.error && quickProjects.error ?(
            <div>
              <p className="text-[1.1rem] py-8 text-darkslategray text-center">bad connection!, please try again later.</p>
            </div>
          ):(null)}
          {!globalInfo.loading && globalInfo.data.updatedAt ?(
            <>
              {globalInfo.data.availability === true ?(
                statsItem("availability", "available", `${globalInfo.data.updatedAt}`, true)
              ):(
                statsItem("availability", "not available", `${globalInfo.data.updatedAt}`, false)
              )}
            </>
          ):(null)}
          {!projects.loading && projects.data.length > 0 ?(
            statsItem("projects", `${projects.data.length}`, `${projects.data[projects.data.length-1].updatedAt}`)
          ):(null)}
          {!quickProjects.loading && quickProjects.data.length > 0 ?(
            statsItem("quick projects", `${quickProjects.data.length}`, `${quickProjects.data[quickProjects.data.length-1].updatedAt}`)
          ):(null)}
          {!globalInfo.loading && globalInfo.data.updatedAt ?(
            statsItem("accounts", `${Object.keys(globalInfo.data.accounts).length}`, `${globalInfo.data.updatedAt}`)
          ):(null)}
        </div>
      </div>
    </section>
  );
};

export default DashHome;
