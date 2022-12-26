import { doc, Timestamp } from "firebase/firestore";
import { db } from "../db";



const createGlide = (form: {
  content: string;
  uid: string;
}) => {
  const userRef = doc(db, "users", form.uid);

  const glideToStore = {
    ...form,
    user: userRef,
    likesCount: 0,
    subglidesCount: 0,
    date: Timestamp.now()
  }

  console.log(glideToStore);

  return glideToStore;
}


export {
  createGlide
}
