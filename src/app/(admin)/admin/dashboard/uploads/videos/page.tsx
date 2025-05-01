import React from "react";
import DefaultLayout from "../../_components/Layouts/DefaultLayout";
import Breadcrumb from "../../_components/Breadcrumbs/Breadcrumb";
import VideosTable from "./_components/VideosTable";

export const dynamic = "force-dynamic";
export const revalidate = 0; // Revalidate every request

export default function VideosPage() {
  return (
    <DefaultLayout>
      <main className="mx-auto w-full ">
        <Breadcrumb pageName="Uploads / Videos" />
        <div className="container mx-auto py-2">
          <VideosTable/>
        </div>
      </main>
    </DefaultLayout>
  );
}
