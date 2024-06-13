<<<<<<< HEAD
import { enFontFamily } from "../components/Variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Adimn = () => {
    useEffect(async()=>{
        if(sessionStorage.getItem("login") === "true" && sessionStorage.getItem("adminId") && sessionStorage.getItem("token")){
            const id = sessionStorage.getItem("adminId");
            const token = sessionStorage.getItem("token");
            await fetch(`https://dark-portfolio-api.onrender.com/api/admin/${id}`,{
                method:'GET',
                headers: {
                    'Content-Type': 'application/json', 
                    'token': `${token}`
                },
            })
            .then(res => res.json())
            .then(data => data.name 
                ?(window.location.href = "/admin/dashboard")
                :(window.location.href = "/admin/login"))
            .catch(err => window.location.href = "/admin/login");
        }else{
            window.location.href = "/admin/login"
        }
    },[])

  return (
    <section className={`${enFontFamily} w-full relative min-h-[100vh] bg-gainsboro-200 overflow-hidden flex items-center justify-center pt-[0rem] px-[0rem] tracking-[normal]`}>
        <div className="text-[3rem] animate-pulse text-darkslategray font-semibold"><FontAwesomeIcon icon={faSpinner} spinPulse spin /></div>
    </section>
  );
};

=======
import { enFontFamily } from "../components/Variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Adimn = () => {
    useEffect(async()=>{
        if(sessionStorage.getItem("login") === "true" && sessionStorage.getItem("adminId") && sessionStorage.getItem("token")){
            const id = sessionStorage.getItem("adminId");
            const token = sessionStorage.getItem("token");
            await fetch(`https://dark-portfolio-api.onrender.com/api/admin/${id}`,{
                method:'GET',
                headers: {
                    'Content-Type': 'application/json', 
                    'token': `${token}`
                },
            })
            .then(res => res.json())
            .then(data => data.name 
                ?(window.location.href = "/admin/dashboard")
                :(window.location.href = "/admin/login"))
            .catch(err => window.location.href = "/admin/login");
        }else{
            window.location.href = "/admin/login"
        }
    },[])

  return (
    <section className={`${enFontFamily} w-full relative min-h-[100vh] bg-gainsboro-200 overflow-hidden flex items-center justify-center pt-[0rem] px-[0rem] tracking-[normal]`}>
        <div className="text-[3rem] animate-pulse text-darkslategray font-semibold"><FontAwesomeIcon icon={faSpinner} spinPulse spin /></div>
    </section>
  );
};

>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
export default Adimn;