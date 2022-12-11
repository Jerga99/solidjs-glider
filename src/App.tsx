import { Component } from "solid-js";
import AppRoutes from "./router";

const App: Component = () => {
  return (
    <>
      <div id="popups"/>
      <AppRoutes />
    </>
  );
};

export default App;
