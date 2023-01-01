import { Component, onCleanup, onMount, Show } from "solid-js";
import MainLayout from "../components/layouts/Main";
import Messenger from "../components/utils/Messenger";
import useGlides from "../hooks/useGlides";
import PaginatedGlides from "../components/glides/PaginatedGlides";
import { Portal } from "solid-js/web";

const HomeScreen: Component = () => {
  const {
    store, 
    addGlide, 
    page, 
    loadGlides, 
    subscribeToGlides, unsubscribeFromGlides
  } = useGlides();

  onMount(() => {
    subscribeToGlides();
  })

  onCleanup(() => {
    unsubscribeFromGlides();
  })

  return (
    <MainLayout pageTitle="Home">
      <Messenger onGlideAdded={addGlide} />
      <div class="h-px bg-gray-700 my-1" />
      <Show when={store.freshGlides.length >= 3}>
        <Portal>
          <div class="fixed top-2 z-100 left-2/4 -translate-x-1/2">
            <button
              type="button"
              class="
              disabled:cursor-not-allowed disabled:bg-gray-400
              bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex-it transition duration-200"
            >
              <div class="flex-it flex-row text-sm font-bold text-white items-start justify-center">
                <span>Read New Glides</span>
              </div>
            </button>
          </div>
        </Portal>
      </Show>
      <PaginatedGlides 
        page={page}
        pages={store.pages}
        loading={store.loading}
        loadMoreGlides={loadGlides}
      />
    </MainLayout>
  );
};

export default HomeScreen;
