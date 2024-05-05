import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore"; 

export const getPromos = async () => {
    const querySnapshot = await getDocs(collection(db, "Promos"));
    const Promos = [];
    querySnapshot.forEach((doc) => {
        Promos.push({
            id: doc.id, 
            ...doc.data()
        });
    });
    console.log(Promos);
    return Promos;
}

export const getStudents = async () => {
    const querySnapshot = await getDocs(collection(db, "Students"));
    const students = [];
    querySnapshot.forEach((doc) => {
        students.push({
            id: doc.id, 
            ...doc.data()
        });
    });
    return students;
}