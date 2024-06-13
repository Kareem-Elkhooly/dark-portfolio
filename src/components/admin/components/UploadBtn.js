<<<<<<< HEAD
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function UploadBtn({id, state, onchange, name, justImage}) {

    const fileShow = (files)=>{
      let totalSize = 0;
      files.map((file)=> {totalSize+=file.size})
      let totalSizeKB = (totalSize/1000).toFixed(2);
      let totalSizeMB = ((totalSize/1000)/1000).toFixed(2);
      return(
          <div className="flex gap-2 text-[1rem] items-center justify-center px-3 py-1 border-2 border-solid border-gainsboro-200">
             <span><span className="text-darkgray-200 mr-1">Count:</span>{files.length}</span>
             <span><span className="text-darkgray-200 mr-1">Size:</span>{(totalSize/1000)>1000?(totalSizeMB+"Mb"):(totalSizeKB+"Kb")}</span>
          </div>
      )
    }
    
  return (
    <div className="flex gap-4 items-center justify-start flex-wrap w-full">
        <label htmlFor={id} className="capitalize flex gap-2 items-center justify-center cursor-pointer text-[1rem] text-darkslategray hover:text-darkgray-200 bg-gainsboro-100 px-3 hover:bg-gainsboro-200 py-1 border border-solid border-gainsboro-200 rounded-md transition-all duration-100 ease-in">
          {justImage === true ?("upload image"):("upload images")}
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
        </label>
        {state.length > 0?(
            fileShow(state)
        ):(null)}
        {justImage === true ?(
          <input 
            type="file" accept=".png, .jpg, .jpeg" 
            onChange={onchange} id={id} name={name || "image"} className="hidden"
          />
        ):(
          <input 
            type="file" multiple accept=".png, .jpg, .jpeg" 
            onChange={onchange} id={id} name={name || "images"} className="hidden"
          />
        )}
    </div>
  )
}
=======
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function UploadBtn({id, state, onchange, name, justImage}) {

    const fileShow = (files)=>{
      let totalSize = 0;
      files.map((file)=> {totalSize+=file.size})
      let totalSizeKB = (totalSize/1000).toFixed(2);
      let totalSizeMB = ((totalSize/1000)/1000).toFixed(2);
      return(
          <div className="flex gap-2 text-[1rem] items-center justify-center px-3 py-1 border-2 border-solid border-gainsboro-200">
             <span><span className="text-darkgray-200 mr-1">Count:</span>{files.length}</span>
             <span><span className="text-darkgray-200 mr-1">Size:</span>{(totalSize/1000)>1000?(totalSizeMB+"Mb"):(totalSizeKB+"Kb")}</span>
          </div>
      )
    }
    
  return (
    <div className="flex gap-4 items-center justify-start flex-wrap w-full">
        <label htmlFor={id} className="capitalize flex gap-2 items-center justify-center cursor-pointer text-[1rem] text-darkslategray hover:text-darkgray-200 bg-gainsboro-100 px-3 hover:bg-gainsboro-200 py-1 border border-solid border-gainsboro-200 rounded-md transition-all duration-100 ease-in">
          {justImage === true ?("upload image"):("upload images")}
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
        </label>
        {state.length > 0?(
            fileShow(state)
        ):(null)}
        {justImage === true ?(
          <input 
            type="file" accept=".png, .jpg, .jpeg" 
            onChange={onchange} id={id} name={name || "image"} className="hidden"
          />
        ):(
          <input 
            type="file" multiple accept=".png, .jpg, .jpeg" 
            onChange={onchange} id={id} name={name || "images"} className="hidden"
          />
        )}
    </div>
  )
}
>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
