import { createRoot, createSignal, onMount } from "solid-js";


const getClientSize = () => ({
  height: document.body.clientHeight,
  width: document.body.clientWidth
})

const pageSize = () => {
  const [value, setValue] = createSignal(getClientSize());

  onMount(() => {
    window.addEventListener("resize", handleResize);
  })

  const handleResize = () => {
    setValue(getClientSize());
  }

  const isXl = () => value().width > 1280;
  const isLg = () => value().width > 1024;

  return { isXl, isLg, value };
}

export default createRoot(pageSize);
