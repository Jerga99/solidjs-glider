import { useLocation, useNavigate } from "@solidjs/router";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, onMount, ParentComponent, Show, useContext } from "solid-js"
import { createStore } from "solid-js/store";
import { getUser } from "../api/auth";
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
  const [store, setStore] = createStore<AuthStateContextValues>(initialState());
  const location = useLocation();
  const navigate = useNavigate();

  onMount(() => {
    setStore("loading", true);
    listenToAuthChanges();
  })

  const listenToAuthChanges = () => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (!!user) {
        const gliderUser = await getUser(user.uid);
        
        setStore("isAuthenticated", true);
        setStore("user", gliderUser);

        if (location.pathname.includes("/auth")) {
          navigate("/", {replace: true});
        }
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
