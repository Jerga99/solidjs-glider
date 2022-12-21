import { FirebaseError } from "firebase/app";
import { createSignal } from "solid-js";
import { authenticate, AuthType } from "../api/auth";
import { AuthForm } from "../types/Form";

const useAuth = (authType: AuthType) => {
  const [loading, setLoading] = createSignal(false);

  const authUser = async (form: AuthForm) => {
    setLoading(true);
    try {
      await authenticate(form, authType);
    } catch(error) {
      const message = (error as FirebaseError).message;
      console.log(message);
    } finally {
      setLoading(false);
    }
  }

  return {
    authUser, loading
  }
}

export default useAuth;
