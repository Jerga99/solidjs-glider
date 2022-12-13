

import { Outlet } from "@solidjs/router";
import { Component, onMount } from "solid-js";

const AuthLayout: Component = () => {  

  onMount(() => {
    console.log("AuthLayout is mounted");
  })

  return <Outlet />;
}


export default AuthLayout;
