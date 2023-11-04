import React from "react";
import Subscribe from "./Subscribe";
import Search from "./Search";
import Container from "../hocs";

const Footer = () => {
  return (
    <div className="w-full space-y-20">


    <div className="">
    <hr className="mb-4 bg-slate-500 h-[1px] border-none"/>
      <span className="text-white text-sm">
        © Copyright 2023 by <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0ea5e9] to-[#22d3ee] font-bold">Emin Arslan</span>.
      </span>
    </div>
    </div>
  );
};

export default Container(Footer);
