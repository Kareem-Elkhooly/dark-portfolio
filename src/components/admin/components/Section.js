import React from 'react'
import { enFontFamily } from "../../Variables";

export default function Section({children}) {
    return (
    <section className={`${enFontFamily} relative flex flex-col justify-start gap-3 pr-[10px] smmob:pr-[calc(0.8rem-8px)] items-center w-full text-[1.1rem] text-gray`}>
        {children}
    </section>
  )
}
