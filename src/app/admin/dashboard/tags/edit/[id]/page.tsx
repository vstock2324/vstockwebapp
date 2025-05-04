import Breadcrumb from "../../../_components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../../_components/Layouts/DefaultLayout";
import TagsTableLinkBtn from "../../_components/TagsTableLinkBtn";
import EditTagForm from "../_components/EditTagForm";

export default function EditTagByIdPage(
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      params,
    }: {
      params: Promise<{ id: string }>;
    }
  ){
     return (<DefaultLayout>
        <main className="mx-auto w-full ">
          <Breadcrumb pageName="Tag / Edit" />
          <div className="container mx-auto py-2">
            <TagsTableLinkBtn/>
            <EditTagForm/>
          </div>
        </main>
      </DefaultLayout>);
  }
  