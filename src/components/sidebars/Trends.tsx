


const trends = [
  {
    category: "Sports",
    content: "Some team won something!",
    glideCount: 300
  },
  {
    category: "Finance",
    content: "Bitcoin down again!",
    glideCount: 200
  },
  {
    category: "PC & Games",
    content: "New Eincode game out!",
    glideCount: 300
  },
  {
    category: "Economy",
    content: "It's goin well...",
    glideCount: 500
  },
  {
    category: "Celebrities",
    content: "Some useless news!",
    glideCount: 300
  },
  {
    category: "Movies",
    content: "Peter Jackson as the director of new Lotr",
    glideCount: 1000
  },
]



const TrendsSidebar = () => {
  return (
    <div class="bg-gray-800 overflow-hidden flex-it rounded-2xl">
      <div class="flex-it p-4">
        <span class="text-xl font-bold">Trends</span>
      </div>
      <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
        <div class="flex-it">
          <span class="text-gray-400 text-sm">
            Trends in Europe
          </span>
          <span class="text-lg font-bold">Sports</span>
          <span class="text-gray-400 text-sm">10 000 glides</span>
        </div>
      </div>
      <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
        <div class="flex-it">
          <span class="text-gray-400 text-sm">
            Trends in Europe
          </span>
          <span class="text-lg font-bold">Sports</span>
          <span class="text-gray-400 text-sm">10 000 glides</span>
        </div>
      </div>
      <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
        <div class="flex-it">
          <span class="text-gray-400 text-sm">
            Trends in Europe
          </span>
          <span class="text-lg font-bold">Sports</span>
          <span class="text-gray-400 text-sm">10 000 glides</span>
        </div>
      </div>
      <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
        <div class="flex-it">
          <span class="text-gray-400 text-sm">
            Trends in Europe
          </span>
          <span class="text-lg font-bold">Sports</span>
          <span class="text-gray-400 text-sm">10 000 glides</span>
        </div>
      </div>
      <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
        <div class="flex-it">
          <span class="text-gray-400 text-sm">
            Trends in Europe
          </span>
          <span class="text-lg font-bold">Sports</span>
          <span class="text-gray-400 text-sm">10 000 glides</span>
        </div>
      </div>
      <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
        <div class="flex-it">
          <span class="text-gray-400 text-sm">
            Trends in Europe
          </span>
          <span class="text-lg font-bold">Sports</span>
          <span class="text-gray-400 text-sm">10 000 glides</span>
        </div>
      </div>
      {JSON.stringify(trends)}
    </div>
  )
}

export default TrendsSidebar;
