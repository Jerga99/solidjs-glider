import { onAuthStateChanged } from "firebase/auth";
import { createContext, onMount, ParentComponent, Show, useContext } from "solid-js"
import { createStore } from "solid-js/store";
import Loader from "../components/utils/Loader";
import { firebaseAuth } from "../db";
import { User } from "../types/User";

type AuthStateContextValues = {
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null
}

const initialState = () => ({
  isAuthenticated: false,
  loading: true,
  user: null
})

const AuthStateContext = createContext<AuthStateContextValues>();

const AuthProvider: ParentComponent = (props) => {
  const [store, setStore] = createStore(initialState());

  onMount(() => {
    setStore("loading", true);
    listenToAuthChanges();
  })

  const listenToAuthChanges = () => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (!!user) {
        setStore("isAuthenticated", true);
        setStore("user", user as any)
      } else {
        setStore("isAuthenticated", false);
        setStore("user", null);
      }

      setStore("loading", false);
    })
  }


  return (
    <AuthStateContext.Provider value={store}>
      <Show 
        when={store.loading}
        fallback={props.children}
      >
        <Loader size={100} />
      </Show>
    </AuthStateContext.Provider>
  )
}

export const useAuthState = () => useContext(AuthStateContext);

export default AuthProvider;
