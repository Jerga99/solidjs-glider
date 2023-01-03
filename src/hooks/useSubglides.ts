import { FirebaseError } from "firebase/app";
import { createSignal } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { getSubglides } from "../api/glide";
import { UseGlideState } from "../types/Glide";

const defaultState = () => ({
  pages: {},
  lastGlide: null,
  loading: false
})


const useSubglides = () => {
  const [store, setStore] = createStore<UseGlideState>(defaultState());
  const [page, setPage] = createSignal(1);
  
  const loadGlides = async () => {
    const _page = page();

    if (_page > 1 && !store.lastGlide) {
      return;
    }
    
    setStore("loading", true);
    try {
      const {glides, lastGlide} = await getSubglides();
      
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

  return {
    store,
    loadGlides
  }
}


export default useSubglides;
