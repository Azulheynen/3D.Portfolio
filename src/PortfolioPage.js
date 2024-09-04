import React, { useState } from "react";
import FirebaseImageUpload from "./firebase/firebaseImageUploader";
import Portfolio from "./pages/Portfolio";

const PortfolioPage = () => {
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]);

  // Function to update the uploaded image URLs state
  const handleImageUpload = (url) => {
    setUploadedImageUrls((prevUrls) => [...prevUrls, url]);
  };

  return (
    <div>
      {/* Render FirebaseImageUpload and pass handleImageUpload as a prop */}
      {/* <FirebaseImageUpload onImageUpload={handleImageUpload} /> */}

      {/* Render Portfolio and pass uploadedImageUrls as a prop */}
      <Portfolio uploadedImageUrls={uploadedImageUrls} />
    </div>
  );
};

export default PortfolioPage;
