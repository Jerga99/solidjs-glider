import { Component, onCleanup, onMount, Show } from "solid-js";
import MainLayout from "../components/layouts/Main";
import Messenger from "../components/utils/Messenger";
import useGlides from "../hooks/useGlides";
import PaginatedGlides from "../components/glides/PaginatedGlides";
import { Portal } from "solid-js/web";
import Button from "../components/utils/Button";
import { usePersistence } from "../context/persistence";

const HomeScreen: Component = () => {
  const {
    store, 
    addGlide, 
    page, 
    loadGlides, 
    subscribeToGlides, unsubscribeFromGlides,
    displayFreshGlides
  } = useGlides();

  onMount(() => {
    subscribeToGlides();
  })

  onCleanup(() => {
    unsubscribeFromGlides();
  })

  return (
    <MainLayout 
      pageTitle="Home"
      onGlideAdded={addGlide}
    >
      <Messenger onGlideAdded={addGlide} />
      <div class="h-px bg-gray-700 my-1" />
      <Show when={store.freshGlides.length >= 3}>
        <Portal>
          <div class="fixed top-2 z-100 left-2/4 -translate-x-1/2">
            <Button 
              onClick={displayFreshGlides}>
              <span>Read New Glides</span>
            </Button>
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
