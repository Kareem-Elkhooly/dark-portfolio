<<<<<<< HEAD
 import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGlobalInfos } from "../../redux/slices/globalInfo-slice";
import { fetchEnInfos } from "../../redux/slices/infoEn-slice";
import { fetchArInfos } from "../../redux/slices/infoAr-slice";
import Section from "./components/Section";
import SectionTitle from "./components/SectionTitle";
import TopSectionBtns from "./components/TopSectionBtns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faSpinner } from "@fortawesome/free-solid-svg-icons";
import InfoGlobal from "./components/InfoGlobal";
import InfoLanguage from "./components/InfoLanguage";

const DashInfo = () => {
  const globalInfo = useSelector((state)=> state.globalInfo)
  const enInfo = useSelector((state)=> state.enInfo)
  const arInfo = useSelector((state)=> state.arInfo)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGlobalInfos())
    dispatch(fetchEnInfos())
    dispatch(fetchArInfos())
  },[]);

  const refresh = ()=>{
    dispatch(fetchGlobalInfos())
    dispatch(fetchEnInfos())
    dispatch(fetchArInfos())
  }

  return (
    <Section>
      <SectionTitle title={"informations"} icon={faAddressCard} 
        description={"Here we go, you can update your informations, but you can't delete any thing."}
        />
      <div className="w-full">
        <TopSectionBtns onrefresh={refresh} side={true}/>
        <div className="flex flex-col max-h-[30rem] smmob:max-h-none overflow-auto font-semibold gap-8 px-6 py-8 maxmob:px-2 maxmob:py-4 w-full mt-4 border-2 border-solid border-gainsboro-200 rounded-sm">
        {globalInfo.loading ? (
          <div className="text-[1.5rem] text-center animate-pulse text-darkslategray font-semibold">
            <FontAwesomeIcon icon={faSpinner} spinPulse spin />
          </div>
        ):(null)}
        {globalInfo.error && !globalInfo.loading ?(
          <div>
            <p className="text-[1.1rem] text-darkslategray text-center">bad connection!, please try again later.</p>
          </div>
        ):(null)}
        {!globalInfo.loading && globalInfo.data.personalPhoto?(
          <>
            <InfoGlobal state={globalInfo}/>
            <InfoLanguage state={enInfo}/>
          </>
        ):!globalInfo.loading && globalInfo.data && !globalInfo.error ?(
          <div>
            <p className="text-[1.3rem] text-darkslategray text-center">No informations yet.</p>
          </div>
        ):(null)}
        </div>
      </div>
    </Section>
  );
};

export default DashInfo;
=======
 import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGlobalInfos } from "../../redux/slices/globalInfo-slice";
import { fetchEnInfos } from "../../redux/slices/infoEn-slice";
import { fetchArInfos } from "../../redux/slices/infoAr-slice";
import Section from "./components/Section";
import SectionTitle from "./components/SectionTitle";
import TopSectionBtns from "./components/TopSectionBtns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faSpinner } from "@fortawesome/free-solid-svg-icons";
import InfoGlobal from "./components/InfoGlobal";
import InfoLanguage from "./components/InfoLanguage";

const DashInfo = () => {
  const globalInfo = useSelector((state)=> state.globalInfo)
  const enInfo = useSelector((state)=> state.enInfo)
  const arInfo = useSelector((state)=> state.arInfo)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGlobalInfos())
    dispatch(fetchEnInfos())
    dispatch(fetchArInfos())
  },[]);

  const refresh = ()=>{
    dispatch(fetchGlobalInfos())
    dispatch(fetchEnInfos())
    dispatch(fetchArInfos())
  }

  return (
    <Section>
      <SectionTitle title={"informations"} icon={faAddressCard} 
        description={"Here we go, you can update your informations, but you can't delete any thing."}
        />
      <div className="w-full">
        <TopSectionBtns onrefresh={refresh} side={true}/>
        <div className="flex flex-col max-h-[30rem] smmob:max-h-none overflow-auto font-semibold gap-8 px-6 py-8 maxmob:px-2 maxmob:py-4 w-full mt-4 border-2 border-solid border-gainsboro-200 rounded-sm">
        {globalInfo.loading ? (
          <div className="text-[1.5rem] text-center animate-pulse text-darkslategray font-semibold">
            <FontAwesomeIcon icon={faSpinner} spinPulse spin />
          </div>
        ):(null)}
        {globalInfo.error && !globalInfo.loading ?(
          <div>
            <p className="text-[1.1rem] text-darkslategray text-center">bad connection!, please try again later.</p>
          </div>
        ):(null)}
        {!globalInfo.loading && globalInfo.data.personalPhoto?(
          <>
            <InfoGlobal state={globalInfo}/>
            <InfoLanguage state={enInfo}/>
          </>
        ):!globalInfo.loading && globalInfo.data && !globalInfo.error ?(
          <div>
            <p className="text-[1.3rem] text-darkslategray text-center">No informations yet.</p>
          </div>
        ):(null)}
        </div>
      </div>
    </Section>
  );
};

export default DashInfo;
>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
