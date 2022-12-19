import { logout } from "../api/auth";

const useLogout = () => {
  const logoutUser = async () => {
    try {
      await logout();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return {
    logoutUser
  }
}

export default useLogout;
