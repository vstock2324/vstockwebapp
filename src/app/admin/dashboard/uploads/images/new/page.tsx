import React from "react";
import DefaultLayout from "../../../_components/Layouts/DefaultLayout";
import Breadcrumb from "../../../_components/Breadcrumbs/Breadcrumb";

export default function NewImagesPage() {
  return (
    <DefaultLayout>
      <main className="mx-auto w-full ">
        <Breadcrumb pageName="Uploads / Images / New" />
        <div className="container mx-auto py-2"></div>
      </main>
    </DefaultLayout>
  );
}
