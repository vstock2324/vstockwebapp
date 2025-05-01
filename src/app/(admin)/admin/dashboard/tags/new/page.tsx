import Breadcrumb from "../../_components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../_components/Layouts/DefaultLayout";
import NewTagForm from "../_components/NewTagForm";


export default function NewTagsPage() {
  return (
    <DefaultLayout>
      <main className="mx-auto w-full ">
        <Breadcrumb pageName="Tags / New" />
        <div className="container mx-auto py-2 flex flex-col items-center justify-start">
          <NewTagForm/>
        </div>
      </main>
    </DefaultLayout>
  );
}
