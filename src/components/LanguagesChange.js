import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { arFontFamily, enFontFamily } from "./Variables";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LanguagesChange() {
  const globalInfo = useSelector((state) => state.globalInfo);

  // when the language changing the direction well be change too
  useEffect(()=>{
    if(localStorage.getItem("language") === "arabic"){
      document.body.style.direction = "rtl"
    }else{
      document.body.style.direction = "ltr"
    }
  }, [])

  useEffect(()=>{
    if(!globalInfo.loading && globalInfo.data.siteName){
      document.title = globalInfo.data.siteName;
    }
  }, [globalInfo])

  const languageOption = (title, setTo, textEdit, icon)=> {
    return (
      <Menu.Item>
        {({ active }) => (
          <div
            onClick={()=>{localStorage.setItem("language", setTo), location.reload()}}
            id={setTo+"Btn"}
            className={classNames(
              active
                ? "no-underline text-zinc-400"
                : "no-underline text-gainsboro-100",
              `${textEdit} block px-4 py-2 cursor-pointer`
            )}
          >
            {title}
            {icon}
          </div>
        )}
      </Menu.Item>
    )
  }

  return (
    <Menu as="div"className={`${enFontFamily} relative inline-block text-left w-full`}>
      <div>
        {localStorage.getItem("language") === "arabic"?(
          <Menu.Button className={`${arFontFamily} maxmob:mt-4 inline-flex w-full items-center justify-end gap-x-1.5 text-[1.1rem] text-gainsboro-100 bg-transparent maxmob:px-4 maxmob:py-2 cursor-pointer hover:text-zinc-400`}>
            <img
            alt="Saudi Arabia" width={"25px"} height={"15px"} className="mb-[1px]"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg"/>
            <FontAwesomeIcon icon={faAngleDown} />
          </Menu.Button>
        ):(
          <Menu.Button className="maxmob:mt-4 inline-flex tracking-[-0.5px] w-full items-center justify-end gap-x-1.5 text-[1rem] text-gainsboro-100 bg-transparent maxmob:px-4 maxmob:py-2 cursor-pointer hover:text-zinc-400">
            <img
            alt="United States" width={"25px"} height={"15px"} className="mb-[1px]"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/>
            <FontAwesomeIcon icon={faAngleDown} />
          </Menu.Button>
        )}
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {localStorage.getItem("language") === "arabic"?(
          <Menu.Items className="absolute right-0 z-50 mt-6 maxmob:mt-4 w-56 origin-top-right maxmob:origin-top-left rounded-md bg-darkslategray shadow-lg focus:outline-none">
            <div className="py-1">
                {languageOption("العربية", "arabic", `text-right ${arFontFamily} text-[1.1rem]`)}
                {languageOption("الإنجليزية", "english", `text-right ${arFontFamily} text-[1.1rem]`)}
            </div>
          </Menu.Items>
        ):(
          <Menu.Items className="absolute right-0 z-50 mt-6 maxmob:mt-4 w-56 origin-top-right maxmob:origin-top-left rounded-md bg-darkslategray shadow-lg focus:outline-none">
            <div className="py-1 text-sm tracking-[-0.5px]">
              {languageOption("Arabic", "arabic")}
              {languageOption("English", "english")}
            </div>
          </Menu.Items>
        )}
      </Transition>
    </Menu>
  );
}
