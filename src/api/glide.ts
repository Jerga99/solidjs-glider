import { addDoc, collection, doc, DocumentReference, getDoc, getDocs, query, Timestamp } from "firebase/firestore";
import { db } from "../db";
import { Glide } from "../types/Glide";
import { User } from "../types/User";


const getGlides = async () => {
  const q = query(collection(db, "glides"));
  const qSnapshot = await getDocs(q);

  const glides = await Promise.all(qSnapshot.docs.map(async doc => {
    const glide = doc.data() as Glide;
    const userSnap = await getDoc(glide.user as DocumentReference);
    glide.user = userSnap.data() as User;

    return {...glide, id: doc.id};
  }))

  return {glides};
}

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
  createGlide,
  getGlides
}
