import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { arFontFamily, enFontFamily } from "./Variables";

const Featured = () => { 
  const featured = useSelector((state) => state.featured);

  const featuredImage = (name, src, textEdit) => {
    return (
      <div className={`${textEdit} relative h-[20rem] maxmob:h-[16rem] smmob:h-[15rem] w-full group`}>
        <img
          className="flex-1 h-full w-full group-hover:opacity-100 opacity-50 transition-all duration-100 ease-in rounded max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt={"featured-img"}
          src={src}
        />
        <span
          id={"featured-img"}
          className="absolute font-medium group-hover:opacity-0 opacity-100 transition-all text-center duration-100 ease-in top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          {name}
        </span>
      </div>
    );
  };
  return (
    <section id="featured" className={`${enFontFamily} main-container mt-4 pb-[5rem] w-full text-left text-[1rem] text-gainsboro-200`}>
      <div className="flex flex-col items-center justify-center gap-[3rem] maxmob:gap-[2.6rem] smmob:gap-[0.5rem]">
        <a
          id="featuredTitle"
          onClick={function(){document.getElementById("featured").scrollIntoView()}}
          className="self-start cursor-pointer no-underline text-zinc-400 hover:text-zinc-300 flex-1 flex items-center justify-center gap-2"
          >
          {localStorage.getItem("language") === "arabic"
          ?(
            <>
              <p className={`${arFontFamily} leading-[1rem] text-[1.25rem] smmob:text-[1.15rem] uppercase`}>
                الميزات
              </p>
              <FontAwesomeIcon
                icon={faAnglesDown}
                bounce
                className="cursor-pointer transition-all duration-75 ease-in text-[1rem]"
              />
            </>
            )
          :(
            <>
              <p className="tracking-[1.5px] leading-[1rem] uppercase">
                Featured Work
              </p>
              <FontAwesomeIcon
                icon={faAnglesDown}
                bounce
                className="cursor-pointer transition-all duration-75 ease-in text-[1rem]"
              />
            </>
            )
          }
        </a>
        <div className="flex flex-row w-full smmob:flex-col-reverse smmob:pb-[2rem] gap-[1.5rem] text-gainsboro-100">
          {featured.loading || featured.error ? (
            <>
              <div className="flex flex-1 flex-col w-full gap-[1.5rem] animate-pulse">
                <div className="h-[20rem] maxmob:h-[12rem] smmob:h-[10rem] w-full bg-darkslategray rounded-md"></div>
                <div className="h-[20rem] maxmob:h-[12rem] smmob:h-[10rem] w-full bg-darkslategray rounded-md"></div>
              </div>
              <div className="flex flex-1 flex-col w-full gap-[1.5rem] animate-pulse min-h-full pt-[7.625rem] maxmob:pt-[4.375rem] smmob:pt-[2.375rem]">
                <div className="h-[20rem] maxmob:h-[12rem] smmob:h-[10rem] w-full bg-darkslategray rounded-md"></div>
                <div className="h-[20rem] maxmob:h-[12rem] smmob:h-[10rem] w-full bg-darkslategray rounded-md"></div>
              </div>
            </>
          ):(null)}
          {!featured.loading && featured.data.length ?(
            <>
              {localStorage.getItem("language") === "arabic"
              ?(
                <>
                  <div className={`${arFontFamily} flex flex-1 flex-col w-full gap-[1.5rem] font-semibold text-[2rem] maxmob:text-[1.8rem] smmob:text-[1.6rem]`}>
                    {featuredImage(featured.data[0].arName, featured.data[0].image.url)}
                    {featuredImage(featured.data[2].arName, featured.data[2].image.url)}
                  </div>
                  <div className={`${arFontFamily} flex flex-1 flex-col w-full gap-[1.5rem] font-semibold text-[2rem] maxmob:text-[1.8rem] smmob:text-[1.6rem] min-h-full pt-[7.625rem] maxmob:pt-[4.375rem] smmob:pt-[2.375rem]`}>
                    {featuredImage(featured.data[1].arName, featured.data[1].image.url)}
                    {featuredImage(featured.data[3].arName, featured.data[3].image.url)}
                  </div>
                </>)
              :(
                <>
                  <div className="flex flex-1 flex-col w-full gap-[1.5rem] text-[2.2rem] maxmob:text-[2rem] smmob:text-[1.5rem]">
                    {featuredImage(featured.data[0].enName, featured.data[0].image.url)}
                    {featuredImage(featured.data[2].enName, featured.data[2].image.url)}
                  </div>
                  <div className="flex flex-1 flex-col w-full gap-[1.5rem] text-[2.2rem] maxmob:text-[2rem] smmob:text-[1.5rem] min-h-full pt-[7.625rem] maxmob:pt-[4.375rem] smmob:pt-[2.375rem]">
                    {featuredImage(featured.data[1].enName, featured.data[1].image.url)}
                    {featuredImage(featured.data[3].enName, featured.data[3].image.url)}
                  </div>
                </>)
              }
            </>
          ):(null)}
        </div>
      </div>
    </section>
  );
};

export default Featured;
