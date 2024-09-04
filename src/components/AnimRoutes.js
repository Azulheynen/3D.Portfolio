import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import PortfolioPage from "../PortfolioPage";
import Contact from "../pages/Contact";
import AIportfolio from "../pages/Aiportfolio";

import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import FirebaseImageUpload from "../firebase/firebaseImageUploader";
import Login from "../pages/login/login";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from '../context/AuthContext'
import { ImageProvider } from '../context/ImageContext'


const AnimRoutes = () => {
  const location = useLocation();
  




 
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes location={location.pathname} Location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={
        <ImageProvider>
       <PortfolioPage />
      </ImageProvider>

       } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/AIportfolio" element={<AIportfolio />} />
        <Route path="/admin" element={
        <FirebaseImageUpload />
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
