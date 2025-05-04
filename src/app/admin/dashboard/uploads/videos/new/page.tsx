import React from "react";
import DefaultLayout from "../../../_components/Layouts/DefaultLayout";
import Breadcrumb from "../../../_components/Breadcrumbs/Breadcrumb";
import NewVideoForm from "../_components/NewVideoForm";

export default function NewVideosPage() {
  return (
    <DefaultLayout>
      <main className="mx-auto w-full ">
        <Breadcrumb pageName="Uploads / Videos / New" />
        <div className="container mx-auto py-2">
          <NewVideoForm/>
        </div>
      </main>
    </DefaultLayout>
  );
}
