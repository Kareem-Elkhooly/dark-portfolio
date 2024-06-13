import React from 'react'
import FormBtns from './FormBtns'

export default function Form({onreset, onsubmit, waite, id, title, formId, children}) {
  return (
    <form id={formId} className="flex flex-col gap-8 items-start justify-center w-full">
        <div className="max-h-[30rem] text-[1rem] overflow-auto font-semibold w-full mt-4 border-2 border-solid border-gainsboro-200 rounded-sm">
            <div className="grid grid-cols-2 maxmob:flex maxmob:flex-col maxmob:items-stretch gap-6 items-start justify-center px-6 py-8 maxmob:px-2 maxmob:py-4 w-full">
                {children}
            </div>
        </div>
        <FormBtns onreset={onreset} onsubmit={onsubmit} waite={waite} id={id} title={title}/>
    </form>
  )
}
