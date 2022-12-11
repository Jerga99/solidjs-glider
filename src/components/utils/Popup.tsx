import { Component, createEffect, createSignal, onCleanup, onMount, Show } from "solid-js";

type Props = {
  opener: Component;
}

const Popup: Component<Props> = ({opener: Opener}) => {
  const [isOpen, setIsOpen] = createSignal();

  let followTo: HTMLDivElement;
  let popup: HTMLDivElement;

  onMount(() => {
    window.addEventListener("click", closePopup);
  })

  onCleanup(() => {
    window.removeEventListener("click", closePopup);
  })

  createEffect(() => {
    if (isOpen()) {
      adjustPopup();
    }
  })

  const adjustPopup = () => {
    popup.style.bottom = followTo.clientHeight + "px";
  }

  const closePopup = () => {
    if (isOpen()) {
      setIsOpen(false);
    }
  }

  return (
    <div class="flex-it flex-grow">
      <div 
        ref={followTo!}
        onClick={(e) => {
          e.stopImmediatePropagation();
          setIsOpen(!isOpen())
        }
      }>
        <Opener />
      </div>
      <Show when={isOpen()}>
        <div 
          ref={popup!}
          class="flex-it hover:cursor-pointer fixed bg-gray-800 text-white popup z-10 rounded-2xl border-gray-700 border transition duration-1000">
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
