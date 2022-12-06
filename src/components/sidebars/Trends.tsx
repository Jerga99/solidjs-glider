import { For } from "solid-js";

const randomize = () => Math.floor(Math.random() * 500)

const trends = [
  {
    category: "Sports",
    content: "Some team won something!",
    glideCount: randomize()
  },
  {
    category: "Finance",
    content: "Bitcoin down again!",
    glideCount: randomize()
  },
  {
    category: "PC & Games",
    content: "New Eincode game out!",
    glideCount: randomize()
  },
  {
    category: "Economy",
    content: "It's goin well...",
    glideCount: randomize()
  },
  {
    category: "Celebrities",
    content: "Some useless news!",
    glideCount: randomize()
  },
  {
    category: "Movies",
    content: "Peter Jackson as the director of new Lotr",
    glideCount: randomize()
  },
]



const TrendsSidebar = () => {
  return (
    <div class="bg-gray-800 overflow-hidden flex-it rounded-2xl">
      <div class="flex-it p-4">
        <span class="text-xl font-bold">Trends</span>
      </div>

      <For each={trends}>
        { (trend) =>
          <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
            <div class="flex-it">
              <span class="text-gray-400 text-sm">
                {trend.content}
              </span>
              <span class="text-lg font-bold">{trend.category}</span>
              <span class="text-gray-400 text-sm">{trend.glideCount} glides</span>
            </div>
          </div>
        }
      </For>
    </div>
  )
}

export default TrendsSidebar;
