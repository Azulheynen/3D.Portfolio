// FirebaseImageDataProvider.js

import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { v4 } from "uuid";
import { db } from "./config";

const FirebaseImageDataProvider = {
  getList: async (resource, params) => {
    try {
      const imgs = await listAll(ref(storage, "files"));
      const imgUrlPromises = imgs.items.map((item) => getDownloadURL(item));
      const imgUrls = await Promise.all(imgUrlPromises);
      return {
        data: imgUrls.map((url) => ({ url })),
      };
    } catch (error) {
      console.error("Error getting images:", error);
      throw new Error("Could not fetch images");
    }
  },

  create: async (resource, params) => {
    try {
      const imgRef = ref(storage, `files/${v4()}`);
      await uploadBytes(imgRef, params.data);
      const url = await getDownloadURL(imgRef);
      return { data: { url } };
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error("Could not upload image");
    }
  },

  // Implement other CRUD methods (getOne, update, delete) as needed...
};

export default FirebaseImageDataProvider;
