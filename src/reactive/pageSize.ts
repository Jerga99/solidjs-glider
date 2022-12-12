import { createRoot, createSignal, onCleanup, onMount } from "solid-js";


const getClientSize = () => ({
  height: document.body.clientHeight,
  width: document.body.clientWidth
})

const pageSize = () => {
  const [value, setValue] = createSignal(getClientSize());

  onMount(() => {
    console.log("INITIALIZING PAGESIZE!!!!!!");
    window.addEventListener("resize", handleResize);
  })

  const handleResize = () => {
    setValue(getClientSize());
    console.log(value());
  }

  return value;
}

export default createRoot(pageSize);
