 import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeatured } from "../../redux/slices/featured-slice";
import Section from "./components/Section";
import SectionTitle from "./components/SectionTitle";
import TopSectionBtns from "./components/TopSectionBtns";
import SectionBody from "./components/SectionBody";
import Dates from "./components/Dates";
import EditBtn from "./components/EditBtn";
import { faWpexplorer } from "@fortawesome/free-brands-svg-icons";

const DashFeatured = () => {
  const featured = useSelector((state)=> state.featured)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFeatured());
  },[]);

  const refresh = ()=>{
    dispatch(fetchFeatured())
  }
  
  return (
    <Section>
      <SectionTitle title={"featured"} icon={faWpexplorer} 
        description={"Here you can just update featured, witch mean you can't add new featured or delete any one."}
        />
      <div className="w-full">
        <TopSectionBtns state={featured} section={"featured"} onrefresh={refresh} side={true}/>
        <SectionBody state={featured} stateName={"featured"}>
          {featured.data.map((featured)=>(
            <div key={featured._id} className="flex flex-col gap-4 text-[1rem] text-darkslategray bg-gainsboro-100 rounded-md px-8 py-6 smmob:px-4 smmob:py-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 justify-between w-full items-center smmob:flex-col-reverse smmob:items-start">
                  <div className="flex flex-col gap-2 items-start justify-between">
                    <span className="capitalize">{featured.name}</span>
                    <Dates object={featured}/>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src={featured.image.url} className="h-[5rem] rounded-md" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-6 w-full bg-darkslategray py-[6px] smmob:py-2 px-4 rounded-md">
                <EditBtn section={"featured"} id={featured._id}/>
              </div>
            </div>
           ))}
        </SectionBody>
      </div>
    </Section>
  );
};

export default DashFeatured;
