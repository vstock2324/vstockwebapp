import Breadcrumb from "../../_components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../_components/Layouts/DefaultLayout";
import NewVectorForm from "../_components/NewVectorForm";
export const dynamic = 'force-dynamic';

export default function NewVectorPage() {
  return (
    <DefaultLayout>
      <main className="mx-auto w-full ">
        <Breadcrumb pageName="Vectors / New" />
        <div className="container mx-auto py-2">
          <NewVectorForm />
        </div>
      </main>
    </DefaultLayout>
  );
}
