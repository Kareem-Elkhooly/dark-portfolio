import React from 'react'
import Dates from './Dates'
import EditBtn from './EditBtn'

export default function InfoLanguage({state}) {

    const runItemShow = (title, value, lastOne)=>{
        if(lastOne){
            return(
                <div className='flex gap-3 smmob:flex-col smmob:gap-1 smmob:py-2 items-start justify-start w-full py-1 mb-2'>
                    <div className='min-w-[10rem] capitalize'>{title}</div>
                    <div className='smmob:px-2'>{value}</div>
                </div>
            )
        }else {
            return(
                <div className='flex gap-3 smmob:flex-col smmob:gap-1 smmob:py-2 items-start justify-start w-full py-1 border-b-[1px] border-solid border-darkgray-200'>
                    <div className='min-w-[10rem] capitalize'>{title}</div>
                    <div className='smmob:px-2'>{value}</div>
                </div>
            )
        }
    }

  return ( 
    <div key={state.data._id} className="flex flex-col gap-4 text-[1rem] text-darkslategray bg-gainsboro-100 rounded-md px-8 py-6 smmob:px-4 smmob:py-4">
        <div className="flex flex-col gap-6 items-start justify-between">
            <div className="flex justify-between gap-2 items-center capitalize text-whitesmoke text-[1.1rem] w-full bg-darkslategray py-[4px] px-4 rounded-md">
                <span>language informations</span> <EditBtn section={"languageInformations"}/>
            </div>
            <div className='flex flex-col items-start justify-start px-2'>
                <span className='text-darkslategray capitalize pb-2'>in english</span>
                {runItemShow("name", state.data.firstName+" "+state.data.lastName)}
                {runItemShow("jop", state.data.jop)}
                {runItemShow("jop description", state.data.jopDescription)}
                {runItemShow("resume link", (
                    <a href={state.data.resumeLink} className='no-underline text-gray hover:text-darkslategray transition-all duration-100 ease-in'>
                        test your link <span className='text-darkslategray'>"download resume"</span>
                    </a>
                ))}
                {runItemShow("contact description", state.data.contactDescription)}
                {runItemShow("fainal letter title", state.data.fainalLetterTitle)}
                {runItemShow("fainal letter", state.data.fainalLetter)}
                {runItemShow("time avrage type", state.data.typeOfAvrageCalendar)}
                {runItemShow("jop type", state.data.typeOfJopWithClients, true)}
                <Dates object={state.data} updatedJust={true}/>
            </div>
        </div>
    </div> 
  )
}
