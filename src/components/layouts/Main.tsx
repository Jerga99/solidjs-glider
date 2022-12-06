import { ParentComponent } from "solid-js";
import MainSidebar from "../sidebars/Main";
import TrendsSidebar from "../sidebars/Trends";

const MainLayout: ParentComponent = (props) => {
  return (
    <div class="w-full h-full bg-gray-900 text-gray-100">
      <div class="flex h-full min-h-252">
        <MainSidebar />
        <main class="flex-it flex-grow flex-shrink items-start">
          <div class="flex md:w-248 w-full h-full">
            <div class="flex-it flex-grow flex-shrink">
              <div class="flex-it flex-row justify-between min-h-full">
                <div class="flex-it md:max-w-152 w-full border-x-1 border-solid border-gray-700">
                  <div class="sticky z-10 flex-it top-0">
                    <div class="flex-it h-14 p-4 xl:text-xl text-sm font-bold z-10 backdrop-blur-md bg-opacity-70">
                      Home
                    </div>
                  </div>
                  {props.children}
                </div>
                <div class="flex-it md:w-92 w-0 mt-4">
                  <TrendsSidebar />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
