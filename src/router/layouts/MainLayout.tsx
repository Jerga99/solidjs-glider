



import { Outlet } from "@solidjs/router";
import { Component, onMount } from "solid-js";

const MainLayout: Component = () => {  

  onMount(() => {
    console.log("Mainlayout is mounted");
  })

  return <Outlet />;
}


export default MainLayout;
