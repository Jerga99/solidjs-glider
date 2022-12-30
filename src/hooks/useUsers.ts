import { FirebaseError } from "firebase/app";
import { createSignal, onMount } from "solid-js";
import * as api from "../api/user";
import { useAuthState } from "../context/auth";
import { useUIDispatch } from "../context/ui";
import { User } from "../types/User";


const useUsers = () => {
  const {user} = useAuthState()!;
  const {addSnackbar} = useUIDispatch();
  const [users, setUsers] = createSignal<User[]>([]);
  const [loading, setLoading] = createSignal(true);

  onMount(() => {
    loadUsers();
  })

  const loadUsers = async () => {
    try {
      const users = await api.getUsers(user!);
      setUsers(users);
    } catch(error) {
      const message = (error as FirebaseError).message;
      addSnackbar({message, type: "error"});
    } finally {
      setLoading(false);
    }
  }

  const followUser = async (followingUser: User) => {
    await api.followUser(user!.uid, followingUser.uid);
    alert("Following Done!");
  }

  return {
    loading,
    users,
    followUser
  }
}

export default useUsers;
