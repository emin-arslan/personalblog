import React from "react";
import fire from "../assets/project-fire.png";
import maps from "../assets/project-maps.png";
import design from "../assets/project-web-design.png";
import Container from "../hocs";
const RecentProjects = () => {
  return (
    <div className="">
      <h1 className="text-white text-xl">Recent Projects</h1>
      <div className="space-y-4 mt-4">
      <div className="w-full h-40 bg-[#1e293b] p-2 rounded flex items-center md:flex-col md:h-auto sm:flex-col sm:h-auto xs:flex-col xs:h-auto min-w-fit lg:gap-5 xl:gap-5 2xl:gap-5">
          <img src={design} className="max-h-40" alt="design"></img>
          <div className="">
            <div className="flex space-x-2 md:flex-col md:items-center sm:items-center xs:items-center  sm:flex-col xs:flex-col md:justify-center sm:justify-center xs:justify-center">
            <h1 className="text-white">Project 1</h1>
            <ul className="flex space-x-2">
              <li className="bg-fuchsia-400 text-fuchsia-900 text-[11px] rounded-md px-2 py-1 h-fit">
                Astro.js
              </li>
              <li className="bg-lime-400 text-lime-900 text-[11px] min-w-fit rounded-md px-2 py-1 h-fit">
                Web design
              </li>
              <li className="bg-sky-400 text-sky-900 text-[11px] rounded-md px-2 py-1 h-fit">
                Tailwind.css
              </li>
              <li className="bg-rose-400 text-rose-900 text-[11px] rounded-md px-2 py-1 h-fit">
                TypseScript.css
              </li>
            </ul>
          </div>
          <p className="mt-2 text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum. Nunc non posuere consectetur, justo erat semper enim, non
            hendrerit dui odio id enim.
          </p>
          </div>
          
        </div>

        <div className="w-full h-40 bg-[#1e293b] p-2 rounded flex items-center md:flex-col md:h-auto sm:flex-col sm:h-auto xs:flex-col xs:h-auto min-w-fit lg:gap-5 xl:gap-5 2xl:gap-5">
          <img src={design} className="max-h-40" alt="design"></img>
          <div className="">
            <div className="flex space-x-2 md:flex-col md:items-center sm:items-center xs:items-center  sm:flex-col xs:flex-col md:justify-center sm:justify-center xs:justify-center">
            <h1 className="text-white">Project 1</h1>
            <ul className="flex space-x-2">
              <li className="bg-fuchsia-400 text-fuchsia-900 text-[11px] rounded-md px-2 py-1 h-fit">
                Astro.js
              </li>
              <li className="bg-lime-400 text-lime-900 text-[11px] min-w-fit rounded-md px-2 py-1 h-fit">
                Web design
              </li>
              <li className="bg-sky-400 text-sky-900 text-[11px] rounded-md px-2 py-1 h-fit">
                Tailwind.css
              </li>
              <li className="bg-rose-400 text-rose-900 text-[11px] rounded-md px-2 py-1 h-fit">
                TypseScript.css
              </li>
            </ul>
          </div>
          <p className="mt-2 text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum. Nunc non posuere consectetur, justo erat semper enim, non
            hendrerit dui odio id enim.
          </p>
          </div>
          
        </div>
        <div className="w-full h-40 bg-[#1e293b] p-2 rounded flex items-center md:flex-col md:h-auto sm:flex-col sm:h-auto xs:flex-col xs:h-auto min-w-fit lg:gap-5 xl:gap-5 2xl:gap-5">
          <img src={design} className="max-h-40" alt="design"></img>
          <div className="">
            <div className="flex space-x-2 md:flex-col md:items-center sm:items-center xs:items-center  sm:flex-col xs:flex-col md:justify-center sm:justify-center xs:justify-center">
            <h1 className="text-white">Project 1</h1>
            <ul className="flex space-x-2">
              <li className="bg-fuchsia-400 text-fuchsia-900 text-[11px] rounded-md px-2 py-1 h-fit">
                Astro.js
              </li>
              <li className="bg-lime-400 text-lime-900 text-[11px] min-w-fit rounded-md px-2 py-1 h-fit">
                Web design
              </li>
              <li className="bg-sky-400 text-sky-900 text-[11px] rounded-md px-2 py-1 h-fit">
                Tailwind.css
              </li>
              <li className="bg-rose-400 text-rose-900 text-[11px] rounded-md px-2 py-1 h-fit">
                TypseScript.css
              </li>
            </ul>
          </div>
          <p className="mt-2 text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum. Nunc non posuere consectetur, justo erat semper enim, non
            hendrerit dui odio id enim.
          </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Container(RecentProjects);
