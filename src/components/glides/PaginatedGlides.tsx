import { Accessor, Component, For, onCleanup, onMount, Show } from "solid-js";
import { Glide } from "../../types/Glide";
import { CenteredDataLoader } from "../utils/DataLoader";
import GlidePost from "./GlidePost";

type Props = {
  page: Accessor<number>;
  pages: {
    [key: string]: {glides: Glide[]}
  };
  loading: boolean;
  loadMoreGlides: () => Promise<void>
}

const PaginatedGlides: Component<Props> = (props) => {
  let lastItemRef: HTMLDivElement;

  onMount(() => {
    window.addEventListener("scroll", loadNewItems);
  })

  onCleanup(() => {
    window.removeEventListener("scroll", loadNewItems);
  })

  const loadNewItems = () => {
    if (lastItemRef.getBoundingClientRect().top <= window.innerHeight) {
      if (!props.loading) {
        props.loadMoreGlides();
      }
    }
  }

  return (
    <>
      <For each={Array.from({length: props.page()})}>
        {(_, i) =>
          <For each={props.pages[i() + 1]?.glides}>
            { (glide) =>
              <GlidePost glide={glide} />
            }
          </For>
        }
      </For>
      <Show when={props.loading}>
        <CenteredDataLoader />
      </Show>
      <Show when={!props.loading && props.pages[1]?.glides?.length === 0}>
        <div class="flex-it">
          <div class="bg-yellow-500 mt-6 p-2 rounded-lg mx-4">
            No new glides! Create a new one.
          </div>
        </div>
      </Show>
      <div ref={lastItemRef!}></div>
      <div class="h-96"></div>
    </>
  )
}

export default PaginatedGlides;
