import Breadcrumb from "../../../_components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../../_components/Layouts/DefaultLayout";
import EditVectorForm from "../_components/EditVectorForm";

export default async function VectorIdEditPage({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <DefaultLayout>
      <main className="mx-auto w-full ">
        <Breadcrumb pageName={`Vectors / Edit`} />
        <div className="container mx-auto py-2">
    <EditVectorForm/>
        </div>
      </main>
    </DefaultLayout>
  );
}
