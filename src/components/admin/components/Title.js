<<<<<<< HEAD
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import BackBtn from './BackBtn';

export default function Title({project, addNewTitle, updateTitle}) {
  return (
    <div className="w-full mb-[1rem] flex items-center justify-between smmob:items-start">
        <h2 className="m-0 capitalize leading-8 text-[1.6rem] smmob:text-[1.5rem] flex gap-2 items-center justify-start smmob:flex-col smmob:items-start">
            {project?(
            <>
                <div className="flex gap-2 items-center justify-start">
                    <FontAwesomeIcon icon={faPenToSquare} className="text-[1.1rem]" />
                    <span>{updateTitle||"update"}</span>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <span>/</span>
                    <span className="text-darkgray-200 capitalize">{project}</span>
                </div>
            </>
            ):(
            <>
                <FontAwesomeIcon icon={faCirclePlus} className="text-[1.1rem]" />
                <span>{addNewTitle||"new project"}</span>
            </>)}
        </h2>
        <BackBtn/>
    </div>
  )
}
=======
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import BackBtn from './BackBtn';

export default function Title({project, addNewTitle, updateTitle}) {
  return (
    <div className="w-full mb-[1rem] flex items-center justify-between smmob:items-start">
        <h2 className="m-0 capitalize leading-8 text-[1.6rem] smmob:text-[1.5rem] flex gap-2 items-center justify-start smmob:flex-col smmob:items-start">
            {project?(
            <>
                <div className="flex gap-2 items-center justify-start">
                    <FontAwesomeIcon icon={faPenToSquare} className="text-[1.1rem]" />
                    <span>{updateTitle||"update"}</span>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <span>/</span>
                    <span className="text-darkgray-200 capitalize">{project}</span>
                </div>
            </>
            ):(
            <>
                <FontAwesomeIcon icon={faCirclePlus} className="text-[1.1rem]" />
                <span>{addNewTitle||"new project"}</span>
            </>)}
        </h2>
        <BackBtn/>
    </div>
  )
}
>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
