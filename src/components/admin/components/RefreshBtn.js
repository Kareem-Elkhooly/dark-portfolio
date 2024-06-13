import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

export default function RefreshBtn({onclick}) {
  return (
    <span onClick={onclick} className="whitespace-nowrap cursor-pointer text-[0.9rem] text-darkslategray hover:text-darkgray-200 bg-gainsboro-100 px-3 hover:bg-gainsboro-200 py-1 rounded-md transition-all duration-100 ease-in">
      <FontAwesomeIcon icon={faRotateRight} />
    </span>
  )
}
