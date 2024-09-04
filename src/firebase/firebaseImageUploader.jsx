// import React, { useEffect, useState } from "react";
// import { storage } from "./config";
// import {
//   getDownloadURL,
//   listAll,
//   ref,
//   uploadBytes,
//   uploadBytesResumable,
// } from "firebase/storage";
// import { v4 } from "uuid";
// import { motion } from "framer-motion";
// import { transition1 } from "../transitions";

// const FirebaseImageUpload = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: "100%" }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: "100%" }}
//       transition={transition1}
//       style={{ paddingTop: "100px" }}
//       className="fixed mx-auto flex section bg-white items-center"
//     >
//       <div className="container mx-auto h-full">
//         <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-8 lg:pt-36 gap-x-8 text-center lg:text-left">
//           <motion.div
//             initial={{ opacity: 0, y: "100%" }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: "100%" }}
//             transition={{ transition: transition1, duration: 1 }}
//             className="bg-tahiti z-10 lg:flex-1 lg:pt-8 px-4"
//           >
//             <input type="file" onChange={handleChange} />
//             <button onClick={handleUpload}>Upload</button>
//             <progress value={progress} max="100" />
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default FirebaseImageUpload;
