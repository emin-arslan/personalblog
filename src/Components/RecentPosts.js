import React from "react";
import Container from "../hocs";
import post1 from "../assets/post1.png";
import post2 from "../assets/post2.png";
import post3 from "../assets/post3.png";
const RecentPosts = () => {
  return (
    <div className="">
      <div className="w-full justify-between flex items-center">
        <h1 className="text-white text-2xl mb-4 font-bold">Recent  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0ea5e9] to-[#22d3ee]">Posts</span></h1>
        <span className="text-white text-sm font-bold">View all Posts →</span>
      </div>
      <ul className="flex flex-wrap gap-4">
        <li className="w-[320px] flex-grow basis-90 bg-[#1e293b]">
          <a target="_blank" href="https://medium.com/@arslanemin1864/what-are-the-differences-between-next-js-and-react-js-why-next-js-1b5406f51964">
          <div className="w-full rounded">
            <img src={post2} alt="" className="aspect-[2/1.333]" />
            <div className="w-full p-4 px-2 text-center text-white">
              <ul className="space-y-1">
                <li>
                  <h2 className="text-lg line-clamp-2">What are the differences between Next.js and React.js? Why Next.js?</h2>
                </li>
                <li>
                  <span className="text-xs text-gray-400">Jul 7, 2023</span>
                </li>
                <li className="text-sm">
                  <p className="text-center line-clamp-3 leading-6">
                    Fundamentally, Next.js is a server-side rendering (SSR)
                    based React framework, whereas React.js is client-side
                    rendering (CSR) based. However, Next.js can also function as
                    CSR when needed. To briefly summarize SSR, it converts
                    server-side JavaScript files into HTML format and delivers
                    them to the user as HTML. This approach not only offers
                    faster page loading times but also significantly contributes
                    to SEO optimization for search engines.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          </a>
        </li>
        <li className="w-[320px] flex-grow basis-80 bg-[#1e293b]">
          <a target="_blank" href="https://medium.com/@arslanemin1864/what-are-the-distinctions-between-textcontent-and-innerhtml-in-javascript-166173f00569">
          <div className="w-full bg-[#1e293b] rounded">
            <img src={post1} alt="" className="aspect-[2/1.333]" />
            <div className="w-full p-4 px-2 text-center text-white">
              <ul>
                <li>
                  <h2 className="text-lg line-clamp-2">
                    What are the distinctions between textContent and innerHTML
                    in JavaScript?
                  </h2>
                </li>
                <li>
                  <span className="text-xs text-gray-400">Jul 7, 2023</span>
                </li>
                <li className="text-sm">
                  <p className="text-center line-clamp-3 leading-6">
                    The textContent method is used directly to modify the text
                    content of an element in JavaScript. For example, in the
                    code title.textContent = "new value <i>xyz</i>", the value
                    of title will be displayed as "new value <i>xyz</i>". When
                    using textContent,
                  </p>
                </li>
              </ul>
            </div>
          </div>
          </a>
        </li>
        <li className="w-[320px] flex-grow basis-80 bg-[#1e293b]">
          <a target="_blank" href="https://medium.com/@arslanemin1864/what-are-the-differences-between-getelement-and-queryselector-in-javascript-8013e96c5b72">
          <div className="w-full bg-[#1e293b] rounded">
            <img src={post3} alt="" className="aspect-[2/1.333]" />
            <div className="w-full p-4 px-2 text-center text-white">
              <ul>
                <li>
                  <h2 className="text-lg line-clamp-2">
                    What are the differences between getElement and
                    querySelector in JavaScript?
                  </h2>
                </li>
                <li>
                  <span className="text-xs text-gray-400">Jul 7, 2023</span>
                </li>
                <li className="text-sm">
                  <p className="text-center line-clamp-3 leading-6">
                    The getElement method allows us to select or manipulate
                    multiple Html elements. This access method is
                    straightforward. For example, we can select an element using
                    document.getElementById("element_id"), or select multiple
                    elements using
                    document.getElementsByClassName("elements_class_name").
                  </p>
                </li>
              </ul>
            </div>
          </div>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Container(RecentPosts);
