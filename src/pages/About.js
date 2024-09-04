import React from "react";
import woman1 from "../img/about/woman1.png";
import { Link } from "react-router-dom";
import { transition1 } from "../transitions";
import { motion } from "framer-motion";
import { useContext } from "react";
import background4 from '../img/background4.gif'

const About = () => {
  const CustomLink = ({ to, children, className }) => (
    <Link
      to={to}
      className={`relative px-6 py-3 font-bold text-white rounded-lg group ${className}`}
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
      <span className="relative">{children}</span>
    </Link>
  );

  const ButtonContainer = ({ children }) => (
    <div className="flex justify-center gap-4">{children}</div>
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: "-80%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-80%" }}
          style={{ paddingTop: "100px", overflowY: "auto" }} // Add overflowY: auto to enable scrolling
          transition={transition1}
          className=" bg-local flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16 "
        >
          <div className="flex-1 max-h-100 lg:max-h-max order-2 lg:order-none overflow-hidden w-full">
            <img
              src={background4}
              alt=""
              style={{ maxWidth: "100%", height: "auto", margin: "auto" }}
            />
          </div>
          <div className="flex-1 pt-36 pb-14 lg:pt-0  lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start ">
            <h1 className="h1 title">About me / Sobre mi...</h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="description"
            >
              Apasionada del arte y la tecnología con experiencia en modelado
              3D, animación y diseño. Formada en cine y pintura, combino mi
              sólido conocimiento de color y composición con habilidades
              avanzadas en software de modelado y animación. Capaz de trabajar
              fluidamente con modelos de IA para crear contenido visual
              impactante. ¡Busco oportunidades para colaborar en proyectos
              creativos y desafiantes!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="description"
            >
              Passionate about art and technology with experience in 3D
              modeling, animation and design. Trained in film and painting, I
              combine my solid knowledge of color and composition with advanced
              skills in modeling and animation software. Able to work fluidly
              with AI models to create impactful visual content. I'm looking for
              opportunities to collaborate on creative and challenging projects!
            </motion.p>
            <ButtonContainer>
              <CustomLink to={"/portfolio"} className="mb-4 mt-4 items-center">
                View my 3D Portfolio!
              </CustomLink>
              <CustomLink to={"/aiportfolio"} className="mb-4 mt-4">
                View my AI Portfolio!
              </CustomLink>
            </ButtonContainer>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
