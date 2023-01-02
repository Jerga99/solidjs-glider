import { useParams } from "@solidjs/router";
import { createResource, onMount, Show } from "solid-js";
import { getGlideById } from "../api/glide";
import GlidePost from "../components/glides/GlidePost";
import MainLayout from "../components/layouts/Main";
import { CenteredDataLoader } from "../components/utils/DataLoader";

const GlideDetail = () => {
  const params = useParams();
  const [data] = createResource(() => getGlideById(params.id, params.uid));

  return (
    <MainLayout pageTitle="Detail">
      <Show 
        when={!data.loading}
        fallback={<CenteredDataLoader />}
      >
        <GlidePost glide={data()!} />
      </Show>
    </MainLayout>
  )
}

export default GlideDetail;
