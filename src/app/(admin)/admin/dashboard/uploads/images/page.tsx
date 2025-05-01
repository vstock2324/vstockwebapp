import React from "react";
import DefaultLayout from "../../_components/Layouts/DefaultLayout";
import Breadcrumb from "../../_components/Breadcrumbs/Breadcrumb";
import ImagesTable from "./_components/ImagesTable";


export default function ImagesPage() {
  return (
    <DefaultLayout>
      <main className="mx-auto w-full ">
        <Breadcrumb pageName="Uploads / Images" />
        <div className="container mx-auto py-2">
          <ImagesTable/>
        </div>
      </main>
    </DefaultLayout>
  );
}
