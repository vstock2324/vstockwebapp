import React from "react";
import DefaultLayout from "../_components/Layouts/DefaultLayout";
import Breadcrumb from "../_components/Breadcrumbs/Breadcrumb";
import TagsContextWrapper from "./_components/TagsContextWrapper";

export const dynamic = 'force-dynamic';

export default function TagsPage() {
  return (
    <DefaultLayout>
      <main className="mx-auto w-full ">
        <Breadcrumb pageName="Tags" />
        <div className="container mx-auto py-2">
          <TagsContextWrapper/>
        </div>
      </main>
    </DefaultLayout>
  );
}
