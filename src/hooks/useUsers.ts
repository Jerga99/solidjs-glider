import { FirebaseError } from "firebase/app";
import { createSignal, onMount } from "solid-js";
import * as api from "../api/user";
import { useAuthDispatch, useAuthState } from "../context/auth";
import { useUIDispatch } from "../context/ui";
import { User } from "../types/User";


const useUsers = () => {
  const {user} = useAuthState()!;
  const {updateUser} = useAuthDispatch()!;
  const {addSnackbar} = useUIDispatch();
  const [users, setUsers] = createSignal<User[]>([]);
  const [loading, setLoading] = createSignal(true);
  const [loadingFollow, setLoadingFollow] = createSignal(false);

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
    setLoadingFollow(true);

    try {
      const followingRef = await api.followUser(user!.uid, followingUser.uid);
      updateUser({
        following: [followingRef, ...user!.following],
        followingCount: user!.followingCount + 1
      });
      addSnackbar({message: `You started following ${followingUser.nickName}`, type: "success"});
    } catch(error) {
      const message = (error as FirebaseError).message;
      addSnackbar({message, type: "error"});
    } finally {
      setLoadingFollow(false);
    }
  }

  return {
    loading,
    users,
    followUser,
    loadingFollow
  }
}

export default useUsers;
