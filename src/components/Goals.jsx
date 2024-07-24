import React from "react";

const Goals = () => {
  return (
    <div
      name="skills"
      className=" w-full h-full bg-[#0a192f] text-gray-300 py-4 pt-[300px]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Goals
          </p>
          <p className="py-4">New goals e.g strength/fitness</p>
        </div>

        <div className="w-full  h-screen "></div>
      </div>
    </div>
  );
};

export default Goals;
