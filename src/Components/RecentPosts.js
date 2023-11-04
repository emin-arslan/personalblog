import React from "react";
import Container from "../hocs";
const RecentPosts = () => {
  return (
    <div className="">
      <div className="w-full justify-between flex items-center">
      <h1 className="text-white text-2xl mb-4">Recent Posts</h1>
      <span className="text-white text-sm font-bold">View all Posts →</span>
      </div>
      <ul className="flex flex-wrap gap-4">
      <li className="w-[320px] flex-grow basis-60">
          <div className="w-full bg-[#1e293b] rounded">
          <img src="https://es.wikiarquitectura.com/wp-content/uploads/2017/01/Nervi_4.jpg" alt="21" />
            <div className="w-full p-4 px-2 text-center text-white">
              <ul>
                <li>
                <h2 className="text-xl">
                5th Lorem ipsum dolor sit
              </h2>
                </li>
                <li>
                  <span className="text-xs text-gray-400">Feb 5, 2020</span>
                </li>
                <li className="text-sm">
               <p className="text-center">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi.
               </p>
                </li>
              </ul>

            </div>
          </div>
        </li>
        <li className="w-[320px] flex-grow basis-60">
          <div className="w-full bg-[#1e293b] rounded">
          <img src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/image-post2.jpeg" alt="21" />
            <div className="w-full p-4 px-2 text-center text-white">
              <ul>
                <li>
                <h2 className="text-xl">
                5th Lorem ipsum dolor sit
              </h2>
                </li>
                <li>
                  <span className="text-xs text-gray-400">Feb 5, 2020</span>
                </li>
                <li className="text-sm">
               <p className="text-center">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi.
               </p>
                </li>
              </ul>

            </div>
          </div>
        </li>
        <li className="w-[320px] flex-grow basis-60">
          <div className="w-full bg-[#1e293b] rounded">
          <img src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/image-post3.jpeg" alt=""/>
            <div className="w-full p-4 px-2 text-center text-white">
              <ul>
                <li>
                <h2 className="text-xl">
                4th Lorem ipsum dolor sit
              </h2>
                </li>
                <li>
                  <span className="text-xs text-gray-400">Feb 4, 2020</span>
                </li>
                <li className="text-sm">
               <p className="text-center">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi.
               </p>
                </li>
              </ul>

            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Container(RecentPosts);
