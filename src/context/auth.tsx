import { Accessor, createContext, createSignal, onCleanup, onMount, ParentComponent, Setter, useContext } from "solid-js"

type AuthStateContextValues = {
  isAuthenticated: Accessor<boolean>;
  loading: Accessor<boolean>;
  setIsAuthenticated: Setter<boolean>;
  setLoading: Setter<boolean>
}

const AuthStateContext = createContext<AuthStateContextValues>();

const AuthProvider: ParentComponent = (props) => {
  const [isAuthenticated, setIsAuthenticated] = createSignal(false);
  const [loading, setLoading] = createSignal(true);

  onMount(() => {
    console.log("Initializing AuthProvider!");
  })

  return (
    <AuthStateContext.Provider value={{
      isAuthenticated,
      loading,
      setLoading,
      setIsAuthenticated
    }}>
      {props.children}
    </AuthStateContext.Provider>
  )
}

export const useAuthState = () => useContext(AuthStateContext);

export default AuthProvider;
