import { Component } from "solid-js";
import { useAuthState } from "./context/auth";
import AppRoutes from "./router";

const App: Component = () => {
  const authState = useAuthState()!;
  return (
    <>
      <div class="text-white">
        <div>
          Is Authenticated: {`${authState.isAuthenticated}`}
        </div>
        <div>
          Is Loading: {`${authState.loading}`}
        </div>
      </div>
      <div id="popups"/>
      <AppRoutes />
    </>
  );
};

export default App;
