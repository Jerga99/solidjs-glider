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

type Validator = (element: HTMLInputElement, ...rest: any[]) => (form: Form) => string;
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

export const compareWith: Validator = (element: HTMLInputElement, fieldName: string) => (form: Form) => {
  if (element.value.length === 0) { return ""};

  const compareToValue = form[fieldName];
  return element.value !== compareToValue ? 
   `${niceName(element.name)} should be same as ${niceName(fieldName)}` : "";
}

export const requiredValidator: Validator = (element: HTMLInputElement) => (form: Form) => {
  return element.value.length === 0 ?
    `${niceName(element.name)} is required` : "";
}

export const minLengthValidator: Validator = (element: HTMLInputElement, minLength = 7) => (form: Form) => {
  if (
    element.value.length === 0 ||
    element.value.length > minLength
    ) { return ""; }

  return `${niceName(element.name)} should be more than ${minLength} characters`;
}

export const maxLengthValidator: Validator = (element: HTMLInputElement, maxLength = 7) => (form: Form) => {
  if (
    element.value.length === 0 ||
    element.value.length < maxLength
    ) { return ""; }

  return `${niceName(element.name)} should be less than ${maxLength} characters`;
}

export const firstUppercaseLetter = (element: HTMLInputElement) => (form: Form) => {
  const {value} = element;

  if (value.length === 0) { return ""; }

  return value[0] !== value[0].toLocaleUpperCase() ? 
    `${niceName(element.name)} first letter should be uppercased` : "";
}

const useForm = <T extends Form> (initialForm: T) => {
  const [form, setForm] = createStore(initialForm);
  const [errors, setErrors] = createStore<FormErrors>();

  const validatorFields: {[key: string]: ValidatorConfig} = {};

  const isValid = () => {
    const keys = Object.keys(errors);
    if (keys.length === 0) {
      return false;
    }

    return !keys.some(errorKey => {
      return errors[errorKey].length > 0;
    });
  } 

  const handleInput = (e: GliderInputEvent) => {
    const {name, value} = e.currentTarget;
    setForm(
      name as any, 
      value as any
    );
  }

  const submitForm = (submitCallback: SubmitCallback<T>) => () => {
    for (const field in validatorFields) {
      const config = validatorFields[field];
      checkValidity(config)();
    }

    if (isValid()) {
      submitCallback(form);
    }
  }

  const validate = (ref: HTMLInputElement, accessor: Accessor<Validator[]>) => {
    const validators = accessor() || [];
    let config: ValidatorConfig;
    validatorFields[ref.name] = config = {element: ref, validators};

    ref.onblur = checkValidity(config);
    ref.oninput = () => {
      if (!errors[ref.name]) { return; }
      checkValidity(config)();
    }
  }

  const checkValidity = ({element, validators}: ValidatorConfig) => () => {
    setErrors(element.name, []);

    for (const validator of validators) {
      const message = validator(element)(form);

      if (!!message) {
        setErrors(produce(errors => {
          errors[element.name].push(message);
        }));
      } 
    }
  }

  return {
    handleInput,
    submitForm,
    validate,
    errors
  }
}

export default useForm;
