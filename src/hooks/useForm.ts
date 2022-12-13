import { createEffect, createSignal, onCleanup, onMount } from "solid-js";

const useForm = () => {
  const [count, setCount] = createSignal(100);

  onMount(() => {
    console.log("useForm mounted");
  })

  onCleanup(() => {
    console.log("useForm cleaned-up");
  })

  createEffect(() => {
    console.log(count());
  })

  const increaseCount = () => {
    setCount(count() + 1);
  }

  const decreaseCount = () => {
    setCount(count() - 1);
  }

  return {
    count,
    increaseCount, 
    decreaseCount,
    funnyFunction: () => {
      console.log("I am funny. hahaha")
    }
  }
}

export default useForm;
