<<<<<<< HEAD
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default function EditBtn({section, id}) {
  return (
    <>{id?(
      <Link to={"/admin/dashboard/"+section+"/update/"+id} className="no-underline text-whitesmoke text-[0.95rem] smmob:text-[1.05rem] hover:text-gainsboro-200 cursor-pointer flex gap-2 justify-center items-center transition-all duration-100 ease-in">
        <FontAwesomeIcon icon={faPenToSquare} />
        <span className="smmob:hidden capitalize">edit</span>
      </Link>
    ):(
      <Link to={"/admin/dashboard/"+section+"/update"} className="no-underline text-whitesmoke text-[0.95rem] smmob:text-[1.05rem] hover:text-gainsboro-200 cursor-pointer flex gap-2 justify-center items-center transition-all duration-100 ease-in">
        <FontAwesomeIcon icon={faPenToSquare} />
        <span className="smmob:hidden capitalize">edit</span>
      </Link>
    )}
    </>
  )
}
=======
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default function EditBtn({section, id}) {
  return (
    <>{id?(
      <Link to={"/admin/dashboard/"+section+"/update/"+id} className="no-underline text-whitesmoke text-[0.95rem] smmob:text-[1.05rem] hover:text-gainsboro-200 cursor-pointer flex gap-2 justify-center items-center transition-all duration-100 ease-in">
        <FontAwesomeIcon icon={faPenToSquare} />
        <span className="smmob:hidden capitalize">edit</span>
      </Link>
    ):(
      <Link to={"/admin/dashboard/"+section+"/update"} className="no-underline text-whitesmoke text-[0.95rem] smmob:text-[1.05rem] hover:text-gainsboro-200 cursor-pointer flex gap-2 justify-center items-center transition-all duration-100 ease-in">
        <FontAwesomeIcon icon={faPenToSquare} />
        <span className="smmob:hidden capitalize">edit</span>
      </Link>
    )}
    </>
  )
}
>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
