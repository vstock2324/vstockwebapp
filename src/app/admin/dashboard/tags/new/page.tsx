import Breadcrumb from "../../_components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../_components/Layouts/DefaultLayout";
import NewTagForm from "../_components/NewTagForm";
import TagsTableLinkBtn from "../_components/TagsTableLinkBtn";


export default function NewTagsPage() {
  return (
    <DefaultLayout>
      <main className="mx-auto w-full ">
        <Breadcrumb pageName="Tags / New" />
        <div className="container mx-auto ">
          <TagsTableLinkBtn/>
          <NewTagForm/>
        </div>
      </main>
    </DefaultLayout>
  );
}
