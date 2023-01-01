import { FirebaseError } from "firebase/app";
import { QueryDocumentSnapshot, Unsubscribe } from "firebase/firestore";
import { createSignal, onMount } from "solid-js";
import { createStore, produce } from "solid-js/store";
import * as api from "../api/glide";
import { useAuthState } from "../context/auth";
import { Glide } from "../types/Glide";

type State = {
  pages: {
    [key: string]: {glides: Glide[]}
  };
  loading: boolean;
  lastGlide: QueryDocumentSnapshot | null;
}

const createInitState = () => ({pages: {}, loading: false, lastGlide: null});

const useGlides = () => {
  const {user} = useAuthState()!;
  const [page, setPage] = createSignal(1);
  const [store, setStore] = createStore<State>(createInitState());

  let unSubscribe: Unsubscribe;
  
  onMount(() => {
    loadGlides();
  })

  const loadGlides = async () => {
    const _page = page();

    if (_page > 1 && !store.lastGlide) {
      return;
    }
    
    setStore("loading", true);
    try {
      const {glides, lastGlide} = await api.getGlides(user!, store.lastGlide);
      
      if (glides.length > 0) {
        setStore(produce(store => {
          store.pages[_page] = {glides};
        }))

        setPage(_page + 1);
      }

      setStore("lastGlide", lastGlide);
    } catch(error) {
      const message = (error as FirebaseError).message;
      console.log(message);
    } finally {
      setStore("loading", false);
    }
  }

  const subscribeToGlides = () => {
    if (user?.following.length == 0) {
      return;
    }

    unSubscribe = api.subscribeToGlides(user!);
  }

  const unsubscribeFromGlides = () => {
    if (!!unSubscribe) {
      unSubscribe();
    }
  }

  const addGlide = (glide: Glide | undefined) => {
    if (!glide) return;

    const page = 1;

    setStore(produce(store => {
      if (!store.pages[page]) {
        store.pages[page] = {glides: []};
      }

      store.pages[page].glides.unshift({...glide});
    }))
  }

  return {
    page,
    loadGlides,
    addGlide,
    store,
    subscribeToGlides,
    unsubscribeFromGlides
  }
}

export default useGlides;
