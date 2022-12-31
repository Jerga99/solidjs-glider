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
      if (!user) {
        throw new Error("You are not authenticated!");
      }

      if (user.following
        .filter(following => following.id === followingUser.uid).length > 0
      ) {
        throw new Error("You already follow this user");
      }

      const followingRef = await api.followUser(user!.uid, followingUser.uid);

      updateUser({
        following: [followingRef, ...user.following],
        followingCount: user.followingCount + 1
      });

      setUsers((_users) => {
        const copy = [..._users];
        const index = copy.findIndex((user) => user.uid === followingUser.uid);

        if (index > -1) {
          copy.splice(index, 1);
        }

        return copy;
      })

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
