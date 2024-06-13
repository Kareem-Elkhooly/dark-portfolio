import { useEffect } from "react";
import { enFontFamily } from "../components/Variables";
import DashHeader from "../components/admin/DashHeader";
import DashSide from "../components/admin/DashSide";

const Dashboard = ({children}) => {
    
  useEffect(()=>{
    if(sessionStorage.getItem("login") === "true" 
      && sessionStorage.getItem("adminId") 
      && sessionStorage.getItem("token") 
      && sessionStorage.getItem("admin")){
      document.title = "Dashboard"
    }else {
      window.location.href = "/admin/login";
    }
  }, [])

  return ( 
    <section className={`${enFontFamily} w-full relative h-[100vh] bg-whitesmoke overflow-hidden pt-[0rem] px-[0rem] tracking-[normal]`}>
        {sessionStorage.getItem("login")==="false"||!sessionStorage.getItem("token")||!sessionStorage.getItem("adminId")||!sessionStorage.getItem("admin")
        ?(<div></div>)
        :(
          <div className="">
            <DashHeader />
            <div className="flex flex-row gap-6 smmob:gap-3 w-full">
              <DashSide />
              <div className="w-full pr-[calc(1.5rem-10px)] smmob:pr-[calc(0.8rem-10px)] pt-[6rem] pb-[4rem] h-[100vh] overflow-auto">
                {children}
              </div>
            </div>
          </div>
        )}
    </section>
  );
};

export default Dashboard;