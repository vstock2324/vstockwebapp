import Link from "next/link";

interface BreadcrumbProps {
  pageName: string;
}

const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  const name=pageName.split("/");
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-[26px] font-bold leading-[30px] text-dark dark:text-white">
        {name[name.length-1].trim()}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
        <li>
            <Link className="font-medium" href="/admin">
              Admin /
            </Link>
          </li>
          <li>
            <Link className="font-medium" href="/admin/dashboard">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;



// "use client";

// import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
// import { HiHome } from "react-icons/hi";

// export function Component() {
//   return (
//     <Breadcrumb aria-label="Default breadcrumb example">
//       <BreadcrumbItem href="#" icon={HiHome}>
//         Admin
//       </BreadcrumbItem>
//       <BreadcrumbItem href="#">Dashboard</BreadcrumbItem>
//       <BreadcrumbItem>Flowbite React</BreadcrumbItem>
//     </Breadcrumb>
//   );
// }
