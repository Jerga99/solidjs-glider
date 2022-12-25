import { createStore } from "solid-js/store";
import { GliderInputEvent, MessengerForm } from "../types/Form";



const useMessenger = () => {
  const [form, setForm] = createStore<MessengerForm>({
    content: ""
  });

  const handleInput = (e: GliderInputEvent) => {
    const {name, value} = e.currentTarget;
    setForm(name, value);
  }

  const handleSubmit = () => {
    const glide = {
      ...form
    }

    alert(JSON.stringify(glide));
    setForm({content: ""});
  }

  return {
    handleInput,
    handleSubmit,
    form
  }
}

export default useMessenger;
