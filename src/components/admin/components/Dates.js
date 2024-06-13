<<<<<<< HEAD
import React from 'react'

export default function Dates({object, createdJust, admin, updatedJust}) {
  return (
    <>
      {createdJust === true ?(
        <div className="">
          <span>{new Date(object.createdAt).getDate()}</span>{"/"}
          <span>{new Date(object.createdAt).getMonth()}</span>{"/"}
          <span>{new Date(object.createdAt).getFullYear()}</span>
        </div>
      ):admin === true?(
        <div className='text-darkgray-200 text-[0.9rem]'>Joind At:{" "}
          <span>{new Date(object.createdAt).getDate()}</span>{"/"}
          <span>{new Date(object.createdAt).getMonth()}</span>{"/"}
          <span>{new Date(object.createdAt).getFullYear()}</span>
        </div>
      ):updatedJust === true?(
        <div className='text-darkgray-200 text-[0.9rem] capitalize'>last update:{" "}
          <span>{new Date(object.updatedAt).getDate()}</span>{"/"}
          <span>{new Date(object.updatedAt).getMonth()}</span>{"/"}
          <span>{new Date(object.updatedAt).getFullYear()}</span>
        </div>
      ):(
        <div className="flex flex-col text-[0.8rem] justify-start items-start text-darkgray-200">
          <div>Created At:{" "}
            <span>{new Date(object.createdAt).getDate()}</span>{"/"}
            <span>{new Date(object.createdAt).getMonth()}</span>{"/"}
            <span>{new Date(object.createdAt).getFullYear()}</span>
          </div>
          <div>Last Update:{" "} 
            <span>{new Date(object.updatedAt).getDate()}</span>{"/"}
            <span>{new Date(object.updatedAt).getMonth()}</span>{"/"}
            <span>{new Date(object.updatedAt).getFullYear()}</span>
          </div>
        </div>
      )}
    </>
  )
}
=======
import React from 'react'

export default function Dates({object, createdJust, admin, updatedJust}) {
  return (
    <>
      {createdJust === true ?(
        <div className="">
          <span>{new Date(object.createdAt).getDate()}</span>{"/"}
          <span>{new Date(object.createdAt).getMonth()}</span>{"/"}
          <span>{new Date(object.createdAt).getFullYear()}</span>
        </div>
      ):admin === true?(
        <div className='text-darkgray-200 text-[0.9rem]'>Joind At:{" "}
          <span>{new Date(object.createdAt).getDate()}</span>{"/"}
          <span>{new Date(object.createdAt).getMonth()}</span>{"/"}
          <span>{new Date(object.createdAt).getFullYear()}</span>
        </div>
      ):updatedJust === true?(
        <div className='text-darkgray-200 text-[0.9rem] capitalize'>last update:{" "}
          <span>{new Date(object.updatedAt).getDate()}</span>{"/"}
          <span>{new Date(object.updatedAt).getMonth()}</span>{"/"}
          <span>{new Date(object.updatedAt).getFullYear()}</span>
        </div>
      ):(
        <div className="flex flex-col text-[0.8rem] justify-start items-start text-darkgray-200">
          <div>Created At:{" "}
            <span>{new Date(object.createdAt).getDate()}</span>{"/"}
            <span>{new Date(object.createdAt).getMonth()}</span>{"/"}
            <span>{new Date(object.createdAt).getFullYear()}</span>
          </div>
          <div>Last Update:{" "} 
            <span>{new Date(object.updatedAt).getDate()}</span>{"/"}
            <span>{new Date(object.updatedAt).getMonth()}</span>{"/"}
            <span>{new Date(object.updatedAt).getFullYear()}</span>
          </div>
        </div>
      )}
    </>
  )
}
>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
