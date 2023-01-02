import { addDoc, collection, doc, DocumentReference, getDoc, getDocs, limit, onSnapshot, orderBy, query, QueryConstraint, QueryDocumentSnapshot, QuerySnapshot, setDoc, startAfter, Timestamp, where } from "firebase/firestore";
import { db } from "../db";
import { Glide, UserGlide } from "../types/Glide";
import { User } from "../types/User";

const getGlideById = async (id: string, uid: string) => {
  const userDocRef = doc(db, "users", uid);
  const userGlideRef = doc(userDocRef, "glides", id);

  const userGlideSnap = await getDoc(userGlideRef);
  const userGlide = userGlideSnap.data() as UserGlide;

  console.log(userGlide.lookup);
}

const getGlides = async (loggedInUser: User, lastGlide: QueryDocumentSnapshot | null) => {
  const _loggedInUserDoc = doc(db, "users", loggedInUser.uid);
  const constraints: QueryConstraint[] = [
    orderBy("date", "desc"),
    limit(10)
  ]

  if (loggedInUser.following.length > 0) {
    constraints.push(where("user", "in", [...loggedInUser.following, _loggedInUserDoc]));
  } else {
    constraints.push(where("user", "==", _loggedInUserDoc))
  } 

  if (!!lastGlide) {
    constraints.push(startAfter(lastGlide));
  }

  const q = query(collection(db, "glides"), ...constraints);
  
  const qSnapshot = await getDocs(q);
  const _lastGlide = qSnapshot.docs[qSnapshot.docs.length - 1];

  const glides = await Promise.all(qSnapshot.docs.map(async doc => {
    const glide = doc.data() as Glide;
    const userSnap = await getDoc(glide.user as DocumentReference);
    glide.user = userSnap.data() as User;

    return {...glide, id: doc.id, lookup: doc.ref.path};
  }))

  return {glides, lastGlide: _lastGlide};
}

const subscribeToGlides = (loggedInUser: User, getCallback: (g: Glide[]) => void) => {
  const _collection = collection(db, "glides");

  const contraints = [
    where("date", ">", Timestamp.now()),
    where("user", "in", loggedInUser.following)
  ];

  const q = query(
    _collection,
    ...contraints
  )

  return onSnapshot(q, async (querySnapshot) => {
    
    const glides = await Promise.all(querySnapshot.docs.map(async doc => {
      const glide = doc.data() as Glide;
      const userSnap = await getDoc(glide.user as DocumentReference);
      glide.user = userSnap.data() as User;
      return {...glide, id: doc.id};
    }));

    getCallback(glides);
  });
}

const createGlide = async (form: {
  content: string;
  uid: string;
}): Promise<Glide> => {
  const userRef = doc(db, "users", form.uid);

  const glideToStore = {
    ...form,
    user: userRef,
    likesCount: 0,
    subglidesCount: 0,
    date: Timestamp.now()
  }

  const glideCollection = collection(db, "glides");
  const added = await addDoc(glideCollection, glideToStore);

  const userGlideRef = doc(userRef, "glides", added.id);
  await setDoc(userGlideRef, {lookup: added})
  
  return {...glideToStore, id: added.id, lookup: added.path};
}


export {
  createGlide,
  getGlides,
  subscribeToGlides,
  getGlideById
}
