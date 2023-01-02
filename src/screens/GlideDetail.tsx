import { useParams } from "@solidjs/router";
import MainLayout from "../components/layouts/Main";

const GlideDetail = () => {
  const params = useParams();

  return (
    <MainLayout pageTitle="Detail">
      
      <div>id: {params.id}</div>
      <div>uid: {params.uid}</div>
    </MainLayout>
  )
}

export default GlideDetail;
