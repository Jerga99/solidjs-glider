import { Snackbar } from "./index";

export default function SnackbarContainer() {
  return (
    <div class="fixed z-50 top-0 right-0 p-4 w-ful md:max-w-xs">
      <ul class="flex flex-col space-y-2">
        <Snackbar />
        <Snackbar /> 
      </ul>
    </div>
  );
}
