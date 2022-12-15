import { Accessor } from "solid-js";
import { createStore } from "solid-js/store";
import { Form, GliderInputEvent, SubmitCallback } from "../types/Form";

const useForm = <T extends Form> (initialForm: T) => {
  const [form, setForm] = createStore(initialForm);
  const [errors, setErrors] = createStore<Form>();

  const handleInput = (e: GliderInputEvent) => {
    const {name, value} = e.currentTarget;
    setForm(
      name as any, 
      value as any
    );
  }

  const submitForm = (submitCallback: SubmitCallback<T>) => () => {
    submitCallback(form);
  }

  const validate = (ref: HTMLInputElement, accessor: Accessor<number>) => {
    const value = accessor();

    ref.onblur = checkValidity(ref)
  }

  const validator = (element: HTMLInputElement) => {
    if (element.value.length === 0) { return true; }

    return element.value.length < 7;
  }

  const checkValidity = (element: HTMLInputElement) => () => {
    const message = "Error error error!!!!!";
    const isValid = validator(element);

    if (!isValid) {
      setErrors(element.name, message);
    } else {
      setErrors(element.name, "");
    }

    console.log(JSON.stringify(errors));
  }

  return {
    handleInput,
    submitForm,
    validate
  }
}

export default useForm;
