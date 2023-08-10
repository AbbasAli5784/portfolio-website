import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import "./global.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full animate-fadeInDown">
        <p className="text-pink-600 font-bold group-hover:animate-pulse">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] group-hover:animate-pulse">
          Abbas Ali
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] group-hover:animate-pulse">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] group-hover:animate-pulse">
          I'm a full-stack developer specialzing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building response full-stack web applications
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            {" "}
            <button className=" text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-60">
              {" "}
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
