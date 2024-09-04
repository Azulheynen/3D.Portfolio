import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { useContext } from "react";
import { imageDb } from "../firebase/config";
import image19 from "../img/portfolio/image19.png";
import image6 from "../img/portfolio/image6.png";
import image7 from "../img/portfolio/image7.png";
import image8 from "../img/portfolio/image8.png";
import image9 from "../img/portfolio/image9.png";
import image10 from "../img/portfolio/image10.png";
import image12 from "../img/portfolio/image12.png";
import image20 from "../img/portfolio/image20.png";
import image1 from "../img/portfolio/image1.png";
import image2 from "../img/portfolio/image2.png";
import image3 from "../img/portfolio/image3.png";
import image4 from "../img/portfolio/image4.png";
import image5 from "../img/portfolio/image5.png";
import image13 from "../img/portfolio/image13.png";
import image14 from "../img/portfolio/image14.png";
import image15 from "../img/portfolio/image15.png";
import image16 from "../img/portfolio/image16.png";
import image17 from "../img/portfolio/image17.png";
import image18 from "../img/portfolio/image18.png";
import image21 from "../img/portfolio/image21.png";
import image22 from "../img/portfolio/image22.png";
import image23 from "../img/portfolio/image23.png";
import image24 from "../img/portfolio/image24.png";
import image25 from "../img/portfolio/image25.png";
import image26 from "../img/portfolio/image26.png";
import image27 from "../img/portfolio/image27.png";
import image31 from "../img/portfolio/image31.png";
import image32 from "../img/portfolio/image32.png";
import image33 from "../img/portfolio/image32.png";
import image34 from "../img/portfolio/image34.png";
import image35 from "../img/portfolio/image35.png";
import image36 from "../img/portfolio/image36.png";
import image37 from "../img/portfolio/image37.png";
import image38 from "../img/portfolio/image38.png";
import image39 from "../img/portfolio/image39.png";
import image40 from "../img/portfolio/image40.png";
import image41 from "../img/portfolio/image41.png";

import image43 from "../img/portfolio/image43.png";
import image44 from "../img/portfolio/image44.png";
import image45 from "../img/portfolio/image45.png";
import image46 from "../img/portfolio/image46.png";

const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);

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

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const imageRefs = await imageDb.ref("/files").listAll();
        const urls = await Promise.all(
          imageRefs.items.map((item) => item.getDownloadURL())
        );
        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchImageUrls(); // Call the function to fetch image URLs
  }, []);

  const imageArray = [
    image9,
    image10,
    image1,
    image2,
    image3,
    image4,
    image5,

    image13,
    image14,
    image15,
    image16,
    image37,
    image38,
    image39,
    image40,
    image41,
    image18,
    image19,

    image21,

    image6,
    image25,
    image26,
    image27,
    image22,
    image23,
    image24,

    image31,
    image32,
    image33,
    image34,
    image35,
    image36,
    image12,
    image20,
    image8,

    image43,
    image44,
    image45,
    image46,
    // Add more images as needed
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
            <div className="overflow-y-auto mx-auto ">
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
            <div className="overflow-y-auto grid grid-cols-2 lg:grid-cols-3 gap-2 max-h-[900px]">
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
              {imageUrls.map((url, index) => (
                <img key={index} src={url} alt={`Image ${index}`} />
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

export default Portfolio;
