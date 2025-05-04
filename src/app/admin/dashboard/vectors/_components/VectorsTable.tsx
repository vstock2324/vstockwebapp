/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useAdminVectors from "@/context/useAdminVectors";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { nanoid } from "nanoid";
import Link from "next/link";
import { memo } from "react";
import VectorsPagination from "./VectorsPagination";
import VectorsSearchInput from "./VectorsSearchInput";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import VectorURLImg from "./VectorURLImg";
import DateTableCell from "./DateTableCell";
import NewVectorLinkBtn from "./NewVectorLinkBtn";


const VectorsTable = () => {
  const { vectors } = useAdminVectors();
  const supabase = createClient();
  const router = useRouter();
  async function handleDeleteClick(id: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
const { error } = await supabase
.from('vector_details')
.delete()
.eq('vector_id', id)
if (error) throw new Error(error.message);
  router.refresh();
  console.log("Vector Delete Successfully");
}

  return (
    <div className="overflow-x-overflow">
      <VectorsSearchInput />
      <NewVectorLinkBtn/>
      <Table className="border rounded-md p-2 h-auto" hoverable>
        <TableHead>
          <TableRow>
            <TableHeadCell className="w-[160px] text-center p-1">
            Download  Vector
            </TableHeadCell>
            <TableHeadCell className="w-[70px] text-center p-1">
              Id
            </TableHeadCell>
            <TableHeadCell className="w-[70px]  text-centerp-1">
              Name
            </TableHeadCell>
            <TableHeadCell className="w-[25px] text-center p-1">
              Likes
            </TableHeadCell>
            <TableHeadCell className="w-[25px] text-center p-1">
              Shares
            </TableHeadCell>
            <TableHeadCell className="w-[40px] text-center p-1">
              License
            </TableHeadCell>
            <TableHeadCell className="w-[50px] text-center p-1">
              Orientation
            </TableHeadCell>
            <TableHeadCell className="w-[70px] text-center p-1">
              Created At
            </TableHeadCell>
            <TableHeadCell className="w-[40px] p-1">
              <span className="sr-only">Edit</span>
            </TableHeadCell>
            <TableHeadCell className="w-[100px]">
              <span className="sr-only">Delete</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {vectors &&
            vectors.map((item: any) => {
              return (
                <TableRow
                  key={nanoid()}
                  className="bg-white my-2 dark:border-gray-700 dark:bg-gray-800"
                >
                <VectorURLImg vectorPath={item.jpeg_path}/>
                  <TableCell className="whitespace-wrap w-[70px] text-center p-1 font-medium text-gray-900 dark:text-white">
                    {item.vector_id}
                  </TableCell>
                  <TableCell className="w-[70px] text-center p-1">
                    {item.name}
                  </TableCell>
                  <TableCell className="w-[25px] text-center p-1">
                    {item.likes}
                  </TableCell>
                  <TableCell className="w-[25px] text-center p-1">
                    {item.shares}
                  </TableCell>
                  <TableCell className="w-[70px] text-center p-1">
                    {item.license}
                  </TableCell>
                  <TableCell className="w-[70px] text-center p-1">
                    {item.orientation}
                  </TableCell>
               
                  <DateTableCell createdAt={item.created_at}/>
                  <TableCell className="w-[40px] text-center p-1">
                    <Link
                      href={`/admin/dashboard/vectors/edit/${item.vector_id}`}
                      className="font-medium text-[#2E67DD] hover:underline dark:text-[#2E67DD]">
                      Edit
                    </Link>
                  </TableCell>
                  <TableCell className="w-[100px] p-1">
                    <Button
                      className="cursor-pointer"
                      onClick={() => handleDeleteClick(item.vector_id)}
                      color={"red"}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <VectorsPagination />
    </div>
  );
};

export default memo(VectorsTable);
