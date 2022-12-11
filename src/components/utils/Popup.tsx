import { Component, createSignal, Show } from "solid-js";

type Props = {
  opener: Component;
}

const Popup: Component<Props> = ({opener: Opener}) => {
  const [isOpen, setIsOpen] = createSignal();

  return (
    <div class="flex-it flex-grow">
      <div onClick={() => setIsOpen(!isOpen())}>
        <Opener />
      </div>
      <Show when={isOpen()}>
        <div class="flex-it hover:cursor-pointer fixed bg-gray-800 text-white popup z-10 rounded-2xl border-gray-700 border transition duration-1000">
          <div class="w-72 min-w-68 max-h-120 min-h-8 flex-it overflow-auto">
            <div class="flex-it flex-grow flex-shrink py-3">
              <div class="flex-it px-4 py-3 transition hover:bg-gray-700">Logout</div>
            </div>
          </div>
        </div>
      </Show>
    </div>
  )
}

export default Popup;
