<<<<<<< HEAD
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import LanguagesChange from "../components/LanguagesChange";
import { arFontFamily, enFontFamily } from "./Variables";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function BergurIcon() {
  const enInfo = useSelector((state) => state.enInfo);
  const arInfo = useSelector((state) => state.arInfo); 

  const pagesTitle = (title, to, textEdit)=> {
    return (
      <Menu.Item>
        {({ active }) => (
          <Link
            to={"/"+to}
            className={classNames(
              active
                ? "no-underline text-zinc-400"
                : "no-underline text-gainsboro-100",
              `${textEdit} block px-4 py-2 cursor-pointer`
            )}
          >
            {title}
          </Link>
        )}
      </Menu.Item>
    )
  }

  const resumeLink = (info, title, textEdit)=> {
    return(
      <>
        {info.loading || info.error ? (
          <Menu.Item className="bg-darkslategray w-[70px] h-8 maxmob:h-7 rounded-md animate-pulse"></Menu.Item>
        ):(null)}
        {!info.loading && info.data.resumeLink ?(
          <Menu.Item>
            {({ active }) => (
              <a
                href={info.data.resumeLink}
                className={classNames(
                  active
                    ? "no-underline text-zinc-400"
                    : "no-underline text-gainsboro-100",
                  `${textEdit} block px-4 py-2 text-sm`
                )}
              >
                {title}
                <FontAwesomeIcon className="ml-3 text-[1rem]" icon={faCloudArrowDown} />
              </a>
            )}
          </Menu.Item>
        ):(null)}
      </>
    )
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-transparent px-3 py-3 text-xl font-semibold rounded-md cursor-pointer hover:bg-darkslategray">
          <FontAwesomeIcon className="text-gainsboro-100" icon={faBars} />
        </Menu.Button>
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
        <Menu.Items className={`absolute ${arFontFamily} text-right text-[1.08rem] right-0 z-50 mt-6 maxmob:mt-3 w-56 origin-top-right rounded-md bg-darkslategray shadow-lg focus:outline-none`}>
          <div className="py-3 flex flex-col gap-2">
              {pagesTitle("الرئيسية","")}
              {pagesTitle("المشاريع","work")}
              {pagesTitle("الإتصال","contact")}
              {resumeLink(arInfo, "CV")}
            <Menu.Item>{<LanguagesChange />}</Menu.Item>
          </div>
        </Menu.Items>
        ):(
        <Menu.Items className={`absolute ${enFontFamily} right-0 z-50 mt-6 maxmob:mt-3 w-56 origin-top-right rounded-md bg-darkslategray shadow-lg focus:outline-none`}>
          <div className="py-3 flex flex-col gap-2">
              {pagesTitle("Home", "")}
              {pagesTitle("Work", "work")}
              {pagesTitle("Contact", "contact")}
              {resumeLink(enInfo, "Resume")}
            <Menu.Item>{<LanguagesChange />}</Menu.Item>
          </div>
        </Menu.Items>
        )}
      </Transition>
    </Menu>
  );
}
=======
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import LanguagesChange from "../components/LanguagesChange";
import { arFontFamily, enFontFamily } from "./Variables";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function BergurIcon() {
  const enInfo = useSelector((state) => state.enInfo);
  const arInfo = useSelector((state) => state.arInfo); 

  const pagesTitle = (title, to, textEdit)=> {
    return (
      <Menu.Item>
        {({ active }) => (
          <Link
            to={"/"+to}
            className={classNames(
              active
                ? "no-underline text-zinc-400"
                : "no-underline text-gainsboro-100",
              `${textEdit} block px-4 py-2 cursor-pointer`
            )}
          >
            {title}
          </Link>
        )}
      </Menu.Item>
    )
  }

  const resumeLink = (info, title, textEdit)=> {
    return(
      <>
        {info.loading || info.error ? (
          <Menu.Item className="bg-darkslategray w-[70px] h-8 maxmob:h-7 rounded-md animate-pulse"></Menu.Item>
        ):(null)}
        {!info.loading && info.data.resumeLink ?(
          <Menu.Item>
            {({ active }) => (
              <a
                href={info.data.resumeLink}
                className={classNames(
                  active
                    ? "no-underline text-zinc-400"
                    : "no-underline text-gainsboro-100",
                  `${textEdit} block px-4 py-2 text-sm`
                )}
              >
                {title}
                <FontAwesomeIcon className="ml-3 text-[1rem]" icon={faCloudArrowDown} />
              </a>
            )}
          </Menu.Item>
        ):(null)}
      </>
    )
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-transparent px-3 py-3 text-xl font-semibold rounded-md cursor-pointer hover:bg-darkslategray">
          <FontAwesomeIcon className="text-gainsboro-100" icon={faBars} />
        </Menu.Button>
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
        <Menu.Items className={`absolute ${arFontFamily} text-right text-[1.08rem] right-0 z-50 mt-6 maxmob:mt-3 w-56 origin-top-right rounded-md bg-darkslategray shadow-lg focus:outline-none`}>
          <div className="py-3 flex flex-col gap-2">
              {pagesTitle("الرئيسية","")}
              {pagesTitle("المشاريع","work")}
              {pagesTitle("الإتصال","contact")}
              {resumeLink(arInfo, "CV")}
            <Menu.Item>{<LanguagesChange />}</Menu.Item>
          </div>
        </Menu.Items>
        ):(
        <Menu.Items className={`absolute ${enFontFamily} right-0 z-50 mt-6 maxmob:mt-3 w-56 origin-top-right rounded-md bg-darkslategray shadow-lg focus:outline-none`}>
          <div className="py-3 flex flex-col gap-2">
              {pagesTitle("Home", "")}
              {pagesTitle("Work", "work")}
              {pagesTitle("Contact", "contact")}
              {resumeLink(enInfo, "Resume")}
            <Menu.Item>{<LanguagesChange />}</Menu.Item>
          </div>
        </Menu.Items>
        )}
      </Transition>
    </Menu>
  );
}
>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
