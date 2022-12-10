import { Component, createSignal, Show } from "solid-js";

type Props = {
  opener: Component;
}

const Popup: Component<Props> = ({opener: Opener}) => {
  const [isOpen, setIsOpen] = createSignal();

  return (
    <div class="relative">
      <div onClick={() => setIsOpen(!isOpen())}>
        <Opener />
      </div>
      <Show when={isOpen()}>
        <div class="flex-it w-20 h-20 fixed bg-black bottom-10 popup">
          Hello World
        </div>
      </Show>
    </div>
  )
}

export default Popup;
