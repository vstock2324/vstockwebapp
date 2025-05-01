import React from "react";
import DefaultLayout from "../../../_components/Layouts/DefaultLayout";
import Breadcrumb from "../../../_components/Breadcrumbs/Breadcrumb";
import EditCategoryForm from "../_components/EditCategoryForm";

export default function EditCategoryByIdPage(
  {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params,
  }: {
    params: Promise<{ id: string }>;
  }
){
   return (<DefaultLayout>
      <main className="mx-auto w-full ">
        <Breadcrumb pageName="Categories / Edit" />
        <div className="container mx-auto py-2">
          <EditCategoryForm/>
        </div>
      </main>
    </DefaultLayout>);
}


