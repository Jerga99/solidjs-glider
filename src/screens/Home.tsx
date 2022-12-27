import { Component } from "solid-js";
import MainLayout from "../components/layouts/Main";
import Messenger from "../components/utils/Messenger";
import useGlides from "../hooks/useGlides";
import PaginatedGlides from "../components/glides/PaginatedGlides";

const HomeScreen: Component = () => {
  const {store, addGlide, page} = useGlides();

  return (
    <MainLayout>
      <Messenger onGlideAdded={addGlide} />
      <div class="h-px bg-gray-700 my-1" />
      <PaginatedGlides 
        page={page}
        pages={store.pages}
      />
    </MainLayout>
  );
};

export default HomeScreen;
