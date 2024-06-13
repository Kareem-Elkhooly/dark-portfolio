<<<<<<< HEAD
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function BackBtn() {
    const back = () => {
        window.history.back()
    };
  return (
    <FontAwesomeIcon onClick={back} icon={faAngleLeft} 
    className="text-[1.1rem] mt-[4px] cursor-pointer bg-gainsboro-100 px-3 py-[6px] rounded-md hover:bg-gainsboro-200 text-gray hover:text-darkslategray transition-all duration-100 ease-in"/>
  )
}
=======
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function BackBtn() {
    const back = () => {
        window.history.back()
    };
  return (
    <FontAwesomeIcon onClick={back} icon={faAngleLeft} 
    className="text-[1.1rem] mt-[4px] cursor-pointer bg-gainsboro-100 px-3 py-[6px] rounded-md hover:bg-gainsboro-200 text-gray hover:text-darkslategray transition-all duration-100 ease-in"/>
  )
}
>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
