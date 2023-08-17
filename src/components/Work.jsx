import React from "react";

const Work = () => {
  return (
    <div
      name="work"
      className="work-section flex w-full h-screen  text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="mt-6">Check out some of my recent work!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div project-div meenCutz">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <span className="text-2xl font-bold text-white tracking -tracking-wider">
                MeenCutz Booking App
              </span>
              <div className="pt-8 text-center">
                <a href="https://iridescent-alpaca-41669a.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="##">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div content-div project-div mp3Converter">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <span className="text-2xl font-bold text-white tracking -tracking-wider">
                Youtube To Mp3 Converter
              </span>
              <div className="pt-8 text-center">
                <a href="https://iridescent-alpaca-41669a.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="##">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div project-div meetApp">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <span className="flex justify-center text-2xl font-bold text-white tracking -tracking-wider">
                Meet App
              </span>
              <div className="pt-8 text-center">
                <a href="##">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="##">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div project-div myFlix ">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <span className="flex justify-center text-2xl font-bold text-white tracking -tracking-wider">
                MyFlix App
              </span>
              <div className="pt-8 text-center">
                <a href="##">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="##">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div project-div pokeDex">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <span className="flex justify-center text-2xl font-bold text-white tracking -tracking-wider">
                PokeDex App
              </span>
              <div className="pt-8 text-center">
                <a href="##">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="##">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
