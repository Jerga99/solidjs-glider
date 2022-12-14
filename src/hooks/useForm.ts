import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { GliderInputEvent, RegisterForm } from "../types/Form";

const useForm = (initialForm: RegisterForm) => {
  const [form, setForm] = createStore<RegisterForm>(initialForm);

  const handleInput = (e: GliderInputEvent) => {
    const {name, value} = e.currentTarget;
    setForm(name as keyof RegisterForm, value);
  }

  const submitForm = () => {
    console.log(form);
  }

  return {
    handleInput,
    submitForm
  }
}

export default useForm;
