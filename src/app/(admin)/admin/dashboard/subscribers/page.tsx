import React from "react";
import DefaultLayout from "../_components/Layouts/DefaultLayout";
import Breadcrumb from "../_components/Breadcrumbs/Breadcrumb";
import SubscribersTable from "../_components/SubscribersTable";
export const dynamic = 'force-dynamic';

export default function CustomersPage() {
  return (
    <DefaultLayout>
      <main className="mx-auto w-full ">
        <Breadcrumb pageName="Subscribers" />
        <div className="container mx-auto py-2">
            <SubscribersTable/>
        </div>
      </main>
    </DefaultLayout>
  );
}
