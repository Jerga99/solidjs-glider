import { IoCloseCircle } from "solid-icons/io";
import { Component } from "solid-js";

type Props = {
  message: string;
}

export const Snackbar: Component<Props> = (props) => {  
  const type: any = "success";

  return (
    <div
      class="min-w-68 text-white flex-it font-bold rounded-md md:max-w-xs w-full text-sm shadow-md"
      classList={{
        "bg-blue-400": type === "success",
        "bg-red-700": type === "error",
        "bg-yellow-700": type === "warning",
      }}
    > 
      <div class="flex-it flex-row-reverse p-1">
        <button class="text-xl rounded-full">
          <IoCloseCircle />
        </button>
      </div>
      <div class="flex-it px-2 pb-3">
        {props.message}
      </div>
      <div 
        style={{width: `100%`}}
        class="bg-black opacity-40 text-right h-2"
      >
      </div>
    </div>
  );
}
