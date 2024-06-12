import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function AddnewBtn({section}) {
  return (
    <Link to={"/admin/dashboard/"+section+"/addNew"}
    className="whitespace-nowrap capitalize cursor-pointer flex items-center justify-center gap-2 no-underline text-[0.9rem] text-white bg-green-600 px-3 hover:bg-green-500 py-1 rounded-md transition-all duration-100 ease-in">
      add New
      <FontAwesomeIcon icon={faCirclePlus}/>
    </Link>
  )
}
