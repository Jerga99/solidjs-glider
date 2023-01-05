import {
  Component,
  createSignal,
  ParentComponent,
  Setter,
  Show,
} from "solid-js";
import { Portal } from "solid-js/web";
import Button from "./Button";

type Props = {
  openComponent: Component<{setOpen: Setter<boolean>}>
}

const Modal: ParentComponent<Props> = (props) => {
  const [isOpen, setOpen] = createSignal(false);

  let modalRef: HTMLDivElement;

  return (
    <>
      <props.openComponent setOpen={setOpen} />
      <Show when={isOpen()}>
        <Portal>
          <div 
            onClick={(e) => {
              if (!modalRef.contains(e.target)) {
                setOpen(false);
              }
            }}
            class="openModal">
            <div ref={modalRef!} class="modal fixed min-w-160 top-14 left-2/4 p-8 -translate-x-1/2 rounded-2xl">
              {props.children}
            </div>
          </div>
        </Portal>
      </Show>
    </>
  );
};

export default Modal;
