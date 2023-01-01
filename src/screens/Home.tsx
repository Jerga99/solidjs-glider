import { Component, onCleanup, onMount } from "solid-js";
import MainLayout from "../components/layouts/Main";
import Messenger from "../components/utils/Messenger";
import useGlides from "../hooks/useGlides";
import PaginatedGlides from "../components/glides/PaginatedGlides";

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
