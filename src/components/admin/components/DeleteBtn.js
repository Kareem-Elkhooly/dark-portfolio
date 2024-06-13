import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function DeleteBtn({onclick}) {
  return (
    <div 
      onClick={onclick} 
      className="cursor-pointer text-[0.95rem] smmob:text-[1.05rem] text-whitesmoke hover:text-gainsboro-200 flex gap-2 justify-center items-center transition-all duration-100 ease-in">
      <FontAwesomeIcon icon={faTrashCan} />
      <span className="smmob:hidden capitalize">delete</span>
    </div>
  )
}
