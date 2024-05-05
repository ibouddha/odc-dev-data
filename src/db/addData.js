import { db, storage } from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const addDocument = async (collectionName, data) => {
    try {
    const docRef = await addDoc(collection(db, collectionName),data);   
      return docRef;
    } catch (error) {
      console.log(error);
    }
  };
  

export const uploadImage = async (file, path) => {
    try {
        const storageRef = ref(storage, path);
        const result = await uploadBytes(storageRef, file)
        if(result){
            const url = getDownloadURL(storageRef)
            return url
        }

    } catch (error) {
        console.log(error);
    }
}