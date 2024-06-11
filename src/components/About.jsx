import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="md:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4">
          <div className="md:text-right text-4xl font-bold">
            <p>Hi, I'm Jack nice to meet you please take a look around.</p>
          </div>
          <div>
            <p>
              I'm passionate about changing my career from a Physiotherapist to
              a Front-End Developer. I would like to create bespoke Fronte-End
              UI to meet the demands of varrying clients and businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
