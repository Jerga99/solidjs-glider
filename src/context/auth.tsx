import { createContext, onCleanup, onMount, ParentComponent, useContext } from "solid-js"

type AuthStateContextValues = {
  testValue: number;
  testFunction: () => string;
}

const AuthStateContext = createContext<AuthStateContextValues>();

const AuthProvider: ParentComponent = (props) => {

  onMount(() => {
    console.log("Initializing AuthProvider!");
  })

  onCleanup(() => {
    console.log("Cleaning-up AuthProvider!")
  })

  return (
    <AuthStateContext.Provider value={{
      testValue: 100,
      testFunction: () => "Hello World"
    }}>
      {props.children}
    </AuthStateContext.Provider>
  )
}

export const useAuthState = () => useContext(AuthStateContext);

export default AuthProvider;
