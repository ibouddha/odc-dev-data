import { db, firebaseConfig } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore"; 

export const getStudents = async () => {
    console.log(firebaseConfig);
    const querySnapshot = await getDocs(collection(db, "Students"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
}
