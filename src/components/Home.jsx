import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
// import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="pt-[300px] w-full h-full bg-[#0a192f]  ">
      {/* container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full w-full">
        {/* <p className="text-pink-600 z-10 font-bold ">Hello</p>
        <h1 className="text-4xl md:text-7xl font-bold text-[#676f88] z-10">
          
        </h1> */}
        <h2 className="bg-[#0a192f] text-4xl text-white md:text-5xl font-bold">
          Welcome to 'Send friend matt's test chalk up breaking Beta ate that
          Beta fatal Beta obey the Beta send the Send Send quest Wrecked D-Send
          climb Harder'
        </h2>
        <p className="text-[#fd0000] bg-[#0a192f] max-w-[700px] py-4  font-extrabold ">
          This is a space where climbers can search for routes,crags and areas,
          as well as create and log routes.
        </p>
        <div>
          <a href="/ticklist">
            <button className="text-white group rounded-full px-6 py-3 my-2 flex items-center bg-gradient-to-r from-slate-500  ">
              Ticklist
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
