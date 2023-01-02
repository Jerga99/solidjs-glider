import { DocumentReference, Timestamp } from "firebase/firestore";
import { User } from "./User";

export interface Glide {
  id: string;
  lookup?: string;
  uid: string;
  content: string;
  user: Partial<User> | DocumentReference;
  likesCount: number;
  subglidesCount: number;
  date: Timestamp;
}
