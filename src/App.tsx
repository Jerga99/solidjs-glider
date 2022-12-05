import { Component } from "solid-js";
import { CgProfile, CgMoreO } from "solid-icons/cg";
import { IoNotificationsCircleOutline } from "solid-icons/io";
import { RiMapCompassDiscoverLine } from "solid-icons/ri";
import { AiOutlineHome, AiOutlineMessage } from "solid-icons/ai";
import { FiMoreHorizontal, FiTrash } from "solid-icons/fi";
import { FaRegularImage, FaRegularHeart } from "solid-icons/fa";


const App: Component = () => {
  return (
    <div class="w-full h-full bg-gray-900 text-gray-100">
      <div class="flex h-full min-h-252">
        {/* SIDEBAR START */}
        <header class="lg:flex-grow flex-it items-end">
          <div class="xl:w-80 w-20 flex-it">
            <div class="h-full fixed flex-it top-0">
              <div class="flex-it h-full xl:w-80 w-20 overflow-y-auto px-3 justify-between">
                <div class="flex-it items-start">
                  <div class="p-3 pt-4 xl:pb-3 pb-0 xl:text-2xl text-sm font-bold transition duration-200 hover:opacity-80">
                    <a href="#">
                      <h1>Glider</h1>
                    </a>
                  </div>
                  <div class="my-1 w-full flex-it">
                    <nav class="flex-it items-start">
                      <a class="flex-it items-start flex-grow w-full" href="#">
                        <div class="p-3 flex-row justify-center items-center flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl transition duration-200">
                          <div class="flex-it">
                            <AiOutlineHome size={24} />
                          </div>
                          <div class="mx-4 text-2xl truncate xl:block hidden">
                            <span class="truncate">Home</span>
                          </div>
                        </div>
                      </a>
                      <a class="flex-it items-start flex-grow w-full" href="#">
                        <div class="p-3 flex-row justify-center items-center flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl transition duration-200">
                          <div class="flex-it">
                            <CgProfile size={24} />
                          </div>
                          <div class="mx-4 text-2xl truncate xl:block hidden">
                            <span class="truncate">Profile</span>
                          </div>
                        </div>
                      </a>
                      <a class="flex-it items-start flex-grow w-full" href="#">
                        <div class="p-3 flex-row justify-center items-center flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl transition duration-200">
                          <div class="flex-it">
                            <CgMoreO size={24} />
                          </div>
                          <div class="mx-4 text-2xl truncate xl:block hidden">
                            <span class="truncate">More</span>
                          </div>
                        </div>
                      </a>
                      <a class="flex-it items-start flex-grow w-full" href="#">
                        <div class="p-3 flex-row justify-center items-center flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl transition duration-200">
                          <div class="flex-it">
                            <IoNotificationsCircleOutline size={24} />
                          </div>
                          <div class="mx-4 text-2xl truncate xl:block hidden">
                            <span class="truncate">Notification</span>
                          </div>
                        </div>
                      </a>
                      <a class="flex-it items-start flex-grow w-full" href="#">
                        <div class="p-3 flex-row justify-center items-center flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl transition duration-200">
                          <div class="flex-it">
                            <RiMapCompassDiscoverLine size={24} />
                          </div>
                          <div class="mx-4 text-2xl truncate xl:block hidden">
                            <span class="truncate">Discover</span>
                          </div>
                        </div>
                      </a>
                    </nav>
                  </div>
                  {/* GLIDER SEND-MESSAGE BUTTON */}
                  <div class="my-1 flex-it w-10/12 cursor-pointer">
                    <div class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex-it transition">
                      <div class="flex-it flex-row text-xl font-bold text-white items-start justify-center truncate duration-200">
                        <div>Glide It</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* PROFILE MENU */}
                <div class="flex-it my-3 hover:cursor-pointer">
                  {/* POPUP START*/}
                  <div class="flex-it items-center flex-row p-3 rounded-3xl hover:bg-gray-800 hover:rounded-3xl transition duration-200 cursor-pointer">
                    <div class="flex-it">
                      <div class="w-10 h-10 overflow-visible">
                        <img
                          class="rounded-full"
                          src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
                        ></img>
                      </div>
                    </div>
                    <div class="flex-it xl:flex hidden flex-grow flex-row justify-between items-center">
                      <div class="flex-it mx-3 font-bold">Filip99</div>
                      <div class="flex-it">
                        <FiMoreHorizontal />
                      </div>
                    </div>
                  </div>
                  {/* POPUP END */}
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* SIDEBARS END */}
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
                  {/* HOME PAGE START */}
                  <div class="flex-it py-1 px-4 flex-row">
                    <div class="flex-it mr-4">
                      <div class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
                        <img
                          class="rounded-full"
                          src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
                        ></img>
                      </div>
                    </div>
                    {/* MESSENGER START */}
                    <div class="flex-it flex-grow">
                      <div class="flex-it">
                        <textarea
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
                    {/* MESSENGER END */}
                  </div>
                  <div class="h-px bg-gray-700 my-1" />
                  {/* GLIDE POST START */}
                  <div class="flex-it p-4 border-b-1 border-solid border-gray-700">
                    <div class="flex-it flex-row">
                      <div class="flex-it mr-4">
                        <div class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
                          <img
                            class="rounded-full"
                            src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
                          ></img>
                        </div>
                      </div>
                      <article class="flex-it flex-grow flex-shrink cursor-pointer">
                        <div class="flex-it justify-center flex-grow mb-1">
                          <div class="flex-it justify-between flex-row w-full">
                            <div>
                              <span class="font-bold">Filip99</span>
                              <span class="mx-2">&#8226;</span>
                              <span class="text-gray-400">2h</span>
                            </div>
                            <div class="text-gray-400 cursor-pointer transition hover:text-red-400">
                              <FiTrash size={16} />
                            </div>
                          </div>
                        </div>
                        <div class="flex-it flex-row flex-grow-0 items-center mb-2">
                          <div class="flex-it mr-3 mb-3 w-full">
                            My First Post
                          </div>
                        </div>
                        <div class="flex-it flex-row flex-grow text-gray-400">
                          <div class="flex-it flex-row items-center cursor-pointer mr-5 transition hover:text-blue-400">
                            <AiOutlineMessage size={18} />
                            <span class="text-xs ml-3">321</span>
                          </div>
                          <div class="flex-it flex-row items-center cursor-pointer transition hover:text-pink-400">
                            <FaRegularHeart size={18} />
                            <span class="text-xs ml-3">123</span>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  {/* GLIDE POST END */}
                  {/* HOME PAGE END */}
                </div>
                <div class="flex-it md:w-92 w-0 mt-4">
                  {/* TRENDS SIDEBAR START */}
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
                  </div>
                  {/* TRENDS SIDEBAR END */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
