import { DocumentReference } from "firebase/firestore";


export interface User {
  uid: string;
  nickName: string;
  fullName: string;
  avatar: string;
  followers: DocumentReference[];
  following: DocumentReference[];
  followersCount: number;
  followingCount: number;
}
