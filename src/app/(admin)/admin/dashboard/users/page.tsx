import Breadcrumb from "../_components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../_components/Layouts/DefaultLayout";
import UsersTable from "./_components/UsersTable";
export const dynamic = 'force-dynamic';
export default function UsersPage() {
  return (<DefaultLayout>
      <main className="mx-auto w-full ">
        <Breadcrumb pageName="Users" />
        <div className="container mx-auto py-2">
          <UsersTable />
        </div>
      </main>
  </DefaultLayout>)
}