import Breadcrumb from "../../../../_components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../../../_components/Layouts/DefaultLayout";
// import EditVideoForm from "../../_components/EditVideoForm";

export default async function VideoEditByIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);
  return (
    <DefaultLayout>
      <main className="mx-auto w-full ">
        <Breadcrumb pageName="Uploads / Videos / Edit" />
        <div className="container mx-auto py-2">
          {id}
          {/* <EditVideoForm videoId={id}/> */}
        </div>
      </main>
    </DefaultLayout>
  );
}
