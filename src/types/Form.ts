


export type GliderInputEvent = InputEvent & {
  currentTarget: HTMLInputElement;
  target: Element;
}

export type RegisterForm = {
  fullName: string;
  nickName: string;
  email: string;
  avatar: string;
  password: string;
  passwordConfirmation: string;
}
