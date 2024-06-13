<<<<<<< HEAD
import React from 'react'

export default function TitleInput({title, idEn, idAr, nameEn, nameAr, name, defaultEn, defaultAr, justInput, id, defaultVal, type, placeholder, arDir}) {
  return (
    <>
      {justInput === true ? (
        <div className="flex flex-col gap-2 items-start justify-start">
          <label htmlFor={id} className="capitalize text-[1.1rem] font-semibold">{title}</label>
          <input 
            type={ type || "text" } defaultValue={defaultVal} placeholder={placeholder} id={id} name={name||title} 
            className="max-w-[28rem] w-full rounded-r-md rounded-l-sm font-['Cairo'] text-[1rem] px-2 bg-neutral-100 border-2 border-solid border-gainsboro-200 focus-visible:border-darkgray-200 focus-visible:outline-none"
          />
        </div>
      ):(
        <div className="flex flex-col w-full gap-2 items-start justify-start col-span-2">
          <div className="capitalize text-[1.1rem] font-semibold">{title}</div>
          <div className="grid grid-cols-2 smmob:flex smmob:flex-col smmob:items-stretch pl-4 gap-6 smmob:gap-2 items-center justify-start w-full">
            <div className="flex gap-2 items-center justify-start maxmob:flex-col maxmob:items-start">
              <label htmlFor={idEn} className="capitalize text-darkgray-200">english</label>
              <input 
                type="text" defaultValue={defaultEn} id={idEn} name={nameEn} 
                className="max-w-[28rem] w-full rounded-r-md rounded-l-sm font-['Cairo'] text-[1rem] px-2 bg-neutral-100 border-2 border-solid border-gainsboro-200 focus-visible:border-darkgray-200 focus-visible:outline-none"
              />
            </div>
            <div className="flex gap-2 items-center justify-start maxmob:flex-col maxmob:items-start">
              <label htmlFor={idAr} className="capitalize text-darkgray-200">arabic</label>
              {arDir?(
                  <input 
                    type="text" defaultValue={defaultAr} id={idAr} name={nameAr}
                    className="max-w-[28rem] w-full rounded-r-md rounded-l-sm font-['Cairo'] text-[1rem] px-2 bg-neutral-100 border-2 border-solid border-gainsboro-200 focus-visible:border-darkgray-200 focus-visible:outline-none"
                  />
              ):(
                  <input 
                    type="text" defaultValue={defaultAr} id={idAr} name={nameAr} dir="rtl" 
                    className="max-w-[28rem] w-full text-right rounded-r-md rounded-l-sm font-['Cairo'] text-[1rem] px-2 bg-neutral-100 border-2 border-solid border-gainsboro-200 focus-visible:border-darkgray-200 focus-visible:outline-none"
                  />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
=======
import React from 'react'

export default function TitleInput({title, idEn, idAr, nameEn, nameAr, name, defaultEn, defaultAr, justInput, id, defaultVal, type, placeholder, arDir}) {
  return (
    <>
      {justInput === true ? (
        <div className="flex flex-col gap-2 items-start justify-start">
          <label htmlFor={id} className="capitalize text-[1.1rem] font-semibold">{title}</label>
          <input 
            type={ type || "text" } defaultValue={defaultVal} placeholder={placeholder} id={id} name={name||title} 
            className="max-w-[28rem] w-full rounded-r-md rounded-l-sm font-['Cairo'] text-[1rem] px-2 bg-neutral-100 border-2 border-solid border-gainsboro-200 focus-visible:border-darkgray-200 focus-visible:outline-none"
          />
        </div>
      ):(
        <div className="flex flex-col w-full gap-2 items-start justify-start col-span-2">
          <div className="capitalize text-[1.1rem] font-semibold">{title}</div>
          <div className="grid grid-cols-2 smmob:flex smmob:flex-col smmob:items-stretch pl-4 gap-6 smmob:gap-2 items-center justify-start w-full">
            <div className="flex gap-2 items-center justify-start maxmob:flex-col maxmob:items-start">
              <label htmlFor={idEn} className="capitalize text-darkgray-200">english</label>
              <input 
                type="text" defaultValue={defaultEn} id={idEn} name={nameEn} 
                className="max-w-[28rem] w-full rounded-r-md rounded-l-sm font-['Cairo'] text-[1rem] px-2 bg-neutral-100 border-2 border-solid border-gainsboro-200 focus-visible:border-darkgray-200 focus-visible:outline-none"
              />
            </div>
            <div className="flex gap-2 items-center justify-start maxmob:flex-col maxmob:items-start">
              <label htmlFor={idAr} className="capitalize text-darkgray-200">arabic</label>
              {arDir?(
                  <input 
                    type="text" defaultValue={defaultAr} id={idAr} name={nameAr}
                    className="max-w-[28rem] w-full rounded-r-md rounded-l-sm font-['Cairo'] text-[1rem] px-2 bg-neutral-100 border-2 border-solid border-gainsboro-200 focus-visible:border-darkgray-200 focus-visible:outline-none"
                  />
              ):(
                  <input 
                    type="text" defaultValue={defaultAr} id={idAr} name={nameAr} dir="rtl" 
                    className="max-w-[28rem] w-full text-right rounded-r-md rounded-l-sm font-['Cairo'] text-[1rem] px-2 bg-neutral-100 border-2 border-solid border-gainsboro-200 focus-visible:border-darkgray-200 focus-visible:outline-none"
                  />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
