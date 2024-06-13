import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faPlus, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

export default function FormBtns({onreset, onsubmit, waite, id, title}) {
    const waiteNo =(title)=>{
        if(title === "add"){
            return(
                <>                
                    <span>add</span>
                    <FontAwesomeIcon icon={faPlus} className="mb-[2px]" />
                </>
            )
        }else{
            return(
                <>                
                    <span>save</span>
                    <FontAwesomeIcon icon={faFloppyDisk} className="mb-[1px]" />
                </>
            )

        }
    } 
    const waiteYes =()=>{
        return(
            <>
                <span>wait</span>
                <FontAwesomeIcon icon={faSpinner} spinPulse spin className="mb-[1px]" />
            </>
        )
    } 

  return (
    <div className="self-end flex gap-2">
        {waite==="yes"?(
            <button type="reset" disabled className="opacity-70 self-end text-[1.2rem] px-3 py-1 text-darkslategray bg-gainsboro-100 rounded-md">
                reset
            </button>
        ):(
            <button type="reset" onClick={onreset} className="cursor-pointer self-end text-[1.2rem] px-3 py-1 text-darkslategray hover:text-darkgray-200 bg-gainsboro-100 hover:bg-gainsboro-200 rounded-md transition-all duration-100 ease-in">
                reset
            </button>
        )}
        {waite==="yes"?(
            <button type="submit" disabled id={id} className="opacity-70 flex gap-2 items-center justify-center self-end text-[1.2rem] px-3 py-1 text-white bg-green-600 rounded-md">
                {waiteYes()} 
            </button>
        ):(
            <button type="submit" id={id} onClick={onsubmit} className="cursor-pointer flex gap-2 items-center justify-center self-end text-[1.2rem] px-3 py-1 text-white bg-green-600 hover:bg-green-500 rounded-md transition-all duration-100 ease-in">
                {waiteNo(title)} 
            </button>
        )}
    </div>
  )
}
