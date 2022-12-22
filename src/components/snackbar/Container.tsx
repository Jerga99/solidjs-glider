import { For } from "solid-js";
import { useUIState } from "../../context/ui";
import { Snackbar } from "./index";

export default function SnackbarContainer() {
  const {snackbars} = useUIState();
  
  return (
    <div class="fixed z-50 top-0 right-0 p-4 w-ful md:max-w-xs">
      <ul class="flex flex-col space-y-2">
        <For each={snackbars}>
          {(message) =>
            <Snackbar message={message} />
          }
        </For>
      </ul>
    </div>
  );
}