import { addDoc, collection, doc, Timestamp } from "firebase/firestore";
import { db } from "../db";
import { Glide } from "../types/Glide";



const createGlide = async (form: {
  content: string;
  uid: string;
}): Promise<Glide> => {
  const userRef = doc(db, "users", form.uid);

  const glideToStore = {
    ...form,
    user: userRef,
    likesCount: 0,
    subglidesCount: 0,
    date: Timestamp.now()
  }

  const glideCollection = collection(db, "glides");
  const added = await addDoc(glideCollection, glideToStore);
  

  return {...glideToStore, id: added.id};
}


export {
  createGlide
}
