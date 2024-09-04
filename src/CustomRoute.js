import React from "react";
import {  Route, Routes} from "react-router-dom";
import FirebaseImageUpload from "./firebase/firebaseImageUploader";

const CustomRoute = () => {
  return (

      <Routes>
        <Route path="/admin" element={<FirebaseImageUpload />} />
      </Routes>
  
  );

};

export default CustomRoute;
