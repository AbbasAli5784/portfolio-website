import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="logo"></div>
      {/*menu*/}

      <ul className="hidden md:flex">
        <li className="group relative">
          <span className="group-hover:border-b border-transparent hover:border-gray-300 transition-all duration-300">
            <Link to="home" smooth={true} duration={500}>
              {" "}
              Home{" "}
            </Link>
          </span>
        </li>
        <li className="group relative">
          <span className="group-hover:border-b border-transparent hover:border-gray-300 transition-all duration-300">
            <Link to="about" smooth={true} duration={500}>
              {" "}
              About{" "}
            </Link>
          </span>
        </li>
        <li className="group relative">
          <span className="group-hover:border-b border-transparent hover:border-gray-300 transition-all duration-300">
            <Link to="skills" smooth={true} duration={500}>
              {" "}
              Skills{" "}
            </Link>
          </span>
        </li>
        <li className="group relative">
          <span className="group-hover:border-b border-transparent hover:border-gray-300 transition-all duration-300">
            <Link to="work" smooth={true} duration={500}>
              {" "}
              Work{" "}
            </Link>
          </span>
        </li>
        <li className="group relative">
          <span className="group-hover:border-b border-transparent hover:border-gray-300 transition-all duration-300">
            <Link to="contact" smooth={true} duration={500}>
              {" "}
              Contact{" "}
            </Link>
          </span>
        </li>
      </ul>

      {/*hamburger*/}

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*mobile menu*/}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center  "
        }
      >
        <li className="py-6 text-4xl ">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            {" "}
            Home{" "}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            {" "}
            About{" "}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            {" "}
            Skills{" "}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            {" "}
            Work{" "}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            {" "}
            Contact{" "}
          </Link>
        </li>
      </ul>

      {/*Social Icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/abbas-ali-4434a2280/"
            >
              Linkedln <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/AbbasAli5784"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1kF_k6cDjDfXNg-PgKOfpzuG1W8QsPo98/view"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
