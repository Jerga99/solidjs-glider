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

  const maxLengthValidator = (element: HTMLInputElement, maxLength = 7) => {
    if (
      element.value.length === 0 ||
      element.value.length < maxLength
      ) { return ""; }

    return `${element.name} should be less than ${maxLength} characters`;
  }

  const checkValidity = (element: HTMLInputElement) => () => {
    const message = maxLengthValidator(element, 10);

    if (!!message) {
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
