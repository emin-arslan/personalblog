import React from "react";
import logo from "../assets/logo.png";
import Container from "../hocs";
const Greetings = () => {
  return (
    <div className="flex items-center">
      <div className="flex gap-20 sm:gap-5 xs:gap-0 xs:flex-col">
        <div className="my-auto items-center">
          <h1 className="text-3xl text-white font-bold xs:text-2xl sm:text-3xl">
            Hi there, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0ea5e9] to-[#22d3ee]">
              Emin
            </span>{" "}
            👋
          </h1>
          <p className="text-left text-white py-5 text-xl leading-9 sm:text-lg xs:text-base">
            Welcome to my blog! I'm a computer engineer, and here, I share my
            passion for web development. You'll find articles and projects
            related to <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-orange-300">JavaScript</span>, TypeScript, <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#0ea5e9] to-[#22d3ee]">React</span>, CSS, HTML, <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-green-500 font-bold">MongoDB</span>,
            Node.js, and Tailwind CSS. Explore my work, and let's connect. Enjoy
            your visit!
          </p>
          <ul className="flex w-full h-12 space-x-1">
            <li>
              <img
                src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/twitter-icon.png"
                className="object-cover h-full"
                alt="twitter"
              />
            </li>
            <li>
              <img
                src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/facebook-icon.png"
                className="object-cover h-full"
                alt="facebook"
              />
            </li>
            <li>
              <img
                src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/linkedin-icon.png"
                className="object-cover h-full"
                alt="linkedin"
              />
            </li>
            <li>
              <img
                src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/youtube-icon.png"
                className="object-cover h-full"
                alt="youtube"
              />
            </li>
          </ul>
        </div>
        <div className="flex xs:items-center xs:justify-center w-full">
        <img src={logo} alt="avatar" className="float-right xs:float-none xs:mr-0 -mr-10 w-[300px] max-w-[350px] " />
        </div>
        
        
      </div>
    </div>
  );
};

export default Container(Greetings);
