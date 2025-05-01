import React from "react";
import DefaultLayout from "../../_components/Layouts/DefaultLayout";
import Breadcrumb from "../../_components/Breadcrumbs/Breadcrumb";
import NewCategoryForm from "../_components/NewCategoryForm";
export default function CategoryPage(){
   return (
    <DefaultLayout>
      <main className="mx-auto w-full ">
        <Breadcrumb pageName="Categories" />
        <div className="container mx-auto py-2">
          <NewCategoryForm/>
        </div>
      </main>
    </DefaultLayout>
  )
}
