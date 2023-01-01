import { JSX, ParentComponent, splitProps } from "solid-js";

type Props = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: ParentComponent<Props> = (props) => {
  const [local, others] = splitProps(props, ["children"]);
  return (
    <button
      {...others}
      type="button"
      class="
      disabled:cursor-not-allowed disabled:bg-gray-400
      bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex-it transition duration-200"
    >
      <div class="flex-it flex-row text-sm font-bold text-white items-start justify-center">
        {local.children}
      </div>
    </button>
  )
}

export default Button;
