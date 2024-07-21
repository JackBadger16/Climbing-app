import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/JB.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50 transition duration-200 ease-in-out ${
        isScrolled ? "translate-y-[-100%] opacity-0 scale-y-0" : ""
      }`}
    >
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

        <ul className="hidden md:flex py-4">
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
        <div onClick={handleClick} className="md:hidden  text-white z-50 py-2">
          {!nav ? (
            <FaBars style={{ color: "black" }} />
          ) : (
            <FaTimes style={{ color: "white" }} />
          )}
        </div>
        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-white flex flex-col justify-center items-center z-45"
          }
        >
          <li className="py-6 text-4xl">
            <a href="/">Home</a>
          </li>
          <li className="py-6 text-4xl">
            <a href="/ticklist">Ticklist</a>
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
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
