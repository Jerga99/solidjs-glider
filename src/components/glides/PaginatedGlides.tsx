import { Accessor, Component, For } from "solid-js";
import { Glide } from "../../types/Glide";
import GlidePost from "./GlidePost";

type Props = {
  page: Accessor<number>;
  pages: {
    [key: string]: {glides: Glide[]}
  }
}

const PaginatedGlides: Component<Props> = (props) => {
  return (
    <For each={Array.from({length: props.page()})}>
      {(_, i) =>
        <For each={props.pages[i() + 1]?.glides}>
          { (glide) =>
            <GlidePost glide={glide} />
          }
        </For>
      }
    </For>
  )
}

export default PaginatedGlides;
