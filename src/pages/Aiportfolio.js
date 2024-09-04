import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { useContext } from "react";

import ia1 from "../img/ia/ia1.png";
import ia2 from "../img/ia/ia2.png";
import ia3 from "../img/ia/ia3.png";
import ia4 from "../img/ia/ia4.png";
import ia5 from "../img/ia/ia5.png";
import ia6 from "../img/ia/ia6.png";
import ia7 from "../img/ia/ia7.png";
import ia8 from "../img/ia/ia8.png";
import ia9 from "../img/ia/ia9.png";
import ia10 from "../img/ia/ia10.png";
import ia11 from "../img/ia/ia10.png";
import ia12 from "../img/ia/ia12.png";
import ia13 from "../img/ia/ia13.png";
import ia14 from "../img/ia/ia14.png";
import ia15 from "../img/ia/ia15.png";
import ia16 from "../img/ia/ia16.png";
import ia17 from "../img/ia/ia17.png";
import ia18 from "../img/ia/ia18.png";
import ia19 from "../img/ia/ia19.png";
import ia20 from "../img/ia/ia20.png";
import ia21 from "../img/ia/ia21.png";
import ia22 from "../img/ia/ia22.png";
import ia23 from "../img/ia/ia23.png";

const AIportfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const imageArray = [
    ia1,
    ia2,
    ia3,
    ia4,
    ia5,
    ia6,
    ia7,
    ia8,
    ia9,
    ia10,
    ia11,
    ia12,
    ia13,
    ia14,
    ia15,
    ia16,
    ia17,
    ia18,
    ia19,
    ia20,
    ia21,
    ia22,
    ia23,
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        navigateImages(-1);
      } else if (event.key === "ArrowRight") {
        navigateImages(1);
      } else if (event.key === "Escape") {
        closeLightbox();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, imageIndex]);

  const openLightbox = (index) => {
    setSelectedImage(imageArray[index]);
    setImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  const navigateImages = (direction) => {
    const newIndex = imageIndex + direction;
    if (newIndex >= 0 && newIndex < imageArray.length) {
      setSelectedImage(imageArray[newIndex]);
      setImageIndex(newIndex);
    }
  };

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
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Aprendi a manejar y manipular diversas ui que utilizan modelos
              como Stable Difussion, para crear Imagenes Unicas! Asi como
              tambien animaciones!
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me!... Contratame!
            </Link>
          </motion.div>
          {isMobile ? (
            <div className="overflow-y-auto mx-auto gap-x-12  ">
              {imageArray.map((image, index) => (
                <div
                  key={index}
                  className="bg-accent overflow-hidden"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                    src={image}
                    alt=""
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-y-auto grid grid-cols-2 lg:grid-cols-3 gap-2 max-h-[700px]">
              {imageArray.map((image, index) => (
                <div
                  key={index}
                  className="bg-accent overflow-hidden"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                    src={image}
                    alt=""
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt=""
            className="max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing on image click
            onWheel={(e) => navigateImages(e.deltaY > 0 ? 1 : -1)} // Navigate with scroll
          />
        </div>
      )}
    </motion.section>
  );
};

export default AIportfolio;
