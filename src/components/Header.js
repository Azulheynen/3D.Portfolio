import React, { useState, useEffect, useContext } from "react";

import logo3 from "../img/header/logo3.png";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1080;
      setIsMobile(isMobile);
    };

    // Initial check for mobile view
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo */}
        <Link to={"/"} className="max-w-[200px]">
          <motion.img src={logo3} alt="" whileHover={{ scale: 1.1 }} />
        </Link>

        {/* Navigation (Mobile or Desktop) */}
        {isMobile ? (
          <MobileNav />
        ) : (
          <nav className="hidden lg:flex gap-x-12 font-semibold">
            <Link
              to={"/"}
              className="text-[#696c6d] hover:text-primary transition"
              class="nanum-pen"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="text-[#696c6d] hover:text-primary transition"
              class="nanum-pen"
            >
              About
            </Link>
            <Link
              to={"/portfolio"}
              className="text-[#696c6d] hover:text-primary transition"
              class="nanum-pen"
            >
              3D Portfolio
            </Link>
            <Link
              to={"/aiportfolio"}
              className="text-[#696c6d] hover:text-primary transition"
              class="nanum-pen"
            >
              IA Portfolio
            </Link>
            <Link
              to={"/contact"}
              className="text-[#696c6d] hover:text-primary transition"
              class="nanum-pen"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
