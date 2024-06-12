import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SectionTitle({title, icon, description, iconEdit}) {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-2 mb-[1rem]">
      <h2 className="m-0 capitalize flex gap-2 items-center text-[1.6rem]">
        <FontAwesomeIcon icon={icon} className={`${iconEdit} text-[1.3rem]`} />
        {title}
      </h2>
      <p className="m-0 px-2 text-darkslategray">{description}</p>
    </div>
  )
}
