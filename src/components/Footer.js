import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-end">
        <Link to="/login" className="text-gray-300 hover:text-white mx-2">
          Admin Panel
        </Link>
      </div>
    </footer>
  );
};

export default Footer;