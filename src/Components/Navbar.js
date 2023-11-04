import React from "react";
import Container from "../hocs";
const Navbar = () => {
  return (
    <div className="text-white justify-between flex h-10">
      <div className="flex gap-2 items-center">
        <svg
          stroke="currentColor"
          fill="#22d3ee"
          stroke-width="0"
          role="img"
          viewBox="0 0 24 24"
          height="2em"
          width="2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title></title>
          <path d="M12.004 0c-2.35 2.395-2.365 6.185.133 8.585l3.412 3.413-3.197 3.198a6.501 6.501 0 0 1 1.412 7.04l9.566-9.566a.95.95 0 0 0 0-1.344L12.004 0zm-1.748 1.74L.67 11.327a.95.95 0 0 0 0 1.344C4.45 16.44 8.22 20.244 12 24c2.295-2.298 2.395-6.096-.08-8.533l-3.47-3.469 3.2-3.2c-1.918-1.955-2.363-4.725-1.394-7.057z"></path>
        </svg>
        <h1 className="text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#0ea5e9] to-[#22d3ee] font-bold">
          Emin's Blog
        </h1>{" "}
      </div>

      <div>
        <ul className="flex gap-3 font-semibold text-gray-300 h-full items-center">
          <li>Blogs</li>
          <li><a href="https://github.com/emin-arslan">GitHub</a></li>
          <li><a href="mailto:arslanemin1864@gmail.com">Email</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Container(Navbar);
