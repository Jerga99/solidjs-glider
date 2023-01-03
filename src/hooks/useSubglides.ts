import { createStore } from "solid-js/store";
import { UseGlideState } from "../types/Glide";

const defaultState = () => ({
  pages: {},
  lastGlide: null,
  loading: false
})


const useSubglides = () => {
  const [store, setStore] = createStore<UseGlideState>(defaultState());

  return {
    store
  }
}


export default useSubglides;
