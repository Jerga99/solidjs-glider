import { Accessor, Component, For, ParentComponent, Show } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { Form, FormErrors, GliderInputEvent, SubmitCallback } from "../types/Form";

declare module "solid-js" {
  namespace JSX {
    interface Directives {
      validate: Validator[];
    }
  }
}

type Validator = (element: HTMLInputElement, ...rest: any[]) => string;
type ValidatorConfig = {element: HTMLInputElement, validators: Validator[]};

const niceName = (text: string) => {
  const words = text.split(/(?=[A-Z])/);

  return (words.map((word, i) => {
    // if (i === 0) {
    //   return word[0].toUpperCase() + word.substring(1);
    // }

    // return word.toLowerCase();

    return word[0].toUpperCase() + word.substring(1);
  })).join(" ");
}

export const FormError: ParentComponent = (props) => {
  const errors = () => props.children as string[] || [];

  return (
    <Show when={errors().length > 0}>
      <div class="flex-it grow text-xs bg-red-400 text-white p-3 pl-3 mt-1 rounded-md">
        <For each={errors()}>
          {(error) =>
            <div>
              {error}
            </div>
          }
        </For>
      </div>
    </Show>
  )
}

export const requiredValidator: Validator = (element: HTMLInputElement) => {
  return element.value.length === 0 ?
    `${niceName(element.name)} is required` : "";
}

export const minLengthValidator: Validator = (element: HTMLInputElement, minLength = 7) => {
  if (
    element.value.length === 0 ||
    element.value.length > minLength
    ) { return ""; }

  return `${niceName(element.name)} should be more than ${minLength} characters`;
}

export const maxLengthValidator: Validator = (element: HTMLInputElement, maxLength = 7) => {
  if (
    element.value.length === 0 ||
    element.value.length < maxLength
    ) { return ""; }

  return `${niceName(element.name)} should be less than ${maxLength} characters`;
}

export const firstUppercaseLetter = (element: HTMLInputElement) => {
  const {value} = element;

  if (value.length === 0) { return ""; }

  return value[0] !== value[0].toLocaleUpperCase() ? 
    `${niceName(element.name)} first letter should be uppercased` : "";
}

const useForm = <T extends Form> (initialForm: T) => {
  const [form, setForm] = createStore(initialForm);
  const [errors, setErrors] = createStore<FormErrors>();

  const validatorFields: {[key: string]: ValidatorConfig} = {};

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

  const validate = (ref: HTMLInputElement, accessor: Accessor<Validator[]>) => {
    const validators = accessor() || [];
    let config: ValidatorConfig;
    debugger
    validatorFields[ref.name] = config = {element: ref, validators};

    ref.onblur = checkValidity(config)
  }

  const checkValidity = ({element, validators}: ValidatorConfig) => () => {
    setErrors(element.name, []);

    for (const validator of validators) {
      const message = validator(element);

      if (!!message) {
        setErrors(produce(errors => {
          errors[element.name].push(message);
        }));
      } 
    }

    console.log(JSON.stringify(errors));
  }

  return {
    handleInput,
    submitForm,
    validate,
    errors
  }
}

export default useForm;
