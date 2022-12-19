import React from "react";
import { Link } from "react-router-dom";

const EventCard = () => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src="https://www.codingninjas.com/blog/wp-content/uploads/2021/06/Blog-2021-06-16T122625.322-1024x536.png"
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY
          </h2>
          <div className="flex justify-between">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Event Name
            </h1>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              01/23/2022
            </h1>
          </div>
          <p className="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <div className="flex justify-between ">
            <Link to={'/event/temp'} className="text-white bg-indigo-500 hover:bg-indigo-600 md:font-semibold inline-flex items-center md:mb-2 md:px-6 px-2 md:py-2 py-0.5 text-sm rounded-sm lg:mb-0 font-normal">
              Join Now
            </Link>
            <div className="flex items-center justify-between space-x-4">
              <span className="text-gray-400  inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm text-semibold ">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                1.2K
              </span>
              <span className="text-gray-400  font-semibold   inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm  py-1 border-r-2 border-gray-200">
                IEEE{" "}
                <img
                  src="/assests/1.png"
                  alt=""
                  className="w-10 h-10 rounded-full bg-pink-500 mx-1"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
