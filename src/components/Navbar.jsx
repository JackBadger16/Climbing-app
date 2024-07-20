import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  // FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/JB.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="fixed w-full h-[300px] flex justify-between items-top px-4  text-black text-2xl z-0"
      style={{
        backgroundImage: `url('/navbarbackground.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "40% 35%",
      }}
    >
      <div>
        <img
          className="rounded"
          src={Logo}
          alt="Logo"
          style={{ width: "50px" }}
        />
      </div>

      {/* menu */}

      <ul className="hidden md:flex ">
        <li>
          <a className="hover:font-bold" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="hover:font-bold" href="/ticklist">
            Ticklist
          </a>
        </li>
        <li>
          <a className="hover:font-bold" href="/skills">
            Goals
          </a>
        </li>
        <li>
          <a className="hover:font-bold" href="/login">
            Login
          </a>
        </li>
        <li>
          <a className="hover:font-bold" href="/about">
            About
          </a>
        </li>
        <li>
          <a className="hover:font-bold " href="/contact">
            Contact
          </a>
        </li>
      </ul>

      {/* Hambuger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <a href="/">Home</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/about">About</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/skills">Skills</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/skills">Goals</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/login">Login</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/ticklist">Ticklist</a>
        </li>
      </ul>

      {/*  Social icons*/}
      <div className=" fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px]flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="mr-[-10px] lg:mr-0 duration-300 flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="mr-[-10px] lg:mr-0 duration-300 flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fb2b0]">
            <a
              className="mr-[-10px] lg:mr-0 duration-300 flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <z
              className="mr-[-10px] lg:mr-0 duration-300 flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </z>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
