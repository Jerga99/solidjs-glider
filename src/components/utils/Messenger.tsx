import { FaRegularImage } from "solid-icons/fa";
import { Component } from "solid-js";
import { useAuthState } from "../../context/auth";
import useMessenger from "../../hooks/useMessenger";
import { GliderInputEvent } from "../../types/Form";
import { Glide } from "../../types/Glide";

type Props = {
  onGlideAdded: (g: Glide | undefined) => void
}

const Messenger: Component<Props> = (props) => {
  const {user} = useAuthState()!;
  const {handleInput, handleSubmit, form} = useMessenger();

  const autosize = (e: GliderInputEvent) => {
    const el = e.currentTarget;

    el.style.height = "0px";
    const {scrollHeight} = el;
    el.style.height = scrollHeight + "px";
  }
  
  return (
    <div class="flex-it py-1 px-4 flex-row">
      <div class="flex-it mr-4">
        <div class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
          <img
            class="rounded-full"
            src={user?.avatar}
          ></img>
        </div>
      </div>
      <div class="flex-it flex-grow">
        <div class="flex-it">
          <textarea
            value={form.content}
            onInput={(e) => {
              handleInput(e); 
              autosize(e)
            }}
            name="content"
            rows="1"
            id="glide"
            class="bg-transparent resize-none overflow-hidden block !outline-none !border-none border-transparent focus:border-transparent focus:ring-0 text-gray-100 text-xl w-full p-0"
            placeholder={"What's new?"}
          />
        </div>
        <div class="flex-it mb-1 flex-row xs:justify-between items-center">
          <div class="flex-it mt-3 mr-3 cursor-pointer text-white hover:text-blue-400 transition">
            <div class="upload-btn-wrapper">
              <FaRegularImage class="cursor-pointer" size={18} />
              <input type="file" name="myfile" />
            </div>
          </div>
          <div class="flex-it w-32 mt-3 cursor-pointer">
            <button
              onClick={async () => {
                const glide = await handleSubmit();
                props.onGlideAdded(glide);
              }}
              type="button"
              class="
                disabled:cursor-not-allowed disabled:bg-gray-400
                bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex-it transition duration-200"
            >
              <div class="flex-it flex-row text-sm font-bold text-white items-start justify-center">
                <span>Glide It</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messenger;
