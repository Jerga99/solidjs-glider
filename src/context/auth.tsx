import { Accessor, createContext, createSignal, onCleanup, onMount, ParentComponent, Setter, useContext } from "solid-js"
import { createStore } from "solid-js/store";

type AuthStateContextValues = {
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState = () => ({
  isAuthenticated: false,
  loading: true
})

const AuthStateContext = createContext<AuthStateContextValues>();

const AuthProvider: ParentComponent = (props) => {
  const [store, setStore] = createStore(initialState());

  onMount(() => {
    setStore("isAuthenticated", true);
    setStore("loading", false);
  })

  return (
    <AuthStateContext.Provider value={store}>
      {props.children}
    </AuthStateContext.Provider>
  )
}

export const useAuthState = () => useContext(AuthStateContext);

export default AuthProvider;
