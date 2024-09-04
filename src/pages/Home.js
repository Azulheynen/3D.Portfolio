import React, { useContext } from "react";
import image6 from "../img/portfolio/image6.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import Footer from "../components/Footer";

const Home = () => {
  const CustomLink = ({ to, children, className }) => (
    <div className="flex justify-center items-center">
      <Link
        to={to}
        className={`relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-mono font-medium tracking-tighter text-xl text-white bg-gray-800 rounded-lg group ${className}`}
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative">{children}</span>
      </Link>
    </div>
  );

  const ButtonContainer = ({ children }) => (
    <div className="flex justify-center gap-4">{children}</div>
  );

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className=" flex section items-center"
      >
        <div className="container mx-auto">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={transition1}
              className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
            >
              <h1 className="h1">
                3d Models &<h2> IA content </h2>{" "}
              </h1>

              <p className="text-[26px] lg:text-[36px] text-primary mb-4 lg:mb-12 ">
                Buenos Aires, Argentina
              </p>
              <ButtonContainer>
                <CustomLink to={"/contact"} className="mb-4 mt-4 items-center">
                  Hire me!
                </CustomLink>
              </ButtonContainer>
            </motion.div>

            <div className=" container mx-auto flex justify-end max-h-96 lg:max-h-max p-10px mx-auto items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={transition1}
                className="relative lg:-right-40 overflow-hidden"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={transition1}
                  src={image6}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </div>
        <Footer className="footer-container" />
      </motion.section>
    </>
  );
};

export default Home;
