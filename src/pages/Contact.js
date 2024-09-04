import React, { useState, useEffect, useContext } from "react";
import contact3 from "../img/contact/contact3.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

import  Modal  from "../components/modal/modal";
import  Form  from "../components/form/Form";
import "./contact.css";
import { TfiInstagram } from "react-icons/tfi";
import { PiTelegramLogoLight , PiYoutubeLogoLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";


const Contact = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [openToS, setOpenToS] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    // Your useEffect logic here
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      style={{ paddingTop: "100px" }}
      className="fixed mx-auto flex section bg-white items-center"
     
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-8 lg:pt-36 gap-x-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1 }}
            className="lg:flex bg-midnight z-10"
          >
            <div className="lg:flex-1 lg:pt-8 px-4">
              
              <h1 className=" lg:text-[50px] contact text-center lg:text-left" class="contact honk noto-color emoji-regular" >💕CONTACT ME💕</h1>
              <p  className=" mb-12 text-center lg:text-left" class="noto-color emoji-regular biorhyme" >I would love to work with you ✌️🎉🎊
              </p>
              <p  className=" mb-12 text-center lg:text-left" class="noto-color emoji-regular biorhyme" > Me encantaria trabajar contigo 🎉🎊
              </p>
              <Form setName={setName} setIsOpen={setIsOpen} setOpenToS={setOpenToS} />
              <p  className=' lg:text-[15px] signup-form-terms' id="terms" class="biorhyme " > I will respond as soon as posible but...&nbsp; 
                <button aria-labelledby="terms" onClick={()=> setOpenToS(true)} class="buttoncontact honk noto-color emoji-regular" >YOU CAN FIND ME HERE!!</button>
              </p>
            </div>
            <div className="lg:flex-1">
              <img src={contact3} alt="Contact Image" />
            </div>
          </motion.div>
        </div>
      </div>
      <Modal isOpen={isOpen} name={name} setIsOpen={setIsOpen}>
        <h3>
          Thank you {name}!
        </h3>
        <p>I will provide my curriculum to you if needed...</p>
      </Modal>
      <Modal isOpen={openToS} setIsOpen={setOpenToS}>  
        <h3>
          Social media!
        </h3>
        <p> You can find me in any Social Media as 'Azul Heynen'! I will love to see you there!
        <div className=' xl:flex ml-24'>
    <ul className='flex gap-x-6'>
        <li>
        <a href='https://www.facebook.com/ana.azuul.9/' target='_blank'>
          <GrFacebookOption />
        </a>
        </li>
        <li>
        <a href='https://www.instagram.com/azulheynen/'target='_blank'>
          <TfiInstagram />
        </a>
        </li>
        <li>
        <a href='t.me/Azlhey'target='_blank'>
          <PiTelegramLogoLight />
        </a>
       </li>
       <li>
        <a href='https://mail.google.com/'target='_blank'>
          <CiMail />
        </a>
       </li>
    </ul>
  </div>
        </p>
        {/* Include your terms of service content here */}
      </Modal>
    </motion.section>
  );
};

export default Contact;
