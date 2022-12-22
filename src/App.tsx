import { Component } from "solid-js";
import SnackbarContainer from "./components/snackbar/Container";
import AppRoutes from "./router";

const App: Component = () => {
  return (
    <>
      <div id="popups"/>
      <SnackbarContainer />
      <AppRoutes />
    </>
  );
};

export default App;
