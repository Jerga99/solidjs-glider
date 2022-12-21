import { register } from "../api/auth";
import { RegisterForm } from "../types/Form";


const useRegister = () => {
  const registerUser = async (registerForm: RegisterForm) => {
    const user =  await register(registerForm);
    console.log(user);
  }

  return {
    registerUser
  }
}

export default useRegister;
