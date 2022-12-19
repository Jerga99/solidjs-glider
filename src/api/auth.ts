import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../db";
import { RegisterForm } from "../types/Form";

const registerUser = (form: RegisterForm) => {
  return createUserWithEmailAndPassword(firebaseAuth, form.email, form.password);
}

export { registerUser };
