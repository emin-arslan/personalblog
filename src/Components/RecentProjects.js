import React from "react";
import apply4Job from "../assets/apply4Job.png";
import amadeus from "../assets/amadeus.png";
import sociize from "../assets/sociize.png";
import dailyAnime from "../assets/dailyAnime.png";
import Container from "../hocs";
const RecentProjects = () => {
  return (
    <div className="">
      <h1 className="text-white text-2xl font-bold">Recent  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0ea5e9] to-[#22d3ee]">Projects</span></h1>
      <div className="space-y-4 mt-4">
        <div onClick={()=>window.open('https://animeelysium.com/')} className="w-full h-40 bg-[#1e293b] cursor-pointer p-2 rounded flex items-center md:flex-col md:h-auto sm:flex-col sm:h-auto xs:flex-col xs:h-auto min-w-fit lg:gap-5 xl:gap-5 2xl:gap-5">
          <img src={dailyAnime} className="max-h-40" alt="design"></img>
          <div className="">
            <div className="flex space-x-2 md:flex-col md:items-center sm:items-center xs:items-center  sm:flex-col xs:flex-col md:justify-center sm:justify-center xs:justify-center">
              <h1 className="text-white">Anime Elysium</h1>
              <ul className="flex space-x-2">
                <li className="bg-orange-400 text-orange-900 text-[11px] rounded-md px-2 py-1 h-fit">
                  JavaScript
                </li>
                <li className="bg-lime-400 text-lime-900 text-[11px] min-w-fit rounded-md px-2 py-1 h-fit">
                  MongoDb
                </li>
                <li className="bg-rose-400 text-rose-900 text-[11px] rounded-md px-2 py-1 h-fit">
                  TypseScript
                </li>
                <li className="bg-purple-400 text-purple-900 text-[11px] rounded-md px-2 py-1 h-fit">
                  NodeJs
                </li>
              </ul>
            </div>
            <p className="mt-2 text-sm text-gray-400">
            Anime Elysium is an anime streaming platform that has both a mobile application available on Google Play and a website on the internet. The Anime Elysium app on Google Play has over 6,000 downloads and a total of 3,000 users. On the web, it receives an average of 1,500 to 2,000 visitors.
            </p>
          </div>
        </div>
        <div onClick={()=>window.open('https://amadeus-airlines.vercel.app/')} className="w-full h-40 bg-[#1e293b] cursor-pointer p-2 rounded flex items-center md:flex-col md:h-auto sm:flex-col sm:h-auto xs:flex-col xs:h-auto min-w-fit lg:gap-5 xl:gap-5 2xl:gap-5">
          <img src={amadeus} className="max-h-40 w-[170px]" alt="design"/>
          <div className="">
            <div className="flex space-x-2 md:flex-col md:items-center sm:items-center xs:items-center  sm:flex-col xs:flex-col md:justify-center sm:justify-center xs:justify-center">
              <h1 className="text-white">Amadeus Airlines</h1>
              <ul className="flex space-x-2">
                <li className="bg-orange-400 text-orange-900 text-[11px] rounded-md px-2 py-1 h-fit">
                  JavaScript
                </li>
                <li className="bg-red-600 text-red-800 text-[11px] min-w-fit rounded-md px-2 py-1 h-fit">
                  MSW
                </li>
                <li className="bg-sky-400 text-sky-900 text-[11px] rounded-md px-2 py-1 h-fit">
                  Tailwind.css
                </li>
              </ul>
            </div>
            <p className="mt-2 text-sm text-gray-400">
            This project was the outcome of a requested assignment during a job interview. Upon completion, I am excited to share it. The design, inspired by Turkish Airlines, has been carefully crafted. Additionally, the project includes test entries with the following details: Departure airport: 'Istanbul', arrival airport: 'New York', departure date: 02.02.2024, arrival date: 03.02.2024. Note that these trial inputs will be invalid starting from 03.02.2024. It's important to mention that due to retrieving data from a non-dynamic JSON file using Mock Service Worker (MSW), entries may not function beyond this date.
            </p>
          </div>
        </div>
        <div onClick={()=>window.open('https://sociize.app/')} className="w-full h-40 bg-[#1e293b] cursor-pointer p-2 rounded flex items-center md:flex-col md:h-auto sm:flex-col sm:h-auto xs:flex-col xs:h-auto min-w-fit lg:gap-5 xl:gap-5 2xl:gap-5">
          <img src={sociize} className="max-h-40" alt="design"></img>
          <div className="">
            <div className="flex space-x-2 md:flex-col md:items-center sm:items-center xs:items-center  sm:flex-col xs:flex-col md:justify-center sm:justify-center xs:justify-center">
              <h1 className="text-white">Sociize</h1>
              <ul className="flex space-x-2">
                <li className="bg-orange-400 text-orange-900 text-[11px] rounded-md px-2 py-1 h-fit">
                  JavaScript
                </li>
                <li className="bg-lime-400 text-lime-900 text-[11px] min-w-fit rounded-md px-2 py-1 h-fit">
                  MongoDb
                </li>
                <li className="bg-sky-400 text-sky-900 text-[11px] rounded-md px-2 py-1 h-fit">
                  Tailwind.css
                </li>
                <li className="bg-purple-400 text-purple-900 text-[11px] rounded-md px-2 py-1 h-fit">
                  NodeJs
                </li>
              </ul>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Sociize is primarily a social media management website. We are
              continuously working on developing features that cater to the
              users' needs. It encompasses various features found in social
              media platforms, including posting, following likes, viewing
              comments, graphical analysis, a scheduler, and many more.
            </p>
          </div>
        </div>
        <div onClick={()=>window.open('https://github.com/emin-arslan/apply4jobv11/tree/main')} className="w-full h-40 bg-[#1e293b] p-2 rounded flex items-center md:flex-col md:h-auto sm:flex-col sm:h-auto xs:flex-col xs:h-auto min-w-fit lg:gap-5 xl:gap-5 2xl:gap-5">
          <img src={apply4Job} className="max-h-40" alt="design"/>
          <div className="">
            <div className="flex space-x-2 md:flex-col md:items-center sm:items-center xs:items-center  sm:flex-col xs:flex-col md:justify-center sm:justify-center xs:justify-center">
              <h1 className="text-white">Apply4Job</h1>
              <ul className="flex space-x-2">
                <li className="bg-orange-400 text-orange-900 text-[11px] rounded-md px-2 py-1 h-fit">
                  JavaScript
                </li>
                <li className="bg-lime-400 text-lime-900 text-[11px] min-w-fit rounded-md px-2 py-1 h-fit">
                  MongoDb
                </li>
                <li className="bg-sky-400 text-sky-900 text-[11px] rounded-md px-2 py-1 h-fit">
                  Tailwind.css
                </li>
                <li className="bg-purple-400 text-purple-900 text-[11px] rounded-md px-2 py-1 h-fit">
                  NodeJs
                </li>
              </ul>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              The main goal of this project was to enable users to track job
              listings from various websites on a single platform and apply when
              desired. Unfortunately, the project had to be abandoned due to
              copyright issues associated with this process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container(RecentProjects);
