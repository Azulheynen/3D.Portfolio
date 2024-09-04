import React, { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.5, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <nav className="w-[100px] text-primary">
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer xl:hidden"
      >
        <CgMenuLeftAlt />
      </div>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        <div
          onClick={closeMenu}
          className="text-4xl absolute x-30 left-4 top-14 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold text-3xl">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/3Dportfolio" onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/aiportfolio" onClick={closeMenu}>
              AI Portfolio
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
