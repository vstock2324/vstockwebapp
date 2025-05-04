import React from "react";
import DefaultLayout from "../_components/Layouts/DefaultLayout";
import Breadcrumb from "../_components/Breadcrumbs/Breadcrumb";
import VectorTableContextWrapper from "./_components/VectorTableContextWrapper";

export const dynamic = 'force-dynamic';

export default function VectorsPage() {
  return (
    <DefaultLayout>
      <main className="mx-auto w-full ">
        <Breadcrumb pageName="Vectors" />
        <div className="container mx-auto py-2">
          <VectorTableContextWrapper/>
        </div>
      </main>
    </DefaultLayout>
  );
}
