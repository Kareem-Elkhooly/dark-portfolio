import React from 'react'

export default function ImagesShowing({id, project, state, justImage, personal, containerTitle}) {

    const empty = 
    <>
        <div id={id} className="flex flex-wrap justify-start rounded-md items-center gap-1 min-h-[9rem] h-fit border-2 border-solid border-gainsboro-200 w-full p-2">
        </div>
    </>

  return (
    <div className="flex flex-col gap-2 w-full">
        <div className="capitalize text-[1.2rem] font-semibold">{justImage === true?(containerTitle || "image"):("images")}</div>
        {justImage === true && state.length < 1  ?(
            <div 
                id={id} 
                className="flex w-fit rounded-md items-center min-h-[9rem] min-w-[9.2rem] justify-center h-fit border-2 border-solid border-gainsboro-200 p-2">
                    {personal?(
                        <div className='h-[8.2rem] w-[8.2rem]'>
                            <img src={project.personalPhoto.url} key={project.personalPhoto.id} className="border-2 rounded-[50%] object-cover w-full h-full border-solid border-gainsboro-200"/>
                        </div>
                    ):(
                        <img src={project.image.url} key={project.image.id} className="h-[8.2rem] border-2 border-solid border-gainsboro-200"/>
                    )}
            </div>
        ):justImage === true && state.length > 0 
        ?(<>{empty}</>)
        :(<>
            {project && state
            ?(
                <>
                    <div id={id} className="flex flex-wrap justify-start items-center gap-1 h-fit border-2 rounded-md border-solid border-gainsboro-200 w-full p-2">
                    {project.images.length > 0 && state.length < 1 ?(
                        <>
                            {project.images.map((image)=>{
                                return(<img src={image.url} key={image.id} className="h-[8.2rem] border-2 border-solid border-gainsboro-200"/>)
                            })}
                        </>
                    ):(null)}
                    </div>
                </>)
            :(<>{empty}</>)}
        </>)}
    </div>
  )
}
