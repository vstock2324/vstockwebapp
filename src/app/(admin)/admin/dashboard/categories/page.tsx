import React from "react";
import DefaultLayout from "../_components/Layouts/DefaultLayout";
import Breadcrumb from "../_components/Breadcrumbs/Breadcrumb";
import CategoryTable from "./_components/CategoryTable";
export const dynamic = 'force-dynamic';
export default function CategoryPage(){
   return (
    <DefaultLayout>
      <main className="mx-auto w-full ">
        <Breadcrumb pageName="Categories" />
        <div className="container mx-auto py-2">
          <CategoryTable/>
        </div>
      </main>
    </DefaultLayout>
  )
}

