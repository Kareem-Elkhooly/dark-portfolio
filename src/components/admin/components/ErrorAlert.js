import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function ErrorAlert({show, title}) {
  return (
    <div className={`${show || "opacity-0" } capitalize transition-all duration-200 ease-in rounded-md text-[1rem] px-4 py-[5px] text-white bg-red-500 fixed top-[3.5rem] right-[1.5rem] flex gap-2 justify-center items-center`}>
      {title}<FontAwesomeIcon icon={faCircleXmark} />
    </div>
  )
}
