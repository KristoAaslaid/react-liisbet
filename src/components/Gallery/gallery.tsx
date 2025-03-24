"use client";

import Viewgallery from "./viewgallery";
import Link from "next/link";

const Gallery = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gradient-to-b from-red-800 to-zinc-900 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[120px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Galerii
                </h1>
              </div>
            <div style={{marginTop: "80px"}}>
                <Viewgallery />
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
