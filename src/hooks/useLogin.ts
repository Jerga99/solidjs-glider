import { AuthForm } from "../types/Form";

const useLogin = () => {
  const loginUser = (loginForm: AuthForm) => {
    alert(JSON.stringify(loginForm));
  }

  return {
    loginUser
  }
}

export default useLogin;
