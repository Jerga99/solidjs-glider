import { createRoot, onCleanup, onMount } from "solid-js";




const pageSize = () => {
  onMount(() => {
    console.log("pageSize onMount")
  })

  onCleanup(() => {
    console.log("pageSize onCleanup")
  })

  return 100;
}

export default createRoot(pageSize);
