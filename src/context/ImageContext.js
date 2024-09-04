import React, { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

export const useImageContext = () => useContext(ImageContext);

export  const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  const addImage = (imageUrl) => {
    setImages([...images, imageUrl]);
  };

  return (
    <ImageContext.Provider value={{ images, addImage }}>
      {children}
    </ImageContext.Provider>
  );
};