
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../db";
import { User } from "../types/User";

const getUsers = async () => {
  const q = query(collection(db, "users"));
  const querySnapshot = await getDocs(q);

  const users = querySnapshot.docs.map((doc) => {
    const user = doc.data() as User;
    return user;
  })

  return users;
}

export {
  getUsers
}
