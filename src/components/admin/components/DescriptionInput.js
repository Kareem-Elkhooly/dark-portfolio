import React from 'react'

export default function DescriptionInput({title, idEn, idAr, nameEn, nameAr, defaultEn, defaultAr}) {
  return (
    <div className="flex flex-col w-full gap-4 items-start justify-start col-span-2">
        <div className="capitalize text-[1.2rem] font-semibold">{title}</div>
        <div className="grid grid-cols-2 smmob:flex smmob:flex-col smmob:items-stretch pl-4 gap-6 smmob:gap-2 items-start justify-start w-full">
            <div className="flex gap-2 items-start justify-start maxmob:flex-col smmob:w-full">
                <label htmlFor={idEn} className="capitalize text-darkgray-200">english</label>
                <textarea 
                  id={idEn} defaultValue={defaultEn} name={nameEn} 
                  className="max-w-[28rem] h-[6rem] resize-y w-full rounded-r-md rounded-l-sm font-['Cairo'] text-[1rem] px-2 bg-neutral-100 border-2 border-solid border-gainsboro-200 focus-visible:border-darkgray-200 focus-visible:outline-none"
                />
            </div>
            <div className="flex gap-2 items-start justify-start maxmob:flex-col smmob:w-full">
                <label htmlFor={idAr} className="capitalize text-darkgray-200">arabic</label>
                <textarea 
                  id={idAr} defaultValue={defaultAr} name={nameAr} dir="rtl" 
                  className="max-w-[28rem] h-[6rem] resize-y w-full text-right rounded-r-md rounded-l-sm font-['Cairo'] text-[1rem] px-2 bg-neutral-100 border-2 border-solid border-gainsboro-200 focus-visible:border-darkgray-200 focus-visible:outline-none"
                />
            </div>
        </div>
    </div>
  )
}
