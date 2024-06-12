import React from 'react'
import Dates from './Dates'
import EditBtn from './EditBtn'

export default function InfoGlobal({state}) {
    const showAccounts = (accounts)=>{
        let accountsArr = [];
        for (var key in accounts) {
        if (accounts.hasOwnProperty(key)) {
            accountsArr.push([key, accounts[key]])
        }
        }
        return(
        <div className="flex gap-2 items-start justify-start flex-wrap">
            {accountsArr.map((acc, index)=>{
            return(
                <a href={acc[1]} className="no-underline capitalize text-gray hover:text-darkslategray transition-all duration-100 ease-in" key={acc[0]+index}>{acc[0]}</a>
            )
            })}
        </div>
        )
    }
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
                    <div className='smmob:px-4'>{value}</div>
                </div>
            )
        }
    }
  return (
    <div key={state.data._id} className="flex flex-col gap-4 text-[1rem] text-darkslategray bg-gainsboro-100 rounded-md px-8 py-6 smmob:px-4 smmob:py-4">
        <div className="flex flex-col gap-6 justify-between w-full items-start">
            <div className="capitalize text-whitesmoke text-[1rem] w-full bg-darkslategray py-[6px] smmob:py-2 px-4 rounded-md">
                global informations
            </div>
            <div className="flex gap-6 justify-between w-full items-start maxmob:flex-col-reverse smmob:items-start smmob:gap-2">
                <div className="flex flex-col gap-4 items-start justify-between w-full">
                    <div className='flex flex-col items-start justify-start px-2 w-full'>
                        {runItemShow("website name", state.data.siteName)}
                        {runItemShow("availability", state.data.availability?("available"):("unavailable"))}
                        {runItemShow("email", state.data.email)}
                        {runItemShow("accounts", showAccounts(state.data.accounts))}
                        {runItemShow("clients", state.data.statisticsNumbers.clients)}
                        {runItemShow("time avrage", state.data.statisticsNumbers.timeAvrage)}
                        {runItemShow("total products", state.data.statisticsNumbers.totalProducts, true)}
                        <Dates object={state.data} updatedJust={true}/>
                    </div>
                </div>
                <div className='flex flex-col self-center gap-2 items-center'>
                    <img src={state.data.personalPhoto.url} className="rounded-[50%] h-[8.2rem] w-[8.2rem] object-cover"/>
                    <div className=' capitalize text-darkslategray'>avatar</div>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-end gap-6 w-full bg-darkslategray py-[6px] smmob:py-2 px-4 rounded-md">
            <EditBtn section={"informations"}/>
        </div>
    </div> 
  )
}
