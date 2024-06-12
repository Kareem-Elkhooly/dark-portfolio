import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Spinner() {
  return (
    <div className="text-[2rem] pt-[13rem] animate-pulse text-darkslategray font-semibold">
        <FontAwesomeIcon icon={faSpinner} spinPulse spin />
    </div>
  )
}
