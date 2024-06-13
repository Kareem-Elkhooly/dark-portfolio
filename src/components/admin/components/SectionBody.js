import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function SectionBody({state, stateName , item, children}) {
  return (
    <div className="flex flex-col max-h-[30rem] smmob:max-h-none overflow-auto font-semibold gap-8 px-6 py-8 maxmob:px-2 maxmob:py-4 w-full mt-4 border-2 border-solid border-gainsboro-200 rounded-sm">
      {state.loading ? (
        <div className="text-[1.5rem] text-center animate-pulse text-darkslategray font-semibold"><FontAwesomeIcon icon={faSpinner} spinPulse spin /></div>
      ):(null)}
      {state.error && !state.loading ?(
        <div>
          <p className="text-[1.1rem] text-darkslategray text-center">bad connection!, please try again later.</p>
        </div>
      ):(null)}
      {!state.loading && (item || state.data)?(
        <>{children}</>
      ):(null)}
      {!state.loading && state.data.length < 1 && !state.error ?(
        <div>
          <p className="text-[1.2rem] text-darkslategray text-center">No {stateName} yet.</p>
        </div>
      ):(null)}
    </div>
  )
}
