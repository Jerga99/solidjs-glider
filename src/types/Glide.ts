import { User } from "./User";

export interface Glide {
  id: string;
  uid: string;
  content: string;
  user: User;
  likesCount: number;
  subglidesCount: number;
  date: Date;
}
