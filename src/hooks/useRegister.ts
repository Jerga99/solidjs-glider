import { RegisterForm } from "../types/Form";


const useRegister = () => {
  const register = (registerForm: RegisterForm) => {
    alert(JSON.stringify(registerForm));
  }

  return {
    register
  }
}

export default useRegister;
