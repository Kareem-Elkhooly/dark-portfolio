import React from 'react'
import AddnewBtn from './AddnewBtn'
import RefreshBtn from './RefreshBtn'

export default function TopSectionBtns({state, section, onrefresh, side}) {

  const sideEelement = 
    <>
      <div className="flex gap-2 justify-end items-center text-[1.3rem]">
        <RefreshBtn onclick={onrefresh}/>
        {state?(
          <span className="whitespace-nowrap text-[0.9rem] text-whitesmoke bg-darkslategray px-3 py-1 rounded-md">
            {state.data.length?(state.data.length):("0")}
          </span>
        ):(null)}
      </div>
    </>

  return (
    <>
      {side === true ?(
        <>
          {sideEelement}
        </>
      ):(
        <div className="flex justify-end items-center w-full gap-2 text-[1.3rem]">
          {!state.loading && state.data.length >= 1?(
            <AddnewBtn section={section}/>
          ):(null)}
          {sideEelement}
        </div>
      )}
    </>
  )
}
