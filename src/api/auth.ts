import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db, firebaseAuth } from "../db";
import { RegisterForm } from "../types/Form";
import { User } from "../types/User";

const registerUser = async (form: RegisterForm) => {
  const {user: registeredUser} = await createUserWithEmailAndPassword(firebaseAuth, form.email, form.password);
  
  const user: User = {
    uid: registeredUser.uid,
    fullName: form.fullName,
    nickName: form.nickName,
    email: form.email,
    avatar: form.avatar,
    followers: [],
    following: [],
    followersCount: 0,
    followingCount: 0
  }

  await setDoc(doc(db, "users", registeredUser.uid), user);
  return registeredUser;
}

export { registerUser };
