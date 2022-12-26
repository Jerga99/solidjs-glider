import { onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { getGlides } from "../api/glide";
import { Glide } from "../types/Glide";

type State = {
  glides: Glide[];
  loading: boolean;
}

const createInitState = () => ({glides: [], loading: false});


const useGlides = () => {
  const [store, setStore] = createStore<State>(createInitState());

  onMount(() => {
    loadGlides();
  })

  const loadGlides = () => {
    getGlides();
  }

  return {
    loadGlides,
    store
  }
}

export default useGlides;
