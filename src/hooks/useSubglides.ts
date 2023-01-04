import { FirebaseError } from "firebase/app";
import { createSignal } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { getSubglides } from "../api/glide";
import { Glide, UseGlideState } from "../types/Glide";

const defaultState = () => ({
  pages: {},
  lastGlide: null,
  loading: false
})


const useSubglides = () => {
  const [store, setStore] = createStore<UseGlideState>(defaultState());
  const [page, setPage] = createSignal(1);
  
  const loadGlides = async (glideLookup: string) => {
    const _page = page();
    
    if (_page > 1 && !store.lastGlide) {
      return;
    }
    
    setStore("loading", true);
    try {
      const {glides, lastGlide} = await getSubglides(glideLookup, store.lastGlide);
      
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

  const resetPagination = () => {
    setStore(produce((store) => {
      for (let i = 1; i <= page(); i++) {
        store.pages[i] = {
          glides: []
        };
      }

      store.lastGlide = null;
    }));

    setPage(1);
  }

  return {
    store,
    loadGlides,
    page,
    addGlide,
    resetPagination
  }
}


export default useSubglides;
