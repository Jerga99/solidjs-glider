import { authenticate, AuthType } from "../api/auth";
import { AuthForm } from "../types/Form";

const useAuth = (authType: AuthType) => {
  const authUser = async (form: AuthForm) => {
    const firebaseUser = await authenticate(form, authType);
    return firebaseUser;
  }

  return {
    authUser
  }
}

export default useAuth;
