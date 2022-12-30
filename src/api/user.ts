
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../db";
import { User } from "../types/User";

const getUsers = async (loggedInUser: User) => {
  const q = query(
    collection(db, "users"),
    where("uid", "!=", loggedInUser.uid)
  );
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
